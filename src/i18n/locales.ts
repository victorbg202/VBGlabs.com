export const LOCALES = ['ca', 'es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ca';

export const LOCALE_LABEL: Record<Locale, string> = {
  ca: 'Català',
  es: 'Español',
  en: 'English',
};

export const LOCALE_SHORT: Record<Locale, string> = {
  ca: 'CA',
  es: 'ES',
  en: 'EN',
};

export const HTML_LANG: Record<Locale, string> = {
  ca: 'ca',
  es: 'es',
  en: 'en',
};

export const OG_LOCALE: Record<Locale, string> = {
  ca: 'ca_ES',
  es: 'es_ES',
  en: 'en_US',
};

/** Prefix used in the URL for each locale. Catalan is the source language and
 *  has no prefix (routing.prefixDefaultLocale: false in astro.config.mjs). */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

/** Build an absolute-from-root path for a given locale + path segment.
 *  path must start with '/' and end with '/' (trailing slash convention). */
export function localizedPath(locale: Locale, path: string): string {
  const prefix = localePrefix(locale);
  if (path === '/') return prefix === '' ? '/' : `${prefix}/`;
  return `${prefix}${path}`;
}

export const SITE_URL = 'https://vbglabs.com';
