---
title: "RAG para pymes: cómo crear un asistente de IA con tus documentos"
description: "Guía práctica para saber cuándo conviene un asistente RAG, cómo preparar las fuentes, controlar permisos, probar las respuestas y empezar con un piloto útil."
slug: "rag-pymes-asistente-ia-documentos"
lang: "es"
translationGroup: "rag-small-business-ai-assistant-documents"
category: "Inteligencia artificial"
date: 2026-10-26
relatedSlugs: ["ia-para-pymes-por-donde-empezar", "alfabetizacion-ia-empresas-que-documentar", "ficha-proceso-una-pagina-antes-automatizar"]
---

Un asistente RAG permite que una IA responda a partir de la documentación que controla tu empresa: procedimientos, manuales, catálogos, preguntas frecuentes o condiciones de servicio. Cuando recibe una consulta, busca los fragmentos relevantes, se los aporta al modelo y genera una respuesta que puede mostrar las fuentes utilizadas. Es una opción interesante cuando el conocimiento existe pero cuesta encontrarlo; no sirve para arreglar por arte de magia unos documentos desordenados ni garantiza respuestas correctas por sí sola.

## Qué es RAG, explicado sin jerga

RAG significa *retrieval-augmented generation*, o generación aumentada por recuperación. El concepto se formalizó en un [trabajo presentado en NeurIPS en 2020](https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html): combinar la capacidad de un modelo generativo con una memoria externa que pueda consultar.

En una implementación empresarial sencilla, el recorrido es el siguiente:

1. La empresa selecciona y prepara las fuentes autorizadas.
2. El sistema divide los documentos en fragmentos y los indexa para poder buscarlos.
3. Cuando llega una pregunta, recupera los fragmentos que probablemente contienen la respuesta.
4. El modelo redacta la respuesta con ese contexto y muestra la procedencia, si se ha configurado así.

A diferencia de un chat general, el asistente no depende solo del conocimiento incorporado al modelo. Tampoco hace falta entrenar un modelo desde cero cada vez que cambia un manual: normalmente se actualiza la colección documental y se vuelve a indexar. Así resulta más sencillo mantener el conocimiento al día y revisar de dónde ha salido una respuesta.

## Cuándo puede aportar valor a una pyme

Un RAG suele tener sentido cuando coinciden cuatro condiciones:

- hay preguntas repetitivas que consumen tiempo;
- las respuestas ya existen en documentos identificables;
- la documentación cambia y hay que trabajar con la versión vigente;
- poder citar o abrir la fuente es importante para comprobar el resultado.

Algunos usos razonables son un asistente interno sobre procedimientos, una primera ayuda para atención al cliente, una búsqueda guiada en manuales técnicos o un apoyo para preparar respuestas comerciales a partir de un catálogo aprobado.

El valor no está en “tener un chatbot”. Está en reducir el tiempo que una persona dedica a localizar información y darle una respuesta verificable con la que pueda seguir trabajando. Si estás valorando distintos procesos, la guía sobre [por dónde empezar con IA en una pyme](/es/blog/ia-para-pymes-por-donde-empezar/) puede ayudarte a priorizarlos.

## Cuándo no es la solución adecuada

RAG no es la mejor respuesta para cualquier necesidad de información.

**Si los datos son transaccionales y deben ser exactos al segundo**, como el stock disponible o el estado actual de un pago, es preferible consultar directamente el sistema de origen mediante una integración. Un documento indexado podría estar desactualizado.

**Si la documentación es contradictoria o no tiene responsable**, el asistente solo hará más accesible el desorden existente. Primero hay que decidir qué versión es válida.

**Si hay muy pocas consultas**, quizá sea más eficiente mejorar el buscador, la estructura de carpetas o las preguntas frecuentes.

**Si la respuesta activa decisiones sensibles**, el asistente debería ayudar a una persona, no decidir o ejecutar sin controles. Aprobar un pago, interpretar un contrato o dar instrucciones con impacto en la salud no es lo mismo que localizar un procedimiento interno.

## El trabajo importante empieza antes del modelo

La calidad de un RAG depende mucho de las fuentes. Antes de programar, conviene crear un inventario con estos datos:

| Campo | Pregunta práctica |
|---|---|
| Fuente | ¿Qué documento o sistema contiene la información? |
| Propietario | ¿Quién confirma que el contenido es correcto? |
| Vigencia | ¿Cómo sabremos que existe una versión nueva? |
| Acceso | ¿Qué perfiles pueden consultarlo? |
| Sensibilidad | ¿Incluye datos personales, confidenciales o contractuales? |
| Exclusión | ¿Qué no debe entrar nunca en el asistente? |

No hace falta empezar con todo el archivo de la empresa. Es mejor una colección pequeña, coherente y con responsables claros que miles de ficheros sin control. Elimina duplicados, separa los documentos históricos, conserva títulos y fechas, y transforma las tablas o PDF difíciles de leer cuando sea necesario.

La [ficha de proceso de una página](/es/blog/ficha-proceso-una-pagina-antes-automatizar/) puede ayudarte a documentar quién pregunta, qué resultado necesita y qué sucede después de recibir la respuesta.

## Define el contrato de respuesta

Un buen piloto debe concretar cómo se comportará el asistente. Por ejemplo:

- responder solo con las fuentes autorizadas;
- citar el documento y, si es posible, la sección utilizada;
- indicar con claridad cuando no encuentra información suficiente;
- no completar huecos con una suposición presentada como un hecho;
- mostrar la fecha o versión de la fuente cuando sea relevante;
- derivar a una persona las preguntas sensibles o fuera de alcance.

Ese “no lo sé” es una función, no un fallo. El [perfil de riesgos de la IA generativa del NIST](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) recuerda que los modelos pueden presentar información falsa con apariencia de certeza. Aportar contexto con RAG puede reducir este problema en un ámbito concreto, pero no lo elimina: hay que probar las respuestas y mantener una vía de revisión.

## Los permisos deben aplicarse antes de recuperar información

Si dirección, administración y el servicio técnico no pueden ver los mismos documentos, el asistente tampoco debería tratarlos igual. No basta con escribir en el prompt “no muestres información confidencial”.

El sistema debe conocer la identidad y el perfil de la persona, filtrar las fuentes autorizadas antes de enviar contexto al modelo y registrar los accesos relevantes. También hay que decidir qué guarda el historial, durante cuánto tiempo y quién puede revisarlo. Estas decisiones deben encajar con el inventario y las reglas internas de IA; la guía sobre [qué documentar cuando una empresa utiliza IA](/es/blog/alfabetizacion-ia-empresas-que-documentar/) ofrece una base práctica.

## Cómo probar un RAG antes de abrirlo a todo el equipo

Una demo con cinco preguntas fáciles no es una validación. Prepara un conjunto de preguntas reales antes del piloto:

- preguntas directas con una respuesta clara;
- distintas formas de preguntar lo mismo;
- preguntas que exigen combinar dos fragmentos;
- consultas con documentos parecidos o versiones antiguas;
- preguntas fuera de alcance que el asistente debe rechazar;
- intentos de acceder a información de otro perfil.

Para cada prueba, anota la respuesta esperada, la fuente correcta y si el asistente debería responder o abstenerse. Después revisa, como mínimo, cuatro dimensiones: si ha recuperado el documento adecuado, si la respuesta está respaldada por ese documento, si la cita resulta útil y si respeta los permisos.

No te fijes solo en un porcentaje global. Un error menor en una pregunta informativa no tiene el mismo impacto que exponer una condición confidencial o inventar una excepción. Clasifica las pruebas por riesgo y define qué fallos impiden desplegar el sistema.

## Un ejemplo ilustrativo

Imaginemos una distribuidora técnica con manuales de producto, procedimientos de instalación y condiciones de devolución. El personal pierde tiempo buscando entre carpetas y a menudo termina preguntando a la misma persona experta.

El primer piloto podría limitarse a una familia de productos y tres tipos de consulta. El asistente devuelve una respuesta breve, enlaza el manual y muestra la versión. Si las fuentes se contradicen o la pregunta trata una excepción comercial, deriva la consulta. Durante unas semanas, el equipo valora las respuestas y registra los vacíos documentales.

El aprendizaje más valioso puede no ser técnico: quizá aparezcan manuales duplicados, criterios que solo conoce una persona o excepciones que nunca se habían escrito. Corregir esos huecos mejora tanto el asistente como el proceso real.

## Qué determina el coste

El coste no depende únicamente del modelo. En un proyecto RAG suelen pesar:

- limpieza, clasificación y actualización de contenidos;
- integración con carpetas, gestores documentales o aplicaciones;
- identidad, permisos y registro de actividad;
- volumen de documentos, consultas y contexto enviado al modelo;
- diseño de pruebas y revisión humana;
- monitorización, reindexación y mantenimiento.

Por eso conviene comparar el proyecto con el coste actual de buscar, interrumpir a personas expertas, repetir respuestas y corregir errores. Un piloto acotado permite medir uso, tiempo ahorrado y calidad antes de ampliar la inversión.

## Plan de piloto en cuatro semanas

**Semana 1:** elige un caso de uso, identifica usuarios, preguntas y fuentes. Define también lo que queda fuera.

**Semana 2:** limpia una colección pequeña, asigna responsables y configura permisos.

**Semana 3:** construye el flujo de recuperación y respuesta. Añade citas, abstención y derivación.

**Semana 4:** ejecuta las pruebas, ábrelo a un grupo reducido y registra preguntas fallidas, fuentes ausentes e incidentes.

Al terminar el piloto, la decisión no debería basarse solo en si “la demo es impresionante”. Debería responder a estas preguntas: ¿recupera la fuente correcta, reduce tiempo, respeta los accesos, sabe cuándo parar y su mantenimiento es asumible?

## Checklist antes de empezar

- [ ] Tenemos un problema concreto y suficientemente frecuente.
- [ ] Las respuestas existen en fuentes controladas.
- [ ] Cada fuente tiene responsable y criterio de vigencia.
- [ ] Los permisos están definidos por perfil.
- [ ] El asistente cita fuentes y puede decir que no lo sabe.
- [ ] Hay pruebas normales, difíciles, fuera de alcance y de permisos.
- [ ] Una persona recibe las consultas sensibles o dudosas.
- [ ] Mediremos calidad, uso, tiempo ahorrado y mantenimiento.

Si quieres saber si un RAG encaja con tus documentos, la [consultoría de IA](/es/consultoria/) puede convertir el caso de uso, las fuentes, los riesgos y los costes en un piloto concreto. Y si el caso ya está claro, podemos plantear una [automatización con IA](/es/automatizaciones/) que conecte el modelo con la documentación y los sistemas que utiliza el equipo.

## Fuentes

- [Lewis et al., “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks”, NeurIPS 2020](https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html)
- [NIST AI 600-1: Artificial Intelligence Risk Management Framework — Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
