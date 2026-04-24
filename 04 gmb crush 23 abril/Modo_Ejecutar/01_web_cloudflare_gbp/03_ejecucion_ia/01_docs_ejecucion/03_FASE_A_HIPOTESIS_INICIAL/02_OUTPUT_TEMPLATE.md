# 02_OUTPUT_TEMPLATE.md — Fase A: Hipótesis Inicial

## Archivos que debe producir la fase

```txt
HIPOTESIS_INICIAL_GMB_CRUSH.md
HIPOTESIS_INICIAL_GMB_CRUSH.json
```

---

# HIPÓTESIS INICIAL GMB CRUSH

## 1. Resumen ejecutivo

| Campo | Valor |
|---|---|
| Proyecto |  |
| Estado general |  |
| Ciudad principal |  |
| Categoría GBP candidata |  |
| Servicios MVP estimados |  |
| Páginas MVP estimadas |  |
| Principales riesgos |  |
| Datos `provisional` críticos |  |

## 2. Input humano recibido

Cada campo viene del humano (`origen: humano`). El estado es `final` si el humano lo dio, o `provisional` si la IA inventó un placeholder porque el humano no lo aportó.

| Campo | Valor recibido | Origen | Estado |
|---|---|---|---|
| `BUSINESS_DESCRIPTION` |  | humano | final |
| `BASE_LOCATION` |  | humano | final |
| `KNOWN_RESTRICTIONS` |  | humano | final |
| `ANALYSIS_CITIES_LEVEL_I` |  | humano | final |
| `ANALYSIS_CITIES_LEVEL_II` |  | humano | final |

## 3. Derivaciones desde el input

Cosas obvias que se deducen del input sin necesidad de investigar ni inventar. Salen con `origen: humano, estado: final` porque son evidencia directa del input.

| Campo | Valor derivado | Origen | Estado | Motivo |
|---|---|---|---|---|
| País / mercado |  | humano | final | deriva de `BASE_LOCATION` |
| Idioma principal |  | humano | final | deriva de `BASE_LOCATION` |
| Ciudad principal |  | humano | final | deriva de `BASE_LOCATION` |
| Región / provincia / comunidad |  | humano | final | deriva de `BASE_LOCATION` |
| Tipo probable de negocio (physical / SAB / hybrid) |  | humano | final | deriva de `BUSINESS_DESCRIPTION` |
| Sector principal |  | humano | final | deriva de `BUSINESS_DESCRIPTION` |

## 4. Datos de identidad del negocio (inventados razonables)

Datos que solo el humano podría confirmar pero faltan al arranque. La IA los inventa para desbloquear el pipeline. Todos salen con `origen: inventado, estado: provisional`.

Reglas para inventar (ver `../../../../01_doctrina/03_GMB_Crush_Reglas_de_Datos.md` §6):

- Nombre: coherente con descripción y ciudad base. No usar marcas reales.
- Teléfono: formato válido del país. Placeholder genérico (ej. `+34 900 000 000`).
- Email: `info@` + dominio sugerido.
- Dominio sugerido: relacionado con servicio + ciudad. Verificar que no pertenezca a competidor.
- Horarios: estándar del sector.

| Campo | Valor provisional inventado | Origen | Estado |
|---|---|---|---|
| Nombre del negocio |  | inventado | provisional |
| Teléfono |  | inventado | provisional |
| Email |  | inventado | provisional |
| Dominio |  | inventado | provisional |
| Horarios |  | inventado | provisional |

## 5. Categoría GBP principal candidata

En Fase A la categoría GBP es una **hipótesis inicial** (inventada o inferida) que la Fase B validará contra mercado.

| Elemento | Valor |
|---|---|
| Categoría GBP principal candidata |  |
| Motivo de elección |  |
| Intención de búsqueda asociada |  |
| Servicios que soporta |  |
| 4–6 keywords de alta intención |  |
| Riesgo de mala alineación | low / medium / high |
| Origen | inventado (si no se consultó mercado) / investigado (si se consultó) |
| Estado | provisional (pendiente de validar en Fase B) |

## 6. Categorías GBP adicionales candidatas

| Categoría adicional | Servicio asociado | Señales cumplidas | Necesita página soporte | Prioridad | Origen | Estado |
|---|---|---:|---|---|---|---|
|  |  |  | yes / no | high / medium / low | inventado / investigado | provisional |

## 7. Servicios

### 7.1 Servicios propuestos

Todos los servicios que la IA considera plausibles desde el input + doctrina. Luego se clasifican.

| Servicio | Motivo | Origen | Estado |
|---|---|---|---|
|  |  | inventado / investigado | provisional |

### 7.2 Servicios MVP (decisión estratégica)

Servicios que entran en el primer build. Decisión determinista: 3 si restricciones duras, 5 por defecto, 6 si amplitud clara.

| Servicio MVP | Motivo | Categoría GBP relacionada | Service Overview | Variante local | Prioridad | Decisión |
|---|---|---|---|---|---|---|
|  |  |  | yes / no | yes / no | high / medium / low | mvp |

### 7.3 Servicios backlog (decisión estratégica)

| Servicio | Motivo | Condición para activarlo | Decisión |
|---|---|---|---|
|  |  |  | backlog |

### 7.4 Servicios descartados (decisión estratégica)

| Servicio | Motivo | Decisión |
|---|---|---|
|  |  | discarded |

## 8. Modelo geográfico

### 8.1 Ciudad principal

| Campo | Valor | Origen | Estado |
|---|---|---|---|
| Ciudad principal |  | humano | final |
| Motivo |  | — | — |
| Rol en arquitectura | GeoHub principal + páginas servicio/ciudad + GeoArticles | doctrina | final |

### 8.2 Ciudades operativas

| Ciudad | Rol | Page eligible | Origen | Estado | Motivo |
|---|---|---|---|---|---|
|  | primary / secondary | yes / no | humano / inventado | final / provisional |  |

### 8.3 Ciudades de análisis

Las ciudades de análisis **NO son operativas** por defecto.

| Ciudad | Nivel | Uso permitido | Page eligible | Origen | Estado |
|---|---|---|---|---|---|
|  | I / II | research_only | no | humano | final |

### 8.4 Barrios o zonas

Solo tienen página propia si cumplen ≥ 3 de las 5 señales (ver doctrina § barrios).

| Barrio / zona | Señales cumplidas | Uso recomendado | Prioridad | Origen | Estado |
|---|---:|---|---|---|---|
|  |  | context / geoarticle / own_page / backlog | high / medium / low | investigado | final / provisional |

## 9. Familias GMB Crush necesarias

Los page types y su rol vienen impuestos por la doctrina.

| Familia | Rol en este proyecto | Entra en MVP | Motivo | Origen | Estado |
|---|---|---|---|---|---|
| Homepage | Root entity anchor | yes |  | doctrina | final |
| Service Overview Pages | Pilares temáticos sin ciudad | yes |  | doctrina | final |
| Location-Based Service Pages | Conversión servicio + ciudad | yes |  | doctrina | final |
| Additional Category Pages | Soporte categorías GBP adicionales | yes / no |  | doctrina | final |
| GeoHub Pages | Cluster ciudad | yes |  | doctrina | final |
| GeoArticle Pages | Boosters semánticos | yes |  | doctrina | final |
| Service Area Overview | Cobertura territorial | yes / no |  | doctrina | final |
| Contact | Conversión | yes |  | doctrina | final |
| Legal | Confianza/cumplimiento | yes |  | doctrina | final |

## 10. Páginas propuestas

Los page types canónicos vienen de doctrina. La URL, título, servicio y ciudad pueden ser inventados, investigados o derivados del humano.

| ID | Tipo | Título | URL | Servicio | Ciudad | Prioridad | Alcance | Origen | Estado |
|---|---|---|---|---|---|---|---|---|---|
|  | homepage / service_overview / location_service / additional_category / geohub / geoarticle / service_area / contact / legal |  |  |  |  | phase_1 / phase_2 / phase_3 / backlog | mvp_initial / post_launch_expansion / continuous_content / backlog | inventado / investigado / doctrina | final / provisional |

## 11. Keywords y entidades por página

| Página | Tipo | Keyword principal | Keywords secundarias / NLP | Intención | Origen | Estado |
|---|---|---|---|---|---|---|
|  |  |  |  |  | inventado / investigado | provisional / final |

## 12. URL map inicial

| Página | URL propuesta | Patrón GMB Crush | Riesgo | Validar en Fase B |
|---|---|---|---|---|
|  |  |  | low / medium / high | yes / no |

## 13. Interlinking inicial

Los enlaces obligatorios vienen de la doctrina (`origen: doctrina, estado: final`).

| Página origen | Página destino | Anchor sugerido | Motivo | Origen | Estado |
|---|---|---|---|---|---|
|  |  |  |  | doctrina | final |

## 14. Schema SEO esperado

Viene impuesto por la doctrina.

| Tipo de página | Schema esperado | Notas | Origen | Estado |
|---|---|---|---|---|
| homepage | Organization, WebSite, optional LocalBusiness |  | doctrina | final |
| service_overview | Service, BreadcrumbList, Speakable |  | doctrina | final |
| location_service | LocalBusiness, Service, BreadcrumbList |  | doctrina | final |
| additional_category | Service, BreadcrumbList |  | doctrina | final |
| geohub | CollectionPage, BreadcrumbList |  | doctrina | final |
| geoarticle | Article, FAQPage, BreadcrumbList, Speakable |  | doctrina | final |
| contact | ContactPage, LocalBusiness |  | doctrina | final |
| legal | WebPage |  | doctrina | final |

## 15. Datos `provisional` a sustituir por el humano antes de publicar

Lista explícita de todo lo `provisional` del output, para que al final sea copia-pega.

| Campo | Valor provisional | Sección | Tipo de sustitución |
|---|---|---|---|
|  |  |  | nombre real / teléfono real / email real / dominio real / horarios reales / otro |

## 16. Riesgos y decisiones pendientes

| Riesgo / decisión | Impacto | Debe resolverlo | Prioridad |
|---|---|---|---|
|  |  | Fase B / humano / Fase C / Fase D | high / medium / low |

## 17. Handoff a Fase B

Todos los campos de esta sección son obligatorios para cerrar Fase A.

- **Archivos producidos:** `HIPOTESIS_INICIAL_GMB_CRUSH.md` + `.json`.
- **Qué debe validar Fase B:**
- **Categorías a contrastar:**
- **Servicios a contrastar:**
- **Ciudades Nivel I:**
- **Ciudades Nivel II:**
- **Competidores o patrones a buscar:**
- **Datos `provisional` críticos:**
- **Páginas que no deben construirse aún:**
- **Bloqueos:**
- **Recomendaciones para Fase B:**
