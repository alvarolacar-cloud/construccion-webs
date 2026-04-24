# 01_INPUT.md — Fase D: Construcción Web GMB Crush

## Objetivo

Construir un sitio web estático, rápido, rastreable y alineado con GMB Crush usando la hipótesis contrastada de Fase B y el sistema de diseño de Fase C.

La Fase D no redefine estrategia, categorías, servicios, URLs ni layouts principales. Ejecuta lo validado.

## Archivos de esta fase

Lee también:

```txt
03_OUTPUT_SCHEMA.json
04_QA_CHECKLIST.md
```

Consume:

```txt
HIPOTESIS_CONTRASTADA_GMB_CRUSH.md
HIPOTESIS_CONTRASTADA_GMB_CRUSH.json
DISENO_GMB_CRUSH.md
DISENO_GMB_CRUSH.json
```

Produce:

```txt
LOG_CONSTRUCCION_GMB_CRUSH.md
QA_TECNICO_GMB_CRUSH.md
BUILD_OUTPUT_GMB_CRUSH.json
```

## Stack recomendado

| Capa | Recomendación |
|---|---|
| Framework | Astro |
| Lenguaje | TypeScript estricto |
| Styling | Tailwind CSS |
| Render | SSG / HTML estático |
| Hosting | Cloudflare Pages |
| Repositorio | GitHub |
| Contenido crítico SEO | HTML renderizado, no dependiente de JS cliente |

No usar como stack principal:

- WordPress;
- Wix;
- Squarespace;
- sitios renderizados solo en cliente;
- contenido crítico oculto tras JS.

## Principio central

```txt
Fase B define qué construir.
Fase C define cómo debe verse.
Fase D construye sin cambiar la estrategia.
```

Si detectas un problema grave, no inventes una solución estratégica. Regístralo como bloqueo o issue.

## Estructura recomendada de proyecto

```txt
src/
  data/
    business.ts
    services.ts
    cities.ts
    categories.ts
    articles.ts
    pages.ts
    navigation.ts
    types.ts

  helpers/
    urls.ts
    schema.ts
    interlinking.ts

  layouts/
    BaseLayout.astro
    PageLayout.astro

  components/
    Header.astro
    Footer.astro
    Hero.astro
    ServiceCard.astro
    CityCard.astro
    CTASection.astro
    FAQSection.astro
    TrustBlock.astro
    Breadcrumbs.astro
    SchemaJsonLd.astro

  pages/
    index.astro
    contacto.astro
    [...routes].astro
```

La estructura exacta puede variar, pero debe conservar:

- data layer claro;
- rutas generadas desde datos;
- helpers de URLs;
- helpers de schema SEO;
- helpers de interlinking;
- componentes reutilizables;
- HTML estático.

## Tareas obligatorias

### 1. Crear data layer

Desde Fase B y C, crear datos estructurados para:

- negocio;
- NAP;
- categorías GBP;
- servicios;
- ciudades;
- páginas;
- GeoArticles;
- navegación;
- assets;
- design tokens;
- componentes;
- relaciones padre/hijo.

No crear datos estratégicos nuevos sin registrarlos.

### 2. Crear rutas

Construir todas las rutas aprobadas en Fase B:

- `/`;
- Service Overview Pages;
- Location-Based Service Pages;
- Additional Category Pages;
- GeoHub Pages;
- GeoArticle Pages;
- Service Area Overview si aplica;
- contacto / conversión;
- legales.

### 3. Implementar layouts

Aplicar los layouts definidos en Fase C:

- homepage;
- service overview;
- location service;
- additional category;
- geohub;
- geoarticle;
- service area;
- contact;
- legal.

### 4. Implementar contenido SEO crítico

Cada página debe tener:

- H1 correcto;
- meta title;
- meta description;
- contenido visible en HTML;
- FAQs si aplica;
- CTA;
- breadcrumbs;
- enlaces internos;
- schema SEO;
- canonical.

### 5. Implementar interlinking GMB Crush

Respeta:

| Origen | Destino mínimo |
|---|---|
| Homepage | Service Overviews, GeoHub principal, contacto. |
| Service Overview | Variantes ciudad/servicio, homepage, servicios relacionados, GeoArticles. |
| Location-Based Service | Service Overview padre, GeoHub, servicios de la ciudad, GeoArticles. |
| Additional Category | GeoHub, servicios relacionados, GeoArticles. |
| GeoHub | Todas las páginas locales de la ciudad. |
| GeoArticle | Location-Based Service, GeoHub, artículos relacionados. |

### 6. Implementar schema SEO

Por página:

- homepage: `Organization`, `WebSite`, opcional `LocalBusiness`;
- service_overview: `Service`, `BreadcrumbList`, `Speakable`;
- location_service: `LocalBusiness`, `Service`, `BreadcrumbList`;
- additional_category: `Service`, `BreadcrumbList`;
- geohub: `CollectionPage`, `BreadcrumbList`;
- geoarticle: `Article`, `FAQPage`, `BreadcrumbList`, `Speakable`;
- contact: `ContactPage`, `LocalBusiness`;
- legal: `WebPage`.

### 7. Implementar archivos técnicos

Crear:

- `sitemap.xml`;
- `robots.txt`;
- canonicals;
- metadatos Open Graph básicos;
- redirects si aplica;
- 404;
- favicon / manifest si procede.

### 8. QA técnico

Verificar:

- todas las rutas existen;
- no hay páginas huérfanas;
- no hay URLs duplicadas;
- no hay canibalización obvia;
- no hay contenido crítico dependiente de JS cliente;
- los enlaces internos resuelven;
- los schema JSON-LD son válidos;
- las páginas cargan rápido;
- mobile funciona;
- no quedan placeholders críticos;
- no hay datos provisionales en producción.

### 9. Preparar deploy

Si hay credenciales reales, usarlas solo de forma segura. No escribir tokens en Markdown, código ni commits.

Si no hay credenciales, preparar instrucciones de deploy manual:

- repositorio GitHub;
- build command;
- output directory;
- variables de entorno;
- Cloudflare Pages;
- dominio;
- DNS;
- preview URL.

## Modos de salida

### Preview / staging

Puede contener datos provisionales si están marcados.

### Producción

No puede contener:

- nombre provisional;
- teléfono provisional;
- dirección provisional;
- horarios inventados;
- fotos falsas;
- reseñas inventadas;
- categorías no aprobadas;
- servicios no aprobados;
- rutas no validadas.

## Errores a evitar

- Cambiar URLs aprobadas.
- Cambiar page types.
- Crear nuevas páginas sin Fase B.
- Omitir GeoHub.
- Omitir GeoArticles iniciales.
- Omitir sitemap o robots.
- Usar JS cliente para renderizar contenido SEO crítico.
- Pegar tokens o credenciales.
- Publicar con placeholders.
