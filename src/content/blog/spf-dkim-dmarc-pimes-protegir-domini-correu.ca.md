---
title: "SPF, DKIM i DMARC per a pimes: protegeix el domini i millora el correu"
description: "Guia pràctica per inventariar els remitents, configurar SPF i DKIM, desplegar DMARC sense bloquejar correus legítims i verificar el resultat."
slug: "spf-dkim-dmarc-pimes-protegir-domini-correu"
lang: "ca"
translationGroup: "small-business-email-authentication-spf-dkim-dmarc"
category: "Ciberseguretat"
date: 2026-10-12
relatedSlugs: ["copies-seguretat-pimes-pla-restauracio"]
---

Si envies correus amb un domini propi, configura SPF, DKIM i DMARC. Els tres mecanismes ajuden els servidors receptors a comprovar quins sistemes poden enviar en nom teu, si el missatge conserva una signatura vàlida i què han de fer quan la verificació falla. També dificulten que algú suplanti el domini en campanyes de phishing.

No garanteixen l'arribada a la safata ni protegeixen un compte robat, però són una base per defensar la reputació del domini.

## Què fa cadascun

**SPF** publica al DNS quins servidors estan autoritzats a enviar correu per al domini. El receptor compara el servidor que entrega el missatge amb aquesta llista. Si l'empresa envia des de Microsoft 365, una plataforma de màrqueting i el formulari de la web, les fonts legítimes s'han de contemplar sense crear diversos registres SPF separats.

**DKIM** afegeix una signatura criptogràfica a cada missatge sortint. La clau privada queda al servei emissor i la clau pública es publica al DNS. El receptor pot verificar que una font autoritzada ha signat el missatge i que les parts protegides no han canviat durant el trajecte.

**DMARC** connecta el resultat amb el domini visible del camp `From:`. Per superar DMARC, SPF o DKIM —com a mínim un— ha de passar i el domini autenticat ha d'estar alineat amb el que veu el destinatari. El propietari del domini també pot demanar informes i publicar una política per als missatges que fallen.

El [RFC 9989 de l'IETF](https://www.rfc-editor.org/rfc/rfc9989.html), publicat el maig de 2026, és l'estàndard DMARC vigent i substitueix els RFC 7489 i 9091. Manté les polítiques `none`, `quarantine` i `reject`, però ja no inclou l'antic paràmetre `pct`. Si trobes una plantilla que proposa avançar amb `pct=10`, revisa-la amb el proveïdor: forma part de l'especificació anterior.

## Abans de tocar el DNS: inventaria tots els remitents

El risc més habitual no és escriure malament una etiqueta. És oblidar una eina que també envia correu amb el domini. Crea una llista amb:

- bústies de Google Workspace, Microsoft 365 o el proveïdor d'allotjament;
- formularis de la web i avisos del servidor;
- CRM, facturació, reserves i suport;
- plataformes de newsletters o campanyes;
- impressores, escàners, centraletes i aplicacions antigues;
- proveïdors que envien comunicacions en nom de l'empresa;
- dominis i subdominis que no haurien d'enviar mai.

Per a cada font, anota el domini del `From:`, el servei que entrega el missatge, el responsable i si admet DKIM propi. Revisa correus reals, no només les eines que l'equip recorda.

Si una plataforma de màrqueting genera molt volum o no està completament sota el teu control, valora enviar des d'un subdomini, per exemple `novetats.empresa.cat`. La [documentació de Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure) recomana separar així determinats serveis externs per no barrejar-ne els problemes amb la reputació del correu habitual.

## Pas 1: publica un únic SPF correcte

SPF és un registre TXT al DNS. El valor concret l'ha de proporcionar cada servei emissor. Un exemple purament il·lustratiu seria:

`v=spf1 include:spf.proveidor.example -all`

No el copiïs: `proveidor.example` no és un servei real. Construeix el registre amb les instruccions dels proveïdors que utilitzes.

Comprova aquests punts:

1. Hi ha **un sol registre SPF** per domini. Si n'hi ha dos, no els deixis separats: cal combinar les fonts en un únic registre vàlid.
2. Inclou totes les fonts legítimes i elimina serveis que ja no s'utilitzen.
3. No afegeixis adreces IP “per si de cas”. Cada autorització amplia qui pot enviar.
4. Vigila el límit de consultes DNS. El [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208.html) limita a deu els termes que poden provocar consultes durant l'avaluació SPF.
5. Decideix el final (`~all` o `-all`) amb el proveïdor després de verificar les fonts. No canviïs a un criteri més estricte sense proves.

SPF té una limitació important: el reenviament pot trencar-ne el resultat perquè canvia el servidor que entrega el correu. Per això no s'ha d'utilitzar com a única defensa.

## Pas 2: activa DKIM a cada servei

DKIM no s'inventa a mà. Al panell del servei de correu, genera o activa la signatura per al domini. El proveïdor donarà un selector i un o més registres TXT o CNAME per publicar al DNS. Després cal tornar al panell i confirmar que els detecta.

Repeteix el procés per a cada plataforma que enviï en nom teu. El correu corporatiu pot estar signat correctament mentre que la newsletter o les notificacions de la web continuen utilitzant el domini del proveïdor.

Google indica a les seves [directrius per a remitents](https://support.google.com/mail/answer/81126?hl=en) que les claus DKIM per enviar a comptes personals de Gmail han de tenir almenys 1.024 bits i recomana 2.048 bits quan el proveïdor ho permet. No canviïs la longitud ni rotis claus sense seguir les instruccions de la plataforma.

## Pas 3: desplega DMARC primer en observació

Quan SPF i DKIM funcionen, publica DMARC a `_dmarc.elteudomini.cat`. Un registre inicial pot tenir aquesta forma:

`v=DMARC1; p=none; rua=mailto:dmarc@elteudomini.cat`

Substitueix el domini i utilitza una bústia preparada per als informes agregats. Com que solen arribar en XML, assigna un responsable o una eina que els resumeixi, revisant-ne abans el tractament de dades.

Amb `p=none`, demanes informació sense expressar una política de quarantena o rebuig. Utilitza els informes per respondre:

- quines fonts envien amb el domini;
- quines superen SPF i DKIM;
- si el domini autenticat està alineat amb el `From:`;
- quins serveis legítims fallen;
- si apareixen fonts desconegudes o intents de suplantació.

Quan totes les fonts legítimes estiguin identificades i alineades, avança de manera controlada cap a `p=quarantine` i, finalment, `p=reject`. La documentació oficial de Microsoft recomana aquest desplegament gradual per evitar que una font legítima oblidada quedi bloquejada. Amb l'estàndard actual, fes les proves en un domini o subdomini de menys volum i canvia la política només després de revisar els resultats; no confiïs en l'antic `pct`.

## Pas 4: verifica un correu real

Els registres DNS visibles no demostren que cada aplicació signi bé. Envia missatges de prova des de cada font a bústies de proveïdors diferents i revisa les capçaleres completes. Busca el bloc `Authentication-Results` i comprova:

- `spf=pass` per a la font esperada;
- `dkim=pass` i el domini de la signatura;
- `dmarc=pass` i l'alineació amb el `From:`;
- que el missatge no utilitza inesperadament el domini d'un tercer.

Prova també les respostes automàtiques, el formulari web, una factura de mostra i una campanya interna. Un resultat correcte des d'Outlook no valida el CRM.

Google exigeix SPF o DKIM a tots els remitents que entreguen a Gmail i SPF, DKIM i DMARC als remitents massius; també adverteix que els missatges sense autenticar poden acabar rebutjats o classificats com a correu brossa. Autenticar millora la base tècnica, però la reputació, el consentiment, el volum i el contingut continuen influint en l'entrega.

## Errors que poden deixar el correu fora

- Publicar dos registres SPF independents.
- Activar `p=reject` abans de descobrir totes les aplicacions.
- Configurar DKIM només al correu dels usuaris i oblidar eines externes.
- Pensar que `spf=pass` ja implica `dmarc=pass`; falta comprovar l'alineació.
- Rebre informes DMARC en una bústia que ningú revisa.
- Copiar un registre d'una guia sense adaptar-lo al proveïdor.
- Utilitzar el domini principal per a qualsevol prova o plataforma massiva.
- Confondre autenticació amb xifratge o protecció de comptes.

SPF, DKIM i DMARC no substitueixen contrasenyes úniques, autenticació multifactor, formació contra el phishing ni un pla de recuperació. La guia de [còpies de seguretat per a pimes](/blog/copies-seguretat-pimes-pla-restauracio/) cobreix una altra part del mateix objectiu: poder continuar treballant quan falla una capa de protecció.

## Un manteniment petit però necessari

Revisa els informes i l'inventari quan incorporis o eliminis una eina, canviïs de proveïdor o detectis problemes d'entrega. Mantén registrats el responsable, la data de l'última revisió, els selectors DKIM actius i les fonts incloses a SPF. Els dominis aparcats que no envien correu també necessiten una política explícita perquè no es converteixin en una via de suplantació.

Si no tens clar quins sistemes envien o et preocupa bloquejar correu legítim, una [revisió tècnica](/consultoria/) pot inventariar el flux, preparar els registres i definir una migració verificable. L'objectiu és saber què autoritzes, mesurar-ho i mantenir-ho.

## Fonts tècniques

- [RFC 9989: DMARC](https://www.rfc-editor.org/rfc/rfc9989.html), IETF, maig de 2026.
- [RFC 7208: SPF](https://www.rfc-editor.org/rfc/rfc7208.html) i [RFC 6376: DKIM](https://www.rfc-editor.org/rfc/rfc6376.html), IETF.
- [Directrius per a remitents de correu](https://support.google.com/mail/answer/81126?hl=en), Google, consultades el 12 d'octubre de 2026.
- [Configuració i desplegament gradual de DMARC](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure), Microsoft, consultada el 12 d'octubre de 2026.
