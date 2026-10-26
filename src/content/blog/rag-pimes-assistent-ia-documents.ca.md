---
title: "RAG per a pimes: com crear un assistent d'IA amb els teus documents"
description: "Guia pràctica per saber quan convé un assistent RAG, com preparar les fonts, controlar permisos, provar les respostes i començar amb un pilot útil."
slug: "rag-pimes-assistent-ia-documents"
lang: "ca"
translationGroup: "rag-small-business-ai-assistant-documents"
category: "Intel·ligència artificial"
date: 2026-10-26
relatedSlugs: ["ia-per-a-pimes-per-on-comencar", "alfabetitzacio-ia-empreses-que-documentar", "fitxa-proces-una-pagina-abans-automatitzar"]
---

Un assistent RAG permet que una IA respongui a partir de la documentació que controla la teva empresa: procediments, manuals, catàlegs, preguntes freqüents o condicions de servei. Quan rep una consulta, busca els fragments rellevants, els aporta al model i genera una resposta que pot incloure les fonts utilitzades. És una bona opció quan el coneixement existeix però costa trobar-lo; no és una solució màgica per arreglar documents desordenats ni garanteix respostes correctes per si sola.

## Què és RAG, explicat sense jerga

RAG són les sigles de *retrieval-augmented generation*, o generació augmentada amb recuperació. El concepte es va formalitzar en un [treball presentat a NeurIPS el 2020](https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html): combinar la capacitat d'un model generatiu amb una memòria externa que es pugui consultar.

En una implementació empresarial senzilla, el recorregut és aquest:

1. L'empresa selecciona i prepara les fonts autoritzades.
2. El sistema divideix els documents en fragments i els indexa per poder-los cercar.
3. Quan arriba una pregunta, recupera els fragments que probablement contenen la resposta.
4. El model redacta la resposta amb aquell context i mostra la procedència, si s'ha configurat així.

A diferència d'un xat general, l'assistent no depèn només del coneixement incorporat al model. Tampoc cal entrenar un model des de zero cada vegada que canvia un manual: normalment s'actualitza la col·lecció documental i es torna a indexar. Això facilita mantenir el coneixement al dia i revisar d'on surt una resposta.

## Quan pot aportar valor a una pime

Un RAG té sentit quan coincideixen quatre condicions:

- hi ha preguntes repetitives que consumeixen temps;
- les respostes ja existeixen en documents identificables;
- la documentació canvia i cal treballar amb la versió vigent;
- poder citar o obrir la font és important per comprovar el resultat.

Alguns usos raonables són un assistent intern sobre procediments, una primera ajuda per al servei d'atenció, una cerca guiada dins de manuals tècnics o un suport per preparar respostes comercials a partir d'un catàleg aprovat.

El valor no és “tenir un chatbot”. El valor és reduir el temps que una persona dedica a localitzar informació i donar-li una resposta verificable per continuar treballant. Si estàs valorant diversos processos, la guia sobre [per on començar amb IA en una pime](/blog/ia-per-a-pimes-per-on-comencar/) ajuda a prioritzar-los.

## Quan no és la solució adequada

RAG no és la millor resposta per a qualsevol necessitat d'informació.

**Si les dades són transaccionals i han de ser exactes al segon**, com l'estoc disponible o l'estat actual d'un pagament, és preferible consultar directament el sistema d'origen mitjançant una integració. Un document indexat podria quedar obsolet.

**Si la documentació és contradictòria o no té responsable**, l'assistent només farà més accessible el desordre existent. Primer cal decidir quina versió és vàlida.

**Si hi ha poques consultes**, pot ser més eficient millorar el cercador, l'estructura de carpetes o les preguntes freqüents.

**Si la resposta desencadena decisions sensibles**, l'assistent hauria d'ajudar una persona, no decidir o executar sense controls. Aprovar un pagament, interpretar un contracte o donar instruccions amb impacte en la salut no és el mateix que localitzar un procediment intern.

## La feina important comença abans del model

La qualitat d'un RAG depèn molt de les fonts. Abans de programar, convé crear un inventari amb aquestes dades:

| Camp | Pregunta pràctica |
|---|---|
| Font | Quin document o sistema conté la informació? |
| Propietari | Qui confirma que el contingut és correcte? |
| Vigència | Com sabrem que hi ha una versió nova? |
| Accés | Quins perfils el poden consultar? |
| Sensibilitat | Inclou dades personals, confidencials o contractuals? |
| Exclusió | Què no ha d'entrar mai a l'assistent? |

No cal començar amb tot l'arxiu de l'empresa. És millor una col·lecció petita, coherent i amb responsables clars que milers de fitxers sense control. Elimina duplicats, separa documents històrics, conserva títols i dates, i transforma les taules o PDFs difícils de llegir quan sigui necessari.

La [fitxa de procés d'una pàgina](/blog/fitxa-proces-una-pagina-abans-automatitzar/) pot servir per documentar qui pregunta, quin resultat necessita i què passa després de la resposta.

## Defineix el contracte de resposta

Un bon pilot ha d'especificar com s'ha de comportar l'assistent. Per exemple:

- respondre només amb les fonts autoritzades;
- citar el document i, si és possible, la secció utilitzada;
- indicar clarament quan no troba informació suficient;
- no completar buits amb una suposició presentada com un fet;
- mostrar la data o versió de la font quan sigui rellevant;
- derivar a una persona les preguntes sensibles o fora d'abast.

Aquest “no ho sé” és una funció, no una errada. El [perfil de riscos de la IA generativa del NIST](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) recorda que els models poden presentar informació falsa amb aparença de certesa. Aportar context amb RAG pot reduir aquest problema en un àmbit concret, però no l'elimina: cal provar les respostes i mantenir una via de revisió.

## Els permisos s'han d'aplicar abans de recuperar informació

Si direcció, administració i servei tècnic no poden veure els mateixos documents, l'assistent tampoc els hauria de tractar igual. No és suficient escriure al prompt “no mostris informació confidencial”.

El sistema ha de conèixer la identitat i el perfil de la persona, filtrar les fonts autoritzades abans d'enviar context al model i registrar els accessos rellevants. També cal decidir què guarda l'historial, durant quant temps i qui el pot revisar. Aquestes decisions han d'encaixar amb l'inventari i les regles internes d'IA; la guia sobre [què documentar quan una empresa utilitza IA](/blog/alfabetitzacio-ia-empreses-que-documentar/) ofereix una base pràctica.

## Com provar un RAG abans d'obrir-lo a tot l'equip

Una demo amb cinc preguntes fàcils no és una validació. Prepara un conjunt de preguntes reals abans del pilot:

- preguntes directes amb una resposta clara;
- maneres diferents de preguntar el mateix;
- preguntes que exigeixen combinar dos fragments;
- consultes amb documents semblants o versions antigues;
- preguntes fora d'abast que l'assistent ha de rebutjar;
- intents d'accedir a informació d'un altre perfil.

Per a cada prova, anota la resposta esperada, la font correcta i si l'assistent hauria de respondre o abstenir-se. Després revisa, com a mínim, quatre dimensions: si ha recuperat el document adequat, si la resposta està sustentada per aquell document, si la citació és útil i si respecta els permisos.

No busquis només un percentatge global. Una errada menor en una pregunta informativa no té el mateix impacte que exposar una condició confidencial o inventar una excepció. Classifica les proves per risc i defineix quines errades impedeixen desplegar el sistema.

## Un exemple il·lustratiu

Imaginem una distribuïdora tècnica amb manuals de producte, procediments d'instal·lació i condicions de devolució. El personal perd temps cercant entre carpetes i sovint pregunta a la mateixa persona experta.

El primer pilot podria limitar-se a una família de productes i a tres tipus de consulta. L'assistent retorna una resposta breu, enllaça el manual i mostra la versió. Si les fonts discrepen o la pregunta tracta una excepció comercial, deriva la consulta. Durant unes setmanes, l'equip valora les respostes i registra els buits documentals.

L'aprenentatge més útil pot no ser tècnic: pot revelar manuals duplicats, criteris que només coneix una persona o excepcions que mai s'havien escrit. Corregir aquests buits millora tant l'assistent com el procés real.

## Què determina el cost

El cost no depèn només del model. En un projecte RAG acostumen a pesar:

- neteja, classificació i actualització de continguts;
- integració amb carpetes, gestors documentals o aplicacions;
- identitat, permisos i registre d'activitat;
- volum de documents, consultes i context enviat al model;
- disseny de proves i revisió humana;
- monitoratge, reindexació i manteniment.

Per això convé comparar el projecte amb el cost actual de cercar, interrompre experts, repetir respostes i corregir errors. Un pilot acotat permet mesurar ús, temps estalviat i qualitat abans d'ampliar la inversió.

## Pla de pilot en quatre setmanes

**Setmana 1:** tria un cas d'ús, identifica usuaris, preguntes i fonts. Defineix també què queda fora.

**Setmana 2:** neteja una col·lecció petita, assigna responsables i configura permisos.

**Setmana 3:** construeix el flux de recuperació i resposta. Afegeix citacions, abstenció i derivació.

**Setmana 4:** executa les proves, obre'l a un grup reduït i registra preguntes fallides, fonts absents i incidents.

Al final del pilot, la decisió no hauria de ser només “la demo és impressionant?”. Hauria de respondre: recupera la font correcta, redueix temps, respecta accessos, sap quan parar i el manteniment és assumible?

## Checklist abans de començar

- [ ] Tenim un problema concret i prou freqüent.
- [ ] Les respostes existeixen en fonts controlades.
- [ ] Cada font té responsable i criteri de vigència.
- [ ] Els permisos estan definits per perfil.
- [ ] L'assistent cita fonts i pot dir que no ho sap.
- [ ] Hi ha proves normals, difícils, fora d'abast i de permisos.
- [ ] Una persona rep les consultes sensibles o dubtoses.
- [ ] Mesurarem qualitat, ús, temps estalviat i manteniment.

Si vols saber si un RAG encaixa amb els teus documents, la [consultoria d'IA](/consultoria/) pot convertir el cas d'ús, les fonts, els riscos i els costos en un pilot concret. I si el cas ja està clar, podem plantejar una [automatització amb IA](/automatitzacions/) que connecti el model amb la documentació i els sistemes que utilitza l'equip.

## Fonts

- [Lewis et al., “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks”, NeurIPS 2020](https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html)
- [NIST AI 600-1: Artificial Intelligence Risk Management Framework — Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
