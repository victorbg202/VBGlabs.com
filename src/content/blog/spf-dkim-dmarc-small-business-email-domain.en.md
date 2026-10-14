---
title: "SPF, DKIM and DMARC for small businesses: protect your email domain"
description: "A practical guide to inventorying senders, configuring SPF and DKIM, rolling out DMARC without blocking legitimate mail, and testing the result."
slug: "spf-dkim-dmarc-small-business-email-domain"
lang: "en"
translationGroup: "small-business-email-authentication-spf-dkim-dmarc"
category: "Cybersecurity"
date: 2026-10-12
relatedSlugs: ["small-business-backups-recovery-plan", "first-ai-agent-data-breach-spain-small-business"]
---

If your business sends email from its own domain, configure SPF, DKIM and DMARC. Together, these mechanisms help receiving servers determine which systems may send on your behalf, whether a message retains a valid signature and how authentication failures should be handled. They also make it harder to impersonate the domain in phishing campaigns.

They do not guarantee inbox placement or protect an account whose password has been stolen. They do provide an essential foundation for protecting domain reputation and avoiding rejection caused by missing authentication.

## What each mechanism does

**SPF** publishes a DNS list of servers authorised to send mail for the domain. A receiver compares the server delivering the message with that list. If the company sends through Microsoft 365, a marketing platform and its website form, every legitimate source must be covered without publishing several separate SPF records.

**DKIM** adds a cryptographic signature to outbound messages. The private key remains with the sending service and the public key is published in DNS. The receiver can check that an authorised service signed the message and that protected parts were not changed in transit.

**DMARC** connects those results to the domain visible in the `From:` field. To pass DMARC, at least one of SPF or DKIM must pass, and its authenticated domain must align with the one the recipient sees. The domain owner can also request reports and state a policy for messages that fail.

The IETF's [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989.html), published in May 2026, is the current DMARC standard and replaces RFCs 7489 and 9091. It retains the `none`, `quarantine` and `reject` policies but removes the former `pct` parameter. If a template proposes a rollout based on `pct=10`, review it with the provider: that guidance belongs to the previous specification.

## Before changing DNS: inventory every sender

The most common risk is not mistyping a tag. It is forgetting a tool that also sends mail using the domain. Build a list covering:

- Google Workspace, Microsoft 365 or hosting-provider mailboxes;
- website forms and server alerts;
- CRM, invoicing, booking and support systems;
- newsletters and campaign platforms;
- printers, scanners, phone systems and legacy applications;
- suppliers that send communications on the company's behalf;
- domains and subdomains that should never send mail.

For each source, record the `From:` domain, the service that actually delivers the message, its owner and whether it supports DKIM with your domain. Inspect real messages and settings rather than relying only on the tools people remember.

If a marketing platform sends significant volume or is not fully under your control, consider using a subdomain such as `updates.example.com`. [Microsoft's documentation](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure) recommends separating certain third-party services in this way so their issues do not affect the reputation of everyday business mail.

## Step 1: publish one correct SPF record

SPF is a TXT record in DNS. Each sending service must provide its exact value. A purely illustrative example is:

`v=spf1 include:spf.provider.example -all`

Do not copy it: `provider.example` is not a real service. Build the record from the instructions supplied by the providers you actually use.

Check the following:

1. There is **one SPF record** per domain. If two exist, do not leave them separate; the sources need to be combined into one valid record.
2. It includes every legitimate sender and removes services no longer in use.
3. It does not authorise addresses “just in case”. Every entry expands who can send.
4. DNS lookups remain within the limit. [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208.html) limits evaluation to ten terms that trigger DNS queries.
5. The final qualifier (`~all` or `-all`) is chosen with the provider after sources have been verified. Do not tighten it without testing.

SPF has an important limitation: forwarding can break the result because the server delivering the message changes. It should not be the only protection.

## Step 2: enable DKIM for every service

Do not invent a DKIM record manually. Generate or enable signing for the domain in the email service's administration panel. The provider supplies a selector and one or more TXT or CNAME records to publish in DNS. Return to the panel afterwards and confirm that it detects them.

Repeat the process for every platform sending on your behalf. Staff email might be signed correctly while a newsletter or website notifications still use the provider's domain.

Google's current [email sender guidelines](https://support.google.com/mail/answer/81126?hl=en) require DKIM keys of at least 1,024 bits when sending to personal Gmail accounts and recommend 2,048 bits when the provider supports them. Do not change key length or rotate keys outside the platform's instructions.

## Step 3: begin DMARC in monitoring mode

Once SPF and DKIM work, publish DMARC at `_dmarc.example.com`. An initial record can look like this:

`v=DMARC1; p=none; rua=mailto:dmarc@example.com`

Replace the domain and use a mailbox prepared to receive aggregate reports. Reports commonly arrive as XML and can be difficult to interpret directly. Assign an owner or use a reporting tool, checking how it processes data and who provides it.

With `p=none`, you request information without stating a quarantine or rejection policy. Use reports to determine:

- which sources send using the domain;
- which pass SPF and DKIM;
- whether the authenticated domain aligns with `From:`;
- which legitimate services fail;
- whether unknown sources or impersonation attempts appear.

When every legitimate source is known and aligned, move carefully to `p=quarantine` and eventually `p=reject`. Microsoft's official guidance recommends a gradual rollout so a forgotten legitimate source is not blocked. Under the current standard, start with a lower-volume domain or subdomain and change policy only after reviewing results; do not rely on the retired `pct` tag.

## Step 4: test a real message

Visible DNS records do not prove that every application signs correctly. Send test messages from each source to mailboxes at different providers and inspect the full headers. Find `Authentication-Results` and confirm:

- `spf=pass` for the expected source;
- `dkim=pass` and the signing domain;
- `dmarc=pass` with alignment to `From:`;
- the message is not unexpectedly using a third party's domain.

Test automatic replies, the website form, a sample invoice and an internal campaign as well. A correct result from Outlook does not validate the CRM.

Google requires SPF or DKIM for all senders delivering to Gmail, and SPF, DKIM and DMARC for bulk senders. It also warns that unauthenticated messages may be rejected or classified as spam. Authentication improves the technical foundation, but reputation, consent, volume and message content still influence delivery.

## Mistakes that can stop legitimate mail

- Publishing two independent SPF records.
- Enabling `p=reject` before finding every sending application.
- Configuring DKIM only for staff email and forgetting external services.
- Assuming `spf=pass` means `dmarc=pass`; alignment still matters.
- Sending DMARC reports to a mailbox nobody reviews.
- Copying a record from a guide without adapting it to the provider.
- Using the main domain for every test or high-volume platform.
- Confusing authentication with encryption or account protection.

SPF, DKIM and DMARC do not replace unique passwords, multifactor authentication, phishing awareness or a recovery plan. The [small-business backup guide](/en/blog/small-business-backups-recovery-plan/) addresses another part of the same objective: keeping work going when one protection layer fails.

## Small but necessary maintenance

Review reports and the sender inventory whenever you add or remove a tool, change provider or notice delivery issues. Record the owner, last review date, active DKIM selectors and sources included in SPF. Parked domains that send no mail also need an explicit policy so they do not become an impersonation route.

If you are unsure which systems send mail or are concerned about blocking legitimate messages, a [technical review](/en/consulting/) can inventory the flow, prepare the records and define a testable migration. The important work is not publishing three TXT records. It is knowing what you authorise, measuring the result and keeping it current as the business changes.

## Technical sources

- [RFC 9989: DMARC](https://www.rfc-editor.org/rfc/rfc9989.html), IETF, May 2026.
- [RFC 7208: SPF](https://www.rfc-editor.org/rfc/rfc7208.html) and [RFC 6376: DKIM](https://www.rfc-editor.org/rfc/rfc6376.html), IETF.
- [Email sender guidelines](https://support.google.com/mail/answer/81126?hl=en), Google, accessed 12 October 2026.
- [DMARC configuration and gradual rollout](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure), Microsoft, accessed 12 October 2026.
