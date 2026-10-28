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

/** Approved indicative implementation ranges; external services are billed separately. */
export const SOLUTION_PRICING = {
  focused: { min: 750, max: 1500, unit: 'flat' } satisfies PriceBand,
  connected: { min: 1500, max: 3500, unit: 'flat' } satisfies PriceBand,
  knowledge: { min: 1500, max: 4500, unit: 'flat' } satisfies PriceBand,
  custom: { min: 2500, max: 7500, unit: 'flat' } satisfies PriceBand,
};

export type InvoicingPlan = {
  id: 'starter' | 'pro' | 'business' | 'multi';
  /** null means quote-only, never a free plan. Figures are monthly, ex VAT. */
  price: number | null;
  priceIsFrom: boolean;
  highlighted: boolean;
  name: Record<Locale, string>;
  audience: Record<Locale, string>;
  limits: Record<Locale, string>;
  features: Record<Locale, string[]>;
};

/** Commercial scope; allowances and any extension are agreed before signup. */
export const INVOICING_PLANS: InvoicingPlan[] = [
  {
    "id": "pro",
    "price": 39.9,
    "priceIsFrom": false,
    "highlighted": true,
    "name": {
      "ca": "Pro",
      "es": "Pro",
      "en": "Pro"
    },
    "audience": {
      "ca": "Per a una empresa que vol controlar factures, albarans i incidències.",
      "es": "Para una empresa que quiere controlar facturas, albaranes e incidencias.",
      "en": "For one business managing invoices, delivery notes and exceptions."
    },
    "limits": {
      "ca": "200 documents/mes · 1 empresa · fins a 3 usuaris",
      "es": "200 documentos/mes · 1 empresa · hasta 3 usuarios",
      "en": "200 documents/mo · 1 company · up to 3 users"
    },
    "features": {
      "ca": [
        "Totes les funcions comunes detallades a sota",
        "Lectura i arxiu d’albarans amb detall de línies",
        "Propostes de vinculació entre albarans i factures, amb revisió humana",
        "Reclamacions editables amb IA, recordatoris i seguiment d’incidències",
        "Informes mensuals i trimestrals en PDF i exportació de dades",
        "Logo i colors de l’empresa als informes i correus",
        "Suport per correu electrònic"
      ],
      "es": [
        "Todas las funciones comunes detalladas abajo",
        "Lectura y archivo de albaranes con detalle de líneas",
        "Propuestas de vinculación entre albaranes y facturas, con revisión humana",
        "Reclamaciones editables con IA, recordatorios y seguimiento de incidencias",
        "Informes mensuales y trimestrales en PDF y exportación de datos",
        "Logo y colores de la empresa en informes y correos",
        "Soporte por correo electrónico"
      ],
      "en": [
        "All the shared features listed below",
        "Delivery-note capture and filing, including line items",
        "Suggested delivery-note and invoice links, reviewed by a person",
        "Editable AI-assisted claims, reminders and exception tracking",
        "Monthly and quarterly PDF reports and data exports",
        "Company logo and colours on reports and emails",
        "Email support"
      ]
    }
  },
  {
    "id": "business",
    "price": 79.9,
    "priceIsFrom": false,
    "highlighted": false,
    "name": {
      "ca": "Business",
      "es": "Business",
      "en": "Business"
    },
    "audience": {
      "ca": "Per a una empresa amb més volum documental i un equip més ampli.",
      "es": "Para una empresa con más volumen documental y un equipo más amplio.",
      "en": "For one business with more documents and a larger team."
    },
    "limits": {
      "ca": "500 documents/mes · 1 empresa · fins a 5 usuaris",
      "es": "500 documentos/mes · 1 empresa · hasta 5 usuarios",
      "en": "500 documents/mo · 1 company · up to 5 users"
    },
    "features": {
      "ca": [
        "Totes les funcions de Pro",
        "Quota de 500 documents mensuals per a l’empresa",
        "Fins a 5 usuaris amb rols de consulta, edició o administració",
        "Albarans, coteig i seguiment de reclamacions inclosos",
        "Sessió inicial per configurar el circuit de treball",
        "Suport prioritari per correu electrònic"
      ],
      "es": [
        "Todas las funciones de Pro",
        "Cuota de 500 documentos mensuales para la empresa",
        "Hasta 5 usuarios con roles de consulta, edición o administración",
        "Albaranes, cotejo y seguimiento de reclamaciones incluidos",
        "Sesión inicial para configurar el circuito de trabajo",
        "Soporte prioritario por correo electrónico"
      ],
      "en": [
        "All Pro features",
        "An allowance of 500 documents per month for the company",
        "Up to 5 users with viewer, editor or administrator roles",
        "Delivery notes, matching and claim tracking included",
        "Initial session to set up the workflow",
        "Priority email support"
      ]
    }
  },
  {
    "id": "multi",
    "price": 149,
    "priceIsFrom": true,
    "highlighted": false,
    "name": {
      "ca": "Gestories i grups empresarials",
      "es": "Gestorías y grupos empresariales",
      "en": "Accounting firms & business groups"
    },
    "audience": {
      "ca": "Per gestionar clients d’una gestoria o diverses societats d’un mateix grup.",
      "es": "Para gestionar clientes de una gestoría o varias sociedades de un mismo grupo.",
      "en": "For accounting clients or several companies within one business group."
    },
    "limits": {
      "ca": "1.000 documents/mes compartits · fins a 5 empreses · fins a 10 usuaris",
      "es": "1.000 documentos/mes compartidos · hasta 5 empresas · hasta 10 usuarios",
      "en": "1,000 shared documents/mo · up to 5 companies · up to 10 users"
    },
    "features": {
      "ca": [
        "Totes les funcions de Business per a les empreses incloses",
        "Canvi d’empresa des d’un mateix accés",
        "Factures, proveïdors i informes separats per empresa",
        "Quota documental compartida entre les 5 empreses",
        "Fins a 10 usuaris en total, amb accés segons empresa i rol",
        "Suport prioritari per correu electrònic",
        "Més empreses, usuaris, volum o migració: pressupost a mida"
      ],
      "es": [
        "Todas las funciones de Business para las empresas incluidas",
        "Cambio de empresa desde un mismo acceso",
        "Facturas, proveedores e informes separados por empresa",
        "Cuota documental compartida entre las 5 empresas",
        "Hasta 10 usuarios en total, con acceso según empresa y rol",
        "Soporte prioritario por correo electrónico",
        "Más empresas, usuarios, volumen o migración: presupuesto a medida"
      ],
      "en": [
        "All Business features for the included companies",
        "Switch companies from one sign-in",
        "Separate invoices, suppliers and reports for each company",
        "Document allowance shared across the 5 companies",
        "Up to 10 users in total, with company and role-based access",
        "Priority email support",
        "More companies, users, volume or migration: custom quote"
      ]
    }
  },
  {
    "id": "starter",
    "price": null,
    "priceIsFrom": false,
    "highlighted": false,
    "name": {
      "ca": "Starter",
      "es": "Starter",
      "en": "Starter"
    },
    "audience": {
      "ca": "Per a autònoms i negocis amb poques factures de proveïdors.",
      "es": "Para autónomos y negocios con pocas facturas de proveedores.",
      "en": "For freelancers and businesses receiving a small number of supplier invoices."
    },
    "limits": {
      "ca": "Fins a 50 factures/mes · 1 empresa · 1 usuari",
      "es": "Hasta 50 facturas/mes · 1 empresa · 1 usuario",
      "en": "Up to 50 invoices/mo · 1 company · 1 user"
    },
    "features": {
      "ca": [
        "Entrada per correu o pujada manual, extracció amb IA i revisió",
        "Detecció de possibles duplicats i incoherències d’imports",
        "Fitxes de proveïdors i registre de pagaments",
        "Resum trimestral d’IVA i IRPF i exportació de dades",
        "Assistent IA amb crèdit mensual acordat i suport per email",
        "No inclou albarans, coteig ni reclamacions automàtiques"
      ],
      "es": [
        "Entrada por correo o subida manual, extracción con IA y revisión",
        "Detección de posibles duplicados e incoherencias de importes",
        "Fichas de proveedores y registro de pagos",
        "Resumen trimestral de IVA e IRPF y exportación de datos",
        "Asistente IA con crédito mensual acordado y soporte por email",
        "No incluye albaranes, cotejo ni reclamaciones automáticas"
      ],
      "en": [
        "Email or manual intake, AI extraction and review",
        "Possible-duplicate and amount-consistency checks",
        "Supplier records and payment registration",
        "Quarterly VAT and withholding summary and data exports",
        "AI assistant with agreed monthly credit and email support",
        "Delivery notes, matching and automated claims are not included"
      ]
    }
  }
];

/** Homepage and search metadata must use the same published numeric plans. */
export const INVOICING_STARTING_PRICE = Math.min(
  ...INVOICING_PLANS.flatMap((plan) => plan.price === null ? [] : [plan.price]),
);

export function formatPriceBand(band: PriceBand, locale: Locale): string {
  const suffix = band.unit === 'month' ? (locale === 'en' ? '/mo' : '/mes') : '';
  const vat = locale === 'en' ? '+ VAT' : '+ IVA';
  const from = locale === 'ca' ? 'Des de' : locale === 'es' ? 'Desde' : 'From';
  if (band.max === null) {
    return `${from} ${band.min}€${suffix} ${vat}`;
  }
  return `${band.min}–${band.max}€${suffix} ${vat}`;
}
