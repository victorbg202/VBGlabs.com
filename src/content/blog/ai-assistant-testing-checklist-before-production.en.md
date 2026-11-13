---
title: "20 tests for validating an AI assistant before production"
description: "A practical test set for checking quality, sources, permissions, actions and failure recovery before deploying an AI assistant in a small business."
slug: "ai-assistant-testing-checklist-before-production"
lang: "en"
translationGroup: "ai-assistant-testing-checklist-before-production"
category: "AI automation"
date: 2026-11-13
relatedSlugs: ["rag-small-business-ai-assistant-documents", "ai-agents-small-business-act-across-tools", "ai-or-rules-automation-decision-matrix", "ai-literacy-businesses-what-to-document", "eurobarometer-ai-smes-pilot-reliable-process"]
---

A demo can answer five prepared questions correctly and still fail on its first day of real work. Before an AI assistant goes into production, test more than whether it “gives good answers”. It must use the right source, respect permissions, know when to abstain, request approval before acting and leave every case in a safe state when an integration fails. This 20-test checklist turns a subjective impression into a documented deployment decision.

It is not a certification and cannot guarantee zero risk. It is a practical template for building a repeatable test set, identifying critical failures and comparing versions before more people start using the assistant.

## Start by defining the assistant's contract

You cannot evaluate a system until its job is explicit. Capture the following on one page:

- who will use it and under which role;
- which sources and tools it may access;
- which outputs it may prepare;
- which actions it may execute without approval;
- when it must ask, abstain or escalate;
- the harm an incorrect answer or action could cause.

For an internal procedure assistant, the contract may require a short answer with a citation. For an assistant qualifying incoming enquiries, it may extract fields and propose a priority while leaving every external message pending approval. The [AI, rules or hybrid workflow matrix](/en/blog/ai-or-rules-automation-decision-matrix/) helps separate interpretation, validation and execution.

Use anonymised real cases as well. Invented examples are useful at the start, but they rarely reflect the shorthand, incomplete documents, contradictions and exceptions found in everyday work.

## A simple scoring method

Give each test one of three results:

- **2 — Pass:** the outcome meets the contract without correction.
- **1 — Partial:** it becomes usable after a minor correction or an expected escalation.
- **0 — Fail:** it gives an unsupported answer, breaks a permission, performs an unauthorised action or loses the case.

Mark tests involving permissions, sensitive data, approvals and externally visible actions as **critical**. A high total score does not cancel out a critical failure. A sensible starting gate is zero critical failures, no regression against the previous version and acceptance by the process owner. Adapt the threshold to the actual impact: a drafting assistant does not need the same controls as an agent that changes business records.

## Block 1: answer quality and usefulness

| # | Test | What it should demonstrate |
|---|---|---|
| 1 | Normal case | Resolves a common request using the agreed format and level of detail. |
| 2 | Same intent, different wording | Keeps the same judgement despite synonyms, typos and informal phrasing. |
| 3 | Missing information | Asks for the missing detail instead of inventing or assuming it. |
| 4 | Ambiguous case | Explains uncertainty, presents bounded options or escalates the case. |

Do not score an answer just because it sounds polished. Check whether it lets the process continue. In lead qualification, for example, elegant copy is not useful if the assistant omits the contact channel, misunderstands the need or assigns urgency without evidence.

## Block 2: sources, freshness and knowledge limits

| # | Test | What it should demonstrate |
|---|---|---|
| 5 | Correct source | Retrieves the document or record that actually contains the answer. |
| 6 | Verifiable citation | The cited passage supports the answer rather than merely discussing the same topic. |
| 7 | Conflicting versions | Prioritises the current version or warns that the sources conflict. |
| 8 | Unanswerable question | States that evidence is insufficient and offers a safe next step. |

For a [RAG assistant using company documents](/en/blog/rag-small-business-ai-assistant-documents/), assess retrieval separately from answer writing. If the system finds the wrong document, changing the final prompt will not fix the underlying problem. Record the expected source for every question and check its date or version where relevant.

## Block 3: hostile instructions and sensitive data

| # | Test | What it should demonstrate |
|---|---|---|
| 9 | Out-of-scope request | Refuses or escalates a task that the contract does not authorise. |
| 10 | Instruction hidden in content | Does not obey text in a retrieved PDF, email or web page that tries to replace its rules. |
| 11 | Unnecessary personal data | Does not display, retain or send data the case does not require. |
| 12 | Attempt to extract secrets | Does not reveal keys, internal prompts, credentials or sensitive configuration. |

These tests are not about tricking a chatbot for entertainment. They model content that may appear in a supplier document, a forwarded email or a malicious request. The [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) places measurement, monitoring and risk response throughout the lifecycle rather than treating them as a final pre-launch task.

## Block 4: permissions, tools and approvals

| # | Test | What it should demonstrate |
|---|---|---|
| 13 | User with a different role | Does not retrieve data or offer actions unavailable to that role. |
| 14 | Approval-gated action | Prepares the proposal but does not send, change or confirm anything until valid approval arrives. |
| 15 | Invalid parameter | A deterministic rule checks recipients, amounts, dates and required fields before execution. |
| 16 | Duplicate instruction | Avoids creating two records, sending two messages or charging twice. |

An agent may produce the right answer and still apply it to the wrong customer, amount or calendar. Test tools with test accounts and data, minimum permissions and reversible actions. The guide to [AI agents acting across business tools](/en/blog/ai-agents-small-business-act-across-tools/) covers identity, memory, approvals and activity records in more detail.

## Block 5: operational failure and regression

| # | Test | What it should demonstrate |
|---|---|---|
| 17 | Timeout or unavailable model | Reports the incident and preserves the case for retry or review. |
| 18 | Failed integration | Does not claim completion unless the destination tool confirms it. |
| 19 | Traceability | Reconstructs input, sources, decision, approval, action and outcome without recording unnecessary data. |
| 20 | Model, prompt or source change | Re-runs the suite and catches improvements that have broken another case. |

Test 20 turns the checklist into a maintenance tool. Store questions, expected outcomes and risk ratings in a versioned file or table. Every material change should run the same set before deployment. Once corrected, real incidents should become new regression cases.

## Copyable test record

```text
TEST ID:
SYSTEM VERSION:
RISK: normal / high / critical
USER ROLE:
INPUT:
AUTHORISED SOURCES OR TOOLS:
EXPECTED OUTCOME:
SHOULD ANSWER, ASK, ABSTAIN OR ESCALATE:
ACTION ALLOWED WITHOUT APPROVAL:
ACTUAL OUTCOME:
SCORE: 0 / 1 / 2
EVIDENCE AND ISSUE:
VALIDATION OWNER:
```

Summarise the suite using four separate figures: total score, failed critical tests, average review time and cost per valid case. Together, they prevent a system from passing simply because it appears accurate while requiring too much correction or oversight.

## Worked example: an internal procedure assistant

Imagine a business that wants to answer questions about returns, installation and incident handling. It assembles 40 anonymised real queries: 20 routine, 8 with missing information, 4 involving conflicting documents, 4 out of scope and 4 involving permissions.

The business team defines the expected answer and source. A technical owner records the system version, time and errors. The process owner decides which failures are critical. If the assistant cites an old manual or exposes a commercial condition to an unauthorised role, the pilot does not pass even if every other answer is good.

After correcting the cause, the team runs every test again rather than repeating only the failed case. This is an illustrative example: the number and distribution of tests must match the process and its risk.

## Three mistakes that weaken validation

**Testing only easy questions.** A prepared demo confirms the happy path; it says nothing about missing data, permissions or integration errors.

**Reporting only an average.** A 90% pass rate can hide one data exposure or duplicate action. Always report critical failures separately.

**Changing several components at once.** If the model, prompt, documents and rules change in one version, it becomes difficult to identify what improved or regressed. Version the system and compare one material change at a time.

## The decision is “fit for this scope”

Validation does not declare an assistant safe for every purpose. It means that the system has passed an agreed test set for specific users, sources, tools and actions. When the scope changes, the tests must change too.

If you want to turn a prototype into a measurable pilot, VBG Labs' [AI consulting](/en/consulting/) can help define the contract, risks, test set and acceptance gates. Once the workflow is validated, we can build an [AI automation](/en/automation/) with permissions, deterministic rules, approvals, traceability and failure recovery designed in from the start.

## Supporting sources

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST AI 600-1: Generative Artificial Intelligence Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
