---
title: "SPF, DKIM y DMARC para pymes: protege tu dominio y mejora el correo"
description: "Guía práctica para inventariar remitentes, configurar SPF y DKIM, desplegar DMARC sin bloquear correo legítimo y verificar el resultado."
slug: "spf-dkim-dmarc-pymes-proteger-dominio-correo"
lang: "es"
translationGroup: "small-business-email-authentication-spf-dkim-dmarc"
category: "Ciberseguridad"
date: 2026-10-12
relatedSlugs: ["copias-seguridad-pymes-plan-restauracion", "primera-brecha-datos-agente-ia-pymes"]
---

Si envías correos con un dominio propio, configura SPF, DKIM y DMARC. Estos mecanismos ayudan a los servidores receptores a comprobar qué sistemas pueden enviar en tu nombre, si el mensaje conserva una firma válida y qué hacer cuando la verificación falla. También dificultan que alguien suplante el dominio en campañas de phishing.

No garantizan la llegada a la bandeja ni protegen una cuenta robada, pero son una base para defender la reputación del dominio.

## Qué hace cada mecanismo

**SPF** publica en el DNS qué servidores están autorizados para enviar correo para el dominio. El receptor compara el servidor que entrega el mensaje con esa lista. Si la empresa envía desde Microsoft 365, una plataforma de marketing y el formulario de la web, las fuentes legítimas deben contemplarse sin crear varios registros SPF separados.

**DKIM** añade una firma criptográfica a cada mensaje saliente. La clave privada permanece en el servicio emisor y la pública se publica en el DNS. El receptor puede verificar que una fuente autorizada firmó el mensaje y que las partes protegidas no cambiaron durante el trayecto.

**DMARC** relaciona el resultado con el dominio visible en `From:`. Para superar DMARC, SPF o DKIM —al menos uno— debe pasar y el dominio autenticado debe estar alineado con el que ve el destinatario. El propietario también puede solicitar informes y publicar una política para los mensajes que fallen.

El [RFC 9989 del IETF](https://www.rfc-editor.org/rfc/rfc9989.html), publicado en mayo de 2026, es el estándar DMARC vigente y sustituye a los RFC 7489 y 9091. Mantiene las políticas `none`, `quarantine` y `reject`, pero ya no incluye el antiguo parámetro `pct`. Si encuentras una plantilla que propone avanzar mediante `pct=10`, revísala con el proveedor: pertenece a la especificación anterior.

## Antes de tocar el DNS: inventaría todos los remitentes

El riesgo más frecuente no es escribir mal una etiqueta. Es olvidar una herramienta que también envía correo con el dominio. Prepara una lista con:

- buzones de Google Workspace, Microsoft 365 o el proveedor de alojamiento;
- formularios web y avisos del servidor;
- CRM, facturación, reservas y soporte;
- plataformas de newsletters o campañas;
- impresoras, escáneres, centralitas y aplicaciones antiguas;
- proveedores que envían comunicaciones en nombre de la empresa;
- dominios y subdominios que no deberían enviar nunca.

Para cada fuente, anota el dominio de `From:`, el servicio que entrega el mensaje, el responsable y si admite DKIM propio. Revisa correos reales, no solo las herramientas que el equipo recuerda.

Si una plataforma de marketing genera mucho volumen o no está completamente bajo tu control, valora enviar desde un subdominio, por ejemplo `novedades.empresa.es`. La [documentación de Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure) recomienda separar así determinados servicios externos para no mezclar sus problemas con la reputación del correo habitual.

## Paso 1: publica un único SPF correcto

SPF es un registro TXT en el DNS. El valor exacto debe proporcionarlo cada servicio emisor. Un ejemplo puramente ilustrativo sería:

`v=spf1 include:spf.proveedor.example -all`

No lo copies: `proveedor.example` no es un servicio real. Construye el registro siguiendo las instrucciones de los proveedores que utilizas.

Comprueba estos puntos:

1. Existe **un único registro SPF** por dominio. Si hay dos, no los mantengas separados: las fuentes deben combinarse en un registro válido.
2. Incluye todos los remitentes legítimos y elimina servicios que ya no se usan.
3. No añadas direcciones IP “por si acaso”. Cada autorización amplía quién puede enviar.
4. Controla el límite de consultas DNS. El [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208.html) limita a diez los términos que pueden provocar consultas durante la evaluación SPF.
5. Decide el final (`~all` o `-all`) con el proveedor después de verificar las fuentes. No adoptes un criterio más estricto sin pruebas.

SPF tiene una limitación importante: el reenvío puede romper su resultado al cambiar el servidor que entrega el correo. Por eso no debe utilizarse como única defensa.

## Paso 2: activa DKIM en cada servicio

DKIM no se inventa manualmente. En el panel del servicio de correo, genera o activa la firma para el dominio. El proveedor facilitará un selector y uno o varios registros TXT o CNAME que debes publicar en el DNS. Después vuelve al panel y confirma que los detecta.

Repite el proceso para cada plataforma que envíe en tu nombre. El correo corporativo puede estar bien firmado mientras la newsletter o las notificaciones de la web siguen usando el dominio del proveedor.

Google indica en sus [directrices para remitentes](https://support.google.com/mail/answer/81126?hl=en) que las claves DKIM para enviar a cuentas personales de Gmail deben tener al menos 1.024 bits y recomienda 2.048 cuando el proveedor lo permite. No cambies la longitud ni rotes claves sin seguir las instrucciones de la plataforma.

## Paso 3: despliega DMARC primero en observación

Cuando SPF y DKIM funcionen, publica DMARC en `_dmarc.tudominio.es`. Un registro inicial puede tener esta forma:

`v=DMARC1; p=none; rua=mailto:dmarc@tudominio.es`

Sustituye el dominio y utiliza un buzón preparado para los informes agregados. Como suelen llegar en XML, asigna un responsable o una herramienta que los resuma, revisando antes su tratamiento de datos.

Con `p=none`, solicitas información sin expresar una política de cuarentena o rechazo. Emplea los informes para responder:

- qué fuentes envían con el dominio;
- cuáles superan SPF y DKIM;
- si el dominio autenticado está alineado con `From:`;
- qué servicios legítimos fallan;
- si aparecen fuentes desconocidas o intentos de suplantación.

Cuando todas las fuentes legítimas estén identificadas y alineadas, avanza de forma controlada a `p=quarantine` y, finalmente, `p=reject`. La documentación oficial de Microsoft recomienda este despliegue gradual para evitar que una fuente legítima olvidada quede bloqueada. Con el estándar actual, prueba primero en un dominio o subdominio con menos volumen y cambia la política después de revisar resultados; no dependas del antiguo `pct`.

## Paso 4: verifica un correo real

Que los registros DNS sean visibles no demuestra que cada aplicación firme correctamente. Envía mensajes de prueba desde cada fuente a buzones de proveedores distintos y revisa las cabeceras completas. Busca `Authentication-Results` y comprueba:

- `spf=pass` para la fuente esperada;
- `dkim=pass` y el dominio de la firma;
- `dmarc=pass` y la alineación con `From:`;
- que el mensaje no utiliza inesperadamente el dominio de un tercero.

Prueba también respuestas automáticas, el formulario web, una factura de muestra y una campaña interna. Un resultado correcto desde Outlook no valida el CRM.

Google exige SPF o DKIM a todos los remitentes que entregan a Gmail, y SPF, DKIM y DMARC a remitentes masivos. También advierte que el correo no autenticado puede rechazarse o clasificarse como spam. La autenticación mejora la base técnica, pero la reputación, el consentimiento, el volumen y el contenido siguen influyendo en la entrega.

## Errores que pueden dejar el correo fuera

- Publicar dos registros SPF independientes.
- Activar `p=reject` antes de descubrir todas las aplicaciones.
- Configurar DKIM solo en el correo de los usuarios y olvidar servicios externos.
- Pensar que `spf=pass` implica `dmarc=pass`; falta comprobar la alineación.
- Recibir informes DMARC en un buzón que nadie revisa.
- Copiar un registro de una guía sin adaptarlo al proveedor.
- Usar el dominio principal para cualquier prueba o plataforma masiva.
- Confundir autenticación con cifrado o protección de cuentas.

SPF, DKIM y DMARC no sustituyen contraseñas únicas, autenticación multifactor, formación contra el phishing ni un plan de recuperación. La guía de [copias de seguridad para pymes](/es/blog/copias-seguridad-pymes-plan-restauracion/) cubre otra parte del mismo objetivo: poder seguir trabajando cuando falla una capa de protección.

## Un mantenimiento pequeño pero necesario

Revisa los informes y el inventario cuando incorpores o retires una herramienta, cambies de proveedor o detectes problemas de entrega. Mantén registrados el responsable, la fecha de la última revisión, los selectores DKIM activos y las fuentes incluidas en SPF. Los dominios aparcados que no envían correo también necesitan una política explícita para que no se conviertan en una vía de suplantación.

Si no tienes claro qué sistemas envían o te preocupa bloquear correo legítimo, una [revisión técnica](/es/consultoria/) puede inventariar el flujo, preparar los registros y definir una migración verificable. El objetivo es saber qué autorizas, medirlo y mantenerlo.

## Fuentes técnicas

- [RFC 9989: DMARC](https://www.rfc-editor.org/rfc/rfc9989.html), IETF, mayo de 2026.
- [RFC 7208: SPF](https://www.rfc-editor.org/rfc/rfc7208.html) y [RFC 6376: DKIM](https://www.rfc-editor.org/rfc/rfc6376.html), IETF.
- [Directrices para remitentes de correo](https://support.google.com/mail/answer/81126?hl=en), Google, consultadas el 12 de octubre de 2026.
- [Configuración y despliegue gradual de DMARC](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure), Microsoft, consultada el 12 de octubre de 2026.
