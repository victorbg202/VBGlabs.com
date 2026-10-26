# AI solutions and inbound pages — approved brief, 26 October 2026

Purpose: explain distinct, purchasable AI and automation projects with useful scope information and contextual enquiries. Preserve existing URLs and three-language routing.

## Confirmed business decisions

- Sell custom projects for company-document assistants, website/WhatsApp assistants, appointment and quote follow-ups, AI reporting, and websites/applications incorporating AI or automation.
- Prioritise professional/accounting firms and local shops/businesses; based in Almenar, Lleida, with remote service across Spain.
- Website/application development must involve AI or automation. General IT, CRM implementations, antivirus and voice agents are outside this release.
- Lead flow: a short form with name, email, message and privacy acknowledgement; include solution, source page, sector and language automatically.
- Indicative implementation ranges, excluding VAT: focused workflow EUR 750–1,500; connected assistants/reporting EUR 1,500–3,500; internal document assistant EUR 1,500–4,500; custom web/application EUR 2,500–7,500. Figures live in `src/data/pricing.ts`.
- VBG Labs manages external services and invoices AI usage, hosting and licences separately. Estimate recurring costs before agreement; do not invent monthly prices.
- Monthly maintenance or separately quoted ad-hoc support, according to the project. No invented SLA or fixed delivery time.
- VBG Facturació is the current public own-product proof. Postcraft and appointment automation are still in progress and must not be presented as finished demonstrations or client case studies.
- Examples on new pages are clearly illustrative; do not invent client outcomes, reviews or savings.

## New content architecture

Ten service pages: document processing; email automation; company-document assistants; website assistants; WhatsApp assistants; appointment reminders; quote follow-up; AI reporting; web development with AI/automation; custom AI applications.

Two sector pages: professional/accounting firms and local commerce. Each addresses distinct processes and links to the relevant services. No near-identical town pages.

All twelve concepts have Catalan, Spanish and English editions with reciprocal hreflang and a self-canonical. Existing automation/services hubs, navigation and contextual article links make the pages discoverable. Each page includes requirements, limitations, implementation scope, illustrative workflow, relevant questions, related services and a short contextual enquiry form.

## Validation and publication

Run blog validation, Astro checks and a clean production build. Check new routes, canonicals, translations, internal links and meaningful form success/failure behaviour using intercepted requests, never actual email submissions. Review mobile/desktop layout. Publish source and compiled root output together according to `docs/06-hostinger-deploy.md`; check production after the webhook deployment.
