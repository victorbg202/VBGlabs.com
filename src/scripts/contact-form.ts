import { ENQUIRY_IDS, type EnquiryId, type ContactSource, CONTACT_COPY } from '@/data/enquiries';
type Config = {copy: typeof CONTACT_COPY.ca; kind: EnquiryId; interest:string; contextLabel:string; sourcePath:string; sources:ContactSource[]; messagePlaceholder?:string;};

function setupForms() {
  document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach(form=>{
    if(form.dataset.ready) return;
    form.dataset.ready='true';
    const config:Config=JSON.parse(form.dataset.config||'{}');
    const {copy}=config;
    const status=form.querySelector<HTMLElement>('.form-status')!;
    const button=form.querySelector<HTMLButtonElement>('[type="submit"]')!;
    const buttonLabel=button.querySelector<HTMLElement>('.btn-label')!;
    const message=form.querySelector<HTMLTextAreaElement>('[name="message"]')!;
    const interest=form.elements.namedItem('interest') as HTMLInputElement|HTMLSelectElement;
    const setHidden=(name:string,value:string)=>{const el=form.elements.namedItem(name);if(el instanceof HTMLInputElement)el.value=value;};
    let kind=config.kind;
    let source:ContactSource|undefined;
    let busy=false;
    let started=false;
    const isGeneral=form.dataset.general==='true';
    if(isGeneral){
      const query=new URLSearchParams(location.search);
      const requested=query.get('interest');
      if(ENQUIRY_IDS.includes(requested as EnquiryId)) kind=requested as EnquiryId;
      source=config.sources.find(item=>item.path===query.get('from'));
      if(!requested&&source?.interest&&ENQUIRY_IDS.includes(source.interest as EnquiryId))kind=source.interest as EnquiryId;
      interest.value=kind;
    }
    const updateContext=()=>{
      if(isGeneral&&ENQUIRY_IDS.includes(interest.value as EnquiryId))kind=interest.value as EnquiryId;
      const item=copy.enquiries[kind];
      const label=isGeneral?item.label:config.contextLabel;
      form.querySelector<HTMLElement>('[data-context-label]')!.textContent=label;
      const origin=form.querySelector<HTMLElement>('[data-form-origin]')!;
      origin.hidden=!source;
      origin.textContent=source?`${copy.source}: ${source.title}`:'';
      const body=form.querySelector<HTMLElement>('[data-context-body]')!;
      body.hidden=!isGeneral;
      body.textContent=item.body;
      message.placeholder=(!isGeneral&&config.messagePlaceholder)||item.prompt;
      buttonLabel.textContent=item.submit;
      setHidden('source_page',source?.path||config.sourcePath);
      setHidden('source_title',source?.title||label);
      setHidden('solution_name',label);
      setHidden('enquiry_type',kind==='invoicing'?'demo':kind==='postcraft'?'product_interest':'project');
      setHidden('_subject',`Nova sol·licitud — ${label}`);
      form.querySelectorAll<HTMLElement>('[data-optional-for]').forEach(field=>{
        const active=field.dataset.optionalFor===kind;
        field.hidden=!active;
        field.querySelectorAll<HTMLInputElement>('input').forEach(input=>{input.disabled=!active;});
      });
    };
    const track=(name:string,extra:Record<string,string>={})=>window.vbgTrackEvent?.(name,{
      form_id:form.id,service_interest:interest.value||'general',source_page:source?.path||config.sourcePath,
      page_language:document.documentElement.lang,...extra,
    });
    updateContext();
    interest.addEventListener('change',updateContext);
    form.addEventListener('focusin',event=>{
      if(!started&&event.target instanceof Element&&event.target.matches('input:not([type="hidden"]),textarea,select')){
        started=true;track('form_start');
      }
    });
    form.addEventListener('input',event=>{
      if(event.target instanceof HTMLInputElement||event.target instanceof HTMLTextAreaElement){
        event.target.setCustomValidity('');event.target.removeAttribute('aria-invalid');
      }
    });
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      if(busy)return;
      const honey=form.elements.namedItem('_honey');
      if(honey instanceof HTMLInputElement&&honey.value!=='')return;
      const name=form.elements.namedItem('name') as HTMLInputElement;
      const email=form.elements.namedItem('email') as HTMLInputElement;
      name.value=name.value.trim();email.value=email.value.trim();
      name.setCustomValidity(name.value?'':copy.validation);
      message.setCustomValidity(message.value.trim()?'':copy.validation);
      if(!form.checkValidity()){
        status.textContent=copy.validation;status.dataset.state='error';
        form.querySelectorAll<HTMLInputElement|HTMLTextAreaElement>('input,textarea').forEach(input=>{
          if(input.disabled)return;
          input.dataset.touched='true';input.setAttribute('aria-invalid',String(!input.validity.valid));
        });
        form.querySelector<HTMLElement>(':invalid')?.focus();track('form_error',{error_type:'validation'});return;
      }
      // The calculator refreshes the summary from the current inputs immediately before sending.
      if(!form.dispatchEvent(new CustomEvent('vbg:prepare-enquiry',{cancelable:true}))){
        status.textContent=copy.validation;status.dataset.state='error';track('form_error',{error_type:'calculator_validation'});return;
      }
      busy=true;button.disabled=true;button.setAttribute('aria-busy','true');buttonLabel.textContent=copy.sending;
      status.textContent='';status.removeAttribute('data-state');
      const controller=new AbortController();
      const timer=window.setTimeout(()=>controller.abort(),20000);
      let errorType='network';
      try{
        const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'},signal:controller.signal});
        if(!response.ok){errorType='http';throw new Error('HTTP');}
        errorType='invalid_response';
        const result=await response.json();
        if(result.success!==true&&result.success!=='true'){errorType='rejected';throw new Error('Not accepted');}
        status.textContent=kind==='invoicing'?copy.demoSuccess:copy.success;status.dataset.state='success';
        track('generate_lead',{enquiry_type:kind==='invoicing'?'demo':kind==='postcraft'?'product_interest':'project'});
        const currentKind=kind;
        form.reset();
        if(isGeneral)interest.value=currentKind;
        updateContext();
        form.querySelectorAll('[data-touched],[aria-invalid]').forEach(input=>{input.removeAttribute('data-touched');input.removeAttribute('aria-invalid');});
        started=false;
      }catch(error){
        status.textContent=copy.error;status.dataset.state='error';
        track('form_error',{error_type:error instanceof DOMException&&error.name==='AbortError'?'timeout':errorType});
      }finally{
        window.clearTimeout(timer);busy=false;button.disabled=false;button.removeAttribute('aria-busy');buttonLabel.textContent=copy.enquiries[kind].submit;
      }
    });
  });
}
setupForms();
document.addEventListener('astro:page-load',setupForms);
