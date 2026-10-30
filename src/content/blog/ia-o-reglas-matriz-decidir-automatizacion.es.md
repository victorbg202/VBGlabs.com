---
title: "¿IA o reglas? Matriz para decidir cómo automatizar un proceso"
description: "Una matriz práctica de 10 puntos para decidir si un proceso necesita IA, reglas deterministas o un enfoque híbrido, con ejemplos y criterios de control."
slug: "ia-o-reglas-matriz-decidir-automatizacion"
lang: "es"
translationGroup: "ai-or-rules-automation-decision-matrix"
category: "Automatización con IA"
date: 2026-10-30
relatedSlugs: ["que-vale-la-pena-automatizar", "ficha-proceso-una-pagina-antes-automatizar", "calcular-coste-tarea-manual-automatizar", "rag-pymes-asistente-ia-documentos"]
---

No todos los procesos que parecen “inteligentes” necesitan inteligencia artificial. Si las entradas son estructuradas y la decisión se puede explicar mediante condiciones estables, las reglas suelen ser más baratas, predecibles y fáciles de auditar. La IA aporta valor cuando hay que interpretar lenguaje, documentos o situaciones variables. En muchos casos, la mejor arquitectura es híbrida: la IA interpreta; las reglas validan y deciden qué se puede ejecutar.

Esta matriz permite comparar las tres opciones antes de elegir un modelo o una plataforma. No calcula el retorno económico: primero determina **qué tipo de automatización encaja con el trabajo real**.

## Las tres opciones que estás comparando

**Automatización mediante reglas.** Ejecuta condiciones explícitas: si ocurre A, haz B. Es adecuada para campos estructurados, cálculos, comprobaciones exactas, cambios de estado e integraciones con criterios estables.

**Automatización con IA.** Utiliza un modelo para clasificar, extraer, resumir, redactar o interpretar entradas que no siempre tienen la misma forma. Trabaja con probabilidades: puede ofrecer una respuesta útil sin que necesariamente sea exacta.

**Automatización híbrida.** Asigna cada parte al mecanismo más adecuado. Por ejemplo, una IA extrae datos de un documento; unas reglas comprueban importes y campos obligatorios; una persona revisa las excepciones.

La decisión no es “tecnología antigua o tecnología moderna”. Es una elección sobre control, variabilidad y coste. Antes de aplicar la matriz, describe el proceso con la [ficha de una página](/es/blog/ficha-proceso-una-pagina-antes-automatizar/): entrada, resultado, responsable, excepciones y consecuencia de un error.

## Matriz de 10 puntos: puntúa la necesidad de IA

Valora cada dimensión con **0, 1 o 2 puntos**. Puntúa el proceso tal como funciona hoy, no como te gustaría que funcionase.

| Dimensión | 0 puntos | 1 punto | 2 puntos |
|---|---|---|---|
| Variabilidad de la entrada | Campos o valores estructurados | Pocos formatos conocidos | Texto, voz o documentos muy variables |
| Interpretación necesaria | Condiciones exactas | Algunas ambigüedades acotadas | Hay que entender significado, intención o contexto |
| Salida correcta | Una única respuesta exacta | Varias respuestas aceptables con límites | Hay que redactar, resumir o recomendar |
| Verificación | Se comprueba con una fórmula o regla | Se puede contrastar con datos o fuentes | Requiere juicio humano frecuente |
| Cambio y excepciones | Proceso estable y pocas excepciones | Cambios periódicos controlados | Casos nuevos y lenguaje cambiante |

Suma los puntos:

- **0–3: prioriza reglas.** La IA probablemente añade coste e incertidumbre sin resolver un problema real.
- **4–6: plantea un flujo híbrido.** Existe una parte interpretativa, pero también decisiones que conviene mantener deterministas.
- **7–10: la IA puede ser central.** Seguirás necesitando validaciones, límites y supervisión según el riesgo.

La puntuación no aprueba automáticamente el proyecto. Solo orienta la arquitectura. Después hay que revisar volumen, datos, impacto del error y coste de mantenimiento.

## El filtro de riesgo puede cambiar el resultado

Haz una segunda lectura antes de automatizar. Cuanto más grave sea una decisión incorrecta, menos autonomía debería tener una salida probabilística.

| Si la salida... | Control mínimo razonable |
|---|---|
| prepara un borrador interno | revisión rápida antes de utilizarlo |
| clasifica o extrae datos | comprobaciones de formato, totales y campos obligatorios |
| envía un mensaje externo | aprobación o límites estrictos para casos de bajo riesgo |
| modifica un registro importante | validación contra el sistema de origen y registro de actividad |
| autoriza pagos, compromisos o decisiones sensibles | decisión humana explícita |

Una puntuación alta en necesidad de IA no justifica darle libertad total. Puede indicar precisamente que el problema es ambiguo y necesita a una persona en los puntos críticos.

## Ejemplo 1: derivar correos entrantes

Una empresa recibe consultas comerciales, incidencias, facturas y mensajes de proveedores en un buzón común.

- Las entradas son texto libre y varían mucho: **2 puntos**.
- Hay que entender la intención: **2 puntos**.
- La salida es una categoría y un destinatario: **0 puntos**.
- Se puede verificar con categorías y muestras revisadas: **1 punto**.
- Aparecen expresiones nuevas, pero el circuito interno es estable: **1 punto**.

**Total: 6 puntos.** La opción razonable es híbrida. La IA propone la categoría y extrae datos básicos. Las reglas bloquean adjuntos peligrosos, exigen campos mínimos, aplican prioridades conocidas y envían los casos de baja confianza a una persona. El modelo no debería decidir por sí solo que una incidencia está resuelta.

## Ejemplo 2: avisar de una factura que supera un límite

El sistema ya dispone del total, el proveedor y el centro de coste en campos estructurados. La empresa quiere avisar cuando el importe supere 2.000 € o falte la aprobación.

La variabilidad y la interpretación son prácticamente nulas; la respuesta correcta es exacta y fácil de verificar. La puntuación sería **0 o 1**. Una regla es suficiente. Añadir un modelo haría más difícil explicar por qué se ha enviado o no un aviso.

Si antes hay que leer PDF de formatos diferentes, la decisión cambia solo en el primer paso: la IA puede extraer los campos, pero las reglas siguen comprobando el total y el umbral. Esta separación es la base de un buen flujo híbrido.

## Ejemplo 3: responder preguntas sobre documentación interna

Las preguntas pueden formularse de muchas maneras y la respuesta debe construirse a partir de manuales vigentes. La puntuación probablemente será alta. Un asistente con recuperación de fuentes puede encajar mejor que cientos de reglas de palabras clave.

Eso no convierte el chat en una fuente de autoridad. Hay que limitar los documentos accesibles, citarlos, permitir que el asistente indique que no encuentra respuesta y derivar las consultas sensibles. La guía sobre [asistentes RAG para pymes](/es/blog/rag-pymes-asistente-ia-documentos/) desarrolla estos controles.

## Errores habituales al elegir el enfoque

### Poner IA delante de un problema de datos

Si faltan campos, existen duplicados o nadie sabe qué versión es correcta, el modelo no arreglará el proceso. Puede ocultar el desorden detrás de una respuesta convincente. Ordena las fuentes y asigna responsables antes de automatizar.

### Convertir todas las excepciones en prompts

Un prompt con decenas de condiciones contradictorias es una regla mal ubicada. Los límites exactos —importes, fechas, permisos, estados— deberían vivir en código o configuración verificable.

### Exigir un 100% de autonomía

Automatizar los casos claros y enviar el resto a revisión puede aportar más valor que perseguir una cobertura completa. Define una salida segura para baja confianza, datos incompletos y situaciones imprevistas.

### Comparar solamente el precio del modelo

El coste real incluye integraciones, pruebas, revisiones, monitorización, incidencias y cambios. Utiliza la [calculadora del coste de una tarea manual](/es/blog/calcular-coste-tarea-manual-automatizar/) para comparar el ahorro con la implantación y el mantenimiento, no solo con el consumo de la API.

## Plantilla copiable para una decisión real

```text
PROCESO:
RESULTADO QUE NECESITAMOS:

PUNTUACIÓN (0–2)
Variabilidad de la entrada:
Interpretación necesaria:
Salida correcta:
Verificación:
Cambio y excepciones:
TOTAL / 10:

RIESGO SI SE EQUIVOCA:
QUÉ PUEDE EJECUTAR SIN APROBACIÓN:
QUÉ DEBE VALIDAR UNA REGLA:
QUÉ DEBE REVISAR UNA PERSONA:
CÓMO MEDIREMOS CALIDAD Y COSTE:

DECISIÓN: reglas / IA / híbrido / no automatizar todavía
```

Realiza este ejercicio con tres procesos candidatos, no solo con el que parezca más atractivo. La guía sobre [qué vale la pena automatizar](/es/blog/que-vale-la-pena-automatizar/) te ayudará a priorizar por frecuencia, impacto y riesgo.

## La buena decisión separa interpretación, control y ejecución

Una automatización con IA sólida no obliga al modelo a hacerlo todo. Define qué información debe interpretar, qué condiciones se deben comprobar de forma exacta y qué nivel de incertidumbre aceptará una persona. Esta separación facilita las pruebas, reduce sorpresas y permite sustituir una pieza sin rehacer todo el proceso.

Si quieres aplicar la matriz a un proceso real, la [consultoría de IA](/es/consultoria/) puede convertirlo en un alcance, unos controles y una estimación de coste. Cuando el enfoque ya está validado, podemos construir una [automatización con IA](/es/automatizaciones/) que combine modelos, reglas y revisión humana donde corresponde.
