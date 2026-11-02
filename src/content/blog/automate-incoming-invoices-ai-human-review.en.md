---
title: "Automate incoming invoices with AI: from capture to human review"
description: "A practical guide to capturing invoices, extracting data with AI, validating it with rules and sending only exceptions for human review."
slug: "automate-incoming-invoices-ai-human-review"
lang: "en"
translationGroup: "incoming-invoice-ai-automation-human-review"
category: "AI automation"
date: 2026-11-02
relatedSlugs: ["ai-or-rules-automation-decision-matrix", "one-page-process-template-before-automation", "manual-task-cost-automation-calculator", "spain-b2b-e-invoicing-verifactu-new-dates"]
---

Automating incoming invoices with AI does not mean letting a model decide what should be paid. It means turning variable documents — PDFs, images or invoices attached to email — into structured data, checking that data with rules and involving a person only when judgement is needed. The sensible goal is a more orderly, traceable workflow, not a promise of full autonomy.

## Why invoice processing suits a hybrid automation

An invoice combines two different kinds of work. First, someone has to interpret a document whose layout varies by supplier. Then the business must run exact checks: required fields, arithmetic, duplicates and matches against known records.

AI is useful for the variable part. It can recognise an invoice and locate its number, date, supplier, net amounts, taxes and total across different layouts. Rules are better for anything that must be deterministic. A person should remain in control when the reading is uncertain, an exception appears or the next action has real consequences.

This separation follows the [decision matrix for choosing AI, rules or a hybrid workflow](/en/blog/ai-or-rules-automation-decision-matrix/): AI interprets, rules validate and people resolve the cases that do not meet safe conditions.

## The complete workflow, step by step

### 1. Capture documents without losing their context

Invoices may arrive through a dedicated mailbox, an upload form, a shared folder or an integration with an existing system. Keep the original document together with useful context such as sender, receipt time, original filename and message identifier.

Do not treat every attachment as an invoice. Signature images, delivery notes and quotations can arrive through the same channel. The first filter should discard irrelevant files and identify unsupported formats.

### 2. Classify before extracting

An initial classification can distinguish an invoice, credit note, delivery note, quotation or unknown document. That result determines which fields to look for and which rules to run afterwards.

Store the proposed category, confidence and the reason for routing the file elsewhere. If a document is unreadable, protected or contains several invoices, raising an exception is safer than inventing data.

### 3. Extract data with document AI

The minimum dataset depends on the process, but it will often include:

- supplier and tax identifier;
- invoice number and date;
- net amounts, tax rates and tax amounts;
- total and currency;
- due date, when stated;
- purchase order, project or cost-centre reference when required;
- line items only when the actual use case needs them.

Each extracted value should retain its provenance: page, text region or coordinates in the document, together with an estimated confidence. A reviewer can then compare the proposed value with the original area without rereading the whole invoice.

### 4. Validate with exact rules

A model may read “€1,284.30”, but it should not decide by itself whether that value is consistent. After extraction, apply controls such as:

- presence of required fields;
- valid date, currency and tax identifier formats;
- net amount, tax and total arithmetic within a defined tolerance;
- an invoice number already recorded for the same supplier;
- supplier known or pending approval;
- match with a purchase order or cost centre when the process requires it;
- amounts or due dates outside agreed limits.

These checks belong in testable rules, not hidden inside a prompt.

### 5. Send only genuine exceptions for review

Human review works best when it includes a specific reason. “Review this invoice” is not very useful. “The extracted total does not match net amount plus tax” or “possible duplicate from the same supplier” tells the reviewer what to inspect.

Define three outcomes:

1. **Prepared:** the required fields pass validation and the document is ready for the next authorised step.
2. **Review:** a field is missing, confidence is low or a rule finds a discrepancy.
3. **Technical rejection:** the file is unreadable, damaged or outside the agreed scope.

Reviewers should be able to correct or confirm a value, change the classification or mark the document as unprocessable.

### 6. Organise, export and preserve an audit trail

Once validated, the workflow can standardise the filename, assign metadata, store the document and prepare an export. Preparing data is not the same as approving a payment.

For every document, retain the original, extracted values, validation results, corrections and the person or system that confirmed each change. If an invoice is processed again, the new version should not erase the previous history.

## What AI should not decide on its own

Reading a document and making a business decision are different jobs. Even when extraction is reliable, a model should not independently authorise payments, approve a new supplier, settle a contractual discrepancy or decide accounting and tax treatment.

Incoming invoice management should not be confused with invoice issuance either. [VBG Invoicing](/en/vbg-invoicing/) is designed to receive, organise and prepare incoming invoices for review. It does not issue sales invoices and is not a VERI*FACTU compliance product. The guide to [Spain's B2B e-invoicing and VERI*FACTU](/en/blog/spain-b2b-e-invoicing-verifactu-new-dates/) explains why receipt, exchange and issuance are separate workstreams.

## An illustrative pilot

Imagine a business receiving invoices in a shared mailbox. A team member currently downloads attachments, renames files, copies six fields into a spreadsheet and asks for clarification whenever a project reference is missing. This is a fictional example that illustrates scope, not a performance claim.

The pilot could cover PDF invoices from ten frequent suppliers. AI classifies each document and extracts supplier, tax identifier, invoice number, date, net amount, tax and total. Rules check the arithmetic, look for duplicates and require a project reference. Consistent invoices are prepared, while the rest enter a queue with the exact exception reason.

The pilot neither triggers payment nor changes the accounting system. For four weeks, the team compares the proposed data with the document, records corrections and decides whether the scope can expand. This tests the uncertain part without turning the pilot into a full migration.

## How to measure whether the pilot works

Do not rely on a single “accuracy percentage”. Measure the complete process:

- percentage of documents classified correctly;
- accuracy and correction rate for each field;
- invoices that pass directly versus those routed for review;
- average review time per document;
- most frequent exception reasons;
- duplicates or inconsistencies detected;
- cost per validated invoice, including review and maintenance.

A system might read totals well but regularly miss the reference the business actually needs. An overall average would hide that problem. Separate critical fields from informational ones and define which errors must stop the workflow.

The [manual task cost calculator](/en/blog/manual-task-cost-automation-calculator/) can help compare potential savings with the cost of the pilot, integrations and the review work that will remain.

## Checklist before you build

- [ ] We have documented the input, outcome, owner and exceptions.
- [ ] We know which document types are in scope and which are excluded.
- [ ] We only extract fields needed for the next step.
- [ ] Every critical field has a validation or review criterion.
- [ ] Duplicates are checked against an identified source.
- [ ] Low confidence creates a safe exception.
- [ ] The reviewer sees each value beside its position in the document.
- [ ] Corrections and decisions are logged.
- [ ] The pilot does not authorise payments or sensitive decisions.
- [ ] We will measure quality, review time, exceptions and total cost.

Before choosing a tool, complete the [one-page process template](/en/blog/one-page-process-template-before-automation/). If you want to turn your company's actual invoice flow into a bounded pilot, VBG Labs can help define fields, rules, exceptions and metrics through [AI consulting](/en/consulting/), or implement the connection between email, documents and business systems as an [AI automation](/en/automation/). The goal is not to remove review; it is to reserve it for the cases where judgement adds value.
