---
title: "AI quote automation: from customer enquiry to reviewable draft"
description: "A practical guide to turning enquiries and documents into reviewable quote drafts with AI, business rules, traceability and human approval."
slug: "ai-quote-automation-reviewable-draft"
lang: "en"
translationGroup: "ai-quote-automation-reviewable-drafts"
category: "AI automation"
date: 2026-11-23
relatedSlugs: ["ai-lead-qualification-automate-inbound-enquiries", "ai-or-rules-automation-decision-matrix", "one-page-process-template-before-automation", "ai-assistant-testing-checklist-before-production", "ai-automation-cost-per-case-calculator"]
---

AI quote automation can reduce reading, copying and drafting, but the model should not become your price list or sales authority. A sound design is hybrid: AI interprets the enquiry and attachments, proposes scope and writes a draft; deterministic rules retrieve prices and check conditions; a person resolves uncertainty and approves the send. This shortens preparation without surrendering control over commitments, amounts or customer expectations.

## The part of quoting that AI can improve

Producing a quote often means reconstructing a request from an email, form, call notes, photographs or a PDF. Someone must identify the service, spot missing information, find the correct rate, define scope and make exclusions explicit. The slow part is not only arithmetic. It is turning unstructured material into a coherent proposal.

That is where AI can help. It can interpret free text, summarise attachments, normalise terminology and draft clear language. A quote also contains exact decisions that must not be improvised. The model should never invent a price, choose a discount or tax treatment, or promise a delivery date.

Use a division of responsibility like this:

| Task | AI | Controlled rules or data | Person |
|---|---|---|---|
| Understand the need | Extracts and summarises | Check required fields | Confirms ambiguity |
| Propose scope | Drafts a proposal | Restrict valid services and options | Accepts or corrects |
| Calculate amounts | Does not decide | Rates, quantities, taxes and formulas | Approves exceptions |
| Draft terms | Adapts an approved template | Insert current clauses | Reviews commitments |
| Send | May prepare the email | Block unapproved sends | Authorises release |

## Define the output before choosing a model

A useful pilot does not begin with “write me a quote”. It begins with an output contract: which fields the system must produce and how it will distinguish a fact, a proposal and a missing input.

At minimum, the structured draft should contain:

- identified customer and contact details;
- stated need and desired outcome;
- proposed service or service family;
- detected units, quantities and variants;
- missing information and questions to ask;
- quote lines tied to a valid rate code;
- assumptions, exclusions and validity period;
- source passage or document for each material fact;
- status: complete, awaiting information or special review.

Structured formats help the model return predictable fields. OpenAI's [Structured Outputs documentation](https://developers.openai.com/api/docs/guides/structured-outputs), for example, explains how to constrain a response to a JSON schema. It also says the application must still handle incomplete responses, errors and business rules that the schema cannot express. A schema controls shape; it does not make an invented value true.

## The end-to-end workflow

### 1. Capture the whole case

The entry point may be a form, email, transcript or internal record. Group the message, attachments and known facts under one identifier. If the previous step already uses [AI to qualify inbound enquiries](/en/blog/ai-lead-qualification-automate-inbound-enquiries/), quoting can start from that reviewed record instead of rereading the full conversation.

### 2. Separate noise, data and instructions

Strip repeated signatures and quoted history without deleting relevant facts. Classify attachments before extracting them: a photograph, specification and old quotation have different roles. Treat any instruction found inside a customer document as customer content, not as a command to the system.

### 3. Extract facts with evidence

AI fills the schema and links every important field to its source passage. If a quantity is missing or two documents disagree, the field must remain unresolved. Filling the gap with the most plausible value is not acceptable.

The [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) identifies confabulation —confidently stated false content— as a risk of these systems. For quoting, the practical response is to limit sources, retain evidence and route uncertainty for review rather than trust fluent wording.

### 4. Apply commercial rules outside the model

Now bring in rates, formulas, minimum charges, service areas, taxes and incompatibilities. These checks should be deterministic and versioned. If there is no valid service code or the selected rate has expired, stop the workflow and open an exception.

This follows the same boundary as the [AI or rules decision matrix](/en/blog/ai-or-rules-automation-decision-matrix/): use the model for ambiguous language; use controlled code or tables for arithmetic, permissions and exact conditions.

### 5. Generate a draft, not a promise

Once facts are validated, AI can draft a readable document: short context, scope, line items, assumptions, exclusions and next step. Templates should define the structure and approved clauses. The model may adjust wording, but it must not remove a mandatory exclusion or extend a warranty.

### 6. Make review efficient

The review screen should show the quote alongside alerts, source evidence and any deviations from the standard rate. The reviewer should not need to reconstruct the case from scratch.

Block sending when there is:

- a missing or contradictory required field;
- a line without a rate code;
- a manually changed price without a reason;
- a service outside the catalogue;
- an obsolete clause or template;
- a value or commitment above the approval threshold.

### 7. Send only after approval

At first, let the automation prepare the PDF and email but not send them. Record who reviewed the draft, which version they approved and when it was sent. The system can then create the follow-up task using the dates and conditions from the approved document.

## Illustrative example: a maintenance business

Imagine a business receives an enquiry containing an email, three photographs and an equipment list. AI identifies the type of intervention, extracts locations and quantities, and proposes two service lines. It also finds that access to one machine is unclear and a photograph cannot confirm the model number.

Rules retrieve the current rate, calculate travel and units, and block an option that is unavailable in that area. The system produces a draft with two open questions and leaves one line unpriced because it requires inspection. A person completes that line, reviews the exclusions and approves the quote.

This is illustrative, not a client or claimed result. Its purpose is to show that the value is not “AI quotes by itself”. The value is a prepared case that makes uncertainty visible to the right person.

## What must be ready first

The workflow will depend more on its operational foundation than on a long prompt. Prepare:

1. **Service catalogue:** codes, descriptions, units and valid combinations.
2. **Versioned rate table:** prices, effective dates, taxes and formulas.
3. **Approved templates:** structure, mandatory text, exclusions and validity.
4. **Escalation criteria:** cases requiring a visit, technical input or second approval.
5. **Reviewed examples:** standard, incomplete, contradictory and out-of-scope cases.
6. **Owners:** who maintains each dataset and who can approve exceptions.

If the process still lives in inboxes and tacit knowledge, document it first with the [one-page process template](/en/blog/one-page-process-template-before-automation/). Automating an ambiguous rate structure merely moves the ambiguity faster.

## How to test without putting sales at risk

Start with one service family, one channel and drafts that cannot be sent automatically. Use anonymised historical cases or synthetic examples, and keep development examples separate from the test set. Include ordinary inputs and deliberate exceptions.

Measure at least:

- accuracy of extracted fields;
- percentage of lines tied to a valid rate;
- pricing or terms errors, with zero tolerance before sending;
- missing questions detected and overlooked;
- review time per draft;
- percentage of cases routed correctly;
- technical cost per prepared quote.

The [AI assistant pre-production checklist](/en/blog/ai-assistant-testing-checklist-before-production/) includes tests for prompt injection, permissions, sources, failures and recovery that apply to this workflow too. Do not grant more autonomy until the system handles what it does not know.

## When it is worth doing

The case is promising when there is recurring volume, similar structures, a maintainable rate table and meaningful manual preparation time. It may not be worth automating when every proposal is unique, the necessary facts only emerge during an expert site visit, or prices change without a controlled record.

Do not calculate return from time saved alone. Include maintenance of rates and templates, review, exceptions, model usage and improvement work. The [AI automation cost-per-case calculator](/en/blog/ai-automation-cost-per-case-calculator/) helps turn those items into a realistic volume threshold.

## A sensible first target

The first goal is not untouched quotes sent automatically. It is a complete draft with source evidence, amounts calculated from the correct rate and uncertainty made visible to a reviewer. If that removes repetitive work without increasing errors, you have a sound base for the next step.

If you need to define the process, prepare the data and decide which parts belong to AI, rules and human review, VBG Labs' [AI consulting service](/en/consulting/) can turn the case into requirements, risks and a measurable pilot. Once the workflow is proven, [AI automation](/en/automation/) can connect inputs, rates, templates and approvals without handing the model decisions it should not make.

