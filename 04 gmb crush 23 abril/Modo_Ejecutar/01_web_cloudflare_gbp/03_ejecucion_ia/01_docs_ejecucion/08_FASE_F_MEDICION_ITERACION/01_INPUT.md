# 01_INPUT.md — Fase F: Medición e Iteración GMB Crush

## Objetivo

Convertir datos reales post-publicación en decisiones de mejora para web, GBP, interlinking, GeoArticles y expansión geográfica.

Esta fase no usa intuición como evidencia. Solo recomienda acciones basadas en datos reales, observaciones documentadas o gaps claramente justificados.

## Archivos de esta fase

Lee también:

```txt
03_OUTPUT_SCHEMA.json
04_QA_CHECKLIST.md
```

Consume:

```txt
BUILD_OUTPUT_GMB_CRUSH.json
QA_TECNICO_GMB_CRUSH.md
GBP_BUILD_OUTPUT.json
Google Search Console
GBP Insights
GeoGrid
SERP checks
Indexation checks
Analytics / conversion data
```

Produce:

```txt
PLAN_MEDICION_ITERACION_30_60_90.md
MEDICION_ITERACION_OUTPUT.json
```

## Datos permitidos

| Fuente | Uso |
|---|---|
| Search Console | Queries, páginas, impresiones, clics, CTR, posición media. |
| GBP Insights | llamadas, clics, vistas, búsquedas, acciones. |
| GeoGrid | ranking por puntos geográficos. |
| SERP checks | validación manual de competidores y features. |
| Indexation checks | páginas indexadas/no indexadas. |
| Analytics | conversiones, formularios, comportamiento. |

Si un dato no existe, márcalo como `not_available`.

## Tareas obligatorias

### 1. Revisar indexación

Para cada página:

- URL;
- indexada/no indexada;
- estado;
- problema;
- acción recomendada.

### 2. Revisar Search Console

Analiza:

- queries por servicio;
- queries por ciudad;
- páginas con impresiones;
- páginas sin impresiones;
- CTR bajo;
- posiciones 4–10;
- posiciones 11–30;
- canibalización;
- oportunidades de snippets / AI Overview.

### 3. Revisar GBP

Analiza:

- búsquedas directas;
- búsquedas discovery;
- llamadas;
- clics al sitio;
- solicitudes de ruta;
- fotos;
- servicios;
- posts;
- Q&A;
- reviews.

### 4. Revisar GeoGrid

Analiza:

- mapa general;
- puntos fuertes;
- puntos débiles;
- distancia desde ubicación / centro;
- servicios con debilidad local;
- ciudades o zonas candidatas;
- competidores que dominan zonas.

### 5. Diagnosticar servicios débiles

Para cada servicio débil:

- evidencia;
- página asociada;
- gap semántico;
- gap de interlinking;
- gap de GBP;
- acción recomendada.

### 6. Diagnosticar ciudades débiles

Para cada ciudad/zona:

- evidencia;
- si es operativa o solo análisis;
- páginas existentes;
- GeoHub;
- Location-Based Pages;
- GeoArticles;
- reviews/señales locales;
- acción recomendada.

### 7. Recomendar acciones

Clasifica acciones:

| Tipo de acción | Ejemplos |
|---|---|
| contenido | nuevos GeoArticles, ampliar FAQs, mejorar copy. |
| arquitectura | añadir página, fusionar, cambiar interlinking. |
| GBP | posts, servicios, Q&A, fotos, categorías. |
| técnico | indexación, schema, sitemap, canonicals. |
| medición | nuevos grids, eventos, tracking. |

### 8. Plan 30/60/90

Crear un plan:

- 30 días: quick wins y correcciones.
- 60 días: refuerzo de servicios/ciudades.
- 90 días: expansión controlada.

## Reglas de expansión

No crear nuevas location pages salvo que exista:

- demanda;
- gap medible;
- ciudad operativa real;
- capacidad de contenido único;
- relación con GBP/web;
- justificación en datos.

GeoArticles sí pueden usarse como refuerzo más flexible, pero deben apoyar una página transaccional y un GeoHub.

## Errores a evitar

- Recomendar páginas nuevas sin evidencia.
- Usar datos simulados como reales.
- Convertir ciudades de análisis en operación.
- Expandir antes de corregir indexación.
- Ignorar canibalización.
- Medir todo con una sola query.
- Olvidar GBP posts, Q&A y fotos.
- No crear plan 30/60/90.
