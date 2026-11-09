---
title: "Bots de veu amb IA per a pimes: com dissenyar un pilot útil i segur"
description: "Guia pràctica per definir un bot de veu amb IA: casos d'ús, arquitectura, transferència humana, dades, proves, costos i criteris per a un primer pilot."
slug: "bots-veu-ia-pimes-pilot-util-segur"
lang: "ca"
translationGroup: "ai-voice-bots-small-business-pilot"
category: "Bots de veu i automatització amb IA"
date: 2026-11-09
relatedSlugs: ["agents-ia-pimes-actuar-eines", "ia-o-regles-matriu-decidir-automatitzacio", "calculadora-cost-automatitzacio-ia-cas", "alfabetitzacio-ia-empreses-que-documentar"]
---

Un bot de veu amb IA pot atendre una trucada, entendre el motiu, consultar informació autoritzada, recollir dades i derivar el cas amb context. Perquè sigui útil en una pime, però, no ha d'intentar substituir tota l'atenció telefònica. El millor primer pilot resol **una finalitat concreta**, informa des del principi que és un sistema d'IA, limita les accions que pot executar i ofereix una sortida clara cap a una persona.

## Què és realment un bot de veu amb IA

No és només una locució amb opcions numerades. En una arquitectura habitual, diversos components treballen en cadena:

1. la telefonia rep o inicia la trucada;
2. un sistema converteix la veu en text;
3. el model interpreta la intenció i decideix el següent pas dins d'un guió controlat;
4. les eines consulten dades o executen accions permeses;
5. una veu sintètica comunica la resposta;
6. el sistema registra el resultat i, si cal, transfereix la conversa.

La IA aporta flexibilitat per entendre maneres diferents d'expressar una necessitat. Les regles continuen sent preferibles per validar un identificador, comprovar un horari, impedir una acció o decidir quan s'ha de derivar. Aquesta combinació segueix el mateix principi que la [matriu entre IA, regles i automatització híbrida](/blog/ia-o-regles-matriu-decidir-automatitzacio/): el model interpreta; les regles protegeixen els límits.

## Quatre casos d'ús raonables per començar

### Consultes freqüents i encaminament

El bot identifica si la persona truca per una cita, una incidència, un servei o una consulta administrativa. Pot respondre només quan disposa d'una font aprovada i derivar la resta a l'equip correcte. És un cas més segur que donar-li accés ampli a totes les dades del negoci.

### Recollida i qualificació inicial

Pot demanar nom, empresa, motiu, ubicació, termini i preferència de contacte. El resultat útil no és una puntuació opaca, sinó una fitxa estructurada que una persona pugui revisar. El bot no hauria de descartar automàticament una oportunitat ni inventar disponibilitat, preus o condicions.

### Cites amb condicions acotades

Si el calendari i les regles estan ben definits, pot proposar franges, confirmar dades i preparar una reserva. Els canvis excepcionals, els compromisos comercials o els casos amb informació contradictòria han de passar a una persona.

### Primera presa d'una incidència

El bot pot recollir què ha passat, quan, a quin producte o servei afecta i quin canal prefereix la persona. Després crea un resum i assigna el cas. No ha de diagnosticar situacions sensibles ni prometre un termini que el sistema no pugui garantir.

## Set decisions que defineixen el pilot

### 1. Quin resultat ha de deixar la trucada

“Atendre millor” no es pot provar. “Crear una fitxa completa, proposar una cita o transferir amb un resum” sí. Defineix l'entrada, els camps obligatoris, el resultat final i qui n'assumeix la responsabilitat.

### 2. Què pot dir i què pot fer

Separa coneixement i acció. Una cosa és explicar un horari a partir d'una font vigent; una altra és modificar una cita, enviar un missatge o crear un registre. Comença amb lectura i proposta. Afegeix execució només quan hi hagi permisos mínims, validacions, límits i registre.

Si el bot actua sobre eines, aplica els mateixos controls que descriu la guia d'[agents d'IA per a pimes](/blog/agents-ia-pimes-actuar-eines/): identitat pròpia, fonts amb autoritat, aprovacions i traçabilitat.

### 3. Com s'identificarà i explicarà els seus límits

La primera frase ha de ser clara: és un assistent de veu amb IA, per a quina finalitat atén i com es pot parlar amb una persona. L'[article 50 del Reglament d'IA](https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng) exigeix informar que s'està interactuant amb un sistema d'IA, llevat que sigui obvi, i que la informació es doni com a màxim en la primera interacció. El règim general del Reglament és aplicable des del [2 d'agost de 2026](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=LEGISSUM%3A4762484). Aquesta transparència no és una frase amagada al final de la trucada.

### 4. Quines dades necessita de veritat

Àudio, transcripció i camps estructurats són capes diferents. Decideix si cal conservar cadascuna, durant quant temps, amb quina finalitat i qui hi tindrà accés. El [RGPD exigeix finalitat definida, base jurídica, transparència, minimització i limitació de la conservació](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679). Les [directrius del Comitè Europeu de Protecció de Dades sobre assistents de veu](https://www.edpb.europa.eu/documents/guideline/guidelines-022021-on-virtual-voice-assistants_en) desenvolupen aquests principis per a sistemes basats en veu.

No guardis l'àudio “per si de cas”. Si una transcripció revisable és suficient, evita conservar més informació de la necessària. Documenta també proveïdors, ubicació del tractament, accessos i procediment per atendre drets. No és assessorament jurídic: el cas concret s'ha de revisar segons la finalitat i les dades tractades.

### 5. Quan ha de transferir a una persona

La derivació no és un fracàs; és una funció del sistema. Defineix desencadenants observables: la persona ho demana, el bot no entén després de dos intents, falta una dada crítica, apareix una queixa, hi ha risc o urgència, la font és contradictòria o l'acció supera el seu permís.

La transferència ha d'incloure un resum breu, les dades confirmades, el motiu i el punt exacte on s'ha aturat. Fer repetir tota la conversa anul·la bona part del valor del bot.

### 6. Com gestionarà idioma, soroll i interrupcions

Un pilot a Catalunya pot necessitar català i castellà, però no n'hi ha prou amb traduir el guió. Prova accents, noms propis, adreces, números, soroll de fons, canvis d'idioma i persones que interrompen. El bot ha de confirmar dades sensibles o difícils d'escoltar i evitar respostes llargues: en una trucada no es pot rellegir un paràgraf.

### 7. Com es mesurarà el cost i el resultat

Compta telefonia, reconeixement i síntesi de veu, consum del model, integracions, emmagatzematge, supervisió, incidències i manteniment. La [calculadora de cost d'una automatització amb IA](/blog/calculadora-cost-automatitzacio-ia-cas/) permet estimar el cost per cas incorporant excepcions i revisió humana.

Mesura també el percentatge de trucades que arriben a un resultat correcte, camps que s'han de corregir, transferències adequades, abandonaments, temps fins a la primera resposta, errors d'eina i cost per trucada resolta. Una durada menor no sempre és millor: pot indicar que la persona ha penjat abans d'acabar.

## Exemple il·lustratiu: pilot de recepció de trucades

Imaginem una empresa de serveis que rep consultes en català i castellà. L'exemple és fictici i només serveix per concretar l'abast. El pilot atén una única línia i té tres objectius: identificar el motiu, recollir les dades mínimes i crear una fitxa o transferir.

El bot pot consultar horaris, zona de servei i preguntes freqüents aprovades. Pot crear una sol·licitud amb nom, telèfon, municipi, necessitat i franja de contacte. No dona pressupostos, no confirma una visita i no elimina registres. Si detecta una urgència, una reclamació o una pregunta fora de font, transfereix.

Abans d'obrir la línia, l'equip prepara un conjunt de proves amb formulacions reals però sense dades personals: trucades curtes, sorolloses, amb dubtes, canvis d'idioma i informació incompleta. Cada resultat es marca com a correcte, corregible o insegur. El pilot només avança quan els errors tenen una sortida controlada.

## Un pla de quatre setmanes

**Setmana 1 — procés i límits.** Tria una finalitat, dibuixa el recorregut, defineix fonts, dades, accions, excepcions i persona responsable.

**Setmana 2 — prototip sense accions sensibles.** Connecta telefonia i coneixement, però deixa les actualitzacions com a propostes. Escriu missatge inicial, confirmacions i transferències.

**Setmana 3 — proves i observació.** Executa el conjunt de casos, revisa transcripcions, errors, latència percebuda, canvis d'idioma i derivacions. Ajusta regles abans d'afegir autonomia.

**Setmana 4 — trànsit limitat i decisió.** Obre una franja o tipus de trucada concret, mantén supervisió diària i compara resultat, cost i càrrega humana. Decideix si cal ampliar, corregir o aturar.

## Quan encara no convé desplegar-lo

No és un bon primer projecte si ningú pot definir què és una trucada ben resolta, les fonts canvien sense responsable, no existeix un canal de transferència, el procés exigeix compromisos delicats o no es poden revisar els errors. Tampoc convé començar per trucades comercials massives: afegeixen finalitats, drets i riscos que requereixen una anàlisi específica.

Un bot de veu útil no és el que parla de manera més humana, sinó el que resol una tasca limitada, sap aturar-se i deixa un resultat verificable. Si vols valorar un cas real, la [consultoria d'IA](/consultoria/) de VBG Labs pot ajudar-te a definir abast, dades, arquitectura, proves i cost. Si el pilot encaixa, una [automatització amb IA](/automatitzacions/) pot connectar telefonia, models i eines del negoci amb regles, transferència humana i traçabilitat.

## Fonts oficials

- [Reglament (UE) 2024/1689, article 50: transparència en sistemes que interactuen amb persones](https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng)
- [EUR-Lex, resum i calendari d'aplicació del Reglament d'IA](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=LEGISSUM%3A4762484)
- [Reglament (UE) 2016/679, articles 5 i 6](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679)
- [Comitè Europeu de Protecció de Dades, Directrius 02/2021 sobre assistents virtuals de veu](https://www.edpb.europa.eu/documents/guideline/guidelines-022021-on-virtual-voice-assistants_en)
- [AEPD, “Transcripción de voz con IA (II): responsabilidad, derechos y transparencia”, abril de 2026](https://www.aepd.es/prensa-y-comunicacion/blog/transcripcion-de-voz-con-ia-ii-responsabilidad-derechos-y-transparencia)
