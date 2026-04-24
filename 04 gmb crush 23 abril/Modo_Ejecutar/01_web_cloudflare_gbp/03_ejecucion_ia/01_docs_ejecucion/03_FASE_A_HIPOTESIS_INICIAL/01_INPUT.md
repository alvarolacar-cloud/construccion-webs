# 01_INPUT.md — Fase A: Hipótesis Inicial GMB Crush

## Objetivo

Convertir un input humano mínimo en una **Hipótesis Inicial GMB Crush** completa, útil y lista para ser contrastada en Fase B.

Esta fase no valida todavía el mercado. Su función es crear una primera fuente de verdad estratégica con supuestos razonables, estados claros y una arquitectura inicial coherente.

## Restricciones de doctrina

La Fase A no puede contradecir:

- page types canónicos;
- jerarquía de interlinking;
- reglas de GBP category alignment;
- diferencia entre Service Overview y Location-Based Service Page;
- función de GeoHub y GeoArticles;
- reglas anti-canibalización;
- schema SEO por tipo de página.

## Archivos de esta fase

Lee también:

```txt
03_OUTPUT_SCHEMA.json
04_QA_CHECKLIST.md
```

Produce:

```txt
HIPOTESIS_INICIAL_GMB_CRUSH.md
HIPOTESIS_INICIAL_GMB_CRUSH.json
```

## Input humano mínimo

Solicita o recibe estos datos:

| Campo | Variable |
|---|---|
| Qué hace la empresa | `[BUSINESS_DESCRIPTION]` |
| Dirección, ciudad o zona base | `[BASE_LOCATION]` |
| Restricciones conocidas | `[KNOWN_RESTRICTIONS]` |
| Ciudades de análisis Nivel I | `[ANALYSIS_CITIES_LEVEL_I]` |
| Ciudades de análisis Nivel II | `[ANALYSIS_CITIES_LEVEL_II]` |

Datos opcionales:

| Campo opcional | Variable |
|---|---|
| Nombre real de la empresa | `[REAL_COMPANY_NAME]` |
| Teléfono real | `[REAL_PHONE]` |
| Email real | `[REAL_EMAIL]` |
| Dominio real | `[REAL_DOMAIN]` |
| Servicios confirmados | `[CONFIRMED_SERVICES]` |
| Servicios excluidos | `[EXCLUDED_SERVICES]` |
| Preferencias de marca | `[BRAND_PREFERENCES]` |
| Activos disponibles | `[ASSETS_AVAILABLE]` |

## Reglas de datos

Todo dato importante debe tener dos etiquetas:

| Etiqueta | Valores permitidos |
|---|---|
| `origen` | `humano` / `inventado` / `investigado` / `doctrina` |
| `estado` | `final` / `provisional` |

Regla de oro en Fase A:

- Los 5 campos del `INPUT_HUMANO.md` salen con `origen: humano, estado: final`.
- Las derivaciones obvias desde el input (país, idioma, región) salen con `origen: humano, estado: final` (son evidencias directas del input).
- Los datos de identidad del negocio (nombre, teléfono, email, dominio, horarios) que faltan al arranque salen con `origen: inventado, estado: provisional`. **Nunca con estado final.**
- Los page types, schema y URL patterns que aplica la doctrina salen con `origen: doctrina, estado: final`.
- Lo que deba validarse en Fase B (categoría GBP candidata, servicio principal probable) sale con `origen: inventado, estado: provisional` o `origen: investigado, estado: provisional` según si se ha consultado mercado.

## Decisiones estratégicas (no son estados)

Además del `origen` y `estado` del dato, cada elemento estratégico lleva una decisión:

| Decisión | Significado |
|---|---|
| `mvp` | Entra en el primer build. |
| `backlog` | Válido, pero no entra en MVP. |
| `discarded` | Excluido por restricción, baja prioridad o falta de encaje. |

## Reglas de alcance

No propongas construir todas las páginas posibles en el primer build.

Clasifica cada página como:

| Alcance | Significado |
|---|---|
| `mvp_initial` | Debe entrar en el primer build. |
| `post_launch_expansion` | Válida para expansión posterior. |
| `continuous_content` | GeoArticles o refuerzos editoriales progresivos. |
| `backlog` | Se conserva, pero no se construye aún. |

El MVP inicial debe construir un cluster mínimo completo:

- homepage;
- 3–6 Service Overview Pages;
- 3–6 Location-Based Service Pages para la ciudad principal;
- 1 GeoHub principal;
- 3–6 GeoArticles iniciales;
- páginas de contacto/conversión;
- legales básicas;
- interlinking;
- schema SEO.

## Tareas obligatorias

### 1. Copiar y normalizar el input recibido

Registra literalmente:

- descripción del negocio;
- ciudad/zona base;
- restricciones;
- servicios confirmados;
- servicios excluidos;
- ciudades de análisis Nivel I;
- ciudades de análisis Nivel II.

### 2. Crear inferencias iniciales

Inferir:

- país / mercado;
- idioma principal;
- ciudad principal;
- región / provincia / comunidad;
- tipo probable de negocio: físico, SAB o híbrido;
- sector principal;
- servicio principal probable;
- nombre provisional si falta;
- teléfono provisional si falta;
- email provisional si falta;
- dominio provisional si falta.

No bloquees la fase por falta de nombre, teléfono, email o dominio. Márcalos como `provisional`.

### 3. Proponer categoría GBP principal candidata

Define:

- categoría GBP principal candidata;
- motivo de elección;
- intención comercial asociada;
- servicios que soporta;
- 4–6 keywords de alta intención;
- riesgo de mala alineación;
- estado del dato.

### 4. Proponer categorías GBP adicionales candidatas

Una categoría adicional necesita soporte si cumple mínimo 2 de estas 4 señales:

1. Representa un servicio o línea de negocio distinta.
2. Probablemente aparece en competidores.
3. Tiene intención local/comercial propia.
4. No queda suficientemente cubierta por una página existente.

No crees categorías adicionales decorativas.

### 5. Definir servicios MVP y backlog

Selecciona:

- servicios inferidos;
- servicios mínimos a validar en Fase B;
- 3–6 servicios MVP;
- servicios backlog;
- servicios descartados.

Prioriza por:

1. intención comercial;
2. alineación con categoría GBP;
3. probabilidad de repetición en competidores;
4. rentabilidad probable;
5. capacidad de página propia;
6. volumen;
7. competencia.

### 6. Definir modelo geográfico

Distingue:

- ciudad principal;
- ciudades operativas;
- ciudades de análisis;
- barrios / zonas;
- ciudades secundarias;
- áreas futuras.

Regla crítica:

```txt
Una ciudad de análisis sirve para aprender del mercado.
No crea páginas locales por sí misma.
```

Los barrios no tienen página propia por defecto. Solo la merecen si cumplen mínimo 3 de estas 5 señales:

1. demanda local visible;
2. presencia en competidores;
3. prioridad comercial;
4. contenido único posible;
5. objetivo explícito del negocio.

### 7. Crear familias GMB Crush necesarias

Evalúa estas familias:

| Familia | Rol |
|---|---|
| Homepage | Root entity anchor. |
| Service Overview Pages | Pilares temáticos sin ciudad. |
| Location-Based Service Pages | Conversión servicio + ciudad. |
| Additional Category Pages | Soporte de categorías GBP adicionales. |
| GeoHub Pages | Contenedor local de ciudad. |
| GeoArticle Pages | Boosters semánticos long-tail. |
| Service Area Overview | Cobertura territorial. |
| Contact / presupuesto | Conversión. |
| Legal | Confianza y cumplimiento. |

### 8. Proponer páginas concretas

Para cada página define:

- `id`;
- tipo;
- título sugerido;
- URL;
- servicio asociado;
- ciudad asociada;
- prioridad;
- alcance;
- estado;
- motivo.

Usa solo estos page types:

```txt
homepage
service_overview
location_service
additional_category
geohub
geoarticle
service_area
contact
legal
```

No uses `budget` como page type. Si hay página de presupuesto, trátala como `contact`.

### 9. Asignar keywords, entidades y URLs

Para cada página define:

- keyword principal;
- keywords secundarias;
- entidades NLP;
- intención;
- URL propuesta;
- relación con categoría GBP;
- relación con servicio;
- relación con ciudad.

No pongas keywords de ciudad como foco principal de una Service Overview.

### 10. Diseñar interlinking inicial

Define enlaces mínimos:

| Página origen | Debe enlazar a |
|---|---|
| Homepage | Service Overviews, GeoHub principal, contacto. |
| Service Overview | Location-Based Service Pages, homepage, servicios relacionados, GeoArticles. |
| Location-Based Service | Service Overview padre, GeoHub, otros servicios de la ciudad, GeoArticles. |
| Additional Category | GeoHub, servicios relacionados, GeoArticles. |
| GeoHub | Todas las páginas locales de su ciudad. |
| GeoArticle | Location-Based Service Page, GeoHub y artículos relacionados. |

### 11. Definir schema SEO esperado

Por tipo de página:

| Tipo | Schema SEO esperado |
|---|---|
| homepage | `Organization`, `WebSite`, opcional `LocalBusiness` |
| service_overview | `Service`, `BreadcrumbList`, `Speakable` |
| location_service | `LocalBusiness`, `Service`, `BreadcrumbList` |
| additional_category | `Service`, `BreadcrumbList` |
| geohub | `CollectionPage`, `BreadcrumbList` |
| geoarticle | `Article`, `FAQPage`, `BreadcrumbList`, `Speakable` |
| contact | `ContactPage`, `LocalBusiness` |
| legal | `WebPage` |

### 12. Crear MVP y backlog

Entrega:

- páginas MVP;
- páginas de expansión;
- GeoArticles continuos;
- datos provisionales;
- riesgos;
- preguntas para Fase B;
- handoff.

## Errores a evitar

- Tratar inferencias como datos confirmados.
- Crear páginas locales para ciudades solo porque se van a analizar.
- Crear páginas de barrio por defecto.
- Mezclar Service Overview con Location-Based Service Page.
- Crear GeoArticles sin página transaccional a la que apoyar.
- Crear Additional Category Pages sin categoría adicional real.
- Proponer un primer build excesivo.
- Usar `budget` como page type.
- Omitir el JSON final.
- Pasar a Fase B sin QA.
