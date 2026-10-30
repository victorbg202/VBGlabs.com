---
title: "IA o regles? Matriu per decidir com automatitzar un procés"
description: "Una matriu pràctica de 10 punts per decidir si un procés necessita IA, regles deterministes o un enfocament híbrid, amb exemples i criteris de control."
slug: "ia-o-regles-matriu-decidir-automatitzacio"
lang: "ca"
translationGroup: "ai-or-rules-automation-decision-matrix"
category: "Automatització amb IA"
date: 2026-10-30
relatedSlugs: ["que-val-la-pena-automatitzar", "fitxa-proces-una-pagina-abans-automatitzar", "calcular-cost-tasca-manual-automatitzar", "rag-pimes-assistent-ia-documents"]
---

No tots els processos que semblen “intel·ligents” necessiten intel·ligència artificial. Si les entrades són estructurades i la decisió es pot explicar amb condicions estables, les regles acostumen a ser més barates, previsibles i fàcils d'auditar. La IA aporta valor quan cal interpretar llenguatge, documents o situacions variables. En molts casos, la millor arquitectura és híbrida: la IA interpreta; les regles validen i decideixen què es pot executar.

Aquesta matriu serveix per comparar les tres opcions abans de triar un model o una plataforma. No calcula el retorn econòmic: primer determina **quin tipus d'automatització encaixa amb la feina real**.

## Les tres opcions que estàs comparant

**Automatització per regles.** Executa condicions explícites: si passa A, fes B. És adequada per a camps estructurats, càlculs, comprovacions exactes, canvis d'estat i integracions amb criteris estables.

**Automatització amb IA.** Utilitza un model per classificar, extreure, resumir, redactar o interpretar entrades que no sempre tenen la mateixa forma. Treballa amb probabilitats: pot oferir una resposta útil sense que sigui necessàriament exacta.

**Automatització híbrida.** Assigna cada part al mecanisme més adequat. Per exemple, una IA extreu les dades d'un document; unes regles comproven imports i camps obligatoris; una persona revisa les excepcions.

La decisió no és “tecnologia antiga o tecnologia moderna”. És una elecció sobre control, variabilitat i cost. Abans d'aplicar la matriu, descriu el procés amb la [fitxa d'una pàgina](/blog/fitxa-proces-una-pagina-abans-automatitzar/): entrada, resultat, responsable, excepcions i conseqüència d'un error.

## Matriu de 10 punts: puntua la necessitat d'IA

Valora cada dimensió amb **0, 1 o 2 punts**. Puntua el procés tal com funciona avui, no com t'agradaria que funcionés.

| Dimensió | 0 punts | 1 punt | 2 punts |
|---|---|---|---|
| Variabilitat de l'entrada | Camps o valors estructurats | Pocs formats coneguts | Text, veu o documents molt variables |
| Interpretació necessària | Condicions exactes | Algunes ambigüitats acotades | Cal entendre significat, intenció o context |
| Sortida correcta | Una única resposta exacta | Diverses respostes acceptables amb límits | Cal redactar, resumir o recomanar |
| Verificació | Es comprova amb una fórmula o regla | Es pot contrastar amb dades o fonts | Requereix judici humà freqüent |
| Canvi i excepcions | Procés estable i poques excepcions | Canvis periòdics controlats | Casos nous i llenguatge canviant |

Suma els punts:

- **0–3: prioritza regles.** La IA probablement afegeix cost i incertesa sense resoldre un problema real.
- **4–6: planteja un flux híbrid.** Hi ha una part interpretativa, però també decisions que convé mantenir deterministes.
- **7–10: la IA pot ser central.** Encara necessitaràs validacions, límits i supervisió segons el risc.

La puntuació no aprova automàticament el projecte. Només orienta l'arquitectura. Després cal revisar volum, dades, impacte d'error i cost de manteniment.

## El filtre de risc pot canviar el resultat

Aplica una segona lectura abans d'automatitzar. Com més greu sigui una decisió incorrecta, menys autonomia hauria de tenir una sortida probabilística.

| Si la sortida... | Control mínim raonable |
|---|---|
| prepara un esborrany intern | revisió ràpida abans d'utilitzar-lo |
| classifica o extreu dades | comprovacions de format, totals i camps obligatoris |
| envia un missatge extern | aprovació o límits estrictes per a casos de baix risc |
| modifica un registre important | validació contra el sistema d'origen i registre d'activitat |
| autoritza pagaments, compromisos o decisions sensibles | decisió humana explícita |

Una puntuació alta en necessitat d'IA no justifica donar-li llibertat total. Pot indicar precisament que el problema és ambigu i necessita una persona en els punts crítics.

## Exemple 1: derivar correus entrants

Una empresa rep consultes comercials, incidències, factures i missatges de proveïdors en una bústia comuna.

- Les entrades són text lliure i varien molt: **2 punts**.
- Cal entendre la intenció: **2 punts**.
- La sortida és una categoria i un destinatari: **0 punts**.
- Es pot verificar amb categories i mostres revisades: **1 punt**.
- Apareixen expressions noves, però el circuit intern és estable: **1 punt**.

**Total: 6 punts.** L'opció raonable és híbrida. La IA proposa la categoria i extreu dades bàsiques. Les regles bloquegen adjunts perillosos, exigeixen camps mínims, apliquen prioritats conegudes i deriven els casos de baixa confiança a una persona. El model no hauria de decidir per si sol que una incidència està resolta.

## Exemple 2: avisar d'una factura que supera un límit

El sistema ja disposa del total, el proveïdor i el centre de cost en camps estructurats. L'empresa vol avisar quan l'import superi 2.000 € o quan falti l'aprovació.

La variabilitat i la interpretació són pràcticament nul·les; la resposta correcta és exacta i fàcil de verificar. La puntuació seria **0 o 1**. Una regla és suficient. Afegir un model faria més difícil explicar per què s'ha enviat o no un avís.

Si abans cal llegir PDFs de formats diferents, la decisió canvia només en el primer pas: la IA pot extreure els camps, però les regles continuen comprovant el total i el llindar. Aquesta separació és la base d'un bon flux híbrid.

## Exemple 3: respondre preguntes sobre documentació interna

Les preguntes poden formular-se de moltes maneres i la resposta s'ha de construir a partir de manuals vigents. La puntuació probablement serà alta. Un assistent amb recuperació de fonts pot encaixar millor que centenars de regles de paraules clau.

Això no converteix el xat en una font d'autoritat. Cal limitar els documents accessibles, citar-los, permetre que l'assistent digui que no troba resposta i derivar les consultes sensibles. La guia sobre [assistents RAG per a pimes](/blog/rag-pimes-assistent-ia-documents/) desenvolupa aquests controls.

## Errors habituals en triar l'enfocament

### Posar IA davant d'un problema de dades

Si falten camps, hi ha duplicats o ningú sap quina versió és correcta, el model no arreglarà el procés. Pot ocultar el desordre darrere d'una resposta convincent. Ordena les fonts i assigna responsables abans d'automatitzar.

### Convertir totes les excepcions en prompts

Un prompt amb desenes de condicions contradictòries és una regla mal situada. Els límits exactes —imports, dates, permisos, estats— haurien de viure en codi o configuració verificable.

### Exigir un 100% d'autonomia

Automatitzar els casos clars i enviar la resta a revisió pot aportar més valor que perseguir una cobertura completa. Defineix una sortida segura per a baixa confiança, dades incompletes i situacions no previstes.

### Comparar només el preu del model

El cost real inclou integracions, proves, revisions, monitoratge, incidències i canvis. Utilitza la [calculadora del cost d'una tasca manual](/blog/calcular-cost-tasca-manual-automatitzar/) per comparar l'estalvi amb la implantació i el manteniment, no només amb el consum de la API.

## Plantilla copiable per a una decisió real

```text
PROCÉS:
RESULTAT QUE NECESSITEM:

PUNTUACIÓ (0–2)
Variabilitat de l'entrada:
Interpretació necessària:
Sortida correcta:
Verificació:
Canvi i excepcions:
TOTAL / 10:

RISC SI S'EQUIVOCA:
QUÈ POT EXECUTAR SENSE APROVACIÓ:
QUÈ HA DE VALIDAR UNA REGLA:
QUÈ HA DE REVISAR UNA PERSONA:
COM MESURAREM QUALITAT I COST:

DECISIÓ: regles / IA / híbrid / no automatitzar encara
```

Fes aquest exercici amb tres processos candidats, no només amb el que sembla més atractiu. La guia sobre [què val la pena automatitzar](/blog/que-val-la-pena-automatitzar/) t'ajudarà a prioritzar per freqüència, impacte i risc.

## La decisió bona separa interpretació, control i execució

Una automatització amb IA sòlida no obliga el model a fer-ho tot. Defineix quina informació ha d'interpretar, quines condicions s'han de comprovar de manera exacta i quin nivell d'incertesa acceptarà una persona. Aquesta separació facilita les proves, redueix sorpreses i permet substituir una peça sense refer tot el procés.

Si vols aplicar la matriu a un procés real, la [consultoria d'IA](/consultoria/) pot convertir-lo en un abast, uns controls i una estimació de cost. Quan l'enfocament ja està validat, podem construir una [automatització amb IA](/automatitzacions/) que combini models, regles i revisió humana allà on correspon.
