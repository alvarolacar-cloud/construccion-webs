# Cómo ejecutar el escenario — Sin web y sin GBP

Este escenario convierte un negocio sin web y sin Google Business Profile activo u optimizado en un sistema GMB Crush completo:

```txt
input mínimo
→ recolección y etiquetado de datos (Fase 0)
→ hipótesis inicial
→ contraste de mercado
→ diseño/layout
→ construcción web
→ creación/optimización GBP
→ medición e iteración
```

## 1. Fuente de verdad superior

Las reglas de doctrina están embebidas en el `01_INPUT.md` de cada fase. No es necesario leer `Modo_Conocimiento/` para ejecutar — esos documentos son referencia para quien quiera entender el sistema.

Regla de jerarquía:

```txt
Master Framework = doctrina madre.
Execution Playbook = prompts/SOPs globales.
Este escenario = aplicación concreta para negocios sin web y sin GBP.
Cada fase = paso ejecutable del escenario.
```

Ninguna fase puede contradecir la doctrina global sobre:

- tipos de página GMB Crush;
- jerarquía de interlinking;
- URL patterns;
- GBP category alignment;
- schema SEO;
- anti-canibalización;
- relación entre entidad, servicio y geografía;
- QA antes de pasar de fase.

## 2. Estructura real del escenario

La estructura oficial de esta carpeta es:

```txt
Modo_Ejecutar/
  01_web_cloudflare_gbp/
    01_explicacion_objetivo/
    02_input_humano/
    03_ejecucion_ia/
      00_README.md
      01_docs_ejecucion/
        00_COMO_EJECUTAR.md
        01_ESCENARIO_OVERVIEW.md

        02_FASE_0_DATA/
          01_INPUT.md
          02_OUTPUT_TEMPLATE.md
          03_OUTPUT_SCHEMA.json
          04_QA_CHECKLIST.md

        03_FASE_A_HIPOTESIS_INICIAL/
          01_INPUT.md
          02_OUTPUT_TEMPLATE.md
          03_OUTPUT_SCHEMA.json
          04_QA_CHECKLIST.md

        04_FASE_B_CONTRASTE_MERCADO/
          01_INPUT.md
          02_OUTPUT_TEMPLATE.md
          03_OUTPUT_SCHEMA.json
          04_QA_CHECKLIST.md

        05_FASE_C_DISENO_LAYOUT/
          01_INPUT.md
          02_OUTPUT_TEMPLATE.md
          03_OUTPUT_SCHEMA.json
          04_QA_CHECKLIST.md

        06_FASE_D_CONSTRUCCION_WEB/
          01_INPUT.md
          02_OUTPUT_TEMPLATE.md
          03_OUTPUT_SCHEMA.json
          04_QA_CHECKLIST.md

        07_FASE_E_GBP_BUILD/
          01_INPUT.md
          02_OUTPUT_TEMPLATE.md
          03_OUTPUT_SCHEMA.json
          04_QA_CHECKLIST.md

        08_FASE_F_MEDICION_ITERACION/
          01_INPUT.md
          02_OUTPUT_TEMPLATE.md
          03_OUTPUT_SCHEMA.json
          04_QA_CHECKLIST.md
```

## 3. Qué significa cada archivo dentro de una fase

Cada fase tiene cuatro archivos:

| Archivo | Función |
|---|---|
| `01_INPUT.md` | Prompt maestro / instrucciones de ejecución de la fase. |
| `02_OUTPUT_TEMPLATE.md` | Referencia visual del output para humanos. No es necesario leerlo para ejecutar. |
| `03_OUTPUT_SCHEMA.json` | Contrato de datos estructurados que debe cumplir el JSON de salida. |
| `04_QA_CHECKLIST.md` | Gate de calidad antes de pasar a la siguiente fase. |

Regla:

```txt
No se pasa de fase si el output Markdown, el JSON y el QA no están completos.
```

## 4. Flujo completo

| Orden | Fase | Carpeta | Input principal | Output principal |
|---:|---|---|---|---|
| 0 | Recolección de datos | `02_FASE_0_DATA` | Input humano mínimo | `DATA_GMB_CRUSH.md` + `.json` |
| 1 | Hipótesis inicial | `03_FASE_A_HIPOTESIS_INICIAL` | Output de Fase 0 | `HIPOTESIS_INICIAL_GMB_CRUSH.md` + `.json` |
| 2 | Contraste de mercado | `04_FASE_B_CONTRASTE_MERCADO` | Output de Fase A | `HIPOTESIS_CONTRASTADA_GMB_CRUSH.md` + `LOG_CONTRASTE_GMB_CRUSH.md` + `.json` |
| 3 | Diseño y layout | `05_FASE_C_DISENO_LAYOUT` | Output de Fase B + referencia visual | `DISENO_GMB_CRUSH.md` + `LOG_DISENO_GMB_CRUSH.md` + `.json` |
| 4 | Construcción web | `06_FASE_D_CONSTRUCCION_WEB` | Outputs de Fase B y C | `LOG_CONSTRUCCION_GMB_CRUSH.md` + `QA_TECNICO_GMB_CRUSH.md` + `.json` |
| 5 | GBP Build | `07_FASE_E_GBP_BUILD` | Estrategia validada + web construida | `PLAN_GBP_BUILD_OPTIMIZATION.md` + `.json` |
| 6 | Medición e iteración | `08_FASE_F_MEDICION_ITERACION` | Web + GBP + datos reales | `PLAN_MEDICION_ITERACION_30_60_90.md` + `.json` |

## 5. Orden de ejecución detallado

### Paso 1 — Leer overview

Lee:

```txt
01_ESCENARIO_OVERVIEW.md
```

Confirma que el caso encaja con este escenario:

- no hay web;
- no hay arquitectura SEO local;
- no hay GBP activo u optimizado;
- no hay sistema de medición;
- se necesita construir desde cero un cluster GMB Crush.

### Paso 2 — Ejecutar Fase 0

Lee:

```txt
02_FASE_0_DATA/01_INPUT.md
02_FASE_0_DATA/03_OUTPUT_SCHEMA.json
02_FASE_0_DATA/04_QA_CHECKLIST.md
```

Produce:

```txt
DATA_GMB_CRUSH.md
DATA_GMB_CRUSH.json
```

### Paso 3 — Ejecutar Fase A

Lee:

```txt
03_FASE_A_HIPOTESIS_INICIAL/01_INPUT.md
03_FASE_A_HIPOTESIS_INICIAL/03_OUTPUT_SCHEMA.json
03_FASE_A_HIPOTESIS_INICIAL/04_QA_CHECKLIST.md
```

Consume:

```txt
DATA_GMB_CRUSH.md
DATA_GMB_CRUSH.json
```

Produce:

```txt
DATA_GMB_CRUSH.md
DATA_GMB_CRUSH.json
HIPOTESIS_INICIAL_GMB_CRUSH.md
HIPOTESIS_INICIAL_GMB_CRUSH.json
```

### Paso 4 — Ejecutar Fase B

Lee:

```txt
04_FASE_B_CONTRASTE_MERCADO/01_INPUT.md
04_FASE_B_CONTRASTE_MERCADO/03_OUTPUT_SCHEMA.json
04_FASE_B_CONTRASTE_MERCADO/04_QA_CHECKLIST.md
```

Consume:

```txt
DATA_GMB_CRUSH.md
DATA_GMB_CRUSH.json
HIPOTESIS_INICIAL_GMB_CRUSH.md
HIPOTESIS_INICIAL_GMB_CRUSH.json
```

Produce:

```txt
HIPOTESIS_CONTRASTADA_GMB_CRUSH.md
LOG_CONTRASTE_GMB_CRUSH.md
HIPOTESIS_CONTRASTADA_GMB_CRUSH.json
```

### Paso 5 — Ejecutar Fase C

Lee:

```txt
05_FASE_C_DISENO_LAYOUT/01_INPUT.md
05_FASE_C_DISENO_LAYOUT/03_OUTPUT_SCHEMA.json
05_FASE_C_DISENO_LAYOUT/04_QA_CHECKLIST.md
```

Consume:

```txt
HIPOTESIS_CONTRASTADA_GMB_CRUSH.md
HIPOTESIS_CONTRASTADA_GMB_CRUSH.json
URL o screenshots de referencia visual
```

Produce:

```txt
DISENO_GMB_CRUSH.md
LOG_DISENO_GMB_CRUSH.md
DISENO_GMB_CRUSH.json
```

### Paso 6 — Ejecutar Fase D

Lee:

```txt
06_FASE_D_CONSTRUCCION_WEB/01_INPUT.md
06_FASE_D_CONSTRUCCION_WEB/03_OUTPUT_SCHEMA.json
06_FASE_D_CONSTRUCCION_WEB/04_QA_CHECKLIST.md
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

### Paso 7 — Ejecutar Fase E

Lee:

```txt
07_FASE_E_GBP_BUILD/01_INPUT.md
07_FASE_E_GBP_BUILD/03_OUTPUT_SCHEMA.json
07_FASE_E_GBP_BUILD/04_QA_CHECKLIST.md
```

Consume:

```txt
HIPOTESIS_CONTRASTADA_GMB_CRUSH.md
BUILD_OUTPUT_GMB_CRUSH.json
QA_TECNICO_GMB_CRUSH.md
datos reales del negocio
```

Produce:

```txt
PLAN_GBP_BUILD_OPTIMIZATION.md
GBP_BUILD_OUTPUT.json
```

### Paso 8 — Ejecutar Fase F

Lee:

```txt
08_FASE_F_MEDICION_ITERACION/01_INPUT.md
08_FASE_F_MEDICION_ITERACION/03_OUTPUT_SCHEMA.json
08_FASE_F_MEDICION_ITERACION/04_QA_CHECKLIST.md
```

Consume datos reales de:

```txt
Google Search Console
GBP Insights
GeoGrid
SERP checks
Indexación
Analytics / conversiones
```

Produce:

```txt
PLAN_MEDICION_ITERACION_30_60_90.md
MEDICION_ITERACION_OUTPUT.json
```

## 6. Reglas no negociables

### Doctrina

- No copiar los frameworks completos dentro de cada fase.
- No modificar la doctrina global desde un escenario.
- No cambiar los page types canónicos.
- No convertir un GeoArticle en landing page.
- No confundir Service Overview con Location-Based Service Page.

### Datos

Cada dato importante lleva `origen` (humano / inventado / investigado / doctrina) y `estado` (final / provisional).

- Todo dato producido por la IA debe tener `origen` y `estado` declarados.
- No se publica con ningún dato en `estado: provisional`.
- Datos de identidad del negocio (nombre, NAP, horarios, licencias, reseñas, fotos) arrancan como `inventado + provisional` y se sustituyen por reales antes de publicar.

### Geografía

- Las ciudades de análisis no son ciudades operativas por defecto.
- Una ciudad de análisis solo genera páginas locales si también está confirmada como ciudad operativa.
- Los barrios se usan como contexto salvo que existan señales suficientes para página propia.

### GBP

- No inventar dirección.
- No inventar teléfono.
- No inventar horarios.
- No inventar reseñas.
- No inventar fotos reales.
- No inventar licencias, certificaciones o premios.
- No forzar categorías GBP sin soporte web.

### Construcción

- No publicar si faltan rutas críticas.
- No publicar si faltan canonicals.
- No publicar si falta sitemap.
- No publicar si el contenido SEO crítico depende de JavaScript cliente.
- No publicar si el interlinking no respeta el cluster GMB Crush.

## 7. Modo staging vs producción

| Modo | Puede contener provisionales | Puede publicarse en dominio final |
|---|---:|---:|
| Staging / preview | Sí, claramente marcados | No |
| Producción | No, salvo datos no críticos aprobados | Sí |

Regla:

```txt
La Fase D puede construir preview con datos provisionales.
La publicación final requiere sustituir o aprobar los datos críticos.
```

## 8. Handoff entre fases

Cada fase debe terminar con una sección llamada:

```txt
Handoff a la siguiente fase
```

Debe incluir:

- archivos producidos;
- decisiones tomadas;
- datos provisionales;
- riesgos;
- bloqueos;
- recomendaciones;
- qué debe consumir la fase siguiente.

## 9. Estado correcto del escenario

Este escenario está completo cuando existen:

```txt
DATA_GMB_CRUSH.md
DATA_GMB_CRUSH.json
HIPOTESIS_INICIAL_GMB_CRUSH.md
HIPOTESIS_INICIAL_GMB_CRUSH.json
HIPOTESIS_CONTRASTADA_GMB_CRUSH.md
LOG_CONTRASTE_GMB_CRUSH.md
HIPOTESIS_CONTRASTADA_GMB_CRUSH.json
DISENO_GMB_CRUSH.md
LOG_DISENO_GMB_CRUSH.md
DISENO_GMB_CRUSH.json
LOG_CONSTRUCCION_GMB_CRUSH.md
QA_TECNICO_GMB_CRUSH.md
BUILD_OUTPUT_GMB_CRUSH.json
PLAN_GBP_BUILD_OPTIMIZATION.md
GBP_BUILD_OUTPUT.json
PLAN_MEDICION_ITERACION_30_60_90.md
MEDICION_ITERACION_OUTPUT.json
```
