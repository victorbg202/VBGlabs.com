/**
 * Single source of truth for company identity data used in the footer,
 * contact page, and structured data (Organization / LocalBusiness schema).
 *
 * Rule: nothing here is invented. Fields VBG Labs hasn't provided yet
 * (phone, verified social profiles) stay `enabled: false` / empty rather
 * than a placeholder value, per explicit instruction not to publish
 * placeholder contact data. Flip `enabled: true` and fill in the real
 * value the moment it exists — every template already reads from here.
 */

export const COMPANY = {
  legalName: 'VBG Labs',
  email: 'info@vbglabs.com',
  addressLocality: 'Almenar',
  addressRegion: 'Lleida',
  addressCountry: 'ES',
  postalCode: '25126',
  areaServed: ['Almenar', 'Lleida', 'Catalunya', 'España'],
  geo: { latitude: 41.7833, longitude: 0.5333 },
  foundingYear: 2026,
};

export const PHONE = {
  enabled: false,
  number: '',
  display: '',
};

/** Social profiles — only listed once a real, live URL exists.
 *  Do not add a placeholder handle; an empty array is the correct state
 *  until VBG Labs provides verified links. */
export const SOCIAL_PROFILES: { label: string; url: string }[] = [];

export const ANALYTICS = {
  /** No real measurement ID exists yet. When VBG Labs provides one,
   *  set enabled: true and id to the GA4 / Plausible / Fathom ID —
   *  the consent-gated loader in Analytics.astro already reads this. */
  enabled: false,
  provider: 'ga4' as const,
  id: '',
};
