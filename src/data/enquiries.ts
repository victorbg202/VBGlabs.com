import type { Locale } from '@/i18n/locales';
import { route } from '@/i18n/routes';

export const ENQUIRY_IDS = ['general', 'automations', 'consulting', 'training', 'invoicing', 'postcraft'] as const;
export type EnquiryId = typeof ENQUIRY_IDS[number];
export interface ContactSource { path: string; title: string; interest?: string; }
interface EnquiryCopy { label: string; title: string; body: string; prompt: string; submit: string; }
interface ContactCopy {
  response: string; next: string; free: string; paid: string; sensitive: string;
  heading: string; source: string; context: string; optional: string; participants: string; invoices: string;
  calculator: string; calculatorTitle: string; calculatorNote: string; calculatorDisclosure: string;
  validation: string; success: string; demoSuccess: string; sending: string; error: string; noScript: string;
  enquiries: Record<EnquiryId, EnquiryCopy>;
}
export const CONTACT_COPY: Record<Locale, ContactCopy> = {
  ca: {
    response:'Et responem en un dia laborable.', next:'Primer et responem per correu. Si cal, acordem una reunió breu per entendre millor el cas.',
    free:'L’orientació inicial per correu i la reunió breu, si cal, són gratuïtes i sense compromís.',
    paid:'Un diagnòstic detallat, un full de ruta o una implementació es pressuposten a part abans de començar.',
    sensitive:'Per al primer contacte, n’hi ha prou amb descriure el procés. No cal enviar factures ni dades de clients.',
    heading:'Què passarà després?', source:'Vens de', context:'Consulta sobre', optional:'opcional', participants:'Participants aproximats', invoices:'Factures rebudes al mes, aproximadament',
    calculator:'Revisem aquests números', calculatorTitle:'Valorem el teu procés amb aquestes dades',
    calculatorNote:'El resultat és orientatiu: revisarem les hipòtesis abans de proposar cap projecte.',
    calculatorDisclosure:'En enviar la consulta, inclourem els valors i els resultats que veus a la calculadora. Pots modificar-los abans d’enviar.',
    validation:'Revisa els camps obligatoris, el correu i l’acceptació de privacitat.',
    success:'Sol·licitud enviada. Et respondrem per correu en un dia laborable amb una primera orientació. Si cal, acordarem una reunió breu.',
    demoSuccess:'Sol·licitud de demo enviada. Et respondrem per correu en un dia laborable per acordar una videotrucada de 20 minuts.',
    sending:'Enviant…', error:'No hem pogut confirmar l’enviament. Les dades es mantenen perquè ho puguis tornar a provar, o pots escriure a info@vbglabs.com.', noScript:'També pots enviar-nos la consulta per correu a',
    enquiries:{
      general:{label:'Consulta general',title:'Explica’ns què vols millorar',body:'Una descripció breu ens ajuda a valorar per on començar.',prompt:'Quina feina voldries millorar amb IA o automatitzacions? Com la feu ara?',submit:'Enviar consulta'},
      automations:{label:'Automatitzacions amb IA',title:'Quina tasca voldries automatitzar?',body:'Explica’ns com la feu ara, quines eines utilitzeu i què us fa perdre temps.',prompt:'Quina tasca repetiu? Amb quines eines i quantes vegades aproximadament? Què voldríeu millorar?',submit:'Valorar la meva automatització'},
      consulting:{label:'Consultoria d’IA',title:'Troba un punt de partida per aplicar IA',body:'Descriu el teu negoci i el dubte o la prioritat que vols revisar.',prompt:'A què es dedica el negoci? On voldríeu aplicar IA i quin dubte us frena?',submit:'Demanar orientació inicial'},
      training:{label:'Formació en IA',title:'Preparem una formació útil per al teu equip',body:'Explica’ns què voleu aprendre i en quines tasques ho aplicaríeu.',prompt:'Què voleu aprendre? Quin ús feu ara de la IA i en quines tasques us agradaria aplicar-la?',submit:'Consultar una formació'},
      invoicing:{label:'Demo de VBG Facturació',title:'Sol·licita una demo de VBG Facturació',body:'Et respondrem per correu per acordar una videotrucada de 20 minuts i veure com encaixa amb la gestió de les factures rebudes del teu negoci.',prompt:'Com gestioneu ara les factures dels proveïdors? Què voldries veure o resoldre a la demo?',submit:'Sol·licitar demo de 20 minuts'},
      postcraft:{label:'Interès en Postcraft',title:'T’interessa Postcraft?',body:'Encara està en preparació. Explica’ns què necessitaries i et respondrem per correu.',prompt:'Quin contingut vols preparar amb Postcraft? Indica si vols que t’avisem quan estigui disponible.',submit:'Consultar sobre Postcraft'},
    },
  },
  es: {
    response:'Te respondemos en un día laborable.',next:'Primero te respondemos por correo. Si hace falta, acordamos una reunión breve para entender mejor el caso.',
    free:'La orientación inicial por correo y la reunión breve, si hace falta, son gratuitas y sin compromiso.',paid:'Un diagnóstico detallado, una hoja de ruta o una implementación se presupuestan aparte antes de empezar.',
    sensitive:'Para el primer contacto basta con describir el proceso. No hace falta enviar facturas ni datos de clientes.',
    heading:'¿Qué pasará después?',source:'Vienes de',context:'Consulta sobre',optional:'opcional',participants:'Participantes aproximados',invoices:'Facturas recibidas al mes, aproximadamente',
    calculator:'Revisemos estos números',calculatorTitle:'Valoremos tu proceso con estos datos',calculatorNote:'El resultado es orientativo: revisaremos las hipótesis antes de proponer un proyecto.',calculatorDisclosure:'Al enviar la consulta, incluiremos los valores y resultados que ves en la calculadora. Puedes modificarlos antes de enviar.',
    validation:'Revisa los campos obligatorios, el correo y la aceptación de privacidad.',success:'Solicitud enviada. Te responderemos por correo en un día laborable con una primera orientación. Si hace falta, acordaremos una reunión breve.',demoSuccess:'Solicitud de demo enviada. Te responderemos por correo en un día laborable para acordar una videollamada de 20 minutos.',
    sending:'Enviando…',error:'No hemos podido confirmar el envío. Los datos se mantienen para que puedas volver a intentarlo, o puedes escribir a info@vbglabs.com.',noScript:'También puedes enviarnos la consulta por correo a',
    enquiries:{
      general:{label:'Consulta general',title:'Cuéntanos qué quieres mejorar',body:'Una descripción breve nos ayuda a valorar por dónde empezar.',prompt:'¿Qué trabajo te gustaría mejorar con IA o automatizaciones? ¿Cómo lo hacéis ahora?',submit:'Enviar consulta'},
      automations:{label:'Automatizaciones con IA',title:'¿Qué tarea te gustaría automatizar?',body:'Cuéntanos cómo la hacéis ahora, qué herramientas utilizáis y qué os hace perder tiempo.',prompt:'¿Qué tarea repetís? ¿Con qué herramientas y cuántas veces aproximadamente? ¿Qué queréis mejorar?',submit:'Valorar mi automatización'},
      consulting:{label:'Consultoría de IA',title:'Encuentra un punto de partida para aplicar IA',body:'Describe tu negocio y la duda o prioridad que quieres revisar.',prompt:'¿A qué se dedica el negocio? ¿Dónde queréis aplicar IA y qué duda os frena?',submit:'Pedir orientación inicial'},
      training:{label:'Formación en IA',title:'Preparemos una formación útil para tu equipo',body:'Cuéntanos qué queréis aprender y en qué tareas lo aplicaríais.',prompt:'¿Qué queréis aprender? ¿Qué uso hacéis ahora de la IA y en qué tareas os gustaría aplicarla?',submit:'Consultar una formación'},
      invoicing:{label:'Demo de VBG Facturación',title:'Solicita una demo de VBG Facturación',body:'Te responderemos por correo para acordar una videollamada de 20 minutos y ver cómo encaja con la gestión de las facturas recibidas de tu negocio.',prompt:'¿Cómo gestionáis ahora las facturas de proveedores? ¿Qué te gustaría ver o resolver en la demo?',submit:'Solicitar demo de 20 minutos'},
      postcraft:{label:'Interés en Postcraft',title:'¿Te interesa Postcraft?',body:'Todavía está en preparación. Cuéntanos qué necesitarías y te responderemos por correo.',prompt:'¿Qué contenido quieres preparar con Postcraft? Indica si quieres que te avisemos cuando esté disponible.',submit:'Consultar sobre Postcraft'},
    },
  },
  en: {
    response:'We reply within one business day.',next:'We reply by email first. If needed, we arrange a brief meeting to understand your needs.',free:'Initial guidance by email and a brief meeting, if needed, are free and without obligation.',paid:'A detailed assessment, roadmap or implementation is quoted separately before work starts.',sensitive:'For your first enquiry, a description of the workflow is enough. There is no need to send invoices or client data.',
    heading:'What happens next?',source:'You came from',context:'Enquiry about',optional:'optional',participants:'Approximate number of participants',invoices:'Approximate supplier invoices per month',
    calculator:'Review these figures with us',calculatorTitle:'Let’s assess your workflow with these figures',calculatorNote:'Results are indicative: we will review the assumptions before proposing a project.',calculatorDisclosure:'When you send your enquiry, we will include the inputs and results shown in the calculator. You can change them before sending.',
    validation:'Check the required fields, email address and privacy acknowledgement.',success:'Enquiry sent. We will reply by email within one business day with initial guidance. If needed, we will arrange a brief meeting.',demoSuccess:'Demo request sent. We will reply by email within one business day to arrange a 20-minute video call.',sending:'Sending…',error:'We could not confirm submission. Your details have been kept so you can try again, or email info@vbglabs.com.',noScript:'You can also email your enquiry to',
    enquiries:{
      general:{label:'General enquiry',title:'Tell us what you would like to improve',body:'A brief description helps us assess where to start.',prompt:'Which task would you like to improve with AI or automation? How do you handle it today?',submit:'Send enquiry'},
      automations:{label:'AI automation',title:'Which task would you like to automate?',body:'Tell us how you handle it today, the tools involved and where time is lost.',prompt:'Which task do you repeat? Which tools do you use and roughly how often? What would you like to improve?',submit:'Assess my automation'},
      consulting:{label:'AI consulting',title:'Find a starting point for AI in your business',body:'Describe your business and the question or priority you would like to review.',prompt:'What does your business do? Where would you like to use AI, and what is holding you back?',submit:'Request initial guidance'},
      training:{label:'AI training',title:'Plan useful AI training for your team',body:'Tell us what you would like to learn and which tasks you would apply it to.',prompt:'What would you like to learn? How do you use AI today and which tasks would you like to apply it to?',submit:'Ask about training'},
      invoicing:{label:'VBG Invoicing demo',title:'Request a VBG Invoicing demo',body:'We will reply by email to arrange a 20-minute video call and explore how it fits your supplier invoice workflow.',prompt:'How do you manage supplier invoices today? What would you like to see or resolve in the demo?',submit:'Request a 20-minute demo'},
      postcraft:{label:'Interest in Postcraft',title:'Interested in Postcraft?',body:'It is still in preparation. Tell us what you need and we will reply by email.',prompt:'What content would you like to prepare with Postcraft? Let us know if you want an update when it becomes available.',submit:'Ask about Postcraft'},
    },
  },
};
export function contactHref(locale: Locale, interest: EnquiryId = 'general', from = '') {
  const query = new URLSearchParams({interest});
  if (from) query.set('from', from);
  return `${route('contact',locale)}?${query.toString()}#contact-form`;
}
/** The CTA always refers to AI work, including on older general-technology articles. */
export function blogEnquiry(group: string): EnquiryId {
  if (group === 'ai-literacy-businesses-2026') return 'training';
  if (['manual-task-cost-calculator','one-page-process-template-before-automation','worth-automating'].includes(group)) return 'automations';
  return 'consulting';
}
