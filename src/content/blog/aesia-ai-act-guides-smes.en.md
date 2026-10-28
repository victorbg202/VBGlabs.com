---
title: "AESIA's 16 AI Act guides: how SMEs can use them"
description: "AESIA has made 16 practical AI Act guides available to businesses. Learn which ones to review, what they do not imply and how to build a useful plan."
slug: "aesia-ai-act-guides-smes"
lang: "en"
translationGroup: "aesia-ai-act-guides-smes-2026"
category: "Artificial intelligence"
date: 2026-10-28
relatedSlugs: ["ai-literacy-businesses-what-to-document", "ai-for-smes-where-to-start", "rag-small-business-ai-assistant-documents"]
---

On 20 October 2026, Spain's Artificial Intelligence Supervisory Agency, AESIA, highlighted 16 practical guides available to businesses implementing the EU AI Act. This does not mean an SME must complete sixteen manuals or that every use of ChatGPT is high-risk. It means businesses now have an official map for classifying an AI project more carefully and identifying the controls it needs before expanding it.

The useful approach is to start with the use case, the company's role and the impact of a failure. Only then should the relevant sections be selected.

> This article provides general operational guidance, not legal advice. High-risk uses and systems that affect people's rights need a case-specific assessment.

## What AESIA has actually announced

In its [20 October announcement](https://aesia.digital.gob.es/es/actualidad/20261020-la-aesia-con-las-empresas-para-convertir-la-ia-en-un-motor-de-competitividad-e-innovacion-responsable), AESIA explains that the 16 guides emerged from Spain's first regulated AI sandbox. The [official guide collection](https://aesia.digital.gob.es/es/actualidad/recursos/guias-practicas-para-el-cumplimiento-del-ria) says they are intended mainly to help organisations developing or implementing high-risk AI systems.

The material is organised into three groups:

1. two introductory guides covering the AI Act's scope and practical examples;
2. thirteen technical guides on conformity, quality, risk, data, oversight, transparency, accuracy, robustness, AI-specific cybersecurity, logs, monitoring, incidents and documentation;
3. one checklist manual, supported by examples and spreadsheets for assessing twelve requirements.

The guides are not binding, do not replace the law and will be revised as the European framework develops. They are a structured working aid, not a certificate of compliance.

## The first decision is not which guide to read

Before downloading documents, describe on one page what the AI system does, who receives its output and what happens next. Classification depends on the intended purpose, not simply the model or vendor name.

In simplified terms, an SME may be in one of three situations:

### It uses a general-purpose support tool

This includes an assistant that drafts text, summarises documents or helps people find information, with a person reviewing the result. That does not automatically make the system high-risk AI. The business should still organise approved uses, permitted data, human review and training. Our guide to [what a business should document when it uses AI](/en/blog/ai-literacy-businesses-what-to-document/) provides a proportionate starting point.

### It deploys AI in a decision affecting people

Closer assessment is needed when the system is involved in recruitment, education, access to certain essential services or other areas listed in Annex III. [Article 6 and Annex III of the AI Act](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3) identify high-risk uses, while conditions may exclude some uses that do not materially influence a decision. A vendor calling a product an “assistant” is not enough to settle the classification.

### It develops or integrates an AI solution for others

A company that builds a solution, sells it under its own name or substantially modifies it may carry responsibilities beyond those of a user. Buying an external model does not necessarily remove responsibility for the finished system, its intended purpose, instructions or controls. In this situation, the technical guides and the project's evidence become much more important.

Under the [AI Act's current official timeline](https://ai-act-service-desk.ec.europa.eu/en/faq), requirements for Annex III high-risk systems apply from 2 December 2027, while rules for systems embedded in regulated products apply from 2 August 2028. Tests and logs are easier to design during a pilot than to reconstruct later.

## Which guides to review for each type of project

Not every SME needs to read the complete package. This shortlist reduces the initial workload:

| Situation | Priority guides | Useful outcome |
|---|---|---|
| First business AI use case | 1 and 2: introduction and examples | Company role, intended purpose and initial classification |
| System recommending or prioritising people | 5, 6 and 8: risk, oversight and transparency | Foreseeable risks, human authority and information for users |
| Model using the company's own data | 7, 9 and 12: data, accuracy and logs | Data provenance, metrics, thresholds and traceability |
| AI solution intended for sale | 3, 4, 13, 14 and 15 | Conformity, quality, monitoring, incidents and documentation |
| Assessment of an advanced project | 16 and the checklist workbooks | Gaps, owners, evidence and an action plan |

This is an operational filter, not a legal classification. A project may require other guides depending on the sector, contractual role and actual risk.

## Seven questions to ask an AI vendor

The guides can also improve procurement. Before connecting a tool to an important process, request specific answers to these questions:

1. **What is the system's declared intended purpose, and which uses are excluded?**
2. **Which role does each party hold** as provider, deployer, importer or distributor?
3. **Which data enters the system**, where is it processed and is it reused to train models?
4. **How has accuracy been measured** in cases resembling yours, and which limitations were found?
5. **Which actions can a person stop or correct** before they take effect?
6. **Which logs are retained** to reconstruct an answer, recommendation or incident?
7. **How are changes communicated** when the model, performance, terms, subprocessors or data processing change?

Keep dated copies of documentation and record who supplied each answer. If the tool can change models without notice or cannot export useful logs, that limitation belongs in the risk and cost assessment.

## Worked example: an AI tool that prioritises applicants

Consider a business that wants AI to organise job applications. Its first design ranks CVs and automatically rejects candidates below a threshold. It is not enough to ask whether the summary is “mostly accurate”: the result can directly influence access to employment.

Before a pilot, the business should describe the criteria, confirm the regulatory classification, examine the data, decide who can challenge the ranking and retain enough records to investigate errors. It should also establish whether the vendor makes these controls possible.

A lower-impact initial design might limit AI to extracting objective information while a person reviews every application, with no automated score or rejection. This does not remove every risk, but it changes the impact, the controls and the tests required. That is the practical value of the guides: they force the team to specify the real system before accepting a marketing label.

## A 30-day review plan

**Week 1 — inventory and scope.** Choose one AI project. Record its purpose, affected people, data, output, owner and subsequent action. If there is no clear use case yet, start with our guide to [where an SME should begin with AI](/en/blog/ai-for-smes-where-to-start/).

**Week 2 — role and risk.** Use guides 1 and 2 to write down the initial classification. List questions requiring sector-specific or legal review rather than hiding them behind “the vendor says so”.

**Week 3 — controls and tests.** Select the technical guides relevant to the case. Define human oversight, permitted data, metrics, stop thresholds, logs and incident handling. For a document assistant, for example, sources, permissions and abstention should be tested as described in our [RAG guide for SMEs](/en/blog/rag-small-business-ai-assistant-documents/).

**Week 4 — decision.** Close critical gaps, assign owners and decide whether the project can enter a limited pilot, needs redesign or should stop. Schedule another review whenever the model, data, intended purpose or applicable rules change.

## The practical conclusion

AESIA's 16 guides are most useful when they turn an ambiguous AI project into verifiable questions: what role the company holds, which risk the use creates, who can intervene and which evidence will remain. They do not require every SME to implement a complete quality management system, but they offer a solid reference when AI moves from experimentation into a real business process.

If you want to turn a use case into a proportionate plan covering data, controls, testing and costs, VBG Labs' [AI consulting service](/en/consulting/) can help define the pilot. Once the process is clear, an [AI automation](/en/automation/) can connect the model to the business's existing tools while preserving human review and traceability where they matter.

## Official sources

- [AESIA: 20 October 2026 announcement on the 16 guides](https://aesia.digital.gob.es/es/actualidad/20261020-la-aesia-con-las-empresas-para-convertir-la-ia-en-un-motor-de-competitividad-e-innovacion-responsable)
- [AESIA: practical guides for implementing the EU AI Act](https://aesia.digital.gob.es/es/actualidad/recursos/guias-practicas-para-el-cumplimiento-del-ria)
- [European Commission: Article 6 and Annex III of the AI Act](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3)
- [European Commission: AI Act FAQ and current application timeline](https://ai-act-service-desk.ec.europa.eu/en/faq)
