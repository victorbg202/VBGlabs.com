---
title: "Automatitzar pressupostos amb IA: de la consulta a l'esborrany revisable"
description: "Guia pràctica per convertir consultes i documents en esborranys de pressupost amb IA, regles de negoci, traçabilitat i aprovació humana."
slug: "automatitzar-pressupostos-ia-esborrany-revisable"
lang: "ca"
translationGroup: "ai-quote-automation-reviewable-drafts"
category: "Automatització amb IA"
date: 2026-11-23
relatedSlugs: ["qualificar-leads-ia-automatitzar-consultes", "ia-o-regles-matriu-decidir-automatitzacio", "fitxa-proces-una-pagina-abans-automatitzar", "checklist-proves-assistent-ia-abans-produccio", "calculadora-cost-automatitzacio-ia-cas"]
---

Automatitzar pressupostos amb IA pot estalviar lectura, còpia i redacció, però no hauria de convertir un model en la teva tarifa ni en el teu responsable comercial. El disseny útil és híbrid: la IA interpreta la consulta i els adjunts, proposa l'abast i redacta un esborrany; les regles consulten preus i comproven condicions; una persona resol els dubtes i aprova l'enviament. Així s'accelera la preparació sense perdre control sobre compromisos, imports ni expectatives.

## Quin problema resol realment la IA

Preparar un pressupost sovint exigeix reconstruir la petició des d'un correu, un formulari, notes d'una trucada, fotografies o un PDF. Després cal identificar el servei, detectar què falta, buscar la tarifa correcta, redactar l'abast i deixar clares les exclusions. La part lenta no és només calcular: és convertir informació desordenada en una proposta coherent.

Aquí és on la IA aporta valor. Pot interpretar llenguatge lliure, resumir adjunts, normalitzar conceptes i redactar. Però un pressupost també conté decisions exactes que no s'han d'improvisar. El model no ha d'inventar un preu, decidir un descompte, escollir un impost ni prometre una data.

La frontera pràctica és aquesta:

| Tasca | IA | Regles o dades controlades | Persona |
|---|---|---|---|
| Entendre la necessitat | Extreu i resumeix | Comproven camps obligatoris | Confirma ambigüitats |
| Proposar abast | Redacta una proposta | Limiten serveis i opcions admeses | Accepta o corregeix |
| Calcular imports | No decideix | Tarifa, quantitats, impostos i fórmules | Aprova excepcions |
| Redactar condicions | Adapta una plantilla aprovada | Insereixen clàusules vigents | Revisa compromisos |
| Enviar | Pot preparar el correu | Bloquegen si falta aprovació | Autoritza l'enviament |

## Defineix la sortida abans de triar el model

Un bon pilot no comença amb “fes-me un pressupost”. Comença amb un contracte de sortida: quins camps ha d'entregar el sistema i com distingirà un fet, una proposta i una dada pendent.

Com a mínim, l'esborrany estructurat hauria d'incloure:

- client i dades de contacte identificades;
- necessitat expressada i resultat esperat;
- servei o família de serveis proposada;
- unitats, quantitats i variants detectades;
- informació que falta i preguntes pendents;
- línies de pressupost vinculades a un codi de tarifa;
- hipòtesis, exclusions i termini de validesa;
- fragment o document d'origen de cada dada rellevant;
- estat: complet, pendent d'informació o revisió especial.

Els formats estructurats ajuden a obligar el model a retornar camps previsibles. Per exemple, la documentació de [Structured Outputs d'OpenAI](https://developers.openai.com/api/docs/guides/structured-outputs) explica com restringir la resposta a un esquema JSON, però també recorda que l'aplicació ha de gestionar respostes incompletes, errors i regles de negoci que l'esquema no expressa. Un esquema ordena la resposta; no converteix una dada inventada en certa.

## El flux complet, de l'entrada a l'aprovació

### 1. Captura tots els materials del cas

El punt d'entrada pot ser un formulari, un correu, una transcripció o un registre creat per l'equip. Agrupa missatge, adjunts i dades conegudes sota un identificador únic. Si el procés anterior ja [qualifica consultes amb IA](/blog/qualificar-leads-ia-automatitzar-consultes/), el pressupost pot començar des de la fitxa revisada en lloc de rellegir tota la conversa.

### 2. Separa soroll, dades i instruccions

Cal eliminar signatures repetides i fils citats sense perdre informació útil. Els adjunts s'han de classificar abans d'extreure'ls: una fotografia, una memòria tècnica i un pressupost antic no tenen el mateix significat. Qualsevol instrucció dins d'un document s'ha de tractar com a contingut del client, no com una ordre per al sistema.

### 3. Extreu fets amb evidència

La IA omple l'esquema i associa cada camp important amb el fragment que l'ha originat. Si no troba una quantitat o hi ha dues versions contradictòries, ha de marcar-ho com a pendent. No és acceptable completar el buit amb el valor més probable.

El [perfil de riscos de la IA generativa de NIST](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) identifica la confabulació —contingut fals presentat amb seguretat— com un risc propi d'aquests sistemes. En un pressupost, la resposta adequada és limitar les fonts, conservar evidència i derivar els dubtes, no confiar en el to convincent del text.

### 4. Aplica regles comercials fora del model

Ara entren la tarifa, les fórmules, els mínims, les zones, els impostos i les incompatibilitats. Aquestes comprovacions han de ser deterministes i versionades. Si el sistema no troba un codi de servei vàlid o la tarifa ha caducat, s'atura i crea una incidència.

Aquesta separació segueix el mateix criteri de la [matriu IA o regles](/blog/ia-o-regles-matriu-decidir-automatitzacio/): llenguatge ambigu per al model; aritmètica, permisos i condicions exactes per a codi o taules controlades.

### 5. Genera un esborrany, no una promesa

Amb les dades validades, la IA pot redactar un document llegible: context breu, abast, línies, hipòtesis, exclusions i següent pas. Les plantilles han de definir l'estructura i les clàusules aprovades. El model pot adaptar el llenguatge, però no eliminar una exclusió obligatòria ni ampliar una garantia.

### 6. Presenta una revisió útil

La pantalla de revisió ha de mostrar el pressupost i, al costat, les alertes, les dades d'origen i els canvis respecte de la tarifa. La persona revisora no hauria de reconstruir el cas des de zero.

Bloqueja l'enviament quan hi hagi:

- dades obligatòries absents o contradictòries;
- una línia sense codi de tarifa;
- un preu modificat manualment sense motiu;
- un servei fora del catàleg;
- una clàusula o plantilla no vigent;
- un import o compromís per sobre del llindar d'aprovació.

### 7. Envia només després d'aprovar

Al principi, l'automatització pot preparar el PDF i el correu, però no enviar-los. L'aprovació ha de registrar qui va revisar, quina versió va acceptar i quan es va enviar. Després es pot crear la tasca de seguiment, sempre amb les dates i condicions del document aprovat.

## Exemple il·lustratiu: una empresa de manteniment

Imaginem una empresa que rep una consulta amb un correu, tres fotografies i una llista d'equipaments. La IA identifica el tipus d'intervenció, extreu ubicacions i quantitats, i proposa dues línies de servei. També detecta que falta l'accessibilitat d'una màquina i que una fotografia no permet confirmar el model.

Les regles consulten la tarifa vigent, calculen desplaçament i unitats, i bloquegen una opció incompatible amb la zona. El sistema genera un esborrany amb dues preguntes pendents i deixa una línia sense preu perquè necessita inspecció. La persona completa aquesta línia, revisa les exclusions i aprova.

Aquest exemple no descriu un client ni un resultat real. Serveix per mostrar que el valor no és “que la IA faci pressupostos sola”, sinó que prepari un cas complet i assenyali on cal criteri humà.

## Què necessites abans d'automatitzar

La qualitat del flux dependrà més de la base operativa que d'un prompt llarg. Prepara:

1. **Catàleg de serveis:** codis, descripcions, unitats i combinacions permeses.
2. **Tarifa versionada:** preus, dates de vigència, impostos i regles de càlcul.
3. **Plantilles aprovades:** estructura, textos obligatoris, exclusions i validesa.
4. **Criteris de derivació:** què exigeix visita, consulta tècnica o doble aprovació.
5. **Exemples revisats:** casos normals, incomplets, contradictoris i fora d'abast.
6. **Responsables:** qui manté cada dada i qui pot aprovar excepcions.

Si el procés encara viu en correus i coneixement tàcit, primer documenta'l amb una [fitxa de procés d'una pàgina](/blog/fitxa-proces-una-pagina-abans-automatitzar/). Automatitzar una tarifa ambigua només fa que l'ambigüitat circuli més ràpid.

## Com provar un pilot sense posar vendes en risc

Comença amb una sola família de serveis, un sol canal i esborranys sense enviament automàtic. Utilitza casos històrics anonimitzats o sintètics i separa'ls entre desenvolupament i prova. Inclou entrades fàcils i excepcions deliberades.

Mesura, com a mínim:

- precisió dels camps extrets;
- percentatge de línies vinculades a una tarifa vàlida;
- errors d'import o condicions, amb tolerància zero abans d'enviar;
- preguntes pendents detectades i omeses;
- temps de revisió per esborrany;
- percentatge de casos derivats correctament;
- cost tècnic per pressupost preparat.

La [checklist per validar un assistent d'IA](/blog/checklist-proves-assistent-ia-abans-produccio/) aporta proves d'injecció, permisos, fonts, errors i recuperació que també serveixen per a aquest flux. No ampliïs autonomia fins que el sistema gestioni bé allò que no sap.

## Quan compensa i quan no

Té sentit quan hi ha volum recurrent, estructures semblants, una tarifa mantenible i prou temps manual de preparació. Pot no compensar si cada proposta és completament singular, la informació només apareix després d'una visita experta o les tarifes canvien sense registre.

No calculis el retorn només amb minuts estalviats. Inclou manteniment de tarifes i plantilles, revisió, incidències, consum del model i millores. La [calculadora de cost per cas d'una automatització amb IA](/blog/calculadora-cost-automatitzacio-ia-cas/) ajuda a convertir aquestes partides en un llindar de volum realista.

## Un bon primer objectiu

El primer objectiu no és enviar pressupostos sense tocar-los. És aconseguir que una persona rebi un esborrany complet, amb dades d'origen, imports calculats des de la tarifa correcta i dubtes visibles. Si això redueix treball repetitiu sense augmentar errors, ja tens una base sòlida per avançar.

Si vols delimitar el procés, preparar les dades i decidir quina part correspon a IA, regles i revisió humana, la [consultoria d'IA](/consultoria/) de VBG Labs pot convertir el cas en requisits, riscos i un pilot mesurable. Quan el flux ja està validat, una [automatització amb IA](/automatitzacions/) pot connectar entrades, tarifes, plantilles i aprovacions sense cedir al model decisions que no li pertoquen.

