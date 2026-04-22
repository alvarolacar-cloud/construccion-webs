# IMPLEMENTACIÓN TÉCNICA

**Sistema:** GMB Crush — Estándar técnico de producción web  
**Estado:** Documento operativo  
**Uso:** Complemento técnico del pack final de 5 documentos  
**Objetivo:** Definir con precisión qué stack usar, cómo organizar el código, cómo generar las páginas, cómo implementar schema, cómo desplegar y cómo validar técnicamente una web GMB Crush.

---

## 1. Propósito del documento

Este documento convierte la doctrina GMB Crush en una implementación técnica concreta.

La base y los escenarios definen:

- qué debe existir en la web;
- qué familias de páginas son obligatorias;
- cómo debe cubrirse la categoría principal y las categorías adicionales del GBP;
- cómo deben organizarse servicios, ciudades, zonas, GeoHubs y GeoArticles;
- cómo debe funcionar el interlinking;
- cómo debe validarse la web publicada.

Este documento define:

- con qué framework se construye;
- cómo debe organizarse el repositorio;
- cómo deben modelarse los datos;
- cómo se generan rutas y páginas;
- cómo se implementa schema;
- cómo se publica;
- cómo se valida técnicamente.

La implementación técnica no sustituye la doctrina GMB Crush. La materializa.

---

## 2. Principio rector

Una web GMB Crush no debe construirse como una colección de páginas sueltas hechas a mano.

Debe construirse como un sistema:

```text
Datos estructurados
→ generación de rutas
→ plantillas reutilizables
→ páginas SEO-locales consistentes
→ schema por tipo de página
→ interlinking controlado
→ deploy rastreable
→ QA técnico sobre URL publicada
```

La web debe ser fácil de ampliar cuando se añaden:

- nuevos servicios;
- nuevas ciudades;
- nuevas categorías adicionales;
- nuevas páginas de servicio + ciudad;
- nuevos GeoHubs;
- nuevos GeoArticles;
- nuevos assets;
- nuevos datos de GBP.

Si para añadir una ciudad hay que duplicar manualmente 10 páginas, la implementación no cumple el estándar técnico.

---

## 3. Stack técnico obligatorio por defecto

El stack recomendado y por defecto es:

```text
Framework: Astro
Lenguaje: TypeScript
CSS/UI: Tailwind CSS
Contenido: data-driven + Markdown/MDX cuando aplique
Render: SSG preferente
Deploy: Cloudflare Pages
Repositorio: GitHub
Salida ideal: HTML estático, rápido, rastreable y con bajo JavaScript
```

### 3.1 Por qué Astro

Astro es el framework base recomendado porque encaja con webs locales orientadas a contenido, velocidad, SEO, páginas estáticas, blogs, landings y arquitecturas con muchas rutas generadas desde datos.

El objetivo técnico no es construir una aplicación pesada. Es construir una web local rápida, rastreable, escalable y semánticamente clara.

Astro permite:

- generar HTML estático;
- crear rutas dinámicas con `getStaticPaths()`;
- trabajar con componentes reutilizables;
- integrar TypeScript;
- usar Tailwind;
- crear páginas de marketing y contenido con poco JavaScript;
- mantener bajo el coste de mantenimiento;
- desplegar fácilmente en Cloudflare.

### 3.2 Por qué TypeScript

TypeScript es obligatorio porque la arquitectura GMB Crush depende de datos estructurados.

Con TypeScript se pueden validar:

- servicios;
- ciudades;
- slugs;
- rutas;
- categorías GBP;
- relaciones entre servicios y ciudades;
- schema;
- enlaces internos;
- artículos;
- GeoHubs;
- datos de NAP.

Un error en un slug puede romper una ruta, un enlace interno o un schema. TypeScript reduce ese riesgo.

### 3.3 Por qué Tailwind CSS

Tailwind se usa como sistema de estilos por defecto porque permite:

- componentes rápidos;
- consistencia visual;
- control sobre diseño responsive;
- evitar CSS fragmentado;
- acelerar iteraciones;
- mantener diseño limpio sin depender de temas cerrados.

Tailwind no debe usarse para improvisar diseños sin estructura. Debe estar apoyado por tokens de diseño.

### 3.4 Por qué Cloudflare Pages

Cloudflare Pages se recomienda como destino por defecto porque permite:

- despliegue desde GitHub;
- build automático;
- CDN global;
- SSL;
- preview deployments;
- gestión sencilla de dominios;
- despliegue de sitios Astro estáticos.

---

## 4. Alternativas permitidas

Aunque el estándar sea Astro, pueden usarse otros sistemas si cumplen todos los requisitos GMB Crush.

### 4.1 WordPress

Permitido si:

- se controlan slugs;
- se pueden crear tipos de contenido o plantillas reutilizables;
- se puede implementar schema limpio;
- no se depende de page builders pesados para cada URL;
- se controla el enlazado interno;
- se mantiene rendimiento aceptable;
- se pueden crear GeoHubs, páginas servicio + ciudad y GeoArticles de forma sistemática.

Riesgo principal: exceso de plugins, lentitud, URLs inconsistentes y schema duplicado.

### 4.2 Webflow

Permitido si:

- el CMS permite modelar servicios, ciudades, artículos y categorías;
- se pueden controlar slugs y estructuras;
- se puede insertar schema por tipo de página;
- se puede mantener interlinking;
- se puede exportar o mantener el sitio sin bloqueo excesivo.

Riesgo principal: limitaciones en automatización y estructura compleja de URLs.

### 4.3 Next.js

Permitido si:

- el equipo necesita React avanzado;
- se mantiene SSG/ISR cuando sea posible;
- no se convierte una web local en una aplicación sobredimensionada;
- se controla el coste de JS;
- se implementa schema y routing limpio.

Riesgo principal: complejidad innecesaria para webs locales.

### 4.4 Regla para aceptar otro stack

Un stack alternativo solo es válido si puede entregar:

- homepage como root entity anchor;
- service overview pages;
- location-based service pages;
- additional category pages;
- GeoHub pages;
- GeoArticle pages;
- interlinking controlado;
- schema por familia de página;
- sitemap;
- robots.txt;
- redirecciones;
- QA técnico;
- rendimiento correcto;
- HTML rastreable.

Si no puede hacerlo, no se acepta.

---

## 5. Output técnico final esperado

Al terminar la implementación técnica debe existir:

```text
1. Repositorio funcional.
2. Proyecto Astro instalado.
3. Data layer completo.
4. Componentes reutilizables.
5. Layout base.
6. Rutas dinámicas para servicios, ciudades y artículos.
7. Homepage construida.
8. Service Overview Pages generadas.
9. Location-Based Service Pages generadas.
10. Additional Category Pages generadas si aplican.
11. GeoHub Pages generadas.
12. GeoArticles iniciales publicados.
13. Schema inyectado por tipo de página.
14. Sitemap generado.
15. robots.txt publicado.
16. Redirecciones aplicadas si hay web previa.
17. Build sin errores.
18. Deploy publicado.
19. GBP conectada con la URL correcta.
20. QA técnico y SEO-local sobre URL real.
```

---

## 6. Estructura recomendada del repositorio

La estructura base debe ser:

```text
project-root/
├── README.md
├── docs/
│   ├── 00_BASE_DEL_SISTEMA_GMB.md
│   ├── 01_ESCENARIO_SIN_WEB_Y_SIN_GBP.md
│   ├── 02_ESCENARIO_SIN_WEB_Y_CON_GBP.md
│   ├── 03_ESCENARIO_CON_WEB_Y_SIN_GBP.md
│   ├── 04_ESCENARIO_CON_WEB_Y_CON_GBP.md
│   ├── 05_IMPLEMENTACION_TECNICA.md
│   └── REVISION_DE_COBERTURA_GMB.md
├── projects/
│   └── cliente-slug/
│       ├── brief/
│       ├── research/
│       ├── content/
│       ├── assets/
│       ├── qa/
│       └── site/
└── templates/
    └── astro-gmb/
```

Para un proyecto real, el sitio puede vivir en:

```text
projects/cliente-slug/site/
```

o en un repo propio si el despliegue se gestiona por cliente.

---

## 7. Estructura recomendada del proyecto Astro

```text
site/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── robots.txt
│   ├── favicon.svg
│   ├── _redirects
│   └── images/
│       ├── brand/
│       ├── services/
│       ├── cities/
│       ├── projects/
│       ├── team/
│       └── blog/
├── src/
│   ├── data/
│   │   ├── business.ts
│   │   ├── services.ts
│   │   ├── cities.ts
│   │   ├── categories.ts
│   │   ├── articles.ts
│   │   ├── reviews.ts
│   │   ├── projects.ts
│   │   ├── navigation.ts
│   │   └── redirects.ts
│   ├── lib/
│   │   ├── urls.ts
│   │   ├── schema.ts
│   │   ├── seo.ts
│   │   ├── internal-links.ts
│   │   ├── validation.ts
│   │   └── format.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── LocalPageLayout.astro
│   │   ├── ServiceLayout.astro
│   │   ├── GeoHubLayout.astro
│   │   └── ArticleLayout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── CTA.astro
│   │   ├── FAQBlock.astro
│   │   ├── ReviewBlock.astro
│   │   ├── ServiceCard.astro
│   │   ├── CityCard.astro
│   │   ├── TrustBlock.astro
│   │   ├── LocalTrustBlock.astro
│   │   ├── SchemaInjector.astro
│   │   ├── QuickAnswer.astro
│   │   ├── InternalLinksBlock.astro
│   │   └── ContactForm.astro
│   ├── content/
│   │   ├── geoarticles/
│   │   └── resources/
│   └── pages/
│       ├── index.astro
│       ├── contacto.astro
│       ├── presupuesto.astro
│       ├── proyectos.astro
│       ├── [category]/
│       │   ├── [service].astro
│       │   └── [city]/
│       │       └── [service].astro
│       └── [city]/
│           ├── index.astro
│           └── [article].astro
```

---

## 8. Instalación base

### 8.1 Crear proyecto Astro

```bash
npm create astro@latest site
cd site
```

Seleccionar una configuración limpia, preferiblemente con TypeScript.

### 8.2 Instalar Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

Configurar Tailwind según la guía oficial actual para Astro.

### 8.3 Instalar utilidades recomendadas

```bash
npm install @astrojs/sitemap
npm install zod
```

Uso recomendado:

- `@astrojs/sitemap` para generar sitemap.
- `zod` para validar data interna.
- TypeScript para tipado.

### 8.4 Scripts mínimos

`package.json` debe incluir:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "validate:gmb": "node scripts/validate-gmb.mjs"
  }
}
```

Si no se implementa `validate:gmb` desde el primer día, debe quedar documentado como backlog técnico prioritario.

---

## 9. Configuración Astro

`astro.config.mjs` debe incluir:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.example.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
  ],
});
```

Reglas:

- `site` debe apuntar al dominio final.
- No publicar sin `site` correcto.
- No generar sitemap con dominio temporal.
- No dejar `example.com` en producción.
- No usar adapter Cloudflare si la salida es estática y no hace falta SSR.

---

## 10. Fuente de verdad técnica

La fuente de verdad no debe estar en componentes.

Debe estar en `src/data/`.

No deben vivir hardcodeados en componentes:

- NAP;
- teléfono;
- email;
- ciudad principal;
- servicios;
- categorías GBP;
- URLs;
- slugs;
- zonas;
- áreas servidas;
- enlaces a GBP;
- redes sociales;
- datos de schema;
- CTAs globales;
- horarios;
- enlaces del menú.

---

## 11. Modelo de datos mínimo

### 11.1 `business.ts`

```ts
export const business = {
  brandName: 'Nombre de Marca',
  legalName: 'Nombre Legal si aplica',
  primaryCategory: {
    name: 'Categoría GBP principal',
    slug: 'categoria-principal',
  },
  additionalCategories: [
    {
      name: 'Categoría adicional',
      slug: 'categoria-adicional',
      serviceSlugs: ['servicio-relacionado'],
    },
  ],
  nap: {
    name: 'Nombre',
    streetAddress: 'Dirección',
    city: 'Ciudad',
    region: 'Provincia/Estado',
    postalCode: 'Código Postal',
    country: 'País',
    phone: '+34 000 000 000',
    email: 'contacto@example.com',
  },
  geo: {
    latitude: '',
    longitude: '',
  },
  serviceAreaType: 'physical-location', // physical-location | service-area-business | hybrid
  mainCitySlug: 'ciudad-principal',
  websiteUrl: 'https://www.example.com',
  gbpUrl: '',
  sameAs: [],
  openingHours: [],
};
```

Reglas:

- `gbpUrl` solo se rellena si existe una ficha real.
- `geo` solo debe publicarse si es veraz.
- No inventar coordenadas.
- No inventar oficinas.
- `sameAs` debe contener perfiles reales.
- `serviceAreaType` condiciona schema y contenido.

### 11.2 `services.ts`

```ts
export const services = [
  {
    name: 'Servicio Principal',
    slug: 'servicio-principal',
    categorySlug: 'categoria-principal',
    isPrimary: true,
    isCoreService: true,
    supportsPrimaryCategory: true,
    supportsAdditionalCategorySlug: null,
    shortDescription: '',
    overviewIntent: 'topical-authority',
    localIntent: 'transactional-local',
    relatedServiceSlugs: [],
    faqSeeds: [],
    semanticTerms: [],
  },
];
```

Reglas:

- Cada servicio core debe poder generar una service overview page.
- Cada servicio local prioritario debe poder combinarse con ciudades aprobadas.
- No crear servicios sin intención clara.
- No mezclar servicios distintos en una misma página transaccional.

### 11.3 `cities.ts`

```ts
export const cities = [
  {
    name: 'Ciudad Principal',
    slug: 'ciudad-principal',
    region: 'Provincia/Estado',
    country: 'País',
    tier: 1,
    isMainCity: true,
    hasPhysicalPresence: true,
    shouldHaveGeoHub: true,
    neighborhoods: [],
    landmarks: [],
    localNotes: [],
    priorityServiceSlugs: [],
  },
];
```

Reglas:

- `hasPhysicalPresence` solo puede ser `true` si existe presencia real.
- No fingir oficina o ubicación física.
- Las ciudades tier 1 normalmente tienen GeoHub.
- Las ciudades tier 2 pueden tener GeoHub si hay suficiente prioridad.
- Las ciudades tier 3 pueden empezar con páginas servicio + ciudad o GeoArticles, según estrategia.

### 11.4 `categories.ts`

```ts
export const categories = [
  {
    name: 'Categoría GBP principal',
    slug: 'categoria-principal',
    type: 'primary',
    mappedServiceSlugs: [],
    requiresLocalSupportPage: true,
  },
  {
    name: 'Categoría adicional',
    slug: 'categoria-adicional',
    type: 'additional',
    mappedServiceSlugs: [],
    requiresLocalSupportPage: true,
  },
];
```

Reglas:

- Cada categoría GBP relevante debe mapearse a contenido web.
- Una categoría sin página de soporte debilita la entidad.
- No añadir categorías GBP que no tengan servicio real.

### 11.5 `articles.ts`

```ts
export const articles = [
  {
    title: 'Título del GeoArticle',
    slug: 'slug-articulo',
    citySlug: 'ciudad',
    serviceSlug: 'servicio',
    categorySlug: 'categoria',
    intentType: 'informational',
    targetKeyword: '',
    summary: '',
    relatedArticleSlugs: [],
    publishStatus: 'draft', // draft | published
  },
];
```

Reglas:

- Cada GeoArticle se enfoca en un servicio, una ciudad y una intención.
- No son landing pages.
- Deben enlazar a la página servicio + ciudad y al GeoHub.
- Deben reforzar la semántica del cluster.

---

## 12. Tipos TypeScript recomendados

Crear `src/data/types.ts`:

```ts
export type ServiceAreaType =
  | 'physical-location'
  | 'service-area-business'
  | 'hybrid';

export type CityTier = 1 | 2 | 3;

export type IntentType =
  | 'informational'
  | 'transactional'
  | 'commercial'
  | 'comparison'
  | 'pain-point'
  | 'navigational'
  | 'awareness';

export interface Service {
  name: string;
  slug: string;
  categorySlug: string;
  isPrimary: boolean;
  isCoreService: boolean;
  supportsPrimaryCategory: boolean;
  supportsAdditionalCategorySlug?: string | null;
  shortDescription: string;
  overviewIntent: string;
  localIntent: string;
  relatedServiceSlugs: string[];
  faqSeeds: string[];
  semanticTerms: string[];
}

export interface City {
  name: string;
  slug: string;
  region: string;
  country: string;
  tier: CityTier;
  isMainCity: boolean;
  hasPhysicalPresence: boolean;
  shouldHaveGeoHub: boolean;
  neighborhoods: string[];
  landmarks: string[];
  localNotes: string[];
  priorityServiceSlugs: string[];
}

export interface Category {
  name: string;
  slug: string;
  type: 'primary' | 'additional';
  mappedServiceSlugs: string[];
  requiresLocalSupportPage: boolean;
}

export interface GeoArticle {
  title: string;
  slug: string;
  citySlug: string;
  serviceSlug: string;
  categorySlug: string;
  intentType: IntentType;
  targetKeyword: string;
  summary: string;
  relatedArticleSlugs: string[];
  publishStatus: 'draft' | 'published';
}
```

---

## 13. Generación de URLs

Crear `src/lib/urls.ts`:

```ts
export function homeUrl() {
  return '/';
}

export function serviceOverviewUrl(categorySlug: string, serviceSlug: string) {
  return `/${categorySlug}/${serviceSlug}/`;
}

export function localServiceUrl(
  categorySlug: string,
  citySlug: string,
  serviceSlug: string
) {
  return `/${categorySlug}/${citySlug}/${serviceSlug}/`;
}

export function geoHubUrl(citySlug: string) {
  return `/${citySlug}/`;
}

export function geoArticleUrl(citySlug: string, articleSlug: string) {
  return `/${citySlug}/${articleSlug}/`;
}

export function contactUrl() {
  return '/contacto/';
}

export function quoteUrl() {
  return '/presupuesto/';
}
```

Reglas:

- Las URLs no deben escribirse manualmente en decenas de componentes.
- Los enlaces internos deben generarse desde helpers.
- Si cambia un patrón de URL, debe cambiar en un único sitio.
- Todas las URLs canónicas deben terminar con `/`.

---

## 14. Rutas por familia de página

### 14.1 Homepage

Ruta:

```text
/
```

Archivo:

```text
src/pages/index.astro
```

Debe consumir:

```text
business.ts
services.ts
cities.ts
navigation.ts
schema.ts
```

Debe incluir:

- H1 con marca + servicio/categoría principal + ciudad principal;
- quick answer;
- servicios principales;
- enlaces a service overview pages;
- enlace al GeoHub principal;
- trust blocks;
- reviews;
- CTA;
- NAP rastreable;
- schema `Organization`;
- schema `WebSite`;
- `LocalBusiness` solo si aplica de forma veraz.

No debe:

- ocultar NAP en imágenes;
- enlazar solo a contacto;
- dejar servicios principales sin enlace;
- usar claims no verificables;
- confundir ciudad principal con todas las áreas servidas.

### 14.2 Service Overview Pages

Ruta:

```text
/[category]/[service]/
```

Archivo:

```text
src/pages/[category]/[service].astro
```

Generación:

```ts
export function getStaticPaths() {
  return services.map((service) => ({
    params: {
      category: service.categorySlug,
      service: service.slug,
    },
    props: { service },
  }));
}
```

Propósito:

- autoridad topical sin ciudad;
- explicación completa del servicio;
- soporte a las variantes locales;
- enlace a todas las páginas servicio + ciudad;
- enlace a servicios relacionados;
- enlace a GeoArticles relevantes.

Schema:

- `Service`;
- `BreadcrumbList`;
- `Speakable` si hay bloques preparados.

No debe:

- posicionarse como página local si no tiene ciudad;
- mezclar varias categorías;
- sustituir las páginas servicio + ciudad.

### 14.3 Location-Based Service Pages

Ruta:

```text
/[category]/[city]/[service]/
```

Archivo:

```text
src/pages/[category]/[city]/[service].astro
```

Generación:

```ts
export function getStaticPaths() {
  return cities.flatMap((city) =>
    services
      .filter((service) => shouldGenerateLocalPage(service, city))
      .map((service) => ({
        params: {
          category: service.categorySlug,
          city: city.slug,
          service: service.slug,
        },
        props: { city, service },
      }))
  );
}
```

Propósito:

- capturar intención “servicio en ciudad”;
- apoyar Local Pack;
- apoyar GBP;
- convertir tráfico local;
- conectar servicio, ciudad, categoría y marca.

Debe incluir:

- H1 con servicio + ciudad;
- intro local real;
- secciones AUDIO;
- FAQs locales;
- CTA local;
- trust signals;
- enlaces al service overview;
- enlaces al GeoHub;
- enlaces a otros servicios de la misma ciudad;
- enlaces a GeoArticles del mismo cluster;
- schema con `areaServed`.

No debe:

- mezclar ciudades;
- mezclar servicios;
- fingir ubicación física;
- duplicar texto cambiando solo el nombre de ciudad;
- enlazar de forma aleatoria.

### 14.4 Additional Category Pages

Ruta:

```text
/[category]/[city]/[service]/
```

También puede compartir patrón con location-based pages, pero el dato debe indicar que soporta una categoría adicional.

Generación:

```ts
const additionalCategoryServices = services.filter(
  (service) => service.supportsAdditionalCategorySlug
);
```

Propósito:

- dar soporte real a categorías adicionales de GBP;
- ampliar profundidad semántica;
- cubrir intención local específica;
- evitar que categorías GBP existan sin respaldo web.

Debe incluir:

- H1 con servicio/categoría + ciudad;
- intro local;
- estructura AUDIO;
- FAQs tipo voz;
- CTA local;
- enlaces al GeoHub;
- enlaces a servicios relacionados;
- enlaces a GeoArticles;
- schema `Service` con `areaServed`;
- `BreadcrumbList`.

No debe:

- crear categorías sin servicio real;
- crear páginas thin;
- copiar la página de servicio principal;
- usar categoría adicional solo como keyword.

### 14.5 GeoHub Pages

Ruta recomendada:

```text
/[city]/
```

Archivo:

```text
src/pages/[city]/index.astro
```

Generación:

```ts
export function getStaticPaths() {
  return cities
    .filter((city) => city.shouldHaveGeoHub)
    .map((city) => ({
      params: { city: city.slug },
      props: { city },
    }));
}
```

Propósito:

- silo de ciudad;
- contenedor de cluster geográfico;
- organización de todas las páginas locales de una ciudad;
- refuerzo de cobertura geográfica;
- puente entre homepage, servicios, páginas locales y artículos.

Debe incluir:

- H1 marca + industria/categoría + ciudad;
- descripción local;
- lista de servicios disponibles en esa ciudad;
- lista de páginas de categoría adicional;
- lista de GeoArticles;
- barrios o zonas si son reales;
- CTA;
- enlace a homepage;
- enlace a contacto;
- schema `CollectionPage`;
- `BreadcrumbList`.

No debe:

- fingir oficina;
- competir con una página servicio + ciudad;
- ser una landing genérica sin enlaces;
- listar servicios no disponibles en esa ciudad.

### 14.6 GeoArticle Pages

Ruta:

```text
/[city]/[article]/
```

Archivo:

```text
src/pages/[city]/[article].astro
```

Generación:

```ts
export function getStaticPaths() {
  return articles
    .filter((article) => article.publishStatus === 'published')
    .map((article) => ({
      params: {
        city: article.citySlug,
        article: article.slug,
      },
      props: { article },
    }));
}
```

Propósito:

- refuerzo semántico;
- long-tail local;
- AI Overview;
- voz;
- soporte al cluster;
- enlace contextual hacia páginas transaccionales.

Debe incluir:

- intención informativa clara;
- ciudad mencionada de forma natural;
- servicio relacionado;
- 3–5 H2/H3;
- 3–5 FAQs;
- enlaces internos a página servicio + ciudad;
- enlace al GeoHub;
- enlace a otro GeoArticle si existe;
- CTA contextual no agresivo;
- schema `Article`;
- schema `FAQPage`;
- schema `BreadcrumbList`;
- `Speakable` si aplica.

No debe:

- ser una landing comercial pura;
- competir directamente con la página servicio + ciudad;
- fingir ubicación;
- publicarse sin enlace al cluster.

---

## 15. Interlinking técnico

Crear `src/lib/internal-links.ts`.

Debe generar enlaces por familia de página.

### 15.1 Reglas mínimas

Homepage debe enlazar a:

- service overview pages;
- GeoHub principal;
- páginas de categoría adicional prioritarias;
- contacto/presupuesto.

Service Overview debe enlazar a:

- homepage;
- variantes servicio + ciudad;
- servicios relacionados;
- GeoArticles relacionados.

Location-Based Service Page debe enlazar a:

- service overview padre;
- GeoHub de la ciudad;
- servicios hermanos en la misma ciudad;
- GeoArticles del mismo servicio + ciudad;
- contacto/presupuesto.

Additional Category Page debe enlazar a:

- GeoHub;
- servicio relacionado;
- servicios complementarios;
- GeoArticles relacionados.

GeoHub debe enlazar a:

- homepage;
- todas las páginas servicio + ciudad de esa ciudad;
- páginas de categorías adicionales en esa ciudad;
- GeoArticles de esa ciudad;
- contacto/presupuesto.

GeoArticle debe enlazar a:

- página servicio + ciudad;
- GeoHub;
- otro GeoArticle del cluster si existe;
- CTA contextual.

### 15.2 Ejemplo

```ts
export function getLocalServiceLinks(citySlug: string, serviceSlug: string) {
  return {
    parentService: findServiceOverview(serviceSlug),
    geoHub: findGeoHub(citySlug),
    siblingServices: findSiblingServicesInCity(citySlug, serviceSlug),
    relatedArticles: findGeoArticles(citySlug, serviceSlug),
  };
}
```

### 15.3 Validaciones obligatorias

Antes de publicar:

- ninguna página local debe quedar huérfana;
- ningún GeoArticle debe publicarse sin enlace a página transaccional;
- ningún GeoHub debe estar vacío;
- ningún service overview debe carecer de variantes locales si el servicio es prioritario;
- ninguna categoría GBP debe quedar sin soporte web si está activa.

---

## 16. Schema técnico

Crear `src/lib/schema.ts`.

No escribir JSON-LD completo a mano en cada página. Debe generarse mediante funciones.

### 16.1 Inyección

Componente:

```text
src/components/SchemaInjector.astro
```

Ejemplo:

```astro
---
const { schema } = Astro.props;
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

### 16.2 Homepage schema

Debe poder generar:

- `Organization`;
- `WebSite`;
- `LocalBusiness` si hay presencia física o si aplica con datos veraces;
- `FAQPage` si la homepage contiene FAQs;
- `Speakable` si hay bloques aptos.

### 16.3 Service Overview schema

Debe generar:

- `Service`;
- `BreadcrumbList`;
- `Speakable` si aplica.

### 16.4 Location-Based Service schema

Debe generar:

- `Service` con `areaServed`;
- `LocalBusiness` solo si es veraz;
- `BreadcrumbList`;
- `FAQPage`;
- `Speakable` si aplica.

### 16.5 Additional Category schema

Debe generar:

- `Service`;
- `areaServed`;
- `BreadcrumbList`;
- `FAQPage`.

### 16.6 GeoHub schema

Debe generar:

- `CollectionPage`;
- `BreadcrumbList`.

### 16.7 GeoArticle schema

Debe generar:

- `Article`;
- `FAQPage`;
- `BreadcrumbList`;
- `Speakable` si aplica.

### 16.8 Reglas de verdad

No implementar schema falso.

Prohibido:

- publicar una dirección si no es real;
- publicar coordenadas inventadas;
- marcar como oficina una ciudad donde no hay oficina;
- usar reviews falsas;
- usar `sameAs` con perfiles no controlados;
- duplicar entidades contradictorias.

---

## 17. SEO técnico mínimo

Cada página debe tener:

- title único;
- meta description única;
- canonical;
- H1 único;
- jerarquía H2/H3 clara;
- breadcrumbs si aplica;
- schema correcto;
- enlaces internos;
- imágenes optimizadas;
- alt text descriptivo;
- contenido indexable;
- URL final limpia.

### 17.1 Titles

Reglas:

- Homepage: marca + categoría/servicio principal + ciudad.
- Service Overview: servicio + marca.
- Servicio + ciudad: servicio + ciudad + marca.
- Additional Category: servicio/categoría + ciudad + marca.
- GeoHub: marca + servicios/industria + ciudad.
- GeoArticle: tema + ciudad + marca.

### 17.2 Canonical

Cada página debe autodeclararse canonical salvo casos especiales de migración.

### 17.3 Sitemap

Obligatorio.

Debe incluir:

- homepage;
- service overviews;
- service + city pages;
- additional category pages;
- GeoHubs;
- GeoArticles publicados;
- contacto;
- presupuesto.

No debe incluir:

- drafts;
- páginas de prueba;
- páginas duplicadas;
- previews;
- URLs antiguas redirigidas.

### 17.4 Robots.txt

Debe existir:

```txt
User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap-index.xml
```

Actualizar el dominio final.

---

## 18. Contenido y generación de páginas

La implementación técnica debe facilitar la producción de contenido, pero no debe generar contenido thin.

### 18.1 Reglas de contenido por familia

Homepage:

- resumen claro de la entidad;
- servicios principales;
- señales de confianza;
- NAP;
- CTA;
- enlaces internos;
- quick answer.

Service Overview:

- 850–1000+ palabras como referencia operativa;
- sin ciudad;
- autoridad;
- proceso;
- beneficios;
- FAQs;
- enlaces a variantes locales.

Servicio + ciudad:

- 800–1000+ palabras como referencia operativa;
- una ciudad;
- un servicio;
- local nuance;
- AUDIO;
- FAQs;
- CTA;
- enlaces al cluster.

Additional Category:

- 800–1000+ palabras como referencia operativa;
- soporte directo a categoría adicional;
- AUDIO;
- FAQs;
- enlaces relacionados.

GeoHub:

- profundidad suficiente para organizar una ciudad;
- no competir con servicios;
- listar cluster.

GeoArticle:

- 1000–1500 palabras como referencia operativa;
- un servicio;
- una ciudad;
- un long-tail intent;
- FAQs;
- enlaces al cluster.

### 18.2 Regla anti-duplicación

No publicar páginas locales cuyo único cambio sea el nombre de la ciudad.

Cada página local debe incluir al menos:

- contexto local real;
- problemas o expectativas locales;
- señales de cobertura;
- FAQs adaptadas;
- enlaces específicos;
- CTA coherente;
- referencias a servicios/zonas reales.

---

## 19. Componentes mínimos

### 19.1 Layouts

`BaseLayout.astro` debe controlar:

- `<html lang>`;
- title;
- meta description;
- canonical;
- robots meta si aplica;
- Open Graph básico;
- schema;
- header;
- footer.

`LocalPageLayout.astro` debe servir para:

- páginas servicio + ciudad;
- additional category pages;
- secciones locales;
- breadcrumbs;
- CTA local;
- FAQs.

`ArticleLayout.astro` debe servir para:

- GeoArticles;
- schema Article;
- CTA contextual;
- enlaces al cluster.

### 19.2 Componentes globales

Obligatorios:

- `Header.astro`;
- `Footer.astro`;
- `Breadcrumbs.astro`;
- `CTA.astro`;
- `FAQBlock.astro`;
- `ReviewBlock.astro`;
- `SchemaInjector.astro`;
- `InternalLinksBlock.astro`;
- `ContactForm.astro`.

### 19.3 Reglas de componentes

Los componentes deben ser:

- reutilizables;
- alimentados por props;
- sin datos de negocio hardcodeados;
- accesibles;
- responsive;
- simples.

---

## 20. Formularios y conversión

Todo sitio debe tener al menos una ruta clara de conversión:

- teléfono clicable;
- formulario;
- enlace a presupuesto;
- email si aplica;
- CTA contextual;
- botón visible en móvil.

### 20.1 Formulario mínimo

Campos recomendados:

- nombre;
- teléfono;
- email;
- ciudad;
- servicio;
- mensaje;
- consentimiento legal si aplica.

### 20.2 Tracking

Si se implementa tracking:

- no debe bloquear el render;
- no debe ralentizar;
- debe respetar consentimiento;
- debe estar documentado.

---

## 21. Imágenes y assets

Estructura recomendada:

```text
public/images/
├── brand/
├── services/
├── cities/
├── projects/
├── team/
└── blog/
```

Reglas:

- nombres descriptivos;
- formatos optimizados;
- peso controlado;
- alt text útil;
- evitar imágenes genéricas sin valor;
- no usar fotos de oficinas falsas;
- no usar fotos de equipo falsas.

---

## 22. Accesibilidad mínima

Cada página debe cumplir:

- un H1;
- orden lógico de headings;
- contraste suficiente;
- botones con texto claro;
- enlaces descriptivos;
- formularios con labels;
- navegación por teclado;
- imágenes con alt o decorativas marcadas correctamente;
- HTML semántico.

La accesibilidad no es una capa opcional. También ayuda a claridad, rastreo y conversión.

---

## 23. Rendimiento mínimo

Objetivo técnico:

- HTML rastreable;
- bajo JavaScript;
- imágenes optimizadas;
- CSS controlado;
- componentes ligeros;
- no cargar librerías innecesarias;
- no usar sliders pesados;
- no depender de render cliente para contenido SEO.

Antes de publicar:

```bash
npm run build
npm run preview
```

Y revisar:

- carga inicial;
- navegación;
- mobile;
- imágenes;
- formularios;
- schema;
- sitemap;
- robots.

---

## 24. Migración cuando existe web previa

Aplica especialmente a escenarios:

- cliente con web y sin GBP;
- cliente con web y con GBP.

### 24.1 Inventario obligatorio

Antes de migrar:

- exportar URLs actuales;
- identificar páginas con tráfico;
- identificar backlinks;
- identificar páginas indexadas;
- identificar contenidos reutilizables;
- detectar canibalizaciones;
- detectar URLs obsoletas.

### 24.2 Redirecciones

Crear `public/_redirects` si se usa Cloudflare Pages:

```txt
/ruta-antigua/ /ruta-nueva/ 301
/servicio-viejo/ /categoria/servicio-nuevo/ 301
```

Reglas:

- no borrar URLs valiosas sin redirección;
- no redirigir todo a homepage;
- no hacer cadenas de redirecciones;
- no dejar 404s importantes;
- documentar cada redirección.

### 24.3 Conservación de activos

Se pueden conservar:

- páginas con tráfico;
- páginas con backlinks;
- imágenes propias;
- casos reales;
- reviews;
- contenido técnico útil;
- artículos que puedan convertirse en GeoArticles.

Se deben rehacer o eliminar:

- páginas thin;
- duplicados;
- páginas sin intención;
- páginas con ciudad falsa;
- posts irrelevantes;
- servicios que el negocio no presta.

---

## 25. Conexión con GBP

La web y la ficha deben contar la misma historia.

### 25.1 La URL de GBP

La GBP debe apuntar a:

- homepage si la marca tiene una sola ubicación o si no hay landing local más precisa;
- página local principal si existe una razón estratégica clara y veraz;
- nunca a una página thin;
- nunca a una URL temporal;
- nunca a una página no indexable.

### 25.2 Datos consistentes

La web debe coincidir con la GBP en:

- nombre;
- categoría principal;
- categorías adicionales;
- teléfono;
- dirección si aplica;
- áreas servidas;
- horarios si se publican;
- servicios;
- sitio web;
- enlaces sameAs si aplica.

### 25.3 Reglas de negocio con área de servicio

Si el negocio no tiene oficina visitable:

- no publicar oficina falsa;
- no usar schema con dirección falsa;
- no afirmar presencia física en ciudades servidas;
- sí publicar cobertura real;
- sí usar `areaServed`;
- sí crear páginas de servicio + ciudad con lenguaje honesto.

---

## 26. Producción por escenario

### 26.1 Cliente sin web y sin GBP

Producción técnica:

```text
1. Crear repo.
2. Crear proyecto Astro.
3. Definir business.ts.
4. Definir servicios.
5. Definir ciudades.
6. Definir categorías GBP previstas.
7. Construir homepage.
8. Generar service overviews.
9. Generar páginas servicio + ciudad prioritarias.
10. Generar GeoHub principal.
11. Generar GeoArticles iniciales.
12. Implementar schema.
13. Publicar.
14. Crear/verificar GBP.
15. Conectar GBP con URL correcta.
16. QA final.
```

### 26.2 Cliente sin web y con GBP

Producción técnica:

```text
1. Auditar GBP existente.
2. Congelar datos de ficha como input.
3. Crear repo y proyecto Astro.
4. Modelar categorías reales en data.
5. Construir homepage alineada con GBP.
6. Crear soporte web para categoría principal.
7. Crear soporte para categorías adicionales.
8. Crear páginas locales prioritarias.
9. Generar GeoHub principal.
10. Publicar web.
11. Actualizar URL en GBP si corresponde.
12. QA web + GBP.
```

### 26.3 Cliente con web y sin GBP

Producción técnica:

```text
1. Auditar web existente.
2. Inventariar URLs.
3. Decidir conservar, migrar o eliminar.
4. Crear/refactorizar proyecto Astro.
5. Crear redirecciones.
6. Reconstruir arquitectura GMB Crush.
7. Publicar nueva versión.
8. Crear GBP con datos consistentes.
9. Conectar ficha con web.
10. QA final.
```

### 26.4 Cliente con web y con GBP

Producción técnica:

```text
1. Auditar web.
2. Auditar GBP.
3. Detectar contradicciones.
4. Inventariar URLs y activos.
5. Refactorizar o migrar.
6. Preservar autoridad con redirecciones.
7. Corregir soporte a categorías GBP.
8. Implementar clusters, GeoHubs y GeoArticles.
9. Publicar.
10. Actualizar GBP si corresponde.
11. QA cruzado final.
```

---

## 27. Validaciones automáticas recomendadas

Crear un script futuro:

```text
scripts/validate-gmb.mjs
```

Debe validar:

- todos los servicios tienen slug único;
- todas las ciudades tienen slug único;
- las páginas locales combinan ciudad + servicio válido;
- no hay categorías GBP sin servicio asociado;
- no hay GeoHub vacío;
- no hay GeoArticle sin serviceSlug y citySlug;
- no hay enlaces internos rotos generados desde data;
- no hay URLs duplicadas;
- no hay páginas publicadas sin title/meta;
- no hay schema con campos vacíos críticos;
- no hay dominio temporal en canonicals.

Aunque el script no exista al principio, estas reglas deben comprobarse manualmente.

---

## 28. QA técnico antes de deploy

Antes del deploy:

```bash
npm run build
npm run preview
```

Checklist:

```text
[ ] Build sin errores.
[ ] No hay imports rotos.
[ ] No hay slugs duplicados.
[ ] Homepage carga.
[ ] Service overviews cargan.
[ ] Páginas servicio + ciudad cargan.
[ ] GeoHubs cargan.
[ ] GeoArticles cargan.
[ ] Header y footer muestran datos correctos.
[ ] Menú no contiene enlaces rotos.
[ ] CTAs funcionan.
[ ] Formularios funcionan.
[ ] Sitemap se genera.
[ ] robots.txt existe.
[ ] Schema se inyecta.
[ ] Canonicals correctos.
[ ] Imágenes cargan.
[ ] Mobile correcto.
[ ] No hay datos falsos.
```

---

## 29. QA técnico después de deploy

El QA final debe hacerse sobre la URL publicada, no solo en local.

Checklist:

```text
[ ] Dominio final activo.
[ ] HTTPS activo.
[ ] www/no-www resuelto según decisión.
[ ] Redirecciones funcionan.
[ ] Homepage indexable.
[ ] Páginas principales indexables.
[ ] Sitemap accesible.
[ ] robots.txt accesible.
[ ] Canonicals usan dominio final.
[ ] Schema válido.
[ ] GBP enlaza a la URL correcta.
[ ] Teléfono clicable.
[ ] Formularios reciben leads.
[ ] No hay páginas críticas con 404.
[ ] No hay enlaces internos rotos.
[ ] No hay ciudad o dirección falsa.
[ ] No hay categorías sin soporte web.
```

---

## 30. Definition of Done técnica

Un proyecto técnico no está terminado cuando “se ve bien”.

Está terminado cuando:

```text
1. La web está publicada en dominio final.
2. La arquitectura GMB Crush está implementada.
3. La homepage actúa como root entity anchor.
4. Existen service overview pages prioritarias.
5. Existen páginas servicio + ciudad prioritarias.
6. Existen páginas de categorías adicionales si aplican.
7. Existen GeoHubs para ciudades prioritarias.
8. Existen GeoArticles iniciales.
9. El interlinking está implementado.
10. El schema está implementado.
11. Sitemap y robots están publicados.
12. Redirecciones están aplicadas si había web previa.
13. GBP está creada o alineada.
14. La URL de GBP es correcta.
15. El QA final sobre URL publicada está aprobado.
16. Existe backlog documentado de expansión.
```

---

## 31. Entregables técnicos finales

Al cerrar un proyecto deben entregarse:

```text
1. URL publicada.
2. Acceso al repo.
3. Resumen del stack.
4. Arquitectura de URLs.
5. Lista de páginas publicadas.
6. Lista de páginas pendientes/backlog.
7. Mapa de interlinking.
8. Sitemap.
9. robots.txt.
10. Redirecciones aplicadas.
11. Schema implementado por familia.
12. Estado de GBP.
13. QA final.
14. Instrucciones de mantenimiento.
```

---

## 32. Mantenimiento y expansión

Después del primer release, la web debe crecer de forma controlada.

### 32.1 Nuevos servicios

Para añadir un servicio:

```text
1. Añadir en services.ts.
2. Mapear a categoría GBP si aplica.
3. Crear Service Overview.
4. Crear variantes locales prioritarias.
5. Actualizar GeoHubs.
6. Crear GeoArticles iniciales.
7. Actualizar sitemap.
8. Validar interlinking.
```

### 32.2 Nuevas ciudades

Para añadir una ciudad:

```text
1. Añadir en cities.ts.
2. Definir tier.
3. Decidir si tiene GeoHub.
4. Generar páginas servicio + ciudad prioritarias.
5. Crear contenido local único.
6. Crear GeoArticles.
7. Actualizar enlaces.
8. Validar que no se finge presencia física.
```

### 32.3 Nuevas categorías GBP

Para añadir categoría adicional:

```text
1. Confirmar que el negocio presta realmente ese servicio.
2. Añadir en categories.ts.
3. Mapear servicio(s).
4. Crear páginas de soporte local.
5. Añadir enlaces desde GeoHub.
6. Crear GeoArticles.
7. Revisar GBP.
8. Validar schema.
```

### 32.4 Nuevos GeoArticles

Para publicar GeoArticles:

```text
1. Elegir servicio.
2. Elegir ciudad.
3. Elegir intención long-tail.
4. Crear artículo.
5. Añadir enlaces al service + city.
6. Añadir enlace al GeoHub.
7. Añadir enlace a artículo relacionado.
8. Publicar.
9. Validar schema Article + FAQPage.
```

---

## 33. Errores técnicos prohibidos

No se permite:

- construir páginas manualmente sin data layer;
- duplicar contenido cambiando solo ciudad;
- publicar ciudades falsas;
- publicar direcciones falsas;
- generar schema falso;
- dejar páginas locales huérfanas;
- publicar GeoArticles sin cluster;
- dejar categorías GBP sin soporte web;
- usar canonicals temporales;
- publicar sin sitemap;
- publicar sin robots.txt;
- publicar sin QA en URL real;
- redirigir todo a homepage en una migración;
- ocultar NAP en imágenes;
- depender de JavaScript cliente para contenido crítico SEO.

---

## 34. Orden recomendado de producción

Para construir una web desde cero:

```text
1. Crear proyecto Astro.
2. Configurar Tailwind.
3. Configurar sitemap.
4. Crear data layer.
5. Crear helpers de URLs.
6. Crear helpers de schema.
7. Crear layouts.
8. Crear componentes base.
9. Construir homepage.
10. Crear service overview route.
11. Crear local service route.
12. Crear GeoHub route.
13. Crear GeoArticle route.
14. Implementar additional category logic.
15. Implementar interlinking.
16. Implementar sitemap/robots.
17. Añadir assets.
18. Ejecutar build.
19. Desplegar.
20. QA publicado.
```

---

## 35. Relación con los 5 documentos del sistema

Este documento debe usarse así:

```text
00_BASE_DEL_SISTEMA_GMB.md
→ define la doctrina.

01–04_ESCENARIO_*.md
→ definen la hoja de ruta según el punto de partida.

05_IMPLEMENTACION_TECNICA.md
→ define cómo producir técnicamente la web.

REVISION_DE_COBERTURA_GMB.md
→ valida que la doctrina está cubierta.
```

No sustituye a los escenarios.  
No sustituye a la base.  
Actúa como estándar técnico transversal.

---

## 36. Checklist final de implementación técnica

```text
[ ] Stack Astro + TypeScript + Tailwind confirmado.
[ ] Repositorio creado.
[ ] Data layer completo.
[ ] Helpers de URL creados.
[ ] Helpers de schema creados.
[ ] Homepage implementada.
[ ] Service Overview Pages implementadas.
[ ] Location-Based Service Pages implementadas.
[ ] Additional Category Pages implementadas si aplican.
[ ] GeoHub Pages implementadas.
[ ] GeoArticles implementados.
[ ] Interlinking implementado.
[ ] Schema implementado.
[ ] Sitemap implementado.
[ ] robots.txt implementado.
[ ] Redirecciones implementadas si aplica.
[ ] Formularios funcionando.
[ ] CTAs funcionando.
[ ] Datos GBP alineados.
[ ] Build correcto.
[ ] Deploy correcto.
[ ] QA en URL publicada completado.
[ ] Backlog de expansión documentado.
```

---

## 37. Referencias técnicas oficiales

- Astro: https://astro.build/
- Astro — Why Astro: https://docs.astro.build/en/concepts/why-astro/
- Astro routing: https://docs.astro.build/en/guides/routing/
- Astro `getStaticPaths`: https://docs.astro.build/en/reference/routing-reference/
- Tailwind CSS con Astro: https://tailwindcss.com/docs/installation/framework-guides/astro
- Astro + Tailwind integration note: https://docs.astro.build/en/guides/integrations-guide/tailwind/
- Cloudflare Pages Astro guide: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- Astro deploy to Cloudflare: https://docs.astro.build/en/guides/deploy/cloudflare/

---

## 38. Cierre

La doctrina GMB Crush define la arquitectura SEO-local que debe existir.

La implementación técnica define cómo convertir esa arquitectura en un sitio real, rápido, rastreable, mantenible y publicable.

Una web no cumple este estándar solo por estar publicada.  
Cumple este estándar cuando la arquitectura, los datos, las rutas, el contenido, el interlinking, el schema, el deploy y el QA trabajan juntos para sostener la visibilidad local, orgánica y en IA.
