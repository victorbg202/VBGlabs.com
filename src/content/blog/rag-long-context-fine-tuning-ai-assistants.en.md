---
title: "RAG, long context or fine-tuning? A matrix for AI assistants"
description: "A practical comparison for adapting an AI assistant: prompt, long context, RAG or fine-tuning based on documents, behaviour, cost and maintenance."
slug: "rag-long-context-fine-tuning-ai-assistants"
lang: "en"
translationGroup: "rag-long-context-fine-tuning-ai-assistants"
category: "AI tools"
date: 2026-11-20
relatedSlugs: ["rag-small-business-ai-assistant-documents", "ai-or-rules-automation-decision-matrix", "ai-assistant-testing-checklist-before-production", "ai-automation-cost-per-case-calculator"]
---

If an AI assistant must answer from changing documents and cite its evidence, RAG is usually the right starting point. If it only needs to analyse a small, known bundle in one request, long context may be enough. If the problem is achieving highly consistent behaviour, formatting or classification, fine-tuning may help after prompts and examples have reached their limit. The best design is often hybrid: RAG supplies knowledge, while a prompt or tuned model determines how to use it.

## Separate knowledge from behaviour before choosing

Many comparisons blur two different questions:

1. **What does the assistant need to know?** Manuals, procedures, prices, policies or business data.
2. **How should it behave?** Classify, extract fields, respond in a style, follow a schema or choose a tool.

RAG and long context mainly provide information at request time. Fine-tuning changes model behaviour by learning from examples. A well-designed prompt can also set instructions, limits and output structure without any training.

[Microsoft Foundry's RAG documentation](https://learn.microsoft.com/azure/ai-studio/concepts/retrieval-augmented-generation) makes this distinction explicit: use retrieval for private or changing information, and fine-tuning to change behaviour, style or task performance. [Google Cloud's guide to generative AI applications](https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application) similarly separates grounding in verifiable sources from tuning a model for specific output requirements.

## The quick decision matrix

| Approach | Best fit | How it is updated | Citations | Main cost and complexity | Common failure |
|---|---|---|---|---|---|
| Prompt + examples | Instructions, format and cases are bounded | Edit the prompt | Only when sources are supplied | Low to start; context grows | Brittle or oversized prompt |
| Long context | A few documents are known and the task is occasional | Send the new version | Possible if metadata is preserved | Tokens and latency on each request | Too much irrelevant content |
| RAG | The document base is large, changing or permissioned | Reindex sources | The most natural option | Content preparation, search, indexing and monitoring | Retrieving the wrong passages |
| Fine-tuning | Behaviour or format must repeat consistently | Train and deploy a new version | Does not provide sources by itself | Quality data, training, evaluation and maintenance | Training errors or poor patterns |

The table is a way to reject the wrong solution before investing, not a substitute for context. If you are still deciding which steps need a model at all, the [AI, rules and hybrid automation matrix](/en/blog/ai-or-rules-automation-decision-matrix/) separates interpretation, exact checks and actions.

## Option 1: prompts and examples as the required baseline

Before building an index or training a model, test a clear instruction with representative examples. Define inputs, outputs, required fields, abstention and limits. This may be enough to classify enquiries, extract data into a schema or draft text in a stable structure.

OpenAI's [model optimisation guide](https://developers.openai.com/api/docs/guides/model-optimization) describes a cycle of evals, prompt engineering, examples and fine-tuning only when it produces a measurable improvement. The principle is provider-neutral: without a baseline and test set, you cannot know whether more complex architecture performs better.

**It is not enough** when every answer depends on hundreds of documents, content changes frequently or users have different permissions.

## Option 2: long context for a small, known bundle

Long context means sending the relevant documents directly with the request. It does not require a vector database or retrieval pipeline. It can work well for summarising one contract, comparing three quotes or analysing a manual you have already selected.

The architecture is simple and visible, but every request carries the content again. That may increase cost and latency, while adding pages does not guarantee that the model will identify the right evidence.

Use it when:

- the document set is small and known before the question;
- the task is occasional or low-volume;
- you do not need to search thousands of sources;
- you can control which documents each user receives.

Do not turn long context into an improvised repository. If every request sends a whole folder “just in case”, retrieval is probably overdue.

## Option 3: RAG for changing, verifiable knowledge

RAG searches for relevant passages before calling the model. It fits manuals, procedures, catalogues, FAQs or policies that change and that users must be able to verify.

You do not retrain the model every time a document changes: you update the source and index. You can also filter by user role before retrieval and retain titles, versions or links for citations.

RAG adds a second quality layer: you must also measure whether search found the right passage. Microsoft notes that poor preparation, chunking or retrieval configuration can produce incomplete answers.

The [small-business RAG guide](/en/blog/rag-small-business-ai-assistant-documents/) covers source preparation, permissions and testing. This comparison answers the earlier question: whether RAG is the right mechanism in the first place.

## Option 4: fine-tuning to change behaviour

Fine-tuning teaches a model from input-output pairs that represent the desired behaviour. It can help maintain a format, classify nuanced cases, use tools consistently or specialise a smaller model for a repeated task.

It is not the right mechanism for keeping a manual current. Knowledge becomes tied to the training data and deployed version; a policy change requires preparing data, training again and validating the new result. Microsoft's [fine-tuning considerations](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/fine-tuning-considerations) note that tuning adds training and serving costs, does not replace retrieval for current information or application controls, and does not guarantee an improvement.

Consider it only when you have:

- a repeated, stable task;
- correct, diverse and representative examples;
- a test set kept separate from training data;
- a metric the base model cannot reach with prompting;
- enough volume or latency pressure to justify maintenance.

Availability, supported models and cost vary by provider. Confirm them before designing a long-term dependency.

## A six-question decision tree

1. **Does the information change often?** If yes, favour RAG or a direct query to the source system.
2. **Must the assistant show its source?** If yes, RAG is the clearest starting point.
3. **Do you already know the few documents to analyse?** Try long context first.
4. **Is the problem behaviour or format rather than knowledge?** Start with prompts and examples; consider tuning only if they miss the threshold.
5. **Are permissions different by document or user?** Enforce them before retrieving or sending context; never delegate them to a prompt.
6. **Do you have comparable tests?** If not, it is too early to choose the final architecture.

If different answers point to different techniques, a combination may be appropriate. That is normal, not an edge case.

## Worked example: a technical support assistant

Imagine a business receiving questions about equipment, warranties and installation. This is an illustrative example, not a claim about client results.

The **prompt** says that answers must be concise, provide steps and escalate any electrical risk. A few examples demonstrate the format.

For an occasional analysis of one machine's manual, **long context** may be sufficient. When the assistant must search hundreds of manuals, versions and terms, **RAG** retrieves authorised sources and cites them.

If extensive testing still shows errors in a stable classification — incident type, urgency and responsible team — **fine-tuning** might improve that behaviour. RAG would still supply current content. Training on the manuals would not, by itself, solve future updates.

## Compare every option in the same pilot

Prepare 30 to 50 anonymised cases, including ambiguous, out-of-scope and conflicting-source examples. Run each alternative on the same set and record:

- correct, supported answers;
- retrieved source or document used;
- correct abstentions;
- valid fields and format;
- response time;
- cost per completed case;
- permission failures or exposed data;
- maintenance effort required.

Do not compare an easy RAG demonstration with the prompt's hardest cases. The [AI assistant testing checklist](/en/blog/ai-assistant-testing-checklist-before-production/) keeps the test set consistent, while the [cost-per-case calculator](/en/blog/ai-automation-cost-per-case-calculator/) includes consumption, review and exceptions.

## Technical sources

- [Microsoft Foundry: Retrieval-augmented generation and indexes](https://learn.microsoft.com/azure/ai-studio/concepts/retrieval-augmented-generation)
- [Microsoft Foundry: Fine-tuning considerations](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/fine-tuning-considerations)
- [Google Cloud: Develop a generative AI application](https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application)
- [OpenAI: Model optimization](https://developers.openai.com/api/docs/guides/model-optimization)

If you want to choose the architecture before committing to a platform, VBG Labs' [AI consulting service](/en/consulting/) can turn the use case into requirements, tests and a comparison of cost and maintenance. Once the design is validated, an [AI automation](/en/automation/) can connect sources, model, rules and human review with traceability.
