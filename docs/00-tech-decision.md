# Decisión técnica — reconstrucción VBG Labs 2026

## Elección: Astro (output estático), sin React/Vue

## Por qué no seguir con HTML a mano

El proyecto anterior era 15 archivos HTML sin build. El propio audit del commit `255f56e`
identificó que ese enfoque ya se había roto en la práctica: 5 variantes distintas de `<nav>`
y 3 de `<footer>` divergentes entre archivos (hallazgo C17), y un bug crítico (C2) porque
la metadata por página vivía en un único JSON global sin relación con la página actual.

El encargo ahora exige, simultáneamente:

- 3 idiomas (ca/es/en) con la misma arquitectura de información y metadata independiente
  por página e idioma (title, description, OG, hreflang recíproco, canonical).
- Componentes compartidos (nav, footer, cards, pricing) que no puedan divergir por copia
  manual.
- Un blog con contenido en Markdown/MDX, frontmatter tipado, listado, relacionados y RSS,
  pensado para publicación futura automatizada.
- Generación de sitemap y de un mapa de redirecciones 301 desde las URLs antiguas.
- Interactividad mínima y localizada (menú móvil, selector de idioma, formulario, alguna
  animación de proceso) sin convertir el sitio en una SPA.

Reproducir esto a mano en HTML plano significa reinventar, con peor fiabilidad, exactamente
lo que ya resuelve un generador de sitios estáticos: un sistema de includes, un motor de
colecciones de contenido, generación de sitemap/hreflang y un paso de build que valide
enlaces antes de publicar.

## Por qué Astro y no Next.js / Vue / SvelteKit

- **Astro renderiza a HTML estático por defecto.** Ningún framework de UI se envía al
  cliente salvo que un componente lo pida explícitamente (`client:*`). Esto respeta
  directamente el requisito «la mayor parte de la web debe continuar siendo HTML estático»
  y mantiene el peso de JS mínimo, que es precisamente lo que el audit señaló como uno de
  los puntos fuertes del sitio anterior (CLS 0,029, TBT 120 ms en móvil) y que no queremos
  perder.
- **`astro:content` da colecciones tipadas con Zod** para el blog (frontmatter validado en
  build, no en runtime) y para los datos de precios/servicios, que el encargo pide
  centralizados en un único sitio editable.
- **Enrutado de archivos con soporte de i18n incorporado** (`i18n.locales`,
  `defaultLocale`, `routing.prefixDefaultLocale: false`) da exactamente la estructura
  pedida: `/` en catalán, `/es/`, `/en/`, sin prefijo redundante en el idioma fuente.
- **`astro:assets`** optimiza imágenes (AVIF/WebP, `width`/`height` automáticos, lazy
  loading) sin configuración adicional — cierra directamente el hallazgo de performance
  sobre imágenes sin optimizar.
- Next.js, Vue o SvelteKit añadirían un runtime de cliente y un modelo de hidratación que
  este proyecto no necesita: no hay estado de aplicación complejo, ni rutas autenticadas,
  ni dashboards interactivos en el sitio de marketing. Sería coste sin beneficio medible,
  justo lo que el encargo pide evitar explícitamente.
- Astro con `output: 'static'` produce un directorio `dist/` de HTML/CSS/JS servible desde
  el mismo hosting estático (Hostinger) que el sitio actual, sin necesidad de Node en
  producción ni de cambiar de proveedor.

## Islas de interactividad (`client:*`) — únicamente donde hay estado real

| Componente | Directiva | Motivo |
|---|---|---|
| Menú móvil (abrir/cerrar, `inert`, trampa de foco) | `client:idle` (vanilla, sin framework) | Estado de UI puro; se resuelve con una isla de script, no con un framework de componentes |
| Selector de idioma compacto | Sin JS de framework — `<select>`/enlaces nativos a rutas ya generadas | No hay estado que mantener: cada idioma es una URL real |
| Formulario de contacto | `client:idle` (vanilla) | Validación, honeypot, `aria-live`, envío `fetch` |
| Diagrama de proceso / antes-después | CSS + `IntersectionObserver` vanilla, `client:visible` si se envuelve en componente Astro | Animación de entrada puntual, no estado de aplicación |

Ningún componente usa React/Vue/Svelte: no hay justificación de complejidad de estado que
lo requiera, y añadirlo violaría el punto 29 del encargo («no migrar solo porque sea más
moderno»).

## Qué se mantiene igual que el sitio anterior

- Sin backend propio: el formulario sigue siendo un POST desde el cliente (se sustituye el
  proveedor por uno con protección real, ver `04-forms.md`), sin servidor Node en
  producción.
- Mismo hosting (Hostinger detrás de Cloudflare), mismo modelo de despliegue estático.
- Misma pareja tipográfica Sora + IBM Plex Sans (el audit la valoró como acertada; no se
  cambia por moda).
