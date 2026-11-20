---
title: "RAG, context llarg o fine-tuning? Matriu per a assistents d'IA"
description: "Comparativa pràctica per decidir com adaptar un assistent d'IA: prompt, context llarg, RAG o fine-tuning segons documents, comportament, cost i manteniment."
slug: "rag-context-llarg-fine-tuning-assistents-ia"
lang: "ca"
translationGroup: "rag-long-context-fine-tuning-ai-assistants"
category: "Eines d'IA"
date: 2026-11-20
relatedSlugs: ["rag-pimes-assistent-ia-documents", "ia-o-regles-matriu-decidir-automatitzacio", "checklist-proves-assistent-ia-abans-produccio", "calculadora-cost-automatitzacio-ia-cas"]
---

Si un assistent d'IA ha de respondre amb documents que canvien i citar-ne la font, normalment convé RAG. Si només ha d'analitzar un paquet petit i concret en una consulta, pot ser suficient enviar-lo com a context llarg. Si el problema és aconseguir un comportament, un format o una classificació molt consistents, el fine-tuning pot tenir sentit després d'esgotar prompt i exemples. Sovint la millor arquitectura és híbrida: RAG aporta el coneixement i el prompt o l'ajust fi defineixen com treballar-hi.

## Abans de triar tecnologia, separa coneixement i comportament

Moltes comparacions fallen perquè barregen dues preguntes diferents:

1. **Què ha de saber l'assistent?** Manuals, procediments, tarifes, polítiques o dades del negoci.
2. **Com s'ha de comportar?** Classificar, extreure camps, respondre amb un estil, seguir un esquema o escollir una eina.

RAG i el context llarg serveixen principalment per aportar informació a la consulta. El fine-tuning modifica el comportament del model a partir d'exemples. Un bon prompt també pot definir instruccions, límits i format sense entrenar res.

La documentació de [Microsoft Foundry sobre RAG](https://learn.microsoft.com/azure/ai-studio/concepts/retrieval-augmented-generation) resumeix aquesta separació: recuperació per a informació privada o canviant; fine-tuning per modificar comportament, estil o rendiment en una tasca. La guia de [Google Cloud per desenvolupar aplicacions d'IA generativa](https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application) també diferencia l'ancoratge en fonts verificables de l'ajust d'un model a requisits específics de sortida.

## La matriu ràpida

| Enfocament | Encaixa millor quan | Com s'actualitza | Citacions | Cost i complexitat principals | Risc habitual |
|---|---|---|---|---|---|
| Prompt + exemples | Instruccions, format i casos són acotats | Editant el prompt | Només si aportes fonts | Baixos per començar; creix el context | Prompt fràgil o massa llarg |
| Context llarg | Hi ha pocs documents i la consulta és puntual | Enviant la versió nova | Possibles si conserves metadades | Tokens i latència a cada consulta | Enviar massa informació irrellevant |
| RAG | La base documental és gran, canvia o té permisos | Reindexant fonts | És l'opció més natural | Preparació, cerca, indexació i monitoratge | Recuperar fragments equivocats |
| Fine-tuning | Cal repetir un comportament o format amb molta consistència | Entrenant i desplegant una versió nova | No aporta fonts per si sol | Dades de qualitat, entrenament, avaluació i manteniment | Entrenar errors o memoritzar patrons pobres |

La taula ajuda a descartar opcions abans d'invertir. La [matriu entre IA, regles i automatització híbrida](/blog/ia-o-regles-matriu-decidir-automatitzacio/) separa interpretació, comprovacions i accions.

## Opció 1: prompt i exemples, la línia base obligatòria

Abans de construir un índex o entrenar un model, prova una instrucció clara amb exemples representatius. Defineix entrada, sortida, camps obligatoris, abstenció i límits. Pot ser suficient per classificar consultes, extreure dades a un esquema o redactar un esborrany estable.

La guia de [model optimization d'OpenAI](https://developers.openai.com/api/docs/guides/model-optimization) proposa un cicle d'avaluacions, prompt, exemples i, només quan aporta millora mesurable, fine-tuning. La idea és independent del proveïdor: sense una línia base i casos de prova, no sabràs si l'arquitectura més complexa és millor.

## Opció 2: context llarg per a un paquet petit i concret

El context llarg consisteix a enviar els documents rellevants directament amb la consulta. No cal crear una base vectorial ni un procés de recuperació. Pot funcionar bé per resumir un contracte, comparar tres pressupostos o analitzar un manual concret que ja has seleccionat.

L'arquitectura és simple i visible, però cada consulta torna a transportar el contingut. Això pot augmentar cost i latència, i més pàgines no garanteixen trobar la dada correcta.

Utilitza'l quan:

- el conjunt és petit i conegut abans de preguntar;
- la tasca és puntual o de volum baix;
- no necessites cercar entre milers de fonts;
- pots controlar quins documents rep cada usuari.

Evita convertir el context llarg en un magatzem improvisat. Si cada consulta envia tota la carpeta «per si de cas», probablement ja necessites recuperació.

## Opció 3: RAG per a coneixement canviant i verificable

RAG cerca fragments rellevants abans de cridar el model. És útil per a manuals, procediments, catàlegs, preguntes freqüents o polítiques que canvien i que l'usuari ha de poder comprovar.

No entrenes el model cada vegada que s'actualitza un document: actualitzes la font i l'índex. També pots filtrar per perfil abans de recuperar informació i conservar títol, versió o enllaç per citar-los.

RAG afegeix una segona capa de qualitat: també has de mesurar si la cerca recupera el fragment adequat. Microsoft assenyala que una mala preparació, segmentació o configuració pot produir respostes incompletes.

La guia de [RAG per a pimes](/blog/rag-pimes-assistent-ia-documents/) explica com preparar fonts, permisos i proves. Aquesta comparativa respon a la pregunta anterior: si RAG és realment el mecanisme adequat.

## Opció 4: fine-tuning per canviar el comportament

En un fine-tuning, el model aprèn de parelles d'entrada i sortida que representen el comportament desitjat. Pot ajudar a mantenir un format, classificar casos amb matisos, utilitzar eines de manera consistent o especialitzar un model més petit en una tasca repetitiva.

No és la via adequada per mantenir un manual al dia. El coneixement queda lligat a les dades i a la versió entrenada; una política nova exigeix preparar dades, tornar a entrenar i validar. La documentació de [Microsoft sobre consideracions de fine-tuning](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/fine-tuning-considerations) recorda que l'ajust afegeix costos d'entrenament i servei, no substitueix la recuperació d'informació actual ni els controls de l'aplicació, i no garanteix una millora.

Planteja'l només si tens:

- una tasca repetida i estable;
- exemples correctes, diversos i representatius;
- un conjunt de prova separat de les dades d'entrenament;
- una mètrica que el model base no supera amb prompt;
- volum o latència que justifiquin el manteniment.

Models compatibles i costos varien segons el proveïdor; confirma'ls abans de crear una dependència.

## Arbre de decisió en sis preguntes

1. **La informació canvia sovint?** Si sí, prioritza RAG o una consulta directa al sistema d'origen.
2. **Necessites mostrar la font?** Si sí, RAG és el punt de partida més clar.
3. **Ja saps quins pocs documents cal analitzar?** Si sí, prova context llarg.
4. **El problema és el format o la conducta, no el coneixement?** Comença amb prompt i exemples; valora fine-tuning si no arriba al llindar.
5. **Hi ha permisos per document o usuari?** Aplica'ls abans de recuperar o enviar context; no els deleguis al prompt.
6. **Tens proves comparables?** Si no, encara no toca escollir l'arquitectura final.

Si dues respostes apunten a tècniques diferents, potser necessites combinar-les. No és una excepció: és habitual.

## Exemple il·lustratiu: assistent de suport tècnic

Imaginem una empresa que rep preguntes sobre equips, garanties i instal·lació. L'exemple és fictici i no representa resultats d'un client.

El **prompt** defineix que la resposta ha de ser breu, incloure passos i derivar qualsevol risc elèctric. Uns quants exemples mostren el format.

Per analitzar puntualment el manual d'un únic equip, el **context llarg** pot ser suficient. Quan l'assistent ha de cercar entre centenars de manuals, versions i condicions, **RAG** recupera les fonts autoritzades i les cita.

Si, després de moltes proves, el sistema continua fallant en una classificació estable —tipus d'incidència, urgència i equip responsable—, un **fine-tuning** podria millorar aquest comportament. Encara utilitzaria RAG per obtenir el contingut vigent. Entrenar el model amb els manuals no resoldria per si sol les actualitzacions.

## Com comparar les opcions amb el mateix pilot

Prepara entre 30 i 50 casos anonimitzats, incloent-hi ambigus, fora d'abast i amb fonts contradictòries. Executa cada alternativa sobre el mateix conjunt i registra:

- resposta correcta i sustentada;
- font recuperada o document utilitzat;
- abstencions correctes;
- camps i format vàlids;
- temps de resposta;
- cost per cas completat;
- errors de permisos o dades exposades;
- feina de manteniment necessària.

No comparis una demo fàcil de RAG amb els casos difícils del prompt. La [checklist per validar un assistent d'IA](/blog/checklist-proves-assistent-ia-abans-produccio/) ajuda a mantenir el conjunt de proves, i la [calculadora de cost per cas](/blog/calculadora-cost-automatitzacio-ia-cas/) incorpora consum, revisió i excepcions.

## Fonts tècniques

- [Microsoft Foundry: Retrieval-augmented generation and indexes](https://learn.microsoft.com/azure/ai-studio/concepts/retrieval-augmented-generation)
- [Microsoft Foundry: Fine-tuning considerations](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/fine-tuning-considerations)
- [Google Cloud: Develop a generative AI application](https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application)
- [OpenAI: Model optimization](https://developers.openai.com/api/docs/guides/model-optimization)

Si vols decidir l'arquitectura abans d'invertir en una plataforma, la [consultoria d'IA](/consultoria/) de VBG Labs pot convertir el cas d'ús en requisits, proves i una comparació de cost i manteniment. Quan el disseny ja està validat, una [automatització amb IA](/automatitzacions/) pot connectar fonts, model, regles i revisió humana amb traçabilitat.
