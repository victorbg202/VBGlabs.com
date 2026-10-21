---
title: "Ficha de proceso en una página: la plantilla antes de automatizar"
description: "Documenta un proceso en una sola página, descubre excepciones y valora si está preparado para automatizarse con una plantilla y una puntuación de 0 a 10."
slug: "ficha-proceso-una-pagina-antes-automatizar"
lang: "es"
translationGroup: "one-page-process-template-before-automation"
category: "Automatización"
date: 2026-10-16
relatedSlugs: ["que-vale-la-pena-automatizar", "calcular-coste-tarea-manual-automatizar", "software-estandar-no-code-o-a-medida-comparativa", "implantar-crm-pyme-proceso-comercial", "prefijo-400-llamadas-comerciales-que-revisar-empresa"]
---

Si un proceso no puede explicarse en una página, todavía no está listo para automatizarlo. No necesitas un manual de cincuenta páginas: necesitas saber qué lo activa, qué datos requiere, quién decide, qué excepciones aparecen y cómo comprobarás que ha terminado bien.

Esta ficha permite describir el proceso actual, descubrir huecos antes de invertir y separar las decisiones humanas de los pasos repetitivos. Puedes completarla en una reunión breve y utilizarla después para comparar propuestas, preparar un piloto o decidir que primero toca ordenar el proceso.

## La plantilla para copiar

Copia este bloque en un documento y complétalo con quienes realizan el trabajo. Describe lo que ocurre hoy, no el proceso ideal que te gustaría tener.

```text
NOMBRE DEL PROCESO:
OBJETIVO: ¿Qué resultado de negocio debe producir?

INICIO: ¿Qué hecho, mensaje o fecha lo activa?
FINAL: ¿Qué evidencia confirma que ha terminado bien?
FRECUENCIA Y VOLUMEN: ¿Cuántos casos hay al día, semana o mes?

ENTRADAS: ¿Qué datos o documentos necesita?
SALIDAS: ¿Qué crea, actualiza, envía o registra?

PASOS ACTUALES:
1.
2.
3.

DECISIONES: ¿Qué reglas determinan el siguiente paso?
EXCEPCIONES: ¿Qué se sale del recorrido normal y con qué frecuencia?

RESPONSABLE: ¿Quién responde por el resultado?
PARTICIPANTES: ¿Quién ejecuta, revisa o aprueba?
SISTEMAS: Correo, hojas de cálculo, ERP, CRM, carpetas, web...

DATOS SENSIBLES Y PERMISOS: ¿Qué se trata y quién puede verlo?
ERRORES Y REPROCESOS: ¿Qué suele fallar y qué cuesta corregirlo?

CONTROL HUMANO: ¿En qué punto hay que revisar, aprobar o poder detener?
PLAN B: ¿Qué haremos si falla una herramienta o integración?
MÉTRICA: Tiempo, errores, casos pendientes, plazo de respuesta...
```

Una respuesta desconocida no es un fracaso. Es un dato útil: indica qué debe medirse o acordarse antes de construir.

## Cómo completarla sin crear más burocracia

### 1. Sigue un caso real de principio a fin

No empieces preguntando “¿cómo funciona normalmente?”. Elige un caso reciente y reconstruye lo que ocurrió: qué correo llegó, quién lo abrió, qué copió, dónde lo guardó y cómo supo que la tarea estaba terminada. Después contrástalo con un segundo caso diferente.

Así aparecen pasos que rara vez se explican: buscar un dato en una conversación, cambiar el nombre de un archivo, esperar una aprobación o comprobar manualmente que no existe un duplicado.

### 2. Define el inicio y el final mediante evidencias

“Cuando llega una factura” es mejor que “cuando administración tiene trabajo”. “Factura validada, registrada y archivada con identificador” es mejor que “cuando está hecha”. Un inicio observable permite activar el flujo; un final verificable permite comprobar si ha funcionado.

Si el proceso tiene varios finales, anótalos. Un caso puede quedar completado, rechazado, pendiente de información o escalado. Ocultar esos resultados solo traslada el problema a la futura automatización.

### 3. Separa acciones de decisiones

Acciones como descargar un adjunto, crear una carpeta o copiar un campo suelen seguir una regla. Decisiones como aceptar una factura dudosa, priorizar una incidencia o aprobar una excepción pueden requerir contexto y responsabilidad humana.

No des por hecho que “usar IA” elimina esa frontera. La IA puede proponer una clasificación o extraer datos, pero hay que definir qué ocurre cuando la confianza es baja, quién revisa el resultado y cómo se corrige.

### 4. Escribe las excepciones antes de diseñar la solución

Pregunta al equipo qué sucede cuando falta un documento, el cliente responde tarde, existen dos formatos distintos, un importe no cuadra o el sistema principal no está disponible. Agrupa las excepciones que comparten respuesta.

No es necesario automatizarlas todas en el primer piloto. Sí hay que detectarlas, enviarlas a una cola visible y evitar que desaparezcan en el correo personal de alguien.

## Ejemplo ilustrativo: gestionar una factura recibida

Este ejemplo no describe un cliente real. Solo muestra el nivel de detalle útil.

- **Objetivo:** dejar una factura recibida identificada, revisada y disponible para la gestión administrativa.
- **Inicio:** llega un correo con un PDF adjunto a un buzón concreto.
- **Final:** el documento tiene proveedor, fecha, importe y estado de revisión, y queda archivado con un identificador único.
- **Pasos:** descargar, comprobar que es una factura, extraer campos, buscar duplicados, asignar proveedor, revisar y registrar.
- **Decisiones:** ¿es legible?, ¿ya existe?, ¿faltan datos?, ¿el importe exige aprobación adicional?
- **Excepciones:** documento protegido, varias facturas en un PDF, abono, proveedor nuevo o campo ilegible.
- **Control humano:** revisar valores dudosos y autorizar casos fuera de regla.
- **Plan B:** conservar el original y crear una tarea pendiente si fallan la extracción o el sistema.
- **Métrica:** tiempo hasta revisión, porcentaje de extracciones corregidas y casos pendientes.

La ficha no decide qué tecnología utilizar. Primero define el trabajo; después se valora una automatización, una función del software existente o una combinación. Para facturas recibidas, [VBG Facturación](/es/vbg-facturacion/) cubre organización y gestión documental, pero no debe confundirse con emisión de facturas ni con una solución de cumplimiento VERI*FACTU.

## Puntuación rápida: ¿está preparado para un piloto?

Puntúa cada criterio con **0, 1 o 2**. No es un cálculo de rentabilidad ni una garantía técnica; sirve para detectar lo que falta.

| Criterio | 0 puntos | 1 punto | 2 puntos |
|---|---|---|---|
| Inicio y final | Ambiguos | Uno de los dos es claro | Ambos son observables |
| Entradas | Cambian sin control | Hay varios formatos conocidos | Formatos y campos definidos |
| Reglas | Dependen de la memoria | Parte de las decisiones está escrita | Reglas y responsables claros |
| Excepciones | No se conocen | Se conocen pero no se miden | Están agrupadas y tienen salida |
| Sistemas y permisos | Acceso incierto | Integración parcial o manual | Accesos y límites verificados |

Interpreta el total con prudencia:

- **0–3:** ordena y observa antes de automatizar.
- **4–7:** prepara un piloto limitado con revisión humana.
- **8–10:** el proceso es buen candidato para una prueba técnica, si también tiene sentido económico.

Para analizar costes y ahorro potencial, utiliza la [calculadora de tareas manuales](/es/blog/calcular-coste-tarea-manual-automatizar/). Para decidir entre una herramienta estándar, no-code o desarrollo propio, consulta la [comparativa de software](/es/blog/software-estandar-no-code-o-a-medida-comparativa/).

## Errores habituales al documentar procesos

- **Hacer el mapa desde el despacho.** Quien ejecuta la tarea conoce pasos que no aparecen en los procedimientos.
- **Elegir un proceso demasiado grande.** “Gestionar clientes” no es un proceso piloto; “registrar una solicitud web y asignar su seguimiento” sí.
- **Confundir persona y rol.** Escribe “responsable comercial”, no solo un nombre propio.
- **Medir únicamente velocidad.** Incluye errores, pendientes, reprocesos y calidad del resultado.
- **Dibujar solo el camino feliz.** Las excepciones determinan buena parte del mantenimiento.
- **No definir una marcha atrás.** Hay que poder detener el flujo, corregir datos y continuar manualmente.

## Cuatro resultados posibles, y todos pueden ser correctos

La ficha puede llevar a automatizar todo el recorrido, asistir solamente una parte, mejorar una función de la herramienta actual o no automatizar. Quizá el problema real sea una aprobación sin responsable, datos de entrada inconsistentes o una tarea que ocurre demasiado pocas veces.

Antes de avanzar, aplica también los criterios de [qué merece la pena automatizar](/es/blog/que-vale-la-pena-automatizar/): repetición, estabilidad, volumen y coste del error. Una buena automatización empieza por un proceso suficientemente claro y un objetivo medible, no por una herramienta de moda.

Si quieres convertir una ficha completada en un piloto, una [revisión de automatización](/es/automatizaciones/) puede validar accesos, excepciones, control humano y mantenimiento antes de construir. La propia página sirve como punto de partida y evita iniciar el proyecto con supuestos distintos.
