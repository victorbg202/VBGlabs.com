import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://vbglabs.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    // No `i18n` option here: that feature infers hreflang alternates by
    // pattern-matching identical path suffixes across locale prefixes,
    // which breaks as soon as a locale uses a translated slug (e.g.
    // /automatitzacions/ vs /es/automatizaciones/ vs /en/automation/ —
    // exactly what this site does everywhere, per src/i18n/routes.ts).
    // The authoritative hreflang signal already lives in every page's
    // <head> via src/components/Seo.astro, built from the same route
    // table, so the sitemap only needs to list URLs correctly.
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
