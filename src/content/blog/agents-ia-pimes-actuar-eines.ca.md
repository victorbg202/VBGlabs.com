---
title: "Agents d'IA per a pimes: què canvia quan poden actuar sobre les teves eines"
description: "Els agents d'IA ja no només responen preguntes: poden consultar eines i executar tasques. Què ha de preparar una pime abans de donar-los accés i autonomia?"
slug: "agents-ia-pimes-actuar-eines"
lang: "ca"
translationGroup: "ai-agents-small-business-tools-2026"
category: "Agents i automatització amb IA"
date: 2026-11-04
relatedSlugs: ["ia-o-regles-matriu-decidir-automatitzacio", "rag-pimes-assistent-ia-documents", "alfabetitzacio-ia-empreses-que-documentar", "automatitzar-factures-rebudes-ia-revisio-humana"]
---

Els agents d'IA comencen a passar del xat a l'acció. En lloc de limitar-se a redactar una resposta, poden cercar informació en eines de l'empresa, mantenir context entre passos i executar tasques amb permisos propis. Per a una pime, l'oportunitat no és tenir un “empleat digital” genèric, sinó delegar una part acotada d'un procés. Abans de connectar res, però, cal decidir què pot llegir, què pot modificar, quan necessita aprovació i com es reconstruirà cada acció.

## Què ha canviat en les últimes setmanes

Diversos anuncis d'octubre de 2026 apunten en la mateixa direcció: els principals proveïdors volen connectar la IA amb les aplicacions on ja treballen les empreses.

El [8 d'octubre, Google Cloud va presentar el nou agent Gemini per a empreses](https://cloud.google.com/blog/topics/startups/how-to-grow-your-small-business-using-google-gemini), amb connexions a eines de treball, dades i historial del negoci. Google indicava que l'accés per a pimes encara era anticipat i que la disponibilitat general arribaria més endavant.

El [15 d'octubre, Microsoft va anunciar comptes d'agent i memòria de procés per a Copilot Studio](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/delegate-shared-business-processes-to-agents-that-are-more-persistent-and-proactive-with-microsoft-copilot-studio/). La proposta és que l'agent tingui credencials i permisos acotats propis, en comptes d'actuar amb el compte personal de qui l'ha creat, i que pugui començar treballs a partir d'un esdeveniment o una planificació.

El [28 d'octubre, OpenAI i ServiceNow van ampliar la seva integració](https://openai.com/index/openai-servicenow-partnership-expansion/): el plantejament permet portar context i accions d'un flux de treball a ChatGPT respectant les regles i els permisos configurats a ServiceNow. L'anunci diferencia entre capacitats disponibles, vistes prèvies i funcions previstes per a 2027.

No són tres productes equivalents ni totes les funcions estan disponibles per a qualsevol empresa. El senyal comú és més important que la marca: la IA empresarial es mou cap a sistemes que **observen, decideixen el següent pas i actuen sobre eines reals**. Això augmenta el valor potencial, però també el cost d'un error.

## Un assistent respon; un agent pot canviar l'estat del procés

La frontera no depèn del nom comercial. Un assistent pot resumir un correu o redactar una proposta perquè una persona la revisi. Un agent, a més, pot obrir el registre corresponent, consultar dades, demanar informació que falta, actualitzar un estat o activar una acció posterior.

Aquest salt introdueix quatre elements nous:

1. **Eines:** el model deixa de treballar només amb text i pot invocar correu, calendari, documents, formularis, bases de dades o aplicacions del negoci.
2. **Identitat i permisos:** cada acció necessita una identitat i un abast. Llegir un catàleg no és el mateix que enviar un correu o modificar un registre.
3. **Persistència:** alguns agents poden conservar context o continuar una tasca després de la primera interacció.
4. **Activació:** el treball pot començar per un missatge, un fitxer nou, un canvi d'estat o una hora programada, sense un prompt manual en cada ocasió.

Per això no n'hi ha prou amb escriure un bon prompt. Cal dissenyar una automatització. La [matriu per decidir entre IA, regles i un flux híbrid](/blog/ia-o-regles-matriu-decidir-automatitzacio/) ajuda a separar la interpretació probabilística de les validacions i decisions que han de continuar sent exactes.

## Set decisions abans de connectar un agent d'IA

### 1. Quin resultat concret ha d'entregar

“Ajudar amb vendes” és massa ampli. “Classificar una consulta entrant, extreure quatre dades i preparar un esborrany de resposta” es pot provar. Defineix l'entrada, el resultat, el responsable i el punt final del treball. Si el procés no es pot explicar en una pàgina, encara és massa ambigu per delegar-lo.

### 2. Quines accions són de lectura, proposta o execució

Divideix les capacitats en tres nivells:

| Nivell | Exemple | Control inicial raonable |
|---|---|---|
| Lectura | consultar un catàleg o un estat | accés només a les fonts necessàries |
| Proposta | redactar una resposta o suggerir una actualització | revisió humana abans d'aplicar-la |
| Execució | enviar, crear, modificar o cancel·lar | permisos mínims, límits i registre obligatori |

Un pilot no necessita començar pel tercer nivell. Sovint el primer valor apareix quan l'agent reuneix context i prepara una proposta completa, però la decisió final continua sent humana.

### 3. Amb quina identitat actuarà

Evita que un agent persistent depengui de les credencials personals d'un empleat. Una identitat específica facilita revocar l'accés, atribuir accions i evitar que el procés es trenqui quan canvia una persona de funció. Els permisos s'han de concedir per necessitat: una carpeta concreta, una bústia limitada o només determinades operacions d'una API.

### 4. Quina font té autoritat

La memòria pot estalviar repeticions, però no hauria de substituir les dades vigents. Defineix quina font mana per a preus, disponibilitat, condicions o estat d'un client. Si l'agent consulta documentació interna, aplica els mateixos criteris de vigència, permisos i citacions que en un [assistent RAG](/blog/rag-pimes-assistent-ia-documents/).

També cal decidir què pot recordar, durant quant temps i com es corregeix o elimina aquest context. Una preferència informal no hauria de convertir-se silenciosament en una regla del procés.

### 5. Quan s'ha d'aturar i demanar aprovació

Escriu les condicions abans de la prova. Per exemple: manca una dada obligatòria; la font és contradictòria; l'import supera un límit; el destinatari és extern; l'acció crea un compromís; o el model no pot justificar la classificació. L'agent ha de tenir una sortida segura: preparar el cas, explicar el dubte i derivar-lo.

### 6. Què quedarà registrat

Per reconstruir una acció necessites, com a mínim, l'esdeveniment que l'ha iniciat, les fonts consultades, les eines invocades, les dades proposades, les aprovacions i el resultat. No cal guardar informació indiscriminadament, però sí prou evidència per distingir què ha fet l'agent, què ha decidit una regla i què ha confirmat una persona.

Aquest inventari també forma part de l'[alfabetització i documentació d'ús de la IA](/blog/alfabetitzacio-ia-empreses-que-documentar/) que una empresa hauria de mantenir.

### 7. Quin cost total es controlarà

El consum del model és només una partida. Afegeix connexions, execucions de les eines, emmagatzematge, revisió humana, incidències i manteniment. Defineix límits per tasca i per període, i mesura quants casos acaben correctament, quants necessiten revisió i quant costa cada resultat útil. Un agent que fa molts passos pot semblar econòmic per crida i resultar car per procés complet.

## Exemple il·lustratiu: qualificar una consulta entrant

Imaginem una empresa que rep sol·licituds comercials per correu i formulari. Avui una persona llegeix el missatge, identifica el servei, comprova la zona, demana informació que falta i prepara la primera resposta. L'exemple és fictici i serveix només per concretar l'arquitectura.

En un pilot acotat, l'agent podria:

- detectar la intenció i l'idioma;
- extreure nom, empresa, necessitat, ubicació i termini;
- consultar un catàleg aprovat de serveis i criteris de cobertura;
- marcar quines dades falten;
- preparar una resposta i una fitxa resumida;
- enviar el cas a una persona amb el motiu de priorització.

No enviaria automàticament pressupostos, no inventaria preus i no descartaria una oportunitat. Les regles validarien els camps obligatoris i bloquejarien qualsevol acció externa. La persona revisaria la proposta, corregiria la classificació si cal i decidiria el pas següent.

Durant el pilot es mesurarien la classificació correcta, les dades que s'han de corregir, el temps de revisió, els motius de derivació i el cost per consulta preparada. Només després es podria valorar si alguns missatges de baix risc es poden enviar amb condicions molt concretes.

## Què convé fer ara i què pot esperar

No cal comprar una plataforma d'agents perquè els anuncis siguin nous. Ara és bon moment per identificar un procés repetitiu, documentar-ne els accessos i separar lectura, proposta i execució. També convé comprovar la disponibilitat real de cada funció, la regió, el pla, els connectors, el tractament de dades i els límits de cost abans de comparar demostracions.

Pot esperar l'autonomia àmplia, la memòria sense límits i la connexió simultània a totes les eines. Un pilot útil hauria de tenir una sola finalitat, poques fonts, permisos mínims, aprovacions visibles i un conjunt de proves preparat abans d'activar-lo.

Si vols convertir un procés concret en un pilot d'agent, la [consultoria d'IA](/consultoria/) de VBG Labs pot ajudar-te a definir abast, permisos, riscos, proves i cost. Quan el cas ja està delimitat, una [automatització amb IA](/automatitzacions/) pot connectar el model amb les eines del negoci mantenint regles, aprovacions i traçabilitat. L'objectiu no és donar més autonomia de la necessària, sinó delegar bé una feina que es pugui verificar.

## Fonts oficials

- [Google Cloud, “Empowering SMBs to do more with Gemini”, 8 d'octubre de 2026](https://cloud.google.com/blog/topics/startups/how-to-grow-your-small-business-using-google-gemini)
- [Microsoft, “Delegate shared business processes to agents”, 15 d'octubre de 2026](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/delegate-shared-business-processes-to-agents-that-are-more-persistent-and-proactive-with-microsoft-copilot-studio/)
- [OpenAI, “OpenAI and ServiceNow expand partnership across enterprise workflows”, 28 d'octubre de 2026](https://openai.com/index/openai-servicenow-partnership-expansion/)
