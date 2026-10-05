---
title: "Small-business backups: build a recovery plan that actually works"
description: "A practical guide to deciding what to back up, how often, where to keep it and how to test recovery without turning backups into an endless project."
slug: "small-business-backups-recovery-plan"
lang: "en"
translationGroup: "small-business-backups-recovery"
category: "Cybersecurity"
date: 2026-10-05
relatedSlugs: ["cyber-resilience-act-vulnerability-reporting"]
---

A backup is not a duplicate folder or a drive that stays plugged in. It is a tested way to recover information and resume work when a computer fails, somebody deletes a file, an account is locked or an attack encrypts your systems. A small business does not need an enormous recovery programme. It needs to know what is critical, how much recent work it can afford to lose, where separate copies live and whether those copies can be restored.

The goal is not to accumulate terabytes. It is to answer one question without improvising: **if our data disappeared today, what would we need to work tomorrow?**

## Start with business processes, not devices

Backing up “the whole computer” may sound comprehensive, but it often misses information stored elsewhere: email, a cloud management platform, the website, shared files or application settings. Before choosing a product, make a short inventory of the processes the business cannot leave idle.

Record four things for each process:

1. **Required information.** Documents, databases, email, calendars, configuration, recovery keys or application files.
2. **Current location.** Computer, server, phone, cloud service or external provider.
3. **Accountable person.** Who checks that the backup ran and who knows how to restore it.
4. **Impact of loss.** What would happen if the latest few hours, one day or one week were missing.

Do not place passwords or other secrets in a plain-text document inside the backup. Use a password manager and keep recovery codes under restricted access, separate from the primary system.

## Choose two numbers: acceptable loss and acceptable downtime

Not every dataset needs the same schedule. An archive that changes once a month does not need the same treatment as today's orders.

The **recovery point** answers “how much recent work can we lose?”. If the answer is four hours, you need a backup or recovery mechanism at least every four hours. The **recovery time** answers “how long can we operate without this system?”. You might wait a day for the historical archive, but not for booking or invoicing data.

You do not need the technical acronyms to make the decision. A table like this is enough to set an initial schedule:

| Information | Acceptable loss | Maximum downtime | Initial frequency |
| --- | --- | --- | --- |
| Orders and bookings | 1 hour | 4 hours | hourly |
| Working documents | 1 day | 1 day | daily |
| Accounts and invoices | 1 day | 1 day | daily and before major changes |
| Company website | 1 week | 1 day | weekly and before every update |
| Historical archive | 1 month | 3 days | monthly |

These are examples, not universal rules. Frequency should reflect real business impact, not a desire to copy everything every five minutes simply because a tool allows it.

## Apply the 3-2-1 rule without overengineering it

The official [backup guide from Spain's National Cybersecurity Institute, INCIBE](https://www.incibe.es/sites/default/files/contenidos/guias/guia-copias-de-seguridad.pdf) offers a memorable foundation: keep **three copies** of important information —the original and two backups— on **two different media or environments**, with **one copy away from the business premises**.

For a small organisation, a sensible implementation might be:

- working data on the primary system;
- an automated copy on a local drive or server with version history;
- an encrypted copy in a remote location or separate backup service.

“Off-site” does not necessarily mean carrying a drive home each day. A properly configured remote repository can meet the objective. What matters is that fire, theft, an administrative mistake or an infection cannot destroy the original and every backup at the same time.

At least one copy should therefore be **disconnected or protected against modification**. A permanently connected drive with write access may be encrypted by the same ransomware that reaches the computer. Spain's [CCN-CERT recommends keeping current, encrypted backups beyond the affected computer's reach](https://www.ccn-cert.cni.es/es/comunicacion-eventos/comunicados-ccn-cert/4368-diez-recomendaciones-clave-para-protegerse-frente-al-ransomware?format=html).

## Synchronisation is not the same as backup

Synchronisation is useful for working across devices and sharing documents. But if somebody deletes a file, overwrites it or synchronises an encrypted version, that change may propagate. Version history and recycle bins help, but they have time, capacity and configuration limits.

Treat synchronisation as an availability layer, not the only backup. Check the actual service settings:

- how many days or versions can be recovered;
- whether the recycle bin covers deleted user accounts;
- whether email, calendars, contacts and shared files can be exported;
- what happens when somebody leaves the team;
- whether management-system data has an independent copy.

The same distinction applies to a NAS with mirrored drives. Mirroring keeps the system running after one drive fails, but it also mirrors accidental deletion or corrupted data. Redundancy, synchronisation and backup solve different problems.

## Automate the copy, then monitor it

A manual task that depends on someone remembering to connect a drive every Friday will eventually fail at the worst possible time. Schedule backups and generate an alert when a job does not complete. For large datasets, incremental backups can reduce time and storage, but keep several recovery points: discovering a problem today does not mean it began today.

A green “backup complete” message is not proof that the business can recover. Files may have been excluded, credentials may have expired, a database may be inconsistent or nobody may know how to perform the restoration.

Assign a primary owner and a backup person. Their monthly review should cover the latest successful run, remaining storage, errors, system changes and the date of the last recovery test. If you automate alerts and records, do it after assigning the owner and defining the response. Our guide to [what is worth automating](/en/blog/what-is-worth-automating/) helps distinguish a useful safeguard from unnecessary technical machinery.

## Test recovery, not just backup creation

A useful test does not start by deleting anything from the live system. Restore to an alternative location and check a representative sample:

- open documents, spreadsheets, images and attachments;
- recover a test email or mailbox;
- import a database copy into a separate environment;
- confirm that the website or application starts with the recovered configuration;
- measure how long recovery takes;
- document the steps and access required.

Run a small test each month and a broader restoration each quarter or after a major change. The right interval depends on risk, but a calendar date is better than “we will test it sometime”. INCIBE's practical [guide to creating backups](https://www.incibe.es/sites/default/files/docs/guia_como_crear_una_copia_de_seguridad.pdf) also stresses checking that copied information can be recovered correctly.

## A minimum plan you can implement this week

**Day 1: inventory.** List the five most important processes and locate their data.

**Day 2: priorities.** Decide how much information and how many hours of service you can lose in each case.

**Day 3: separation.** Confirm that two backups exist in different environments and that one cannot be modified easily from the primary system.

**Day 4: automation.** Schedule jobs and failure alerts. Document the owner, deputy and suppliers.

**Day 5: restoration.** Recover several files and, where possible, an application or database into a separate environment. Record the time taken and any problems.

The outcome should fit on one page: what is copied, how often, where it is kept, who receives alerts and how recovery works. If explaining the system requires a document nobody on the team understands, it is still too fragile.

If you are unsure which data each application depends on, or need to turn an inventory into a prioritised plan, a [technology consulting engagement](/en/consulting/) can define the scope before you buy more storage or tools. Businesses that develop or market software may also find our guide to [Cyber Resilience Act reporting](/en/blog/cyber-resilience-act-vulnerability-reporting/) useful: internal recovery and product-security obligations are different pieces, but they should be coordinated.

## Practical sources

- [INCIBE: backup guide for business owners](https://www.incibe.es/sites/default/files/contenidos/guias/guia-copias-de-seguridad.pdf)
- [INCIBE: how to create a backup](https://www.incibe.es/sites/default/files/docs/guia_como_crear_una_copia_de_seguridad.pdf)
- [CCN-CERT: ten recommendations against ransomware](https://www.ccn-cert.cni.es/es/comunicacion-eventos/comunicados-ccn-cert/4368-diez-recomendaciones-clave-para-protegerse-frente-al-ransomware?format=html)

