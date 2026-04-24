# Escenario 01 — Sin web y sin GBP

## Qué resuelve este escenario

Este escenario está diseñado para negocios que todavía no tienen:

- sitio web publicado;
- arquitectura Local SEO;
- Google Business Profile activo u optimizado;
- sistema de medición local;
- cluster GMB Crush construido.

El objetivo es pasar de input humano mínimo a un sistema web + GBP + medición inicial, siguiendo la doctrina GMB Crush.

---

## Flujo completo

```txt
Input humano mínimo
↓
Fase 0 — Data (recolección y etiquetado)
↓
Fase A — Hipótesis Inicial
↓
Fase B — Contraste de Mercado
↓
Fase C — Diseño y Layout
↓
Fase D — Construcción Web
↓
Fase E — GBP Build & Optimization
↓
Fase F — Medición e Iteración
```

---

## Fases

### Fase 0 — Data

Recolecta y etiqueta todos los datos base del proyecto antes de que empiece cualquier fase de decisión:

- input humano normalizado;
- derivaciones obvias desde el input;
- identidad provisional del negocio;
- investigación de mercado en bruto (competidores, categorías GBP, servicios, barrios, FAQs, keywords, entidades NLP, trust signals, patrones de URL).

No decide, no prioriza, no descarta. Solo recolecta y etiqueta con `origen` y `estado`.

Produce: `DATA_GMB_CRUSH.md` + `DATA_GMB_CRUSH.json`.

### Fase A — Hipótesis Inicial

Convierte input mínimo en una primera hipótesis estratégica:

- categoría GBP candidata;
- servicios MVP;
- ciudades operativas;
- ciudades de análisis;
- familias de páginas;
- URL map inicial;
- interlinking inicial;
- entidades NLP;
- alcance MVP;
- backlog;
- datos provisionales.

### Fase B — Contraste de Mercado

Contrasta la hipótesis contra el mercado real:

- Local Pack;
- orgánicos locales;
- competidores útiles;
- patrones fuertes, medios y débiles;
- categorías y servicios validados;
- páginas finales;
- decisiones descartadas;
- log de contraste.

La hipótesis contrastada reemplaza a la hipótesis inicial como fuente de verdad.

### Fase C — Diseño y Layout

Extrae un sistema visual desde una web de referencia, sin permitir que el diseño altere la arquitectura GMB Crush:

- design tokens;
- paleta;
- tipografía;
- componentes;
- layout por page type;
- anti-patrones;
- fallbacks;
- log de diseño.

### Fase D — Construcción Web

Construye el sitio desde la hipótesis contrastada y el diseño aprobado.

Stack recomendado:

```txt
Astro
TypeScript estricto
Tailwind CSS
SSG
Cloudflare Pages
GitHub
```

Debe producir sitio, repositorio, rutas, schema SEO, sitemap, robots, canonicals, interlinking y QA técnico.

### Fase E — GBP Build & Optimization

Crea el plan de creación u optimización de Google Business Profile:

- nombre;
- NAP;
- categoría principal;
- categorías adicionales;
- servicios;
- áreas de servicio;
- descripción;
- fotos necesarias;
- Q&A inicial;
- posts iniciales;
- enlaces web;
- UTM;
- review strategy.

No inventa datos que deban ser reales.

### Fase F — Medición e Iteración

Define el ciclo 30/60/90 días:

- indexación;
- Search Console;
- GeoGrid;
- servicios débiles;
- ciudades débiles;
- refuerzo de interlinking;
- GeoArticles recomendados;
- GBP posts;
- próximas páginas solo si hay evidencia.

---

## Inputs mínimos del escenario

Obligatorios:

| Campo | Descripción |
|---|---|
| `BUSINESS_DESCRIPTION` | Qué hace el negocio |
| `BASE_LOCATION` | Dirección, ciudad o zona base |
| `KNOWN_RESTRICTIONS` | Restricciones conocidas |
| `ANALYSIS_CITIES_LEVEL_I` | Ciudades de análisis completo |
| `ANALYSIS_CITIES_LEVEL_II` | Ciudades de análisis punch |

Opcionales:

| Campo | Descripción |
|---|---|
| `REAL_COMPANY_NAME` | Nombre real |
| `REAL_PHONE` | Teléfono real |
| `REAL_EMAIL` | Email real |
| `REAL_DOMAIN` | Dominio real |
| `CONFIRMED_SERVICES` | Servicios confirmados |
| `EXCLUDED_SERVICES` | Servicios excluidos |
| `BRAND_PREFERENCES` | Preferencias de marca |
| `ASSETS_AVAILABLE` | Fotos, logos, assets |

---

## Qué bloquea producción

Bloquea producción:

- NAP inventado;
- dirección no confirmada;
- teléfono provisional;
- GBP category no validada;
- URLs finales sin revisar;
- páginas faltantes respecto a Fase B;
- schema SEO ausente en páginas críticas;
- interlinking roto;
- contenido crítico renderizado solo por JS cliente;
- sitemap o robots ausentes;
- diseño que rompe la función de los page types;
- publicación con datos provisionales marcados como bloqueantes.

---

## Principio operativo

```txt
Primero cluster mínimo completo.
Después publicación.
Después medición.
Después expansión.
```
