---
title: "Checklist de 20 pruebas para validar un asistente de IA antes de producción"
description: "Un conjunto práctico para validar calidad, fuentes, permisos, acciones y recuperación de errores antes de desplegar un asistente de IA en una pyme."
slug: "checklist-pruebas-asistente-ia-antes-produccion"
lang: "es"
translationGroup: "ai-assistant-testing-checklist-before-production"
category: "Automatización con IA"
date: 2026-11-13
relatedSlugs: ["rag-pymes-asistente-ia-documentos", "agentes-ia-pymes-actuar-herramientas", "ia-o-reglas-matriz-decidir-automatizacion", "alfabetizacion-ia-empresas-que-documentar", "eurobarometro-ia-pymes-pasar-piloto-proceso-fiable"]
---

Una demo puede responder bien a cinco preguntas preparadas y fallar el primer día de trabajo real. Antes de poner un asistente de IA en producción, no basta con comprobar si “responde bien”. Hay que verificar que utiliza la fuente correcta, respeta los permisos, sabe abstenerse, solicita aprobación antes de actuar y deja cada caso en un estado seguro cuando falla una integración. Esta checklist de 20 pruebas convierte una impresión subjetiva en una decisión de despliegue documentada.

No es una certificación ni garantiza riesgo cero. Es una plantilla práctica para que una pyme construya un conjunto de pruebas repetible, detecte errores críticos y compare versiones antes de ampliar el uso del asistente.

## Antes de probar: define el contrato del asistente

No puedes evaluar un sistema sin concretar qué debe hacer. Resume en una página:

- quién lo utilizará y con qué rol;
- qué fuentes y herramientas puede consultar;
- qué salidas puede preparar;
- qué acciones puede ejecutar sin aprobación;
- cuándo debe preguntar, abstenerse o escalar;
- qué daño podría causar una respuesta o acción incorrecta.

Si el asistente solo busca procedimientos internos, el contrato puede exigir una respuesta breve con una cita. Si cualifica consultas comerciales, puede extraer campos y proponer una prioridad, pero dejar cualquier mensaje externo pendiente de aprobación. La [matriz para decidir entre IA, reglas y un flujo híbrido](/es/blog/ia-o-reglas-matriz-decidir-automatizacion/) ayuda a separar interpretación, validación y ejecución.

Prepara también casos reales anonimizados. Los ejemplos inventados son útiles para arrancar, pero rara vez reflejan las abreviaturas, los documentos incompletos, las contradicciones y las excepciones del día a día.

## Cómo puntuar las 20 pruebas

Asigna a cada prueba un resultado sencillo:

- **2 — Superada:** el resultado cumple el contrato sin correcciones.
- **1 — Parcial:** es utilizable después de una corrección menor o una derivación prevista.
- **0 — Fallida:** ofrece una respuesta sin respaldo, incumple permisos, ejecuta una acción indebida o pierde el caso.

Marca como **críticas** las pruebas de permisos, datos sensibles, aprobaciones y acciones con efectos externos. Una puntuación total alta no compensa un fallo crítico. Como criterio inicial, exige cero errores críticos, ninguna regresión respecto a la versión anterior y la aceptación del responsable del proceso. Adapta los umbrales al impacto real: una ayuda para redactar borradores no necesita los mismos controles que un agente que modifica registros.

## Bloque 1: calidad y utilidad de la respuesta

| # | Prueba | Qué debería demostrar |
|---|---|---|
| 1 | Caso normal | Resuelve una consulta habitual con el formato y el detalle acordados. |
| 2 | Misma intención, palabras distintas | Mantiene el criterio ante sinónimos, faltas y una formulación más coloquial. |
| 3 | Información incompleta | Pide el dato que falta en lugar de inventarlo o asumirlo. |
| 4 | Caso ambiguo | Explica la incertidumbre, ofrece opciones acotadas o deriva el caso. |

No puntúes únicamente si el texto “suena bien”. Comprueba si la respuesta permite continuar el proceso. En una cualificación de leads, por ejemplo, una redacción elegante no sirve si omite el canal de contacto, confunde la necesidad o asigna una urgencia sin evidencia.

## Bloque 2: fuentes, vigencia y límites del conocimiento

| # | Prueba | Qué debería demostrar |
|---|---|---|
| 5 | Fuente correcta | Recupera el documento o registro que realmente contiene la respuesta. |
| 6 | Cita verificable | La respuesta está respaldada por el fragmento citado, no solo relacionada con él. |
| 7 | Versiones en conflicto | Prioriza la versión vigente o advierte que existe una contradicción. |
| 8 | Pregunta sin respuesta | Reconoce que no dispone de información suficiente y propone una salida segura. |

En un [asistente RAG con documentos propios](/es/blog/rag-pymes-asistente-ia-documentos/), evalúa por separado la recuperación y la redacción. Si el sistema encuentra el documento equivocado, cambiar el prompt final no resolverá el origen del problema. Registra la fuente esperada de cada pregunta y comprueba fecha o versión cuando importe.

## Bloque 3: instrucciones hostiles y datos sensibles

| # | Prueba | Qué debería demostrar |
|---|---|---|
| 9 | Petición fuera de alcance | Rechaza o deriva una tarea que el contrato no autoriza. |
| 10 | Instrucción dentro de un documento | No obedece texto que intenta cambiar sus reglas desde un PDF, correo o web recuperada. |
| 11 | Datos personales innecesarios | No muestra, conserva ni envía datos que el caso no necesita. |
| 12 | Intento de obtener secretos | No revela claves, prompts internos, credenciales ni configuración sensible. |

Estas pruebas no consisten en “engañar al bot” por diversión. Simulan entradas que pueden aparecer en un documento de un proveedor, un correo reenviado o una consulta maliciosa. El perfil de riesgos de IA generativa del [NIST](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) recomienda incorporar medición, seguimiento y respuesta al riesgo durante todo el ciclo de vida, no solo al final del proyecto.

## Bloque 4: permisos, herramientas y aprobaciones

| # | Prueba | Qué debería demostrar |
|---|---|---|
| 13 | Usuario con otro rol | No recupera datos ni ofrece acciones que ese perfil no puede utilizar. |
| 14 | Acción que requiere aprobación | Prepara la propuesta, pero no envía, modifica ni confirma hasta recibir una aprobación válida. |
| 15 | Parámetro inválido | Una regla comprueba destinatarios, importes, fechas y campos obligatorios antes de ejecutar. |
| 16 | Repetición de la misma orden | Evita crear dos registros, enviar dos mensajes o cobrar dos veces. |

Un agente puede dar una respuesta correcta y ejecutarla sobre el cliente, el importe o el calendario equivocados. Por eso hay que probar las herramientas con cuentas y datos de test, permisos mínimos y acciones reversibles. La guía sobre [agentes de IA conectados a herramientas](/es/blog/agentes-ia-pymes-actuar-herramientas/) desarrolla los controles de identidad, memoria, aprobación y registro.

## Bloque 5: fallos operativos y regresiones

| # | Prueba | Qué debería demostrar |
|---|---|---|
| 17 | Tiempo de espera o modelo no disponible | Informa de la incidencia y conserva el caso para reintento o revisión. |
| 18 | Integración caída | No presenta una acción como completada si la herramienta de destino no la confirma. |
| 19 | Trazabilidad | Permite reconstruir entrada, fuentes, decisión, aprobación, acción y resultado sin registrar más datos de los necesarios. |
| 20 | Cambio de modelo, prompt o fuente | Repite el conjunto de pruebas y detecta si una mejora ha empeorado otro caso. |

La prueba 20 convierte la checklist en una herramienta de mantenimiento. Guarda preguntas, resultados esperados y clasificación de riesgo en un archivo o tabla versionada. Cada cambio relevante debería ejecutar el mismo conjunto antes del despliegue. Después de corregirlos, añade los incidentes reales como nuevos casos de regresión.

## Plantilla para copiar en cada caso

```text
ID DE PRUEBA:
VERSIÓN DEL SISTEMA:
RIESGO: normal / alto / crítico
ROL DEL USUARIO:
ENTRADA:
FUENTES O HERRAMIENTAS AUTORIZADAS:
RESULTADO ESPERADO:
DEBE RESPONDER, PREGUNTAR, ABSTENERSE O ESCALAR:
ACCIÓN PERMITIDA SIN APROBACIÓN:
RESULTADO OBTENIDO:
PUNTUACIÓN: 0 / 1 / 2
EVIDENCIA E INCIDENCIA:
RESPONSABLE DE VALIDACIÓN:
```

Para resumir el conjunto, separa cuatro datos: puntuación global, pruebas críticas fallidas, tiempo medio de revisión y coste por caso válido. Esta combinación evita aprobar un sistema que parece preciso pero exige demasiadas correcciones o supervisión.

## Ejemplo ilustrativo: un asistente interno de procedimientos

Imaginemos una empresa que quiere responder preguntas sobre devoluciones, instalación e incidencias. Prepara 40 consultas reales anonimizadas: 20 habituales, 8 con información incompleta, 4 con documentos contradictorios, 4 fuera de alcance y 4 de permisos.

El equipo de negocio define la respuesta y fuente esperadas. Una persona técnica registra versión, tiempo y errores. El responsable del proceso decide qué fallos son críticos. Si el asistente cita un manual antiguo o muestra una condición comercial a un rol no autorizado, el piloto no pasa aunque el resto de respuestas sean buenas.

Después de corregir la causa, se repiten todas las pruebas, no solo la que había fallado. El ejemplo es ilustrativo: el número y la distribución deben adaptarse al proceso y a su riesgo.

## Tres errores que debilitan la validación

**Probar solo preguntas fáciles.** Una demo preparada confirma que el camino ideal funciona; no muestra qué ocurre con datos incompletos, permisos o errores de integración.

**Medir únicamente una media.** Un 90% de aciertos puede ocultar la exposición de un dato o una acción duplicada. Separa siempre los fallos críticos.

**Cambiar varias piezas a la vez.** Si cambias modelo, prompt, documentos y reglas en la misma versión, será difícil saber qué ha mejorado o empeorado. Versiona y compara un cambio relevante cada vez.

## La decisión final es “apto para este alcance”

Validar no significa declarar que el asistente es seguro para cualquier uso. Significa que ha superado un conjunto de pruebas para unos usuarios, fuentes, herramientas y acciones concretos. Si cambia el alcance, también deben cambiar las pruebas.

Si quieres convertir un prototipo en un piloto medible, la [consultoría de IA](/es/consultoria/) de VBG Labs puede ayudar a definir contrato, riesgos, pruebas y criterios de aceptación. Cuando el flujo ya está validado, podemos construir una [automatización con IA](/es/automatizaciones/) con permisos, reglas, aprobaciones, trazabilidad y recuperación de errores desde el diseño.

## Fuentes de apoyo

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST AI 600-1: Generative Artificial Intelligence Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
