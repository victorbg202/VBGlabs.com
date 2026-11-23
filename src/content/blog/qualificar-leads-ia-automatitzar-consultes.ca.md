---
title: "Qualificar leads amb IA: guia per automatitzar l'entrada de consultes"
description: "Com dissenyar un flux de qualificació de leads amb IA que extreu dades, proposa prioritats, demana informació i manté revisió humana."
slug: "qualificar-leads-ia-automatitzar-consultes"
lang: "ca"
translationGroup: "ai-lead-qualification-inbound-enquiries"
category: "Automatització amb IA"
date: 2026-11-16
relatedSlugs: ["automatitzar-pressupostos-ia-esborrany-revisable", "agents-ia-pimes-actuar-eines", "ia-o-regles-matriu-decidir-automatitzacio", "checklist-proves-assistent-ia-abans-produccio", "calculadora-cost-automatitzacio-ia-cas"]
---

Qualificar leads amb IA no vol dir deixar que un model decideixi qui mereix atenció. Vol dir convertir correus, formularis, WhatsApp o transcripcions de trucades en una fitxa coherent: què necessita la persona, quines dades falten, quin servei podria encaixar i quin és el següent pas. La IA interpreta el llenguatge; les regles validen criteris exactes; una persona conserva les decisions comercials i els casos amb dubtes.

## Què ha d'entregar una qualificació útil

“Lead bo” o “lead dolent” és una sortida pobra i difícil d'auditar. Un sistema útil ha de deixar informació verificable perquè l'equip pugui actuar. Per exemple:

| Camp | Pregunta que ha de respondre |
|---|---|
| Necessitat | Quin problema vol resoldre i amb quin resultat esperat? |
| Servei possible | Quina línia de servei podria encaixar, sense donar-la per confirmada? |
| Context | Sector, mida, procés actual i eines implicades, si s'han indicat. |
| Termini | Hi ha una data real, una preferència o només sensació d'urgència? |
| Dades pendents | Què falta per poder valorar el cas? |
| Senyals de risc | Hi ha contradiccions, dades sensibles o una petició fora d'abast? |
| Següent pas | Respondre, demanar informació, preparar una reunió o derivar. |
| Evidència | Quina frase o dada justifica cada classificació? |

Una prioritat sense motiu és només una opinió del model. Demanar el fragment que la sustenta facilita la revisió i evita que una redacció convincent amagui una suposició.

## Abans de la IA, defineix què significa “qualificat”

Reuneix vendes, atenció i la persona responsable del servei. Trieu exemples recents i descriviu què hauria de passar amb cadascun, començant per decisions observables i no per una puntuació.

Una classificació inicial podria ser:

- **preparat per valorar:** necessitat concreta, encaix possible i dades mínimes disponibles;
- **cal demanar informació:** el cas pot tenir sentit, però falta una dada determinant;
- **fora d'abast:** la petició no correspon als serveis o a la zona definida;
- **sensible o amb risc:** necessita revisió abans de respondre;
- **duplicat o existent:** ja hi ha una conversa oberta que s'ha d'unificar.

Cada categoria ha de tenir propietari i següent pas. Si una etiqueta no canvia cap acció, probablement no cal calcular-la. La [fitxa de procés d'una pàgina](/blog/fitxa-proces-una-pagina-abans-automatitzar/) pot ajudar a documentar entrades, resultats, excepcions i responsables abans de connectar sistemes.

## Un flux híbrid de qualificació de leads amb IA

### 1. Captura la consulta sense perdre el canal original

El flux pot començar en un formulari, una bústia, WhatsApp o una transcripció. Conserva el missatge original, el canal, la data i un identificador. No copiïs més dades de les necessàries i evita crear un registre nou cada vegada que la mateixa persona respon.

### 2. Normalitza el contingut

Elimina signatures repetides, separa l'historial i identifica idioma i adjunts. Redueix el soroll sense esborrar informació que pugui canviar el significat.

### 3. Utilitza la IA per interpretar i extreure

El model pot resumir la necessitat, detectar intenció, extreure camps i proposar una categoria. Demana camps, valor, evidència i indicador de dada absent, no un paràgraf lliure.

### 4. Aplica regles als criteris exactes

La IA no hauria de decidir si un codi postal és dins de la zona, si un servei està disponible o si falta un consentiment obligatori. Aquestes comprovacions han de viure en regles verificables. La [matriu entre IA, regles i automatització híbrida](/blog/ia-o-regles-matriu-decidir-automatitzacio/) ajuda a assignar cada pas.

### 5. Detecta buits i contradiccions

Si el missatge diu “ho necessitem aquesta setmana” però no explica el procés, el sistema no ha d'inventar la resta. Ha de marcar el buit i preparar una pregunta concreta. Si dues dades es contradiuen, el cas passa a revisió.

### 6. Proposa prioritat, però mostra el motiu

La prioritat pot combinar criteris explícits —termini, impacte, encaix, informació disponible— amb una interpretació de la IA. Evita una caixa negra amb una puntuació aparentment precisa. És millor mostrar “termini indicat: divendres; servei possible: assistent documental; falta volum mensual” que un “87/100”.

### 7. Prepara la resposta i el següent pas

La IA pot redactar un missatge per confirmar la necessitat, demanar les dades pendents o proposar una reunió. En un primer pilot, el missatge queda com a esborrany. Preus, terminis, compromisos i exclusions s'han d'obtenir de fonts aprovades o quedar pendents d'una persona.

### 8. Registra la correcció humana

Quan l'equip canvia categoria, servei, prioritat o resposta, registra el camp corregit i el motiu. Aquest retorn permet trobar patrons: una pregunta mal formulada, una regla incompleta, un servei que es confon sovint o un canal amb dades insuficients.

## Què pot automatitzar-se i què convé revisar

| Tasca | Punt de partida prudent |
|---|---|
| Detectar idioma i tipus de consulta | automàtic amb mostres de control |
| Extreure nom, empresa, necessitat i termini | automàtic amb validació de format |
| Proposar servei o categoria | proposta revisable amb evidència |
| Comprovar zona, camps i duplicats | regles deterministes |
| Demanar una dada no sensible | esborrany; automatitzar només després de validar |
| Assignar responsable | regla o aprovació segons l'organització |
| Descartar una oportunitat | decisió humana |
| Enviar preu, termini o compromís | font controlada i aprovació explícita |

L'objectiu no és eliminar la revisió, sinó fer-la més curta i informada. Un cas preparat estalvia lectura i còpia encara que una persona aprovi el següent pas.

## Dissenya una cua d'excepcions

Tot flux real trobarà missatges buits, idiomes imprevistos, arxius il·legibles, peticions mixtes, integracions caigudes i persones ja existents. Defineix una cua visible amb motiu, responsable i estat: pendent d'informació, pendent de revisió, reintent o tancat.

No presentis una consulta com a processada si el sistema de destí no ha confirmat l'escriptura. Tampoc permetis que una baixa confiança desaparegui dins d'un camp tècnic. La persona que treballa la cua ha de veure què ha fallat i què pot fer.

## Com provar el pilot abans d'obrir-lo a tot l'equip

Recull entre diferents canals una mostra anonimitzada amb casos normals i difícils. Inclou consultes incompletes, fora d'abast, duplicades, sensibles i amb dades contradictòries. Per a cada cas, defineix la categoria, els camps i el següent pas esperats.

Mesura almenys:

- percentatge de categories confirmades sense canvi;
- camps corregits o inventats;
- consultes que necessiten informació addicional;
- temps de revisió per cas;
- fallades de permisos, duplicats o accions;
- cost per consulta preparada;
- resultat posterior, sense atribuir-lo automàticament a la IA.

Executa també les proves de permisos, abstenció, duplicats i fallades d'integració de la [checklist per validar un assistent d'IA](/blog/checklist-proves-assistent-ia-abans-produccio/). Un pilot no passa si exposa dades o envia una acció indeguda, encara que classifiqui bé la majoria de missatges.

## Exemple il·lustratiu: una consultoria amb tres serveis

Imaginem una consultoria que rep peticions sobre automatització documental, assistents interns i bots de veu. El sistema extreu necessitat, canal, idioma, eines actuals, volum aproximat i termini. Després proposa una línia de servei i marca les dades absents.

Una consulta clara sobre processar factures rebudes pot arribar preparada per a una reunió. Una petició que només diu “vull posar IA” genera dues preguntes sobre procés i resultat. Una sol·licitud fora dels serveis es deriva perquè una persona decideixi si cal respondre o recomanar una altra via. L'exemple és fictici: serveix per mostrar el flux, no resultats d'un client.

## Tres errors habituals

**Confondre velocitat amb qualitat.** Respondre en segons no ajuda si el sistema demana el que la persona ja havia explicat o promet una cosa incorrecta.

**Ocultar el criteri en una puntuació.** Una xifra sense evidència dificulta corregir errors i pot convertir un biaix comercial en una regla silenciosa.

**Automatitzar l'enviament massa aviat.** Comença amb extracció, proposta i esborrany. L'autonomia només s'amplia quan els casos de baix risc estan ben delimitats i les excepcions funcionen.

## Començar amb un pilot acotat

Tria un canal, una família de serveis i una sortida concreta. Documenta categories, camps, fonts, regles, aprovacions i excepcions. Prova amb casos històrics anonimitzats, obre el flux a un grup petit i revisa cada correcció. Després compara temps, qualitat i cost abans d'afegir canals o accions.

Si vols convertir l'entrada de consultes en un procés mesurable, la [consultoria d'IA](/consultoria/) de VBG Labs pot ajudar-te a definir criteris, dades, proves i retorn esperat. Quan el flux està validat, una [automatització amb IA](/automatitzacions/) pot connectar els canals, el model i les eines del negoci mantenint regles, revisió humana i traçabilitat.
