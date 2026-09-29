# VBG Labs blog editorial policy

This file is the publishing brief for both people and scheduled agents. Read it before proposing or publishing a post.

## Publishing cadence

- Publish three distinct topics per week, normally Monday, Wednesday and Friday.
- Every topic must ship together in Catalan, Spanish and English.
- Catalan is the source edition. Spanish and English are natural localisations, not literal translations.
- A post is not complete until all three source files pass `npm run validate:blog`, `npm run check` and `npm run build`.

## Weekly mix

1. One durable practical guide answering a concrete SME or self-employed professional question.
2. One timely article based on a meaningful recent development.
3. One tool, checklist, comparison, worked example or decision framework.

Do not force weak news into the calendar. If no development materially affects the audience, publish a stronger evergreen piece instead.

## Audience and voice

- Primary audience: SMEs, microbusinesses and self-employed professionals in Catalonia and Spain.
- Write plainly, practically and without hype. Explain what changes, why it matters, what to do now and what can wait.
- Do not invent clients, conversations, results, testimonials or first-hand experience.
- Do not imply VBG Labs provides legal, tax or accounting advice.
- Keep commercial references secondary to the reader's problem.

## Research standard

- Check the existing blog before choosing a topic or angle. Avoid near-duplicates and update an existing post when that is more useful.
- For news, regulation, product changes, dates or statistics, verify the current position on the day of publication.
- Prefer primary sources: official institutions, legislation, regulators, standards bodies, product documentation and original research.
- Use at least two independent primary sources when a consequential claim benefits from confirmation.
- Link sources beside the relevant claim and include a short `Fonts / Fuentes / Sources` section for current-affairs posts.
- Never publish a legal or compliance deadline from memory.

## Article standard

- Aim for 900–1,400 useful words per language, but do not add filler.
- Answer the core question in the opening 100 words.
- Use descriptive H2/H3 headings, short paragraphs and concrete examples.
- Include two to four relevant internal links and at least one related blog post.
- End with a contextual next step. Link only to the VBG Labs service that genuinely matches the problem.
- Use ISO dates in frontmatter and translated slugs for each locale.
- Keep `translationGroup` identical across the three editions.
- Add reciprocal `relatedSlugs` when introducing a strong new relationship between posts.

## Service boundaries

- VBG Facturació currently manages received invoices. It does not issue sales invoices and must not be presented as a VERI*FACTU compliance product.
- Postcraft is not yet available and must remain clearly labelled as forthcoming.
- Describe examples as illustrative unless they are documented real cases approved for publication.

## Direct publishing safety

- Publish source and generated output in the same reviewed commit when working manually.
- Scheduled source-only commits are compiled by `.github/workflows/publish-site.yml`.
- If validation, build or source verification fails, do not publish a partial article. Leave `main` unchanged and report the failure.
