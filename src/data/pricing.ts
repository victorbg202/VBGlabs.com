/**
 * Central pricing configuration — the ONLY place prices are defined.
 * Every page (home teaser, /consultoria/, /automatitzacions/, /formacio/,
 * /vbg-facturacio/, and their /es/ /en/ equivalents) imports from here.
 *
 * All figures are provisional / indicative, per explicit instruction from
 * VBG Labs. Copy in every locale must present them as orientative, never as
 * a closed quote. Update this file only — never hardcode a price in a page.
 */
import type { Locale } from '@/i18n/locales';

export type PriceBand = {
  /** null = "desde X", otherwise a [min, max] range */
  min: number;
  max: number | null;
  unit: 'flat' | 'month';
};

export const SERVICE_PRICING = {
  consulting: { min: 350, max: 650, unit: 'flat' } satisfies PriceBand,
  automation: { min: 750, max: null, unit: 'flat' } satisfies PriceBand,
  automationAdvanced: { min: 1500, max: 3500, unit: 'flat' } satisfies PriceBand,
  customSoftware: { min: 2500, max: null, unit: 'flat' } satisfies PriceBand,
  training: { min: 390, max: null, unit: 'flat' } satisfies PriceBand,
  ongoingSupport: { min: 120, max: null, unit: 'month' } satisfies PriceBand,
};

export type InvoicingPlan = {
  id: 'starter' | 'pro' | 'business';
  price: number; // €/month, ex VAT
  priceIsFrom: boolean;
  highlighted: boolean;
  limits: {
    ca: string;
    es: string;
    en: string;
  };
  features: {
    ca: string[];
    es: string[];
    en: string[];
  };
};

export const INVOICING_PLANS: InvoicingPlan[] = [
  {
    id: 'starter',
    price: 14.9,
    priceIsFrom: false,
    highlighted: false,
    limits: {
      ca: 'Fins a 30 factures/mes · 1 usuari',
      es: 'Hasta 30 facturas/mes · 1 usuario',
      en: 'Up to 30 invoices/mo · 1 user',
    },
    features: {
      ca: [
        'Dashboard i entrada de factures',
        'Estats i seguiment bàsic',
        'Detecció de possibles duplicats',
        'Informes fiscals trimestrals (IVA, IRPF)',
        'Assistent IA amb ús limitat',
        'Suport per email',
      ],
      es: [
        'Dashboard y entrada de facturas',
        'Estados y seguimiento básico',
        'Detección de posibles duplicados',
        'Informes fiscales trimestrales (IVA, IRPF)',
        'Asistente IA con uso limitado',
        'Soporte por email',
      ],
      en: [
        'Dashboard and invoice intake',
        'Status tracking, basic view',
        'Possible-duplicate detection',
        'Quarterly tax reports (VAT, withholding)',
        'AI assistant, limited usage',
        'Email support',
      ],
    },
  },
  {
    id: 'pro',
    price: 29.9,
    priceIsFrom: false,
    highlighted: true,
    limits: {
      ca: 'Fins a 150 factures/mes · fins a 3 usuaris',
      es: 'Hasta 150 facturas/mes · hasta 3 usuarios',
      en: 'Up to 150 invoices/mo · up to 3 users',
    },
    features: {
      ca: [
        'Tot el que inclou Starter',
        'Assistent IA sense límit de consultes',
        'Gestió de proveedors i incidències',
        'Seguiment de pagaments pendents',
        'Informes mensuals exportables',
        'Suport prioritari',
      ],
      es: [
        'Todo lo de Starter',
        'Asistente IA sin límite de consultas',
        'Gestión de proveedores e incidencias',
        'Seguimiento de pagos pendientes',
        'Informes mensuales exportables',
        'Soporte prioritario',
      ],
      en: [
        'Everything in Starter',
        'AI assistant, unlimited queries',
        'Supplier and exception management',
        'Pending-payment tracking',
        'Exportable monthly reports',
        'Priority support',
      ],
    },
  },
  {
    id: 'business',
    price: 59.9,
    priceIsFrom: true,
    highlighted: false,
    limits: {
      ca: 'Factures il·limitades · multiempresa',
      es: 'Facturas ilimitadas · multiempresa',
      en: 'Unlimited invoices · multi-company',
    },
    features: {
      ca: [
        'Tot el que inclou Pro',
        'Gestió multiempresa (ideal per a gestories)',
        'Usuaris il·limitats',
        "Exportació avançada d'informes",
        'Acompanyament a la posada en marxa',
        'Suport prioritari amb gestor assignat',
      ],
      es: [
        'Todo lo de Pro',
        'Gestión multiempresa (ideal para gestorías)',
        'Usuarios ilimitados',
        'Exportación avanzada de informes',
        'Acompañamiento en la puesta en marcha',
        'Soporte prioritario con gestor asignado',
      ],
      en: [
        'Everything in Pro',
        'Multi-company management (built for accounting firms)',
        'Unlimited users',
        'Advanced report exports',
        'Onboarding support',
        'Priority support with a named contact',
      ],
    },
  },
];

export function formatPriceBand(band: PriceBand, locale: Locale): string {
  const suffix = band.unit === 'month' ? (locale === 'en' ? '/mo' : '/mes') : '';
  const vat = locale === 'en' ? '+ VAT' : '+ IVA';
  const from = locale === 'ca' ? 'Des de' : locale === 'es' ? 'Desde' : 'From';
  if (band.max === null) {
    return `${from} ${band.min}€${suffix} ${vat}`;
  }
  return `${band.min}–${band.max}€${suffix} ${vat}`;
}
