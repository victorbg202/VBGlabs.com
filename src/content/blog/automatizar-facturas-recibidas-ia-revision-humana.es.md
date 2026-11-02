---
title: "Automatizar facturas recibidas con IA: de la entrada a la revisión humana"
description: "Guía práctica para captar facturas, extraer sus datos con IA, validarlos mediante reglas y enviar solo las excepciones a revisión humana."
slug: "automatizar-facturas-recibidas-ia-revision-humana"
lang: "es"
translationGroup: "incoming-invoice-ai-automation-human-review"
category: "Automatización con IA"
date: 2026-11-02
relatedSlugs: ["ia-o-reglas-matriz-decidir-automatizacion", "ficha-proceso-una-pagina-antes-automatizar", "calcular-coste-tarea-manual-automatizar", "factura-electronica-b2b-verifactu-nuevas-fechas"]
---

Automatizar facturas recibidas con IA no significa dejar que un modelo decida qué debe pagarse. Significa convertir documentos variables —PDF, imágenes o facturas adjuntas a un correo— en datos estructurados, comprobarlos con reglas y llevar a una persona únicamente los casos que necesitan criterio. El objetivo razonable es un circuito más ordenado y trazable, no una promesa de autonomía total.

## Por qué este proceso encaja con una automatización híbrida

Una factura combina dos trabajos distintos. Primero hay que interpretar un documento cuyo diseño cambia según el proveedor. Después hay que aplicar comprobaciones exactas: campos obligatorios, operaciones aritméticas, duplicados o correspondencia con datos conocidos.

La IA resulta útil en la parte variable: reconocer que el documento es una factura y localizar el número, la fecha, el proveedor, las bases, los impuestos y el total aunque cada plantilla sea diferente. Las reglas son mejores para aquello que debe ser determinista. Una persona mantiene el control cuando la lectura es dudosa, aparece una excepción o la acción posterior tiene consecuencias.

Esta separación coincide con la [matriz para decidir entre IA, reglas o un flujo híbrido](/es/blog/ia-o-reglas-matriz-decidir-automatizacion/): la IA interpreta; las reglas validan; la persona resuelve los casos que no cumplen las condiciones de seguridad.

## El flujo completo, paso a paso

### 1. Captar los documentos sin perder el contexto

El punto de entrada puede ser un buzón específico, un formulario de subida, una carpeta compartida o una integración con un sistema existente. El documento debe conservarse junto a información útil como el remitente, la fecha de recepción, el nombre original y el identificador del mensaje.

No conviene procesar todos los adjuntos como si fueran facturas. Una firma en forma de imagen, un albarán o un presupuesto pueden llegar por el mismo canal. El primer filtro debe descartar archivos irrelevantes y detectar formatos no admitidos.

### 2. Clasificar antes de extraer

Una clasificación inicial puede distinguir factura, abono, albarán, presupuesto o documento desconocido. Esta decisión determina qué campos deben buscarse y qué reglas se aplicarán después.

El sistema debe guardar la categoría propuesta, la confianza y el motivo de derivación si no puede continuar. Cuando el documento es ilegible, está protegido o combina varias facturas, es preferible crear una excepción antes que improvisar datos.

### 3. Extraer los datos con IA documental

El conjunto mínimo dependerá del proceso, pero normalmente puede incluir:

- proveedor e identificador fiscal;
- número y fecha de factura;
- bases imponibles, tipos y cuotas de impuesto;
- total y moneda;
- fecha de vencimiento, si aparece;
- referencia de pedido, proyecto o centro de coste, cuando sea necesaria;
- líneas de detalle, solo si el caso de uso real las necesita.

Cada valor debería conservar su procedencia: página, fragmento o coordenada del documento, junto a una confianza estimada. Así la persona revisora puede ver el dato al lado de la zona original y no tiene que volver a leer la factura completa.

### 4. Validar mediante reglas exactas

Un modelo puede leer «1.284,30 €», pero no debería decidir por sí solo si ese valor es coherente. Después de la extracción, aplica controles como los siguientes:

- presencia de los campos obligatorios;
- formato de fechas, moneda e identificadores fiscales;
- suma de bases, impuestos y total con la tolerancia definida;
- número de factura ya registrado para el mismo proveedor;
- proveedor existente o pendiente de alta;
- coincidencia con un pedido o centro de coste, si el proceso lo exige;
- importes o vencimientos fuera de los límites establecidos.

Estas comprobaciones deben estar en reglas verificables, no escondidas en un prompt.

### 5. Enviar a revisión solo lo que la necesita

La revisión humana funciona mejor cuando muestra una causa concreta. «Revisa esta factura» aporta poca información. «El total extraído no coincide con la suma de base e impuesto» o «posible duplicado del mismo proveedor» permite actuar con rapidez.

Define tres salidas:

1. **Preparada:** los campos necesarios superan las validaciones y el documento queda listo para el siguiente paso autorizado.
2. **Revisión:** falta un dato, la confianza es baja o una regla detecta una discrepancia.
3. **Rechazo técnico:** el archivo no puede leerse, está dañado o queda fuera del alcance.

La persona revisora debe poder corregir o confirmar el valor, cambiar la clasificación o marcar el documento como no procesable.

### 6. Organizar, exportar y conservar la trazabilidad

Cuando la factura ha sido validada, el flujo puede normalizar el nombre, asignar metadatos, guardarla y preparar una exportación al sistema de la empresa. Preparar datos no equivale a aprobar un pago.

Para cada documento conviene conservar el original, los datos extraídos, las validaciones ejecutadas, las correcciones y la persona o sistema que confirmó cada cambio. Si una factura vuelve a procesarse, la nueva versión no debería borrar el historial anterior.

## Lo que la IA no debería decidir por sí sola

La lectura documental y la decisión empresarial son cosas diferentes. Aunque la extracción sea buena, un modelo no debería autorizar pagos, crear proveedores definitivos, resolver discrepancias contractuales ni decidir el tratamiento contable o fiscal sin el control correspondiente.

Tampoco debe confundirse la gestión de facturas recibidas con la emisión. [VBG Facturación](/es/vbg-facturacion/) está orientado a recibir, organizar y preparar facturas entrantes para su revisión. No emite facturas de venta y no es un producto de cumplimiento VERI*FACTU. La guía sobre [factura electrónica B2B y VERI*FACTU](/es/blog/factura-electronica-b2b-verifactu-nuevas-fechas/) explica por qué recepción, intercambio y emisión son frentes diferentes.

## Ejemplo ilustrativo de un piloto

Imaginemos una empresa que recibe facturas en un buzón compartido. Actualmente, una persona descarga los adjuntos, renombra los archivos, copia seis campos en una hoja y pide aclaraciones cuando falta una referencia. El ejemplo es ficticio: muestra un posible alcance, no promete un resultado.

El piloto podría limitarse a facturas PDF de diez proveedores frecuentes. La IA clasifica el documento y extrae proveedor, identificador fiscal, número, fecha, base, impuesto y total. Las reglas comprueban los cálculos, buscan duplicados y exigen la referencia del proyecto. Las facturas coherentes quedan preparadas; las demás aparecen en una cola con el motivo exacto.

No se automatiza el pago ni se modifica la contabilidad. Durante cuatro semanas, el equipo compara los datos con el documento, registra las correcciones y decide si se puede ampliar el alcance. Así se prueba la parte incierta sin convertir el piloto en una migración completa.

## Cómo medir si el piloto funciona

No uses solo el «porcentaje de acierto». Mide el proceso completo:

- porcentaje de documentos correctamente clasificados;
- precisión por campo y tasa de corrección;
- facturas que pasan directamente y facturas derivadas;
- tiempo medio de revisión por documento;
- motivos de excepción más frecuentes;
- duplicados o incoherencias detectados;
- coste por factura validada, incluida la revisión y el mantenimiento.

Un sistema puede leer bien el total y fallar a menudo en la referencia que necesita la empresa. La media ocultaría el problema. Separa los campos críticos de los informativos y define qué errores impiden continuar.

La [calculadora del coste de una tarea manual](/es/blog/calcular-coste-tarea-manual-automatizar/) ayuda a comparar el ahorro potencial con el coste del piloto, las integraciones y la revisión que seguirá siendo necesaria.

## Checklist antes de construir

- [ ] Hemos documentado la entrada, el resultado, el responsable y las excepciones.
- [ ] Sabemos qué tipos de documento entran y cuáles quedan fuera.
- [ ] Hemos definido solo los campos necesarios para continuar el proceso.
- [ ] Cada campo crítico tiene una validación o un criterio de revisión.
- [ ] Los duplicados se comprueban contra una fuente identificada.
- [ ] Una confianza baja genera una excepción segura.
- [ ] La persona revisora ve el valor y su posición en el documento.
- [ ] Las correcciones y decisiones quedan registradas.
- [ ] El piloto no autoriza pagos ni decisiones sensibles.
- [ ] Mediremos calidad, tiempo de revisión, excepciones y coste total.

Antes de elegir una herramienta, completa la [ficha de proceso de una página](/es/blog/ficha-proceso-una-pagina-antes-automatizar/). Si quieres convertir el circuito real de tu empresa en un piloto acotado, VBG Labs puede ayudarte a definir campos, reglas, excepciones y métricas desde la [consultoría de IA](/es/consultoria/), o implementar la conexión entre correo, documentos y sistemas como una [automatización con IA](/es/automatizaciones/). El objetivo no es eliminar la revisión, sino reservarla para los casos donde aporta criterio.
