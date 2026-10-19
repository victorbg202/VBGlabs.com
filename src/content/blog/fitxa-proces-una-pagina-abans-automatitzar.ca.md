---
title: "Fitxa de procés en una pàgina: la plantilla abans d'automatitzar"
description: "Documenta un procés en una sola pàgina, detecta excepcions i valora si està preparat per automatitzar-se amb una plantilla i una puntuació de 0 a 10."
slug: "fitxa-proces-una-pagina-abans-automatitzar"
lang: "ca"
translationGroup: "one-page-process-template-before-automation"
category: "Automatització"
date: 2026-10-16
relatedSlugs: ["que-val-la-pena-automatitzar", "calcular-cost-tasca-manual-automatitzar", "software-estandard-no-code-o-a-mida-comparativa", "implantar-crm-pime-proces-comercial"]
---

Si un procés no es pot explicar en una pàgina, encara no està preparat per automatitzar-lo. No cal un manual de cinquanta pàgines: cal saber què l'activa, quines dades necessita, qui decideix, quines excepcions apareixen i com sabrem que ha acabat bé.

Aquesta fitxa serveix per descriure el procés actual, descobrir forats abans d'invertir i separar les decisions humanes dels passos repetitius. La pots completar en una reunió curta i utilitzar-la després per comparar propostes, preparar un pilot o decidir que primer cal ordenar el procés.

## La plantilla copiable

Copia aquest bloc en un document i omple'l amb les persones que fan la feina. Descriu el que passa avui, no el procés ideal que t'agradaria tenir.

```text
NOM DEL PROCÉS:
OBJECTIU: Quin resultat de negoci ha de produir?

INICI: Quin fet, missatge o data l'activa?
FINAL: Quina evidència confirma que ha acabat bé?
FREQÜÈNCIA I VOLUM: Quants casos hi ha per dia, setmana o mes?

ENTRADES: Quines dades o documents necessita?
SORTIDES: Què crea, actualitza, envia o registra?

PASSOS ACTUALS:
1.
2.
3.

DECISIONS: Quines regles determinen el pas següent?
EXCEPCIONS: Què surt del recorregut normal i amb quina freqüència?

RESPONSABLE: Qui respon del resultat?
PARTICIPANTS: Qui executa, revisa o aprova?
SISTEMES: Correu, fulls de càlcul, ERP, CRM, carpetes, web...

DADES SENSIBLES I PERMISOS: Què es tracta i qui ho pot veure?
ERRORS I REPROCESSOS: Què acostuma a fallar i què costa corregir-ho?

CONTROL HUMÀ: En quin punt cal revisar, aprovar o poder aturar?
PLA B: Què farem si una eina o integració falla?
MÈTRICA: Temps, errors, casos pendents, termini de resposta...
```

Una resposta desconeguda no és un fracàs. És una dada útil: assenyala què s'ha de mesurar o acordar abans de construir.

## Com completar-la sense convertir-la en burocràcia

### 1. Segueix un cas real de principi a fi

No comencis preguntant “com funciona normalment?”. Tria un cas recent i reconstrueix-lo: quin correu va arribar, qui el va obrir, què va copiar, on ho va guardar i com va saber que la tasca estava acabada. Després contrasta un segon cas diferent.

Això fa visibles els passos que sovint no s'expliquen: buscar una dada en una conversa, canviar un nom de fitxer, esperar una aprovació o comprovar manualment que no existeix un duplicat.

### 2. Defineix l'inici i el final amb evidències

“Quan arriba una factura” és millor que “quan administració té feina”. “Factura validada, registrada i arxivada amb identificador” és millor que “quan està feta”. Un inici observable permet activar el flux; un final verificable permet saber si ha funcionat.

Si un procés té diversos finals, anota'ls. Un cas pot quedar completat, rebutjat, pendent d'informació o escalat. Amagar aquests resultats només trasllada el problema a la futura automatització.

### 3. Separa accions de decisions

Accions com descarregar un adjunt, crear una carpeta o copiar un camp solen seguir una regla. Decisions com acceptar una factura dubtosa, prioritzar una incidència o aprovar una excepció poden requerir context i responsabilitat humana.

No assumeixis que “utilitzar IA” elimina aquesta frontera. La IA pot proposar una classificació o extreure dades, però cal definir què passa quan la confiança és baixa, quina persona revisa el resultat i com es corregeix.

### 4. Escriu les excepcions abans de dibuixar la solució

Pregunta a l'equip què passa quan falta un document, el client respon tard, hi ha dos formats diferents, un import no quadra o el sistema principal no està disponible. Agrupa les excepcions que comparteixen resposta.

No cal automatitzar-les totes al primer pilot. Sí que cal detectar-les, derivar-les a una cua visible i evitar que desapareguin en un correu personal.

## Exemple il·lustratiu: gestionar una factura rebuda

Aquest exemple no descriu un client real. Serveix per veure el nivell de detall útil.

- **Objectiu:** deixar una factura rebuda identificada, revisada i disponible per a la gestió administrativa.
- **Inici:** arriba un correu amb un adjunt PDF a una bústia concreta.
- **Final:** el document té proveïdor, data, import i estat de revisió, i queda arxivat amb un identificador únic.
- **Passos:** descarregar, comprovar que és una factura, extraure camps, buscar duplicats, assignar proveïdor, revisar i registrar.
- **Decisions:** és llegible?, ja existeix?, falten dades?, l'import necessita una aprovació addicional?
- **Excepcions:** document protegit, diverses factures en un PDF, abonament, proveïdor nou o camp il·legible.
- **Control humà:** revisar valors dubtosos i autoritzar els casos fora de regla.
- **Pla B:** conservar l'original i crear una tasca pendent si l'extracció o el sistema fallen.
- **Mètrica:** temps fins a revisió, percentatge d'extraccions corregides i casos pendents.

La fitxa no decideix quina tecnologia utilitzar. Primer defineix el treball; després es pot valorar una automatització, una funció del software existent o una combinació. En el cas de factures rebudes, [VBG Facturació](/vbg-facturacio/) cobreix organització i gestió documental, però no s'ha de confondre amb emissió de factures ni amb una solució de compliment VERI*FACTU.

## Puntuació ràpida: està preparat per a un pilot?

Puntua cada criteri amb **0, 1 o 2**. No és un càlcul de rendibilitat ni una garantia tècnica; és una manera de detectar què falta.

| Criteri | 0 punts | 1 punt | 2 punts |
|---|---|---|---|
| Inici i final | Ambigus | Un dels dos és clar | Tots dos són observables |
| Entrades | Canvien sense control | Hi ha diversos formats coneguts | Formats i camps estan definits |
| Regles | Depenen de memòria | Part de les decisions està escrita | Regles i responsables són clars |
| Excepcions | No es coneixen | Es coneixen però no es mesuren | Estan agrupades i tenen sortida |
| Sistemes i permisos | Accés incert | Integració parcial o manual | Accessos i límits estan verificats |

Interpreta el total amb prudència:

- **0–3:** ordena i observa abans d'automatitzar.
- **4–7:** prepara un pilot acotat amb revisió humana.
- **8–10:** el procés és un bon candidat per a una prova tècnica, si també té sentit econòmic.

Per analitzar el cost i l'estalvi potencial, utilitza la [calculadora de tasques manuals](/blog/calcular-cost-tasca-manual-automatitzar/). Per decidir entre una eina estàndard, no-code o desenvolupament propi, consulta la [comparativa de software](/blog/software-estandard-no-code-o-a-mida-comparativa/).

## Errors habituals en documentar processos

- **Fer el mapa des del despatx.** La persona que executa la tasca coneix passos que no apareixen als procediments.
- **Escollir un procés massa gran.** “Gestionar clients” no és un procés pilot; “registrar una sol·licitud web i assignar-ne el seguiment” sí.
- **Confondre persona i rol.** Escriu “responsable comercial”, no només un nom propi.
- **Mesurar només velocitat.** Inclou errors, pendents, reprocessos i qualitat del resultat.
- **Dibuixar només el camí feliç.** Les excepcions determinen bona part del manteniment.
- **No definir marxa enrere.** Cal saber com aturar el flux, corregir dades i continuar manualment.

## Quatre resultats possibles, i tots poden ser correctes

La fitxa pot conduir a automatitzar tot el recorregut, assistir només una part, millorar una funció de l'eina actual o no automatitzar. Potser el problema real és una aprovació sense responsable, dades d'entrada inconsistents o una tasca que passa massa poques vegades.

Abans d'avançar, aplica també els criteris de [què val la pena automatitzar](/blog/que-val-la-pena-automatitzar/): repetició, estabilitat, volum i cost de l'error. Una bona automatització comença amb un procés prou clar i un objectiu mesurable, no amb una eina de moda.

Si vols convertir una fitxa completada en un pilot, una [revisió d'automatització](/automatitzacions/) pot validar accessos, excepcions, control humà i manteniment abans de construir. La mateixa pàgina serveix com a punt de partida i evita començar el projecte amb supòsits diferents.
