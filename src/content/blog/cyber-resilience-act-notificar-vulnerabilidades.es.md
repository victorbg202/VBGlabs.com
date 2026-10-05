---
title: "Cyber Resilience Act: qué cambia para quien vende software y dispositivos digitales"
description: "Desde el 11 de septiembre de 2026, algunos fabricantes deben notificar vulnerabilidades explotadas e incidentes graves en 24 horas. Te explicamos a quién afecta y qué preparar."
slug: "cyber-resilience-act-notificar-vulnerabilidades"
lang: "es"
translationGroup: "cra-reporting-obligations-2026"
category: "Ciberseguridad"
date: 2026-09-30
relatedSlugs: ["alfabetizacion-ia-empresas-que-documentar", "copias-seguridad-pymes-plan-restauracion"]
---

Desde el 11 de septiembre de 2026, los fabricantes de determinados productos con elementos digitales vendidos en la Unión Europea deben notificar las vulnerabilidades explotadas activamente y los incidentes graves de seguridad. El primer aviso debe enviarse en un máximo de 24 horas desde que la empresa tiene conocimiento y la notificación completa, en 72 horas.

No afecta a cualquier negocio por el mero hecho de utilizar software. Sí puede afectar a una pyme que desarrolla y comercializa una aplicación, un programa, un dispositivo conectado o un producto digital con su marca. La diferencia es importante: antes de preparar formularios, hay que confirmar qué papel desempeña la empresa.

> Este artículo ofrece orientación operativa general y no sustituye una revisión jurídica o de cumplimiento normativo del producto concreto.

## La novedad: la obligación de notificar ya está activa

El Reglamento (UE) 2024/2847, conocido como **Cyber Resilience Act** o CRA, establece requisitos de ciberseguridad para los productos con elementos digitales. La mayor parte de las obligaciones será plenamente aplicable a partir del 11 de diciembre de 2027, pero el artículo 14 tiene un calendario anterior: las notificaciones obligatorias se aplican desde el 11 de septiembre de 2026, como resume la [Comisión Europea](https://digital-strategy.ec.europa.eu/en/policies/cra-summary).

Ese mismo día comenzó a funcionar la [Single Reporting Platform de ENISA](https://www.enisa.europa.eu/topics/product-security/vulnerability-services/eu-incident-response-and-cyber-crisis-management/single-reporting-platform-srp), el canal europeo creado para tramitar estos avisos. No es una obligación futura que pueda dejarse para el proyecto de conformidad de 2027: el proceso de detección y escalado ya debería estar preparado.

## A quién puede afectar realmente

La CRA se centra en los productos de hardware y software puestos a disposición en el mercado de la UE. La [guía oficial de la Comisión para fabricantes](https://digital-strategy.ec.europa.eu/en/policies/cra-manufacturers) incluye tanto productos finales —como aplicaciones o dispositivos conectados— como componentes, sistemas operativos o software integrado en otros productos.

En la práctica, conviene revisar el caso si tu empresa:

- desarrolla un programa o una aplicación y lo comercializa con su nombre o marca;
- encarga a un tercero el desarrollo, pero es quien pone el producto en el mercado;
- fabrica o vende un dispositivo conectado que incorpora software;
- importa o distribuye un producto con su propia marca;
- modifica de forma sustancial un producto digital y vuelve a ponerlo en el mercado.

Que una parte del producto funcione en la nube no lo excluye automáticamente. La CRA también contempla determinadas soluciones de procesamiento remoto cuando son necesarias para que el producto realice una de sus funciones. En modelos SaaS o arquitecturas híbridas, el límite puede ser menos evidente y merece la pena documentar por qué la solución entra o no en el ámbito de aplicación.

En cambio, **usar** herramientas digitales en el negocio no te convierte por sí solo en fabricante. Una tienda que usa un programa de facturación, un despacho que trabaja con un CRM o una empresa que instala una aplicación estándar no asumen automáticamente esta obligación de notificación.

También existen exclusiones y regímenes específicos, por ejemplo para algunos productos ya cubiertos por normativa sectorial. El software libre y de código abierto recibe un tratamiento particular: publicar código sin actividad comercial no equivale necesariamente a poner un producto en el mercado, mientras que comercializarlo como fabricante sí puede activar obligaciones. La [página oficial sobre código abierto](https://digital-strategy.ec.europa.eu/en/policies/cra-open-source) explica esta diferencia.

## Qué debe comunicarse y en qué plazo

La CRA distingue dos supuestos que no deben confundirse con cualquier error de software:

1. **Una vulnerabilidad explotada activamente.** Existen pruebas fiables de que un actor malicioso ha aprovechado una vulnerabilidad del producto.
2. **Un incidente grave que afecta a la seguridad del producto.** El incidente compromete de forma relevante la seguridad del producto o de los datos que trata.

Según la [página oficial de la Comisión sobre notificaciones](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting), el fabricante debe enviar:

- un **aviso inicial en un máximo de 24 horas** desde que tiene conocimiento;
- una **notificación completa en un máximo de 72 horas**, con la información disponible sobre el producto, la naturaleza del problema y las medidas correctoras o de mitigación;
- para un incidente grave, un **informe final en un máximo de un mes** después de la notificación de 72 horas.

El plazo empieza cuando el fabricante tiene conocimiento, no cuando el equipo técnico termina la investigación. Por eso el aviso de 24 horas es preliminar: no exige disponer de todas las respuestas, pero sí detectar el caso, escalarlo y decidir con rapidez.

Las notificaciones se tramitan a través de la [plataforma única de ENISA](https://portal.cra-srp.enisa.europa.eu/). ENISA también ha publicado unas [preguntas frecuentes operativas](https://www.enisa.europa.eu/topics/product-security/vulnerability-services/eu-incident-response-and-cyber-crisis-management/single-reporting-platform-srp/frequently-asked-questions) sobre el acceso y el funcionamiento del canal.

## Qué haría ahora una pyme afectada

No hace falta empezar redactando una política de cincuenta páginas. Hay que conseguir que un aviso técnico no se pierda y que la empresa pueda actuar dentro del plazo.

### 1. Delimitar productos y responsabilidades

Haz una lista de productos, versiones, componentes esenciales, responsables y países donde se comercializan. Anota también quién figura como fabricante y con qué marca se vende. Si intervienen un distribuidor, un importador o un desarrollador externo, deja por escrito qué hace cada uno.

### 2. Crear una vía de entrada visible

Define dónde pueden comunicar una vulnerabilidad los clientes, investigadores y proveedores. Puede ser una dirección específica de seguridad o un formulario, pero debe tener supervisión real, sustitutos durante vacaciones y un sistema que conserve la hora, el remitente y las evidencias.

### 3. Fijar un escalado de 24 horas

Decide quién evalúa si el caso podría ser una vulnerabilidad explotada o un incidente grave, quién autoriza la notificación y quién actúa si la persona principal no está disponible. Incluye al equipo técnico, dirección y, cuando sea necesario, asesoramiento especializado. Un diagrama corto con teléfonos resulta más útil que un procedimiento que nadie sabe encontrar.

### 4. Preparar la información antes de necesitarla

Ten a mano la descripción del producto, las versiones afectadas, los mercados donde se distribuye, los datos de contacto y las medidas de mitigación que puedes comunicar. Crea el acceso a la plataforma y comprueba quién puede usarlo. Hacerlo durante un incidente consume horas que no sobran.

### 5. Hacer un simulacro sencillo

Plantea un caso ficticio un viernes por la tarde: aparecen pruebas de que una versión del producto está siendo atacada. ¿Cómo se detecta? ¿Quién recibe el aviso? ¿Quién decide? ¿Qué información puede enviarse antes de 24 horas? El simulacro descubrirá dependencias y silencios que un documento no muestra.

## Qué puede esperar hasta 2027 y qué no

La evaluación de riesgos de ciberseguridad, la documentación técnica, la gestión de vulnerabilidades durante el periodo de soporte, la evaluación de conformidad y el marcado correspondiente forman parte del trabajo más amplio de la CRA. La [Comisión ha publicado orientaciones de implementación](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-timely-cyber-resilience-act-implementation) para ayudar a empresas de todos los tamaños a preparar este recorrido antes de la aplicación general de diciembre de 2027.

Lo que no puede esperar es la capacidad de notificar los casos que ya entran en el artículo 14. Preparar ese proceso ahora también adelanta parte del trabajo posterior: inventario de productos, responsables, versiones, dependencias y registro de incidentes.

Si el producto también incorpora inteligencia artificial, la CRA y el AI Act resuelven cuestiones distintas. Puedes empezar por nuestro artículo sobre [qué documentar cuando una empresa utiliza IA](/es/blog/alfabetizacion-ia-empresas-que-documentar/) para separar gobernanza de IA, seguridad del producto y supervisión humana.

## Checklist rápida

- [ ] Sabemos qué productos pueden estar dentro del ámbito de la CRA.
- [ ] Hemos identificado quién actúa legalmente como fabricante.
- [ ] Tenemos un canal monitorizado para recibir avisos de seguridad.
- [ ] Hay una persona responsable y una sustituta.
- [ ] Podemos escalar un caso y enviar el aviso inicial dentro de 24 horas.
- [ ] Tenemos preparado el acceso a la plataforma de ENISA.
- [ ] Conservamos versiones, evidencias, decisiones y medidas adoptadas.
- [ ] Hemos programado un simulacro y una revisión de la preparación para 2027.

Si desarrollas o comercializas software y aún no tienes claro el alcance, una [consultoría tecnológica](/es/consultoria/) puede ayudarte a ordenar productos, responsables y el proceso de respuesta antes de decidir qué medidas técnicas implementar. Si después necesitas adaptar el producto o automatizar registros y alertas, podemos abordarlo desde [software y automatizaciones](/es/automatizaciones/) con el alcance ya definido.

## Fuentes oficiales

- [Comisión Europea: resumen del Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cra-summary)
- [Comisión Europea: obligaciones de notificación](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting)
- [ENISA: lanzamiento de la Single Reporting Platform](https://www.enisa.europa.eu/news/the-cra-single-reporting-platform-is-launched)
- [EUR-Lex: Reglamento (UE) 2024/2847](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024R2847)
