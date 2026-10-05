---
title: "Cyber Resilience Act: què canvia per a qui ven software i dispositius digitals"
description: "Des de l'11 de setembre de 2026, alguns fabricants han de notificar vulnerabilitats explotades i incidents greus en 24 hores. T'expliquem a qui afecta i què preparar."
slug: "cyber-resilience-act-notificar-vulnerabilitats"
lang: "ca"
translationGroup: "cra-reporting-obligations-2026"
category: "Ciberseguretat"
date: 2026-09-30
relatedSlugs: ["alfabetitzacio-ia-empreses-que-documentar", "copies-seguretat-pimes-pla-restauracio"]
---

Des de l'11 de setembre de 2026, els fabricants de determinats productes amb elements digitals venuts a la Unió Europea han de notificar les vulnerabilitats explotades activament i els incidents greus de seguretat. El primer avís s'ha d'enviar en un màxim de 24 hores des que l'empresa en té coneixement i la notificació completa, en 72 hores.

No afecta qualsevol negoci pel simple fet d'utilitzar software. Sí que pot afectar una pime que desenvolupa i comercialitza una aplicació, un programa, un dispositiu connectat o un producte digital amb la seva marca. La diferència és important: abans de preparar formularis, cal confirmar quin paper tens.

> Aquest article ofereix orientació operativa general i no substitueix una revisió jurídica o de compliment normatiu del producte concret.

## La novetat: l'obligació de notificació ja està activa

El Reglament (UE) 2024/2847, conegut com a **Cyber Resilience Act** o CRA, estableix requisits de ciberseguretat per als productes amb elements digitals. La major part de les obligacions serà plenament aplicable a partir de l'11 de desembre de 2027, però l'article 14 té un calendari anterior: les notificacions obligatòries s'apliquen des de l'11 de setembre de 2026, tal com resumeix la [Comissió Europea](https://digital-strategy.ec.europa.eu/en/policies/cra-summary).

La mateixa data va entrar en funcionament la [Single Reporting Platform d'ENISA](https://www.enisa.europa.eu/topics/product-security/vulnerability-services/eu-incident-response-and-cyber-crisis-management/single-reporting-platform-srp), el canal europeu creat per tramitar aquests avisos. No és, per tant, una obligació futura que es pugui deixar per al projecte de conformitat de 2027: el procés de detecció i escalat ja hauria d'estar preparat.

## A qui pot afectar realment

La CRA se centra en els productes de hardware i software que es posen a disposició del mercat de la UE. La [guia oficial de la Comissió sobre fabricants](https://digital-strategy.ec.europa.eu/en/policies/cra-manufacturers) inclou tant productes finals —com aplicacions o dispositius connectats— com components, sistemes operatius o software integrat en altres productes.

A efectes pràctics, convé revisar el cas si la teva empresa:

- desenvolupa un programa o una aplicació i el comercialitza amb el seu nom o marca;
- encarrega a un tercer el desenvolupament, però és qui posa el producte al mercat;
- fabrica o ven un dispositiu connectat que incorpora software;
- importa o distribueix un producte amb la seva pròpia marca;
- modifica de manera substancial un producte digital i el torna a posar al mercat.

El fet que una part del producte funcioni al núvol no l'exclou automàticament. La CRA també contempla determinades solucions de processament remot quan són necessàries perquè el producte faci una de les seves funcions. En models SaaS o arquitectures híbrides, la frontera pot ser menys evident i val la pena documentar per què la solució entra o no dins de l'abast.

En canvi, **utilitzar** eines digitals en el negoci no et converteix per si sol en fabricant. Una botiga que usa un programa de facturació, un despatx que treballa amb un CRM o una empresa que instal·la una aplicació estàndard no assumeixen automàticament aquesta obligació de notificació.

També hi ha exclusions i règims específics, per exemple per a alguns productes ja coberts per normativa sectorial. El software lliure i de codi obert té un tractament particular: publicar codi sense activitat comercial no equival necessàriament a posar un producte al mercat, mentre que comercialitzar-lo com a fabricant sí que pot activar obligacions. La [pàgina oficial sobre codi obert](https://digital-strategy.ec.europa.eu/en/policies/cra-open-source) explica aquesta distinció.

## Què s'ha de comunicar i en quin termini

La CRA diferencia dos supòsits que no s'han de confondre amb qualsevol error de software:

1. **Una vulnerabilitat explotada activament.** Hi ha proves fiables que un actor maliciós ha aprofitat una vulnerabilitat del producte.
2. **Un incident greu que afecta la seguretat del producte.** L'incident compromet de manera rellevant la seguretat del producte o de les dades que tracta.

Segons la [pàgina oficial de la Comissió sobre notificacions](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting), el fabricant ha d'enviar:

- un **avís inicial en un màxim de 24 hores** des que en té coneixement;
- una **notificació completa en un màxim de 72 hores**, amb la informació disponible sobre el producte, la naturalesa del problema i les mesures correctores o de mitigació;
- en el cas d'un incident greu, un **informe final en un màxim d'un mes** després de la notificació de 72 hores.

El termini comença quan el fabricant en té coneixement, no quan l'equip tècnic ha acabat la investigació. Per això l'avís de 24 hores és preliminar: no exigeix disposar de totes les respostes, però sí detectar el cas, escalar-lo i decidir amb rapidesa.

Les notificacions es tramiten a través de la [plataforma única d'ENISA](https://portal.cra-srp.enisa.europa.eu/). ENISA ha publicat també unes [preguntes freqüents operatives](https://www.enisa.europa.eu/topics/product-security/vulnerability-services/eu-incident-response-and-cyber-crisis-management/single-reporting-platform-srp/frequently-asked-questions) sobre l'accés i el funcionament del canal.

## Què faria ara una pime afectada

No cal començar redactant una política de cinquanta pàgines. Cal aconseguir que un avís tècnic no es perdi i que l'empresa pugui actuar dins del termini.

### 1. Delimitar productes i responsabilitats

Fes una llista de productes, versions, components essencials, responsables i països on es comercialitzen. Anota també qui figura com a fabricant i amb quina marca es ven. Si hi ha un distribuïdor, un importador o un desenvolupador extern, deixa per escrit què fa cadascú.

### 2. Crear una via d'entrada visible

Defineix on poden comunicar una vulnerabilitat els clients, investigadors i proveïdors. Pot ser una adreça específica de seguretat o un formulari, però ha de tenir supervisió real, substituts durant vacances i un sistema que conservi hora, remitent i evidències.

### 3. Fixar un escalat de 24 hores

Decideix qui avalua si el cas podria ser una vulnerabilitat explotada o un incident greu, qui autoritza la notificació i qui actua si la persona principal no està disponible. Inclou equip tècnic, direcció i, quan calgui, assessorament especialitzat. Un diagrama curt amb telèfons és més útil que un procediment que ningú sap trobar.

### 4. Preparar la informació abans de necessitar-la

Tingues a mà la descripció del producte, les versions afectades, els mercats on es distribueix, les dades de contacte i les mesures de mitigació que pots comunicar. Crea l'accés a la plataforma i comprova qui pot utilitzar-lo. Fer-ho durant un incident consumeix hores que no sobren.

### 5. Fer un simulacre senzill

Planteja un cas fictici un divendres a la tarda: apareixen proves que una versió del producte està sent atacada. Com es detecta? Qui rep l'avís? Qui decideix? Quina informació es pot enviar abans de 24 hores? El simulacre descobrirà dependències i silencis que un document no mostra.

## Què pot esperar fins al 2027 i què no

L'avaluació de riscos de ciberseguretat, la documentació tècnica, la gestió de vulnerabilitats durant el període de suport, l'avaluació de conformitat i el marcatge corresponent formen part del treball més ampli de la CRA. La [Comissió ha publicat orientacions d'implementació](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-timely-cyber-resilience-act-implementation) per ajudar empreses de totes les mides a preparar aquest recorregut abans de l'aplicació general de desembre de 2027.

El que no pot esperar és la capacitat de notificar els casos que ja entren en l'article 14. Preparar aquest procés ara també serveix per avançar part del treball posterior: inventari de productes, responsables, versions, dependències i registre d'incidents.

Si el producte també incorpora intel·ligència artificial, la CRA i l'AI Act resolen qüestions diferents. Pots començar pel nostre article sobre [què documentar quan una empresa utilitza IA](/blog/alfabetitzacio-ia-empreses-que-documentar/) per separar governança d'IA, seguretat del producte i supervisió humana.

## Checklist ràpida

- [ ] Sabem quins productes poden estar dins de l'abast de la CRA.
- [ ] Hem identificat qui actua legalment com a fabricant.
- [ ] Tenim un canal monitoritzat per rebre avisos de seguretat.
- [ ] Hi ha una persona responsable i una substituta.
- [ ] Podem escalar un cas i enviar l'avís inicial dins de 24 hores.
- [ ] Tenim accés preparat a la plataforma d'ENISA.
- [ ] Conservem versions, evidències, decisions i mesures adoptades.
- [ ] Hem programat un simulacre i una revisió de la preparació per a 2027.

Si desenvolupes o comercialitzes software i encara no tens clar l'abast, una [consultoria tecnològica](/consultoria/) pot ajudar-te a ordenar productes, responsables i procés de resposta abans de decidir quines mesures tècniques cal implementar. Si després necessites adaptar el producte o automatitzar registres i alertes, ho podem abordar des de [software i automatitzacions](/automatitzacions/) amb l'abast ja definit.

## Fonts oficials

- [Comissió Europea: resum del Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cra-summary)
- [Comissió Europea: obligacions de notificació](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting)
- [ENISA: llançament de la Single Reporting Platform](https://www.enisa.europa.eu/news/the-cra-single-reporting-platform-is-launched)
- [EUR-Lex: Reglament (UE) 2024/2847](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024R2847)
