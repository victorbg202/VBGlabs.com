---
title: "Copias de seguridad para pymes: un plan que puedas restaurar de verdad"
description: "Guía práctica para decidir qué copiar, con qué frecuencia, dónde guardarlo y cómo probar la restauración sin convertir el backup en un proyecto interminable."
slug: "copias-seguridad-pymes-plan-restauracion"
lang: "es"
translationGroup: "small-business-backups-recovery"
category: "Ciberseguridad"
date: 2026-10-05
relatedSlugs: ["cyber-resilience-act-notificar-vulnerabilidades"]
---

Una copia de seguridad no es una carpeta duplicada ni un disco que siempre permanece conectado. Es una forma probada de recuperar la información y volver a trabajar cuando falla un ordenador, alguien borra un archivo, una cuenta queda bloqueada o un ataque cifra los sistemas. Para una pyme, el plan puede ser sencillo: saber qué es crítico, cuánta información puede permitirse perder, mantener copias separadas y ensayar la restauración.

Lo importante no es acumular gigabytes. Es poder responder sin improvisar a esta pregunta: **si hoy perdiéramos los datos, ¿qué necesitaríamos para trabajar mañana?**

## Empieza por el negocio, no por el dispositivo

Hacer una copia de “todo el ordenador” puede parecer suficiente, pero a menudo deja fuera información que vive en otros lugares: el correo, un programa de gestión en la nube, la web, archivos compartidos o la configuración de una aplicación. Antes de elegir herramientas, crea un inventario breve de los procesos que no pueden quedarse parados.

Para cada proceso, apunta cuatro datos:

1. **Información necesaria.** Documentos, base de datos, correo, agenda, configuraciones, claves de recuperación o archivos de la aplicación.
2. **Ubicación actual.** Ordenador, servidor, móvil, servicio en la nube o proveedor externo.
3. **Persona responsable.** Quién comprueba que la copia se realiza y quién sabe restaurarla.
4. **Impacto de una pérdida.** Qué ocurriría si faltasen las últimas horas, un día o una semana.

No guardes contraseñas o secretos en un documento de texto incluido en el backup. Utiliza un gestor de contraseñas y conserva los códigos de recuperación con acceso restringido, separados del sistema principal.

## Decide dos cifras: cuánto puedes perder y cuánto puedes esperar

No todos los datos necesitan la misma frecuencia. Una carpeta de archivo que cambia una vez al mes no exige el mismo tratamiento que los pedidos del día.

El **punto de recuperación** responde a “¿cuánto trabajo reciente podemos perder?”. Si la respuesta es cuatro horas, necesitas una copia o un mecanismo de recuperación al menos cada cuatro horas. El **tiempo de recuperación** responde a “¿cuánto podemos estar sin este sistema?”. Quizá puedas esperar un día para recuperar el archivo histórico, pero no para acceder a las reservas o a la facturación.

No necesitas usar las siglas técnicas para tomar la decisión. Una tabla como esta ya orienta la frecuencia:

| Información | Pérdida asumible | Tiempo máximo sin servicio | Frecuencia inicial |
| --- | --- | --- | --- |
| Pedidos y reservas | 1 hora | 4 horas | cada hora |
| Documentos de trabajo | 1 día | 1 día | diaria |
| Contabilidad y facturas | 1 día | 1 día | diaria y antes de cambios importantes |
| Web corporativa | 1 semana | 1 día | semanal y antes de cada actualización |
| Archivo histórico | 1 mes | 3 días | mensual |

Son ejemplos, no una regla universal. El objetivo es relacionar la frecuencia con el impacto real, no copiarlo todo cada cinco minutos porque la herramienta lo permita.

## Aplica la regla 3-2-1 sin complicarla

La [guía de copias de seguridad de INCIBE](https://www.incibe.es/sites/default/files/contenidos/guias/guia-copias-de-seguridad.pdf) propone una base fácil de recordar: conservar **tres copias** de la información importante —el original y dos copias—, en **dos soportes o entornos diferentes**, con **una copia fuera de la empresa**.

Para un negocio pequeño, una aplicación razonable podría ser:

- datos de trabajo en el sistema principal;
- una copia automatizada en un disco o servidor local con historial de versiones;
- una copia cifrada en una ubicación remota o un servicio de backup diferente.

“Fuera” no significa necesariamente transportar un disco todos los días. Puede ser un repositorio remoto bien configurado. Lo importante es que un incendio, un robo, un error de administración o una infección no pueda destruir a la vez el original y todas las copias.

Por eso conviene que al menos una copia esté **desconectada o protegida frente a modificaciones**. Un disco permanentemente conectado con permisos de escritura puede acabar cifrado por el mismo ransomware que afecta al ordenador. El [CCN-CERT recomienda mantener copias actualizadas, cifradas y fuera del alcance del equipo afectado](https://www.ccn-cert.cni.es/es/comunicacion-eventos/comunicados-ccn-cert/4368-diez-recomendaciones-clave-para-protegerse-frente-al-ransomware?format=html).

## Sincronizar no es lo mismo que hacer backup

La sincronización resulta útil para trabajar desde varios dispositivos y compartir documentos. Pero si alguien borra un archivo, lo sobrescribe o sincroniza una versión cifrada, el cambio puede propagarse. El historial de versiones y la papelera ayudan, aunque tienen límites de tiempo, capacidad y configuración.

Trata la sincronización como una capa de disponibilidad, no como la única copia. Comprueba en concreto:

- cuántos días o versiones puedes recuperar;
- si la papelera cubre las cuentas eliminadas;
- si puedes exportar correo, calendario, contactos y archivos compartidos;
- qué ocurre cuando una persona deja el equipo;
- si tienes una copia independiente de los datos del programa de gestión.

El mismo criterio sirve para un NAS con discos en espejo. El espejo permite continuar si falla un disco, pero también replica un borrado accidental o un archivo corrupto. Redundancia, sincronización y copia de seguridad resuelven problemas diferentes.

## Automatiza la copia, pero vigílala

Una tarea manual que depende de recordar conectar un disco cada viernes acabará fallando el día menos oportuno. Automatiza la programación y añade una alerta cuando una copia no se complete. Si el volumen es grande, utiliza copias incrementales, pero conserva puntos anteriores: descubrir un problema hoy no significa que haya empezado hoy.

La pantalla verde de “copia completada” tampoco demuestra que el negocio pueda recuperarse. Puede haber archivos excluidos, credenciales caducadas, una base de datos inconsistente o una copia que nadie sabe restaurar.

Asigna una persona titular y otra de respaldo. Su revisión mensual debería incluir la última ejecución correcta, el espacio disponible, los errores, los cambios en los sistemas y la fecha de la última prueba de recuperación. Si automatizas alertas o registros, hazlo después de definir este responsable y el procedimiento; nuestra guía sobre [qué vale la pena automatizar](/es/blog/que-vale-la-pena-automatizar/) ayuda a separar una mejora útil de una capa técnica innecesaria.

## Prueba la restauración, no solo la copia

Una prueba útil no tiene que empezar borrando nada del sistema real. Restaura en una ubicación alternativa y comprueba una muestra representativa:

- abre documentos, hojas de cálculo, imágenes y adjuntos;
- recupera un correo o un buzón de prueba;
- importa una copia de la base de datos en un entorno separado;
- verifica que la web o aplicación arranca con la configuración recuperada;
- mide cuánto tiempo ha costado;
- documenta los pasos y accesos necesarios.

Haz una prueba pequeña cada mes y una restauración más completa cada trimestre o después de un cambio importante. La frecuencia exacta dependerá del riesgo, pero una fecha en el calendario es mejor que “ya lo probaremos”. La [guía de INCIBE para crear copias](https://www.incibe.es/sites/default/files/docs/guia_como_crear_una_copia_de_seguridad.pdf) también insiste en comprobar que la información copiada puede recuperarse correctamente.

## Un plan mínimo para poner en marcha esta semana

**Día 1: inventario.** Enumera los cinco procesos más importantes y dónde están sus datos.

**Día 2: prioridades.** Define cuánta información y cuántas horas de servicio puedes perder en cada caso.

**Día 3: separación.** Comprueba que existen dos copias, en entornos diferentes, y que una no puede modificarse fácilmente desde el sistema principal.

**Día 4: automatización.** Programa las copias y los avisos de error. Documenta propietario, sustituto y proveedores.

**Día 5: restauración.** Recupera varios archivos y, si es posible, una aplicación o base de datos en un entorno separado. Anota el tiempo y los problemas.

El resultado debería caber en una página: qué se copia, cada cuánto, dónde se guarda, quién recibe los avisos y cómo se recupera. Si para explicar el sistema necesitas un documento que nadie del equipo entiende, todavía es demasiado frágil.

Si no tienes claro qué datos dependen de cada aplicación o quieres convertir el inventario en un plan priorizado, una [consultoría tecnológica](/es/consultoria/) puede ayudarte a definir el alcance antes de comprar más almacenamiento o herramientas. Y si desarrollas o comercializas software, también puede interesarte la guía sobre [las notificaciones del Cyber Resilience Act](/es/blog/cyber-resilience-act-notificar-vulnerabilidades/): la recuperación interna y las obligaciones de seguridad del producto son piezas diferentes, pero deben coordinarse.

## Fuentes prácticas

- [INCIBE: Copias de seguridad, guía de aproximación para el empresario](https://www.incibe.es/sites/default/files/contenidos/guias/guia-copias-de-seguridad.pdf)
- [INCIBE: Cómo crear una copia de seguridad](https://www.incibe.es/sites/default/files/docs/guia_como_crear_una_copia_de_seguridad.pdf)
- [CCN-CERT: diez recomendaciones frente al ransomware](https://www.ccn-cert.cni.es/es/comunicacion-eventos/comunicados-ccn-cert/4368-diez-recomendaciones-clave-para-protegerse-frente-al-ransomware?format=html)

