import fs from 'node:fs';
import path from 'node:path';

const blogDir = path.resolve('src/content/blog');
const requiredLocales = ['ca', 'es', 'en'];
const files = fs.readdirSync(blogDir).filter((file) => /\.mdx?$/.test(file));

function frontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+)["']?\\s*$`, 'm'));
  return match?.[1]?.trim();
}

const posts = files.map((file) => {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`${file}: missing frontmatter`);

  const frontmatter = match[1];
  const relatedRaw = frontmatter.match(/^relatedSlugs:\s*(\[[^\n]*\])\s*$/m)?.[1] ?? '[]';
  let relatedSlugs;
  try {
    relatedSlugs = JSON.parse(relatedRaw.replaceAll("'", '"'));
  } catch {
    throw new Error(`${file}: relatedSlugs must be a JSON-style array`);
  }

  return {
    file,
    lang: frontmatterValue(frontmatter, 'lang'),
    slug: frontmatterValue(frontmatter, 'slug'),
    translationGroup: frontmatterValue(frontmatter, 'translationGroup'),
    draft: frontmatterValue(frontmatter, 'draft') === 'true',
    relatedSlugs,
  };
});

const errors = [];
const published = posts.filter((post) => !post.draft);
const slugsByLocale = new Map(requiredLocales.map((locale) => [locale, new Set()]));

for (const post of published) {
  if (!requiredLocales.includes(post.lang)) errors.push(`${post.file}: invalid locale ${post.lang}`);
  if (!post.slug) errors.push(`${post.file}: missing slug`);
  if (!post.translationGroup) errors.push(`${post.file}: missing translationGroup`);

  const localeSlugs = slugsByLocale.get(post.lang);
  if (localeSlugs?.has(post.slug)) errors.push(`${post.file}: duplicate slug ${post.slug} in ${post.lang}`);
  localeSlugs?.add(post.slug);
}

const groups = new Map();
for (const post of published) {
  const entries = groups.get(post.translationGroup) ?? [];
  entries.push(post);
  groups.set(post.translationGroup, entries);
}
for (const [group, entries] of groups) {
  const locales = new Set(entries.map((post) => post.lang));
  for (const locale of requiredLocales) {
    if (!locales.has(locale)) errors.push(`${group}: missing published ${locale} translation`);
  }
}

for (const post of published) {
  const localeSlugs = slugsByLocale.get(post.lang) ?? new Set();
  for (const relatedSlug of post.relatedSlugs) {
    if (!localeSlugs.has(relatedSlug)) {
      errors.push(`${post.file}: related slug ${relatedSlug} does not exist in ${post.lang}`);
    }
  }
}

if (errors.length) {
  console.error(`Blog validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`Blog validation passed for ${published.length} published translations in ${groups.size} groups.`);
