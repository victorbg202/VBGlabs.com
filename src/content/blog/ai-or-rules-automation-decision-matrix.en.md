---
title: "AI or rules? A decision matrix for automating a process"
description: "A practical 10-point matrix for deciding whether a process needs AI, deterministic rules or a hybrid approach, with examples and control criteria."
slug: "ai-or-rules-automation-decision-matrix"
lang: "en"
translationGroup: "ai-or-rules-automation-decision-matrix"
category: "AI automation"
date: 2026-10-30
relatedSlugs: ["what-is-worth-automating", "one-page-process-template-before-automation", "manual-task-cost-automation-calculator", "rag-small-business-ai-assistant-documents"]
---

Not every process that appears “intelligent” needs artificial intelligence. If the inputs are structured and the decision can be expressed as stable conditions, rules are usually cheaper, more predictable and easier to audit. AI adds value when language, documents or variable situations need to be interpreted. In many cases, the best design is hybrid: AI interprets, while rules validate and decide what may be executed.

This matrix helps you compare all three options before selecting a model or platform. It does not calculate the financial return. Its first job is to determine **which type of automation fits the real work**.

## The three options you are comparing

**Rule-based automation.** It follows explicit conditions: if A happens, do B. It is suitable for structured fields, calculations, exact checks, status changes and integrations with stable criteria.

**AI automation.** It uses a model to classify, extract, summarise, draft or interpret inputs that do not always look the same. It works with probabilities: an answer may be useful without necessarily being exact.

**Hybrid automation.** It assigns each part to the most suitable mechanism. For example, AI extracts data from a document, rules check totals and required fields, and a person reviews the exceptions.

This is not a choice between “old technology and modern technology”. It is a choice about control, variability and cost. Before applying the matrix, describe the process with the [one-page process template](/en/blog/one-page-process-template-before-automation/): input, outcome, owner, exceptions and the consequence of an error.

## A 10-point matrix: score the need for AI

Give each dimension **0, 1 or 2 points**. Score the process as it operates today, not as you would like it to operate.

| Dimension | 0 points | 1 point | 2 points |
|---|---|---|---|
| Input variability | Structured fields or values | A few known formats | Highly variable text, speech or documents |
| Interpretation required | Exact conditions | Some bounded ambiguity | Meaning, intent or context must be understood |
| Correct output | One exact answer | Several acceptable answers within limits | Drafting, summarising or recommending is required |
| Verification | A formula or rule can check it | Data or sources can confirm it | Frequent human judgement is needed |
| Change and exceptions | Stable process, few exceptions | Controlled periodic changes | New cases and changing language |

Add the points:

- **0–3: prioritise rules.** AI is likely to add cost and uncertainty without solving a real problem.
- **4–6: design a hybrid workflow.** There is an interpretive component, but some decisions should remain deterministic.
- **7–10: AI may be central.** You will still need validation, boundaries and risk-appropriate oversight.

The score does not approve the project automatically. It only guides the architecture. You must still examine volume, data, the impact of errors and maintenance costs.

## The risk filter can change the answer

Review the result again before automating. The more serious an incorrect decision would be, the less autonomy a probabilistic output should have.

| If the output... | A reasonable minimum control |
|---|---|
| prepares an internal draft | quick review before use |
| classifies or extracts data | format, total and required-field checks |
| sends an external message | approval or strict limits for low-risk cases |
| changes an important record | validation against the source system and an activity log |
| authorises payments, commitments or sensitive decisions | explicit human decision |

A high need-for-AI score does not justify complete freedom. It may show that the problem is ambiguous and therefore needs a person at critical points.

## Example 1: routing incoming emails

A business receives sales enquiries, incidents, invoices and supplier messages in one shared inbox.

- The inputs are free text and vary considerably: **2 points**.
- The intent must be understood: **2 points**.
- The output is a category and recipient: **0 points**.
- It can be verified using categories and reviewed samples: **1 point**.
- New wording appears, but the internal route is stable: **1 point**.

**Total: 6 points.** A hybrid approach is reasonable. AI proposes the category and extracts basic details. Rules block dangerous attachments, require minimum fields, apply known priorities and send low-confidence cases to a person. The model should not decide on its own that an incident has been resolved.

## Example 2: flagging an invoice above a threshold

The system already holds the total, supplier and cost centre in structured fields. The business wants an alert when an invoice exceeds €2,000 or lacks approval.

Input variability and interpretation are almost zero. The correct answer is exact and easy to verify. The score would be **0 or 1**. A rule is enough. Adding a model would make it harder to explain why an alert was or was not sent.

If PDFs in different formats must be read first, only the first step changes: AI may extract the fields, while rules still check the total and threshold. This separation is the basis of a sound hybrid workflow.

## Example 3: answering questions from internal documents

Questions may be phrased in many ways, and the answer must be assembled from current manuals. The score is likely to be high. An assistant that retrieves approved sources may fit better than hundreds of keyword rules.

That does not make the chat an authority. Accessible documents must be limited and cited; the assistant must be able to say it cannot find an answer; sensitive queries need escalation. The guide to [RAG assistants for small businesses](/en/blog/rag-small-business-ai-assistant-documents/) explores these controls in detail.

## Common mistakes when choosing an approach

### Putting AI in front of a data problem

If fields are missing, duplicates are common or nobody knows which version is correct, a model will not repair the process. It may hide disorder behind a convincing answer. Organise the sources and assign owners before automating.

### Turning every exception into a prompt

A prompt containing dozens of conflicting conditions is a rule in the wrong place. Exact boundaries — amounts, dates, permissions and statuses — should live in verifiable code or configuration.

### Demanding 100% autonomy

Automating clear cases and sending the rest for review may create more value than pursuing complete coverage. Define a safe route for low confidence, incomplete data and unexpected situations.

### Comparing only the model price

The real cost includes integrations, tests, reviews, monitoring, incidents and changes. Use the [manual-task cost calculator](/en/blog/manual-task-cost-automation-calculator/) to compare savings with implementation and maintenance, rather than looking only at API usage.

## A copyable template for a real decision

```text
PROCESS:
OUTCOME REQUIRED:

SCORE (0–2)
Input variability:
Interpretation required:
Correct output:
Verification:
Change and exceptions:
TOTAL / 10:

RISK IF IT IS WRONG:
WHAT IT MAY EXECUTE WITHOUT APPROVAL:
WHAT A RULE MUST VALIDATE:
WHAT A PERSON MUST REVIEW:
HOW QUALITY AND COST WILL BE MEASURED:

DECISION: rules / AI / hybrid / do not automate yet
```

Run this exercise for three candidate processes, not only the most attractive one. The guide to [what is worth automating](/en/blog/what-is-worth-automating/) will help prioritise them by frequency, impact and risk.

## A sound decision separates interpretation, control and execution

A robust AI automation does not force the model to do everything. It defines which information the model should interpret, which conditions must be checked exactly and which level of uncertainty a person will accept. This separation makes testing easier, reduces surprises and allows one component to be replaced without rebuilding the whole process.

If you want to apply the matrix to a real workflow, [AI consulting](/en/consulting/) can turn it into a scope, controls and cost estimate. Once the approach has been validated, we can build an [AI automation](/en/automation/) that combines models, rules and human review where each belongs.
