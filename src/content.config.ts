import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { LOCALES } from '@/i18n/locales';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    lang: z.enum(LOCALES),
    /** slug of the CA source article; identical for the CA post itself.
     *  Used to build hreflang alternates between translated posts. */
    translationGroup: z.string(),
    author: z.string().default('VBG Labs'),
    category: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    relatedSlugs: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
