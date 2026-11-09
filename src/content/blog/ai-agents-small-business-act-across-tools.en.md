---
title: "AI agents for small businesses: what changes when they can act across your tools"
description: "AI agents no longer just answer questions: they can use business tools and carry out tasks. What should a small business prepare before granting access and autonomy?"
slug: "ai-agents-small-business-act-across-tools"
lang: "en"
translationGroup: "ai-agents-small-business-tools-2026"
category: "AI agents and automation"
date: 2026-11-04
relatedSlugs: ["ai-or-rules-automation-decision-matrix", "rag-small-business-ai-assistant-documents", "automate-incoming-invoices-ai-human-review", "ai-voice-bots-small-business-pilot"]
---

AI agents are beginning to move from conversation to action. Instead of only drafting an answer, they can search company tools, carry context across steps and perform tasks with their own permissions. The opportunity for a small business is not a generic “digital employee”. It is the ability to delegate a bounded part of a process. Before connecting anything, the business needs to decide what the agent may read, what it may change, when approval is required and how every action can be reconstructed.

## What changed over the past few weeks

Several announcements in October 2026 point in the same direction: major providers want to connect AI to the applications businesses already use.

On [8 October, Google Cloud announced its new Gemini agent for businesses](https://cloud.google.com/blog/topics/startups/how-to-grow-your-small-business-using-google-gemini), with connections to work tools, business data and work history. Google said access for small and medium-sized businesses was still early access, with broader availability to follow.

On [15 October, Microsoft announced agent accounts and business process memory for Copilot Studio](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/delegate-shared-business-processes-to-agents-that-are-more-persistent-and-proactive-with-microsoft-copilot-studio/). Its approach gives an agent scoped credentials and permissions of its own rather than relying on the personal account of its maker. Work can also start from an event or a schedule.

On [28 October, OpenAI and ServiceNow expanded their integration](https://openai.com/index/openai-servicenow-partnership-expansion/). The proposed experience brings workflow context and actions into ChatGPT while applying the rules and permissions configured in ServiceNow. The announcement distinguishes between what is available now, what is in preview and what is expected in 2027.

These are not equivalent products, and not every capability is available to every business. The shared signal matters more than the brand: business AI is moving towards systems that **observe, choose a next step and act in real tools**. That can create more value, but it also increases the cost of a mistake.

## An assistant answers; an agent can change the state of a process

The boundary is not determined by a product label. An assistant may summarise an email or draft a proposal for a person to review. An agent can also open the relevant record, look up data, request missing information, update a status or trigger the next action.

That shift introduces four elements:

1. **Tools:** the model no longer works with text alone. It can call email, calendars, documents, forms, databases or business applications.
2. **Identity and permissions:** every action needs an identity and a scope. Reading a catalogue is not the same as sending an email or changing a record.
3. **Persistence:** some agents can retain context or continue a task after the first interaction.
4. **Triggers:** work may start from a message, a new file, a status change or a schedule without a manual prompt each time.

That is why a good prompt is not enough. The business is designing an automation. The [decision matrix for AI, rules and hybrid workflows](/en/blog/ai-or-rules-automation-decision-matrix/) helps separate probabilistic interpretation from checks and decisions that must remain exact.

## Seven decisions to make before connecting an AI agent

### 1. Define the specific outcome

“Help with sales” is too broad. “Classify an inbound enquiry, extract four fields and prepare a reply for review” can be tested. Define the input, outcome, owner and end of the task. If the process cannot be explained on one page, it is still too ambiguous to delegate.

### 2. Separate reading, proposing and executing

Divide capabilities into three levels:

| Level | Example | Sensible starting control |
|---|---|---|
| Read | retrieve a catalogue entry or status | access only the sources required |
| Propose | draft a reply or suggest an update | human review before applying it |
| Execute | send, create, modify or cancel | minimum permissions, limits and mandatory logging |

A pilot does not need to start at the third level. The first useful result often comes from letting the agent assemble context and produce a complete proposal while a person keeps the final decision.

### 3. Choose the identity it will use

Avoid making a persistent agent depend on an employee's personal credentials. A dedicated identity makes it easier to revoke access, attribute actions and keep the process running when somebody changes role. Grant permissions by necessity: one folder, a limited mailbox or only specified API operations.

### 4. Decide which source is authoritative

Memory can reduce repetition, but it should not replace current records. Name the authoritative source for prices, availability, terms and customer status. If the agent uses internal documentation, apply the same source ownership, access and citation rules as you would for a [RAG assistant](/en/blog/rag-small-business-ai-assistant-documents/).

Decide what the agent may remember, for how long, and how that context can be corrected or deleted. An informal preference should not silently become a process rule.

### 5. Define when it must stop and request approval

Write the conditions before testing. Examples include a missing required field, contradictory sources, an amount above a threshold, an external recipient, an action that creates a commitment or a classification the model cannot support. The agent needs a safe exit: prepare the case, explain the uncertainty and escalate it.

### 6. Specify what will be logged

To reconstruct an action, you need at least the initiating event, sources consulted, tools called, proposed data, approvals and outcome. The answer is not to retain information indiscriminately. It is to preserve enough evidence to distinguish what the agent did, what a rule decided and what a person confirmed.

This inventory is also part of the [AI literacy and usage documentation](/en/blog/ai-literacy-businesses-what-to-document/) a business should maintain.

### 7. Control the full cost

Model usage is only one line item. Add connectors, tool executions, storage, human review, incidents and maintenance. Set limits per task and per period. Measure how many cases finish correctly, how many need review and the cost of each useful outcome. An agent that performs many steps may look inexpensive per model call but costly per completed process.

## Illustrative example: qualifying an inbound enquiry

Imagine a business receiving sales enquiries through email and a form. Today, a person reads each message, identifies the service, checks location, requests missing details and prepares the first reply. This is a fictional example used only to make the architecture concrete.

In a contained pilot, the agent could:

- detect intent and language;
- extract the name, company, need, location and timeframe;
- consult an approved service catalogue and coverage criteria;
- identify missing information;
- prepare a reply and a structured summary;
- route the case to a person with its prioritisation reason.

It would not send quotes automatically, invent prices or discard an opportunity. Rules would validate required fields and block external actions. A person would review the proposal, correct the classification where needed and choose the next step.

The pilot would measure correct classification, fields requiring correction, review time, escalation reasons and cost per prepared enquiry. Only then would the business assess whether tightly defined, low-risk messages could be sent automatically.

## What to do now — and what can wait

There is no need to buy an agent platform simply because the announcements are new. This is a good time to identify one repetitive process, document its access requirements and separate reading, proposing and executing. Before comparing demonstrations, verify the real availability of each capability, region, subscription, connectors, data handling and cost limits.

Broad autonomy, unlimited memory and simultaneous access to every tool can wait. A useful pilot should have one purpose, a small set of sources, minimum permissions, visible approvals and a test set prepared before activation.

If you want to turn a specific process into an agent pilot, VBG Labs' [AI consulting](/en/consulting/) can help define its scope, permissions, risks, tests and cost. Once the case is bounded, an [AI automation](/en/automation/) can connect the model to the tools the business already uses while retaining rules, approvals and traceability. The goal is not to grant as much autonomy as possible. It is to delegate verifiable work well.

## Official sources

- [Google Cloud, “Empowering SMBs to do more with Gemini”, 8 October 2026](https://cloud.google.com/blog/topics/startups/how-to-grow-your-small-business-using-google-gemini)
- [Microsoft, “Delegate shared business processes to agents”, 15 October 2026](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/delegate-shared-business-processes-to-agents-that-are-more-persistent-and-proactive-with-microsoft-copilot-studio/)
- [OpenAI, “OpenAI and ServiceNow expand partnership across enterprise workflows”, 28 October 2026](https://openai.com/index/openai-servicenow-partnership-expansion/)
