# 01_INPUT.md — Fase C: Diseño y Layout GMB Crush

## Objetivo

Convertir la hipótesis contrastada de Fase B y una referencia visual en un sistema de diseño aplicable al sitio GMB Crush.

La Fase C extrae diseño, no estrategia SEO. El diseño nunca puede alterar la arquitectura, las URLs, los page types ni el interlinking definidos en Fase B.

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
Referencia visual: URL, screenshots o descripción de estilo
```

Produce:

```txt
DISENO_GMB_CRUSH.md
LOG_DISENO_GMB_CRUSH.md
DISENO_GMB_CRUSH.json
```

## Principio central

```txt
La arquitectura viene de Fase B.
El diseño se adapta a la arquitectura.
Nunca al revés.
```

Si la web de referencia mezcla servicios y ciudades de forma incorrecta, solo se extraen tokens visuales o componentes reutilizables. No se copia su estructura SEO.

## Inputs requeridos

| Input | Uso |
|---|---|
| Hipótesis contrastada Markdown | Entender estrategia, páginas y prioridades. |
| Hipótesis contrastada JSON | Consumir page types, URLs y relaciones. |
| Referencia visual | Extraer tokens, layout y componentes. |
| Restricciones de marca | Evitar diseños incompatibles. |
| Assets disponibles | Definir imágenes, iconos, logos y placeholders. |

## Estados de extracción visual (dialecto local de Fase C)

**Nota:** estos estados aplican solo al diseño visual extraído en esta fase. Son distintos de los `origen` / `estado` generales del sistema. Aquí `inferred` no tiene nada que ver con el vocabulario general del sistema.

| Estado de extracción | Significado |
|---|---|
| `extracted_exact` | Se extrajo directamente de la referencia visual. |
| `extracted_screenshot` | Se dedujo desde screenshot. |
| `extracted_fetch` | Se obtuvo desde HTML/CSS visible. |
| `inferred` | Se dedujo razonablemente desde otros elementos del diseño. |
| `fallback` | Se propuso por falta de datos en la referencia. |
| `discarded` | Se descartó por incompatibilidad. |

Además de este estado específico de extracción visual, los datos de esta fase también llevan `origen` y `estado` generales del sistema:

- Tokens, componentes y layouts decididos en Fase C salen con `origen: investigado` (si vienen de la referencia visual) o `origen: doctrina` (si los fija la doctrina GMB Crush para ese page type).
- `estado: final` salvo que requieran aprobación humana.

## Tareas obligatorias

### 1. Analizar la referencia visual

Extrae:

- estilo general;
- tono de marca;
- estructura visual;
- jerarquía de secciones;
- patrones de navegación;
- CTAs;
- cards;
- formularios;
- trust blocks;
- bloques de reviews;
- iconografía;
- ritmo de spacing;
- comportamiento responsive.

No copies texto, claims, imágenes protegidas ni identidad de marca.

### 2. Crear design tokens

Define:

- paleta principal;
- paleta secundaria;
- colores de fondo;
- colores de texto;
- colores CTA;
- tipografía principal;
- tipografía secundaria;
- escala de tamaños;
- spacing;
- radius;
- sombras;
- borders;
- contenedores;
- breakpoints.

### 3. Crear componentes

Define componentes reutilizables:

- header;
- footer;
- hero;
- service card;
- city card;
- CTA band;
- FAQ block;
- trust block;
- review block;
- process block;
- benefits block;
- local context block;
- article card;
- contact form;
- breadcrumb;
- schema-safe content block.

### 4. Mapear layouts por page type

Crea layout específico para:

| Page type | Objetivo del layout |
|---|---|
| homepage | Anclar entidad, servicios, ciudad principal y CTA. |
| service_overview | Explicar servicio sin ciudad y enlazar variantes locales. |
| location_service | Convertir búsqueda servicio + ciudad. |
| additional_category | Soportar categoría GBP adicional. |
| geohub | Agrupar ciudad, servicios, categorías y artículos. |
| geoarticle | Resolver intención long-tail y reforzar cluster. |
| service_area | Explicar cobertura territorial. |
| contact | Captura de lead y confianza. |
| legal | Cumplimiento y claridad. |

### 5. Definir contenido visual obligatorio

Por tipo de página, define:

- secciones obligatorias;
- secciones opcionales;
- CTA principal;
- CTA secundario;
- trust signals;
- ubicación de FAQs;
- ubicación de internal links;
- ubicación de schema-safe content;
- adaptación mobile.

### 6. Crear anti-patrones

Marca elementos de la referencia que no deben copiarse:

- arquitectura SEO incorrecta;
- menús demasiado profundos;
- CTAs confusos;
- falta de NAP;
- contenido duplicado;
- dependencias excesivas de JS;
- layouts que ocultan texto crítico;
- carousels que bloquean contenido;
- formularios sin contexto.

### 7. Crear log de diseño

Registra:

- qué se extrajo;
- qué se infirió;
- qué se descartó;
- qué quedó como fallback;
- qué requiere aprobación humana;
- impacto en Fase D.

## Reglas de compatibilidad GMB Crush

- Cada page type debe tener layout propio.
- Las páginas de servicio no localizadas no deben parecer páginas locales.
- Las páginas localizadas deben tener espacio para contexto local.
- Los GeoArticles deben parecer recursos útiles, no landing pages agresivas.
- El GeoHub debe funcionar como hub de ciudad.
- El diseño debe dejar visibles enlaces internos contextuales.
- El contenido SEO crítico debe ser renderizable como HTML.

## Errores a evitar

- Copiar estructura SEO de la referencia.
- Copiar contenido protegido.
- Crear un único layout para todas las páginas.
- Diseñar GeoArticles como landings.
- Ocultar FAQs, NAP o enlaces internos.
- Priorizar estética sobre crawlability.
- Entregar diseño sin JSON.
