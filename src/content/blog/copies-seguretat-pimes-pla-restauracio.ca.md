---
title: "Còpies de seguretat per a pimes: un pla que puguis restaurar de veritat"
description: "Guia pràctica per decidir què copiar, amb quina freqüència, on guardar-ho i com provar la restauració sense convertir el backup en un projecte interminable."
slug: "copies-seguretat-pimes-pla-restauracio"
lang: "ca"
translationGroup: "small-business-backups-recovery"
category: "Ciberseguretat"
date: 2026-10-05
relatedSlugs: ["cyber-resilience-act-notificar-vulnerabilitats"]
---

Una còpia de seguretat no és una carpeta duplicada ni un disc que sempre està connectat. És una manera provada de recuperar la informació i reprendre la feina quan un ordinador falla, algú esborra un arxiu, un compte queda bloquejat o un atac xifra els sistemes. Per a una pime, el pla pot ser senzill: saber què és crític, quanta informació et pots permetre perdre, mantenir còpies separades i assajar la restauració.

La part important no és acumular gigabytes. És poder respondre, sense improvisar, a aquesta pregunta: **si avui perdéssim les dades, què necessitaríem per treballar demà?**

## Comença pel negoci, no pel dispositiu

Fer una còpia de “tot l'ordinador” pot semblar suficient, però sovint deixa fora informació que viu en altres llocs: el correu, un programa de gestió al núvol, la web, els fitxers compartits o la configuració d'una aplicació. Abans de triar eines, crea un inventari curt dels processos que no poden quedar aturats.

Per a cada procés, anota quatre coses:

1. **Dades necessàries.** Documents, base de dades, correu, agenda, configuracions, claus de recuperació o fitxers de l'aplicació.
2. **Ubicació actual.** Ordinador, servidor, mòbil, servei al núvol o proveïdor extern.
3. **Persona responsable.** Qui comprova que la còpia es fa i qui pot restaurar-la.
4. **Impacte d'una pèrdua.** Què passaria si faltessin les últimes hores, un dia o una setmana.

No guardis contrasenyes o secrets en un document de text dins del backup. Utilitza un gestor de contrasenyes i conserva els codis de recuperació amb accés restringit, separats del sistema principal.

## Decideix dues xifres: quant pots perdre i quant pots esperar

No totes les dades necessiten la mateixa freqüència. Una carpeta d'arxiu que canvia un cop al mes no exigeix el mateix tractament que les comandes del dia.

El **punt de recuperació** respon a “quanta feina recent podem perdre?”. Si la resposta és quatre hores, necessites una còpia o un mecanisme de recuperació com a mínim cada quatre hores. El **temps de recuperació** respon a “quant podem estar sense aquest sistema?”. Potser pots esperar un dia per recuperar l'arxiu històric, però no per accedir a les reserves o a la facturació.

No cal utilitzar les sigles tècniques per prendre la decisió. Una taula com aquesta ja orienta la freqüència:

| Informació | Pèrdua assumible | Temps màxim sense servei | Freqüència inicial |
| --- | --- | --- | --- |
| Comandes i reserves | 1 hora | 4 hores | cada hora |
| Documents de treball | 1 dia | 1 dia | diària |
| Comptabilitat i factures | 1 dia | 1 dia | diària i abans de canvis importants |
| Web corporativa | 1 setmana | 1 dia | setmanal i abans de cada actualització |
| Arxiu històric | 1 mes | 3 dies | mensual |

Són exemples, no una norma universal. L'objectiu és relacionar la freqüència amb l'impacte real, no copiar-ho tot cada cinc minuts perquè l'eina ho permet.

## Aplica la regla 3-2-1 sense complicar-la

La [guia de còpies de seguretat d'INCIBE](https://www.incibe.es/sites/default/files/contenidos/guias/guia-copias-de-seguridad.pdf) proposa una base fàcil de recordar: conservar **tres còpies** de la informació important —l'original i dues còpies—, en **dos suports o entorns diferents**, amb **una còpia fora de l'empresa**.

Per a un negoci petit, una aplicació raonable podria ser:

- dades de treball al sistema principal;
- una còpia automatitzada en un disc o servidor local amb historial de versions;
- una còpia xifrada en una ubicació remota o un servei de backup diferent.

“Fora” no vol dir necessàriament transportar un disc cada dia. Pot ser un repositori remot ben configurat. El que importa és que un incendi, un robatori, un error d'administració o una infecció no pugui destruir alhora l'original i totes les còpies.

Per això convé que almenys una còpia estigui **desconnectada o protegida contra modificacions**. Un disc permanentment connectat amb permisos d'escriptura pot quedar xifrat pel mateix ransomware que afecta l'ordinador. El [CCN-CERT recomana mantenir còpies actualitzades, xifrades i fora de l'abast de l'equip afectat](https://www.ccn-cert.cni.es/es/comunicacion-eventos/comunicados-ccn-cert/4368-diez-recomendaciones-clave-para-protegerse-frente-al-ransomware?format=html).

## Sincronitzar no és el mateix que fer backup

La sincronització és útil per treballar des de diversos dispositius i compartir documents. Però si algú esborra un fitxer, el sobreescriu o sincronitza una versió xifrada, el canvi pot propagar-se. L'historial de versions i la paperera ajuden, però tenen límits de temps, capacitat i configuració.

Tracta la sincronització com una capa de disponibilitat, no com l'única còpia. Comprova concretament:

- quants dies o versions pots recuperar;
- si la paperera cobreix els comptes eliminats;
- si pots exportar correu, calendari, contactes i fitxers compartits;
- què passa quan marxa una persona de l'equip;
- si tens una còpia independent de les dades del programa de gestió.

El mateix criteri serveix per a un NAS amb discos en mirall. El mirall permet continuar si falla un disc, però replica també un esborrat accidental o un arxiu corrupte. Redundància, sincronització i backup resolen problemes diferents.

## Automatitza la còpia, però vigila-la

Una tasca manual que depèn de recordar connectar un disc cada divendres acabarà fallant el dia menys oportú. Automatitza la programació i afegeix una alerta quan una còpia no s'ha completat. Si el volum és gran, utilitza còpies incrementals, però conserva punts anteriors: descobrir un problema avui no significa que hagi començat avui.

La pantalla verda de “còpia completada” tampoc demostra que el negoci es pugui recuperar. Pot haver-hi fitxers exclosos, credencials caducades, una base de dades inconsistent o una còpia que ningú sap restaurar.

Assigna una persona titular i una substituta. La seva revisió mensual hauria d'incloure l'última execució correcta, l'espai disponible, els errors, els canvis en sistemes i la data de l'última prova de recuperació. Si automatitzes alertes o registres, fes-ho després d'haver definit aquest responsable i el procediment; la nostra guia sobre [què val la pena automatitzar](/blog/que-val-la-pena-automatitzar/) ajuda a separar una millora útil d'una capa tècnica innecessària.

## Prova la restauració, no només la còpia

Una prova útil no ha de començar esborrant res del sistema real. Restaura en una ubicació alternativa i comprova una mostra representativa:

- obre documents, fulls de càlcul, imatges i adjunts;
- recupera un correu o una bústia de prova;
- importa una còpia de la base de dades en un entorn separat;
- verifica que la web o aplicació arrenca amb la configuració recuperada;
- mesura quant temps ha costat;
- documenta els passos i els accessos necessaris.

Fes una prova petita cada mes i una restauració més completa cada trimestre o després d'un canvi important. La freqüència exacta dependrà del risc, però una data al calendari és millor que “ja ho provarem”. La [guia d'INCIBE per crear còpies](https://www.incibe.es/sites/default/files/docs/guia_como_crear_una_copia_de_seguridad.pdf) també insisteix a comprovar que la informació copiada es pot recuperar correctament.

## Un pla mínim que pots posar en marxa aquesta setmana

**Dia 1: inventari.** Llista els cinc processos més importants i on són les seves dades.

**Dia 2: prioritats.** Defineix quanta informació i quantes hores de servei pots perdre en cada cas.

**Dia 3: separació.** Comprova que hi ha dues còpies, en entorns diferents, i que una no pot ser modificada fàcilment des del sistema principal.

**Dia 4: automatització.** Programa les còpies i els avisos d'error. Documenta propietari, substitut i proveïdors.

**Dia 5: restauració.** Recupera diversos fitxers i, si és possible, una aplicació o base de dades en un entorn separat. Anota el temps i els problemes.

El resultat ha de cabre en una pàgina: què es copia, cada quan, on es guarda, qui rep els avisos i com es recupera. Si per explicar el sistema necessites un document que ningú de l'equip entén, encara és massa fràgil.

Si no tens clar quines dades depenen de cada aplicació o vols convertir l'inventari en un pla prioritzat, una [consultoria tecnològica](/consultoria/) pot ajudar-te a definir l'abast abans de comprar més emmagatzematge o eines. I si desenvolupes o comercialitzes software, també et pot interessar la guia sobre [les notificacions del Cyber Resilience Act](/blog/cyber-resilience-act-notificar-vulnerabilitats/): la recuperació interna i les obligacions de seguretat del producte són peces diferents, però s'han de coordinar.

## Fonts pràctiques

- [INCIBE: Copias de seguridad, guía de aproximación para el empresario](https://www.incibe.es/sites/default/files/contenidos/guias/guia-copias-de-seguridad.pdf)
- [INCIBE: Cómo crear una copia de seguridad](https://www.incibe.es/sites/default/files/docs/guia_como_crear_una_copia_de_seguridad.pdf)
- [CCN-CERT: diez recomendaciones frente al ransomware](https://www.ccn-cert.cni.es/es/comunicacion-eventos/comunicados-ccn-cert/4368-diez-recomendaciones-clave-para-protegerse-frente-al-ransomware?format=html)

