import type { Locale } from './locales';
import { DEFAULT_LOCALE } from './locales';

/**
 * Single source of truth for every URL on the site. Slugs are localized
 * (not machine-translated 1:1) so each language gets a URL that reads
 * natively and targets the right keyword in that language — e.g.
 * /automatitzacions/ (ca) vs /automatizaciones/ (es) vs /automation/ (en).
 *
 * Every internal link, the nav, the footer, hreflang alternates and the
 * redirect map are all generated from this one table. Nothing links to a
 * hand-typed path — this is what fixes the old site's broken/duplicated
 * navigation (audit finding C8, C17).
 */
export const ROUTE_KEYS = [
  'home',
  'services',
  'automations',
  'consulting',
  'training',
  'invoicing',
  'postcraft',
  'blog',
  'about',
  'faq',
  'contact',
  'legalNotice',
  'privacy',
  'cookies',
] as const;

export type RouteKey = (typeof ROUTE_KEYS)[number];

export const ROUTES: Record<RouteKey, Record<Locale, string>> = {
  home: { ca: '', es: '', en: '' },
  services: { ca: 'serveis', es: 'servicios', en: 'services' },
  automations: { ca: 'automatitzacions', es: 'automatizaciones', en: 'automation' },
  consulting: { ca: 'consultoria', es: 'consultoria', en: 'consulting' },
  training: { ca: 'formacio', es: 'formacion', en: 'training' },
  invoicing: { ca: 'vbg-facturacio', es: 'vbg-facturacion', en: 'vbg-invoicing' },
  postcraft: { ca: 'postcraft', es: 'postcraft', en: 'postcraft' },
  blog: { ca: 'blog', es: 'blog', en: 'blog' },
  about: { ca: 'sobre-vbglabs', es: 'sobre-vbglabs', en: 'about' },
  faq: { ca: 'preguntes-frequents', es: 'preguntas-frecuentes', en: 'faq' },
  contact: { ca: 'contacte', es: 'contacto', en: 'contact' },
  legalNotice: { ca: 'avis-legal', es: 'aviso-legal', en: 'legal-notice' },
  privacy: { ca: 'politica-privacitat', es: 'politica-privacidad', en: 'privacy-policy' },
  cookies: { ca: 'politica-cookies', es: 'politica-cookies', en: 'cookie-policy' },
};

/** Root-relative, trailing-slash path for a route key in a given locale. */
export function route(key: RouteKey, locale: Locale): string {
  const slug = ROUTES[key][locale];
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  if (slug === '') return prefix === '' ? '/' : `${prefix}/`;
  return `${prefix}/${slug}/`;
}

/** All locale variants of a route, e.g. for hreflang alternates. */
export function routeAlternates(key: RouteKey): { locale: Locale; path: string }[] {
  return (Object.keys(ROUTES[key]) as Locale[]).map((locale) => ({
    locale,
    path: route(key, locale),
  }));
}
