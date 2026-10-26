---
title: "RAG for small businesses: build an AI assistant around your documents"
description: "A practical guide to deciding when RAG fits, preparing reliable sources, enforcing permissions, testing answers and starting with a useful pilot."
slug: "rag-small-business-ai-assistant-documents"
lang: "en"
translationGroup: "rag-small-business-ai-assistant-documents"
category: "Artificial intelligence"
date: 2026-10-26
relatedSlugs: ["ai-for-smes-where-to-start", "ai-literacy-businesses-what-to-document", "one-page-process-template-before-automation"]
---

A RAG assistant lets AI answer from information your business controls: procedures, manuals, catalogues, FAQs or service terms. When somebody asks a question, the system retrieves relevant passages, gives them to the model and produces an answer that can point back to its sources. It is useful when the knowledge exists but is hard to find. It will not magically repair a disorganised document collection, and it cannot guarantee correct answers on its own.

## RAG without the jargon

RAG stands for *retrieval-augmented generation*. The approach was formalised in a [paper presented at NeurIPS in 2020](https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html): combine a generative model with an external memory that it can search.

In a straightforward business implementation, this is what happens:

1. The business selects and prepares approved sources.
2. The system splits those documents into passages and indexes them for search.
3. When a question arrives, it retrieves the passages most likely to contain the answer.
4. The model writes an answer using that context and, if configured to do so, shows where it came from.

Unlike a general-purpose chat, the assistant does not rely solely on knowledge contained in the model. You also do not normally retrain a model from scratch whenever a manual changes. Instead, the document collection is updated and reindexed. That makes knowledge easier to maintain and gives users a way to inspect the basis of an answer.

## When RAG can create value for a small business

RAG is worth considering when four conditions are present:

- recurring questions take up meaningful staff time;
- the answers already exist in identifiable documents;
- those documents change and users need the current version;
- opening or citing the source matters because the answer must be checked.

Reasonable examples include an internal procedures assistant, first-line support for customer-service staff, guided search across technical manuals or help drafting sales answers from an approved catalogue.

The value is not “having a chatbot”. It is cutting the time people spend locating information and giving them a verifiable answer they can use as a starting point. If you are weighing several processes, our guide to [where a small business should start with AI](/en/blog/ai-for-smes-where-to-start/) can help you prioritise them.

## When RAG is the wrong tool

RAG is not the best answer to every information problem.

**When data is transactional and must be accurate right now**, such as available stock or the current status of a payment, the assistant should query the source system through an integration. An indexed document may be out of date.

**When documents contradict one another or have no owner**, the assistant merely makes existing disorder easier to access. The business first needs to decide which source is authoritative.

**When question volume is very low**, improving search, folder structure or the FAQ may be more efficient.

**When an answer leads to a consequential decision**, the assistant should support a person rather than decide or act without controls. Approving a payment, interpreting a contract or giving health-related instructions calls for a different standard from finding an internal procedure.

## The important work starts before the model

RAG quality depends heavily on source quality. Before writing code, build a basic source inventory:

| Field | Practical question |
|---|---|
| Source | Which document or system contains the information? |
| Owner | Who confirms that the content is correct? |
| Currency | How will we know when a new version exists? |
| Access | Which roles are allowed to see it? |
| Sensitivity | Does it contain personal, confidential or contractual data? |
| Exclusion | What must never enter the assistant? |

There is no need to start with the entire company archive. A small, coherent collection with clear owners is better than thousands of uncontrolled files. Remove duplicates, separate historical material, preserve titles and dates, and convert tables or PDFs that cannot be parsed reliably.

The [one-page process template](/en/blog/one-page-process-template-before-automation/) can help you capture who asks the question, what outcome they need and what happens after they receive the answer.

## Write an answer contract

A good pilot should state how the assistant is expected to behave. For example:

- answer only from approved sources;
- cite the document and, where possible, the relevant section;
- say clearly when there is not enough information;
- do not fill a gap with a guess presented as fact;
- display the source date or version where it matters;
- route sensitive or out-of-scope questions to a person.

“I don't know” is a feature here, not a failure. The [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) explains that models can present false information with apparent confidence. Supplying retrieved context can reduce that problem within a defined domain, but it does not remove it. Answers still need testing, and users need an escalation route.

## Enforce permissions before retrieval

If managers, administrators and technical staff cannot see the same documents, the assistant should not treat them as if they can. A prompt saying “do not reveal confidential information” is not an access-control system.

The application should know the user's identity and role, filter eligible sources before sending any context to the model, and log access where appropriate. You also need to decide what conversation history is retained, for how long and who can inspect it. These decisions should connect to your wider AI inventory and rules; our guide to [what businesses should document about AI use](/en/blog/ai-literacy-businesses-what-to-document/) provides a practical starting point.

## How to test RAG before rolling it out

A demo with five easy questions is not a validation exercise. Build a test set from genuine questions before the pilot begins:

- direct questions with a clear answer;
- different ways of asking the same thing;
- questions that require two passages to be combined;
- queries where documents look similar or old versions exist;
- out-of-scope questions the assistant should decline;
- attempts to access information assigned to another role.

For every test, record the expected answer, the correct source and whether the assistant should answer or abstain. Then review at least four dimensions: did it retrieve the right document, is the answer supported by that document, is the citation useful, and were permissions respected?

Do not rely on one overall score. A minor error in a low-stakes information request is not equivalent to exposing confidential terms or inventing an exception. Group tests by risk and decide which failures must block deployment.

## An illustrative example

Imagine a technical distributor with product manuals, installation procedures and returns terms. Staff spend time searching folders and often interrupt the same subject-matter expert.

The first pilot could cover one product family and three types of question. The assistant returns a short answer, links to the manual and shows its version. If sources conflict or the question concerns a commercial exception, it routes the query to a person. For several weeks, the team rates answers and records missing documentation.

The most useful discovery may not be technical. The project could uncover duplicate manuals, rules known by only one person or exceptions that were never written down. Closing those gaps improves both the assistant and the underlying process.

## What drives cost

The model is only one part of RAG cost. Other significant factors include:

- cleaning, classifying and updating content;
- integration with folders, document systems or business applications;
- identity, permissions and activity logs;
- document volume, question volume and context sent to the model;
- test design and human review;
- monitoring, reindexing and ongoing maintenance.

That is why the project should be compared with today's cost of searching, interrupting experts, repeating answers and correcting mistakes. A contained pilot lets you measure adoption, time saved and quality before expanding the investment.

## A four-week pilot plan

**Week 1:** choose one use case and identify users, questions and sources. State what is out of scope.

**Week 2:** clean a small collection, assign source owners and configure access rules.

**Week 3:** build the retrieval-and-answer flow. Add citations, abstention and escalation.

**Week 4:** run the test set, open the assistant to a small user group and record failed questions, missing sources and incidents.

At the end, do not ask only whether the demo looks impressive. Ask whether the assistant retrieves the right source, saves time, respects access, knows when to stop and is affordable to maintain.

## Checklist before you begin

- [ ] We have a specific, frequent enough problem.
- [ ] Answers exist in controlled sources.
- [ ] Every source has an owner and an update rule.
- [ ] Access is defined by role.
- [ ] The assistant cites sources and can say it does not know.
- [ ] Tests cover normal, difficult, out-of-scope and access-control cases.
- [ ] A person receives sensitive or uncertain questions.
- [ ] We will measure quality, adoption, time saved and maintenance.

If you want to know whether RAG fits your documents, an [AI consulting engagement](/en/consulting/) can turn the use case, sources, risks and costs into a concrete pilot. If the use case is already clear, we can plan an [AI automation](/en/automation/) that connects the model to the documents and systems your team actually uses.

## Sources

- [Lewis et al., “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks”, NeurIPS 2020](https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html)
- [NIST AI 600-1: Artificial Intelligence Risk Management Framework — Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
