---
title: "Document a process on one page: the template to use before automating"
description: "Document a process on one page, uncover exceptions and assess whether it is ready for automation with a reusable template and a 0-to-10 score."
slug: "one-page-process-template-before-automation"
lang: "en"
translationGroup: "one-page-process-template-before-automation"
category: "Automation"
date: 2026-10-16
relatedSlugs: ["what-is-worth-automating", "manual-task-cost-automation-calculator", "off-the-shelf-no-code-custom-software-comparison", "small-business-crm-sales-process-guide"]
---

If a process cannot be explained on one page, it is not ready to automate. You do not need a fifty-page manual. You need to know what starts the process, which data it requires, who makes decisions, what exceptions occur and how you will prove that it ended correctly.

This worksheet describes the process as it works today, exposes gaps before money is committed and separates human decisions from repetitive steps. Complete it in a short working session, then use it to compare proposals, scope a pilot or decide that the process needs to be organised first.

## The copy-and-fill template

Copy this block into a document and complete it with the people who do the work. Record what happens now, not the ideal process you wish you had.

```text
PROCESS NAME:
OBJECTIVE: What business outcome should it produce?

START: Which event, message or date triggers it?
FINISH: What evidence proves it ended correctly?
FREQUENCY AND VOLUME: How many cases occur each day, week or month?

INPUTS: Which data or documents are required?
OUTPUTS: What is created, updated, sent or recorded?

CURRENT STEPS:
1.
2.
3.

DECISIONS: Which rules determine the next step?
EXCEPTIONS: What leaves the normal path, and how often?

OWNER: Who is accountable for the outcome?
PARTICIPANTS: Who performs, reviews or approves the work?
SYSTEMS: Email, spreadsheets, ERP, CRM, folders, website...

SENSITIVE DATA AND ACCESS: What is processed, and who may see it?
ERRORS AND REWORK: What usually fails, and what does correction involve?

HUMAN CONTROL: Where must someone review, approve or be able to stop it?
FALLBACK: What happens when a tool or integration fails?
MEASURE: Time, errors, outstanding cases, response deadline...
```

An unknown answer is not a failed exercise. It is useful information: something needs to be measured or agreed before anything is built.

## Complete it without creating more bureaucracy

### 1. Follow one real case from start to finish

Do not begin with “what normally happens?”. Choose a recent case and reconstruct it: which email arrived, who opened it, what they copied, where they saved it and how they knew the task was complete. Then compare it with a second, different case.

This exposes the steps people rarely mention: looking for a detail in a conversation, renaming a file, waiting for approval or manually checking for a duplicate.

### 2. Define the start and finish with evidence

“When an invoice arrives” is better than “when administration has work”. “Invoice validated, recorded and filed with an identifier” is better than “when it is done”. An observable start can trigger a workflow; a verifiable finish tells you whether it worked.

Record every valid end state. A case may be completed, rejected, waiting for information or escalated. Hiding those outcomes simply moves the problem into the future automation.

### 3. Separate actions from decisions

Actions such as downloading an attachment, creating a folder or copying a field often follow a rule. Decisions such as accepting a questionable invoice, prioritising an incident or approving an exception may need context and human accountability.

Do not assume that “using AI” removes this boundary. AI may suggest a category or extract data, but the process still needs to define what happens when confidence is low, who reviews the output and how corrections are made.

### 4. Write down exceptions before designing the solution

Ask what happens when a document is missing, a customer replies late, two formats are used, an amount does not match or the main system is unavailable. Group exceptions that can be handled in the same way.

The first pilot does not need to automate every exception. It does need to detect them, route them to a visible queue and prevent them from disappearing inside someone's personal inbox.

## Worked example: handling a received invoice

This is an illustrative example, not a real client case. It shows the useful level of detail.

- **Objective:** leave a received invoice identified, reviewed and available for administrative work.
- **Start:** an email with a PDF attachment reaches a designated mailbox.
- **Finish:** the document has a supplier, date, amount and review status, and is filed with a unique identifier.
- **Steps:** download, confirm it is an invoice, extract fields, check for duplicates, assign the supplier, review and record.
- **Decisions:** is it readable?, does it already exist?, is information missing?, does the amount require additional approval?
- **Exceptions:** protected document, several invoices in one PDF, credit note, new supplier or unreadable field.
- **Human control:** review uncertain values and authorise out-of-policy cases.
- **Fallback:** preserve the original and create a pending task if extraction or the main system fails.
- **Measure:** time to review, percentage of extracted values corrected and number of outstanding cases.

The worksheet does not select a technology. It defines the work first; only then should you consider automation, an existing software feature or a combination. For received invoices, [VBG Invoicing](/en/vbg-invoicing/) supports document organisation and management, but it is not sales-invoice issuing software or a VERI*FACTU compliance product.

## Quick score: is it ready for a pilot?

Give each criterion **0, 1 or 2 points**. This is not a return-on-investment calculation or a technical guarantee. It is a way to identify missing foundations.

| Criterion | 0 points | 1 point | 2 points |
|---|---|---|---|
| Start and finish | Ambiguous | One is clear | Both are observable |
| Inputs | Change without control | Several known formats | Formats and fields defined |
| Rules | Depend on memory | Some decisions documented | Rules and owners are clear |
| Exceptions | Unknown | Known but not measured | Grouped with defined outcomes |
| Systems and access | Access uncertain | Partial or manual integration | Access and limits verified |

Use the total carefully:

- **0–3:** organise and observe before automating.
- **4–7:** prepare a limited pilot with human review.
- **8–10:** the process is a good candidate for a technical test, provided the economics also make sense.

Use the [manual task cost calculator](/en/blog/manual-task-cost-automation-calculator/) to assess cost and potential savings. When choosing among off-the-shelf software, no-code and custom development, use the [software comparison](/en/blog/off-the-shelf-no-code-custom-software-comparison/).

## Common process-mapping mistakes

- **Mapping from a manager's desk.** The person doing the task knows steps that never made it into a procedure.
- **Choosing a process that is too broad.** “Manage customers” is not a pilot process; “record a web enquiry and assign its follow-up” is.
- **Confusing a person with a role.** Write “sales owner”, not only an individual's name.
- **Measuring speed alone.** Include errors, queues, rework and output quality.
- **Drawing only the happy path.** Exceptions drive much of the maintenance burden.
- **Ignoring rollback.** The team must be able to stop the flow, correct data and continue manually.

## Four possible outcomes — and all can be correct

The worksheet may lead to full automation, assistance for one step, better use of an existing feature or no automation at all. The real problem may be an approval without an owner, inconsistent input data or a task that happens too rarely.

Before moving ahead, apply the criteria in [what is worth automating](/en/blog/what-is-worth-automating/): repetition, stability, volume and the cost of errors. Good automation starts with a sufficiently clear process and a measurable outcome, not a fashionable tool.

If you want to turn a completed worksheet into a pilot, an [automation review](/en/automation/) can validate access, exceptions, human controls and maintenance before development starts. The one-page document becomes a shared starting point and prevents the project from beginning with conflicting assumptions.
