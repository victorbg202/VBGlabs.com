import type { Locale } from '@/i18n/locales';
import { route } from '@/i18n/routes';
import ca from './ca.json';
import es from './es.json';
import en from './en.json';

export const SOLUTION_IDS = ['documents', 'email', 'knowledge', 'webAssistant', 'whatsapp', 'appointments', 'followup', 'reporting', 'webDevelopment', 'applications', 'professional', 'commerce'] as const;
export type SolutionId = typeof SOLUTION_IDS[number];
export type SolutionPriceKey = 'focused' | 'connected' | 'knowledge' | 'custom';
export interface SolutionContent {
  name: string; title: string; description: string; h1: string; lead: string;
  pains: string[];
  deliverables: { title: string; text: string }[];
  example: { title: string; steps: string[] };
  requirements: string[]; boundary: string; priceScope: string;
  faqs: { q: string; a: string }[]; messagePrompt: string;
}
interface Definition {
  kind: 'service' | 'sector'; price: SolutionPriceKey | null;
  slugs: Record<Locale, string>; related: SolutionId[]; guides: string[];
}
export const DEFINITIONS: Record<SolutionId, Definition> = {
  documents: {kind:'service',price:'focused',slugs:{ca:'automatitzacio-documental-ia',es:'automatizacion-documental-ia',en:'ai-document-processing'},related:['email','knowledge','professional'],guides:['manual-task-cost-calculator','one-page-process-template-before-automation']},
  email: {kind:'service',price:'focused',slugs:{ca:'automatitzacio-correu-ia',es:'automatizacion-correo-ia',en:'ai-email-automation'},related:['documents','followup','webAssistant'],guides:['worth-automating','one-page-process-template-before-automation']},
  knowledge: {kind:'service',price:'knowledge',slugs:{ca:'assistents-ia-documents-empresa',es:'asistentes-ia-documentos-empresa',en:'ai-assistants-company-documents'},related:['documents','applications','professional'],guides:['rag-small-business-ai-assistant-documents','ai-literacy-businesses-2026']},
  webAssistant: {kind:'service',price:'connected',slugs:{ca:'assistents-ia-web',es:'asistentes-ia-web',en:'website-ai-assistants'},related:['whatsapp','webDevelopment','commerce'],guides:['ai-where-to-start','worth-automating']},
  whatsapp: {kind:'service',price:'connected',slugs:{ca:'whatsapp-ia-empreses',es:'whatsapp-ia-empresas',en:'whatsapp-ai-for-business'},related:['webAssistant','appointments','commerce'],guides:['ai-where-to-start','one-page-process-template-before-automation']},
  appointments: {kind:'service',price:'focused',slugs:{ca:'automatitzacio-cites-recordatoris',es:'automatizacion-citas-recordatorios',en:'appointment-reminder-automation'},related:['whatsapp','followup','commerce'],guides:['worth-automating','manual-task-cost-calculator']},
  followup: {kind:'service',price:'focused',slugs:{ca:'automatitzacio-seguiment-pressupostos',es:'automatizacion-seguimiento-presupuestos',en:'quote-follow-up-automation'},related:['email','appointments','professional'],guides:['one-page-process-template-before-automation','manual-task-cost-calculator']},
  reporting: {kind:'service',price:'connected',slugs:{ca:'informes-analisi-dades-ia',es:'informes-analisis-datos-ia',en:'ai-reporting-data-analysis'},related:['documents','applications','commerce'],guides:['manual-task-cost-calculator','ai-where-to-start']},
  webDevelopment: {kind:'service',price:'custom',slugs:{ca:'desenvolupament-web-ia-automatitzacions',es:'desarrollo-web-ia-automatizaciones',en:'web-development-ai-automation'},related:['webAssistant','applications','commerce'],guides:['standard-no-code-custom-software-comparison','worth-automating']},
  applications: {kind:'service',price:'custom',slugs:{ca:'aplicacions-ia-a-mida',es:'aplicaciones-ia-a-medida',en:'custom-ai-applications'},related:['knowledge','reporting','webDevelopment'],guides:['standard-no-code-custom-software-comparison','rag-small-business-ai-assistant-documents']},
  professional: {kind:'sector',price:null,slugs:{ca:'ia-gestories-despatxos',es:'ia-gestorias-despachos',en:'ai-for-professional-firms'},related:['documents','knowledge','followup'],guides:['rag-small-business-ai-assistant-documents','manual-task-cost-calculator']},
  commerce: {kind:'sector',price:null,slugs:{ca:'ia-comercos-negocis-locals',es:'ia-comercios-negocios-locales',en:'ai-for-local-businesses'},related:['whatsapp','appointments','reporting'],guides:['worth-automating','ai-where-to-start']},
};
const CONTENT: Record<Locale, Record<SolutionId, SolutionContent>> = {ca, es, en};
export function solutionContent(id: SolutionId, locale: Locale): SolutionContent { return CONTENT[locale][id]; }
export function solutionPath(id: SolutionId, locale: Locale): string {
  const definition = DEFINITIONS[id];
  const prefix = definition.kind === 'service' ? route('services', locale) : ({ca:'/sectors/',es:'/es/sectores/',en:'/en/industries/'} as const)[locale];
  return `${prefix}${definition.slugs[locale]}/`;
}
export function solutionAlternates(id: SolutionId) { return (['ca','es','en'] as const).map(locale => ({locale, path:solutionPath(id,locale)})); }
export function solutionPages(locale: Locale, kind: Definition['kind']) {
  return SOLUTION_IDS.filter(id => DEFINITIONS[id].kind === kind).map(id => ({params:{slug:DEFINITIONS[id].slugs[locale]},props:{id}}));
}
