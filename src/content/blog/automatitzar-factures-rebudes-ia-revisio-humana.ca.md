---
title: "Automatitzar factures rebudes amb IA: de l'entrada a la revisió humana"
description: "Guia pràctica per captar factures, extreure'n les dades amb IA, validar-les amb regles i enviar només les excepcions a revisió humana."
slug: "automatitzar-factures-rebudes-ia-revisio-humana"
lang: "ca"
translationGroup: "incoming-invoice-ai-automation-human-review"
category: "Automatització amb IA"
date: 2026-11-02
relatedSlugs: ["ia-o-regles-matriu-decidir-automatitzacio", "fitxa-proces-una-pagina-abans-automatitzar", "calcular-cost-tasca-manual-automatitzar", "factura-electronica-b2b-verifactu-noves-dates"]
---

Automatitzar factures rebudes amb IA no consisteix a deixar que un model decideixi què s'ha de pagar. Consisteix a convertir documents variables —PDF, imatge o factura adjunta a un correu— en dades estructurades, comprovar-les amb regles i portar a una persona només els casos que necessiten criteri. El resultat que cal buscar és un circuit més ordenat i traçable, no una promesa d'autonomia total.

## Per què aquest procés encaixa amb una automatització híbrida

Una factura combina dues menes de feina. Primer cal interpretar un document que pot canviar de disseny segons el proveïdor. Després cal aplicar comprovacions exactes: camps obligatoris, operacions aritmètiques, duplicats o correspondència amb dades conegudes.

La IA és útil per a la part variable: reconèixer que el document és una factura, localitzar el número, la data, el proveïdor, les bases, els impostos i el total encara que cada plantilla sigui diferent. Les regles són més adequades per a allò que ha de ser determinista. Una persona conserva el control quan la lectura és dubtosa, hi ha una excepció o l'acció posterior té conseqüències.

Aquesta separació és la mateixa que desenvolupa la [matriu per decidir entre IA, regles o un flux híbrid](/blog/ia-o-regles-matriu-decidir-automatitzacio/): la IA interpreta; les regles validen; la persona resol els casos que no compleixen les condicions de seguretat.

## El flux complet, pas a pas

### 1. Captar els documents sense perdre el context

El punt d'entrada pot ser una bústia específica, un formulari de pujada, una carpeta compartida o una integració amb un sistema existent. El document s'ha de conservar juntament amb informació útil com el remitent, la data de recepció, el nom original i l'identificador del missatge.

No convé processar tots els adjunts com si fossin factures. Una signatura d'imatge, un albarà o un pressupost poden arribar pel mateix canal. El primer filtre ha de descartar fitxers irrellevants i detectar formats no admesos.

### 2. Classificar abans d'extreure

Una classificació inicial pot distingir factura, abonament, albarà, pressupost o document desconegut. Aquesta decisió determina quins camps s'han de buscar i quines regles s'aplicaran després.

El sistema ha de guardar la categoria proposada, la confiança i el motiu de derivació si no pot continuar. Quan el document és il·legible, està protegit o combina diverses factures, és preferible crear una excepció que improvisar dades.

### 3. Extreure les dades amb IA documental

El conjunt mínim dependrà del procés, però normalment pot incloure:

- proveïdor i identificador fiscal;
- número i data de factura;
- bases imposables, tipus i quotes d'impost;
- total i moneda;
- data de venciment, si consta;
- referència de comanda, projecte o centre de cost, quan sigui necessària;
- línies de detall, només si el cas d'ús real les necessita.

Cada valor hauria de conservar la seva procedència: pàgina, fragment o coordenada del document, juntament amb una confiança estimada. Això permet que la persona revisora vegi la dada al costat de la zona original i no hagi de tornar a llegir tota la factura.

### 4. Validar amb regles exactes

Un model pot llegir “1.284,30 €”, però no hauria de decidir tot sol si el valor és coherent. Després de l'extracció, aplica controls com aquests:

- presència dels camps obligatoris;
- format de dates, moneda i identificadors fiscals;
- suma de bases, impostos i total amb la tolerància definida;
- número de factura ja registrat per al mateix proveïdor;
- proveïdor existent o pendent d'alta;
- coincidència amb una comanda o un centre de cost, si el procés ho exigeix;
- imports o venciments fora dels límits establerts.

Aquestes comprovacions han de quedar en regles verificables, no amagades dins d'un prompt.

### 5. Enviar a revisió només el que ho necessita

La revisió humana funciona millor si mostra una causa concreta. “Revisa aquesta factura” aporta poca informació. “El total extret no coincideix amb la suma de base i impost” o “possible duplicat del mateix proveïdor” permet actuar ràpidament.

Defineix tres sortides:

1. **Preparada:** els camps necessaris superen les validacions i el document queda llest per al següent pas autoritzat.
2. **Revisió:** falta una dada, la confiança és baixa o una regla detecta una discrepància.
3. **Rebuig tècnic:** el fitxer no es pot llegir, està corrupte o no pertany a l'abast.

La persona revisora ha de poder corregir o confirmar el valor, canviar la classificació o marcar el document com a no processable.

### 6. Organitzar, exportar i conservar la traçabilitat

Quan la factura ha estat validada, el flux pot normalitzar el nom, assignar metadades, guardar-la i preparar una exportació al sistema de l'empresa. Preparar dades no equival a aprovar un pagament.

Per a cada document convé conservar l'original, les dades extretes, les validacions executades, les correccions i la persona o sistema que ha confirmat cada canvi. Si es torna a processar una factura, la nova versió no hauria d'esborrar l'historial anterior.

## Què no hauria de decidir la IA per si sola

La lectura documental i la decisió empresarial són coses diferents. Encara que l'extracció sigui bona, un model no hauria d'autoritzar pagaments, crear proveïdors definitius, resoldre discrepàncies contractuals ni decidir el tractament comptable o fiscal sense el control corresponent.

Tampoc s'ha de confondre la gestió de factures rebudes amb l'emissió. [VBG Facturació](/vbg-facturacio/) està orientat a rebre, organitzar i preparar factures entrants per a revisió. No emet factures de venda i no és un producte de compliment VERI*FACTU. La guia sobre [factura electrònica B2B i VERI*FACTU](/blog/factura-electronica-b2b-verifactu-noves-dates/) explica per què recepció, intercanvi i emissió són fronts diferents.

## Un exemple il·lustratiu de pilot

Imaginem una empresa que rep factures en una bústia compartida. Avui una persona descarrega els adjunts, reanomena els fitxers, copia sis camps a un full i demana aclariments quan falta una referència. L'exemple és fictici: serveix per mostrar l'abast, no per prometre un resultat.

El pilot podria limitar-se a factures PDF de deu proveïdors freqüents. La IA classifica el document i extreu proveïdor, identificador fiscal, número, data, base, impost i total. Les regles comproven els càlculs, busquen duplicats i exigeixen la referència de projecte. Les factures coherents queden preparades; la resta apareixen en una cua amb la causa exacta.

No s'automatitza el pagament ni es modifica la comptabilitat. Durant quatre setmanes, l'equip compara les dades amb el document, registra correccions i decideix si l'abast pot ampliar-se. Així es prova la part incerta sense convertir el pilot en una migració completa.

## Com mesurar si el pilot funciona

No utilitzis només “percentatge d'encert”. Mesura el procés complet:

- percentatge de documents correctament classificats;
- precisió per camp i taxa de correcció;
- factures que passen directament i factures derivades;
- temps mitjà de revisió per document;
- motius d'excepció més freqüents;
- duplicats o incoherències detectats;
- cost per factura validada, incloent revisió i manteniment.

Un sistema pot llegir bé el total i fallar sovint en la referència que l'empresa necessita. La mitjana ocultaria el problema. Separa els camps crítics dels informatius i defineix quins errors impedeixen avançar.

La [calculadora del cost d'una tasca manual](/blog/calcular-cost-tasca-manual-automatitzar/) ajuda a comparar l'estalvi potencial amb el cost del pilot, les integracions i la revisió que continuarà sent necessària.

## Checklist abans de construir

- [ ] Hem documentat l'entrada, el resultat, el responsable i les excepcions.
- [ ] Sabem quins tipus de document entren i quins queden fora.
- [ ] Hem definit només els camps necessaris per continuar el procés.
- [ ] Cada camp crític té una validació o un criteri de revisió.
- [ ] Els duplicats es comproven contra una font identificada.
- [ ] La baixa confiança genera una excepció segura.
- [ ] La persona revisora veu el valor i la seva posició al document.
- [ ] Les correccions i decisions queden registrades.
- [ ] El pilot no autoritza pagaments ni decisions sensibles.
- [ ] Mesurarem qualitat, temps de revisió, excepcions i cost total.

Abans d'escollir una eina, completa la [fitxa de procés d'una pàgina](/blog/fitxa-proces-una-pagina-abans-automatitzar/). Si vols convertir el circuit real de la teva empresa en un pilot acotat, VBG Labs pot ajudar-te a definir camps, regles, excepcions i mètriques des de la [consultoria d'IA](/consultoria/), o implementar la connexió entre correu, documents i sistemes com una [automatització amb IA](/automatitzacions/). L'objectiu no és eliminar la revisió: és reservar-la per als casos on aporta criteri.
