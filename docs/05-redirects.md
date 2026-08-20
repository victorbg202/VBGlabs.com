# Mapa de redirecciones — sitio antiguo → sitio nuevo

Todas son 301 (permanentes). Implementadas en `public/.htaccess` (se copia tal
cual a la raíz del build). Si el hosting no interpreta `.htaccess` estático,
recrea esta misma tabla como reglas de Cloudflare (Bulk Redirects) o en el
panel de Hostinger — ver la nota al final.

| URL antigua | URL nueva | Motivo |
|---|---|---|
| `/serveis/gestio-comandes/` | `/automatitzacions/` | Las 5 páginas de servicio finas (355-366 palabras cada una, hallazgo C18 del audit) se consolidan en una sola página de automatizaciones basada en casos de uso, no en un catálogo de productos por tecnología. |
| `/serveis/assistent-virtual/` | `/automatitzacions/` | Idem. |
| `/serveis/recordatoris/` | `/automatitzacions/` | Idem. |
| `/serveis/ressenyes-google/` | `/automatitzacions/` | Idem. |
| `/serveis/centralitzacio/` | `/automatitzacions/` | Idem. |
| `/serveis/facturacio-automatica/` | `/vbg-facturacio/` | La página antigua hablaba de generar y enviar facturas automáticamente. VBG Facturació es el producto real más cercano en intención de búsqueda, aunque su alcance actual es distinto (gestiona facturas *recibidas*, no la emisión) — la propia página del producto lo aclara explícitamente para no generar expectativas equivocadas. |
| `/resultats/` | `/` | La página antigua mostraba cifras sin verificar (y, por un bug, cuatro ceros — hallazgo crítico C1 del audit). No se recrea como página aparte: los ejemplos «abans/después» honestos y explícitamente etiquetados como hipotéticos ahora viven en la home. |
| `/sobre-nosaltres/` | `/sobre-vbglabs/` | Cambio de slug para alinearlo con el resto de la arquitectura nueva. Además, la página antigua era huérfana (cero enlaces internos, hallazgo C8) — ahora está enlazada desde el menú y el pie en las 15 rutas del sitio. |
| `/avis-legal.html` → `/politica-privacitat.html` → `/politica-cookies.html` | `/avis-legal/` → `/politica-privacitat/` → `/politica-cookies/` | Se elimina la extensión `.html` para que las URLs sigan la misma convención que el resto del sitio. |
| `/serveis/` | `/serveis/` | Sin cambios — sigue existiendo como índice, ahora enlazando a las 4 páginas reales (automatitzacions, consultoria, formacio, vbg-facturacio) en vez de a las 6 páginas finas antiguas. |
| `/contacte/`, `/`, `/404.html` | mismas rutas | Sin cambios de URL. |

## Páginas nuevas sin equivalente antiguo

`/consultoria/`, `/formacio/`, `/postcraft/`, `/blog/` (+ 2 artículos),
`/preguntes-frequents/` y toda la rama `/es/` y `/en/` son contenido nuevo:
no había nada que redirigir hacia ellas.

## Si el hosting no aplica `.htaccess`

Hostinger sirve el sitio actual a través de Cloudflare (`server: cloudflare`
en las cabeceras observadas durante la auditoría) sobre un origen que se
identifica como `platform: hostinger`. Es razonablemente probable que sea un
origen Apache y que `.htaccess` funcione tal cual — pero no se ha podido
verificar desde este entorno de build (no hay acceso a hPanel ni a la cuenta
de Cloudflare). Si tras desplegar las redirecciones no funcionan:

1. Comprueba en hPanel si existe una sección "Redirects" y da de alta ahí la
   misma tabla.
2. Si no, créalas como **Cloudflare Bulk Redirects** (Cloudflare dashboard →
   Rules → Redirect Rules), que funcionan en el perímetro y no dependen de
   que el origen entienda `.htaccess`.
3. El `ErrorDocument 404 /404.html` de `.htaccess` también depende de que el
   origen sea Apache. El audit anterior encontró que la página 404
   personalizada de la web actual **no se estaba sirviendo en producción**
   — probablemente por esta misma razón. Verifícalo después de desplegar
   visitando una URL inexistente; si sigue sirviendo la página genérica de
   Hostinger, hay que configurar el documento de error 404 personalizado
   desde hPanel directamente.
