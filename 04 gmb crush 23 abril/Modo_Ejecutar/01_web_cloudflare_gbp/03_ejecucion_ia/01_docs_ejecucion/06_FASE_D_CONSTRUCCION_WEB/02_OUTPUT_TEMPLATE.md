# 02_OUTPUT_TEMPLATE.md — Fase D: Construcción Web

## Archivos que debe producir la fase

```txt
LOG_CONSTRUCCION_GMB_CRUSH.md
QA_TECNICO_GMB_CRUSH.md
BUILD_OUTPUT_GMB_CRUSH.json
```

---

# LOG CONSTRUCCIÓN GMB CRUSH

## 1. Resumen del build

| Campo | Valor |
|---|---|
| Proyecto |  |
| Stack | Astro + TypeScript + Tailwind + SSG |
| Estado | preview / production_ready / blocked |
| Nº rutas construidas |  |
| Nº componentes construidos |  |
| Datos provisionales pendientes |  |
| Bloqueos |  |

## 2. Inputs usados

| Input | Archivo | Estado |
|---|---|---|
| Hipótesis contrastada | `HIPOTESIS_CONTRASTADA_GMB_CRUSH.md/json` | available / missing |
| Diseño | `DISENO_GMB_CRUSH.md/json` | available / missing |
| Doctrina | Master + Playbook | available / missing |

## 3. Data layer creado

| Archivo | Función | Estado |
|---|---|---|
| `business.ts` | datos negocio |  |
| `services.ts` | servicios |  |
| `cities.ts` | ciudades |  |
| `categories.ts` | categorías GBP |  |
| `articles.ts` | GeoArticles |  |
| `pages.ts` | mapa páginas |  |
| `navigation.ts` | navegación |  |

## 4. Rutas construidas

| URL | Page type | Fuente | Estado | Notas |
|---|---|---|---|---|
|  | homepage / service_overview / location_service / additional_category / geohub / geoarticle / service_area / contact / legal | Fase B | built / blocked / skipped |  |

## 5. Componentes construidos

| Componente | Uso | Estado |
|---|---|---|
| Header | navegación |  |
| Footer | navegación/conversión |  |
| Hero | sección principal |  |
| ServiceCard | servicios |  |
| CTASection | conversión |  |
| FAQSection | AIO/FAQ |  |
| Breadcrumbs | SEO/UX |  |
| SchemaJsonLd | schema |  |

## 6. Schema SEO implementado

| URL | Schema | Estado |
|---|---|---|
|  |  | implemented / missing / blocked |

## 7. Interlinking implementado

| Origen | Destino | Anchor | Estado |
|---|---|---|---|
|  |  |  | implemented / missing / blocked |

## 8. Archivos técnicos

| Archivo | Estado | Notas |
|---|---|---|
| `sitemap.xml` |  |  |
| `robots.txt` |  |  |
| canonicals |  |  |
| 404 |  |  |
| Open Graph |  |  |

---

# QA TÉCNICO GMB CRUSH

## 1. QA de rutas

| Check | Estado | Notas |
|---|---|---|
| Todas las URLs de Fase B existen | pass / fail |  |
| No hay rutas duplicadas | pass / fail |  |
| No hay páginas huérfanas | pass / fail |  |
| No hay page types no canónicos | pass / fail |  |

## 2. QA SEO

| Check | Estado | Notas |
|---|---|---|
| H1 único por página | pass / fail |  |
| Meta title | pass / fail |  |
| Meta description | pass / fail |  |
| Canonicals | pass / fail |  |
| Schema JSON-LD | pass / fail |  |
| Breadcrumbs | pass / fail |  |
| Internal links | pass / fail |  |

## 3. QA técnico

| Check | Estado | Notas |
|---|---|---|
| HTML estático para contenido crítico | pass / fail |  |
| Mobile responsive | pass / fail |  |
| Build completo | pass / fail |  |
| Sitemap válido | pass / fail |  |
| Robots válido | pass / fail |  |
| Sin placeholders críticos | pass / fail |  |

## 4. Handoff a Fase E

- URL de homepage:
- URLs de servicios:
- URLs locales:
- URLs de contacto:
- Categorías GBP soportadas:
- Datos pendientes para GBP:
- Estado final: preview / production_ready / blocked
