# 01_INPUT.md — Fase 0: Data GMB Crush

## Objetivo

Dejar todos los datos base del proyecto sobre la mesa, **etiquetados con `origen` y `estado`**, listos para que las fases siguientes (A en adelante) los consuman sin tener que investigar ni inventar.

Esta fase **solo recolecta**. No decide, no prioriza, no descarta. Enumera, ordena y etiqueta.

## Posición en el pipeline

```
Fase 0 — Data                 ← esta fase
Fase A — Hipótesis Inicial    ← consume datos de Fase 0
Fase B — Contraste de Mercado ← consume datos de Fase 0
Fase C — Diseño y Layout
Fase D — Construcción Web
Fase E — GBP Build
Fase F — Medición e Iteración
```

## Qué NO hace esta fase

- No elige la categoría GBP principal. Solo lista las que aparecen en mercado.
- No prioriza servicios MVP. Solo lista los que aparecen en competidores.
- No decide qué ciudades son operativas. Solo normaliza las que da el humano.
- No diseña URL map. Solo observa patrones en competidores.
- No propone page types. Esos los impone la doctrina cuando Fase A los aplique.
- No elige competidores de referencia. Los trae todos los relevantes encontrados.
- No produce hipótesis estratégica. Eso es Fase A.

Si en algún momento tienes el impulso de "decidir", para. No es trabajo de esta fase.

## Archivos de esta fase

Lee también:

```txt
02_OUTPUT_TEMPLATE.md
03_OUTPUT_SCHEMA.json
04_QA_CHECKLIST.md
```

Produce:

```txt
DATA_GMB_CRUSH.md
DATA_GMB_CRUSH.json
```

## Input que recibes

### Input humano (obligatorio)

El humano aporta un `INPUT_HUMANO.md` con estos 5 campos:

| Campo | Variable |
|---|---|
| Qué hace la empresa | `[BUSINESS_DESCRIPTION]` |
| Ubicación base del negocio | `[BASE_LOCATION]` |
| Restricciones conocidas | `[KNOWN_RESTRICTIONS]` |
| Ciudades de análisis Nivel I | `[ANALYSIS_CITIES_LEVEL_I]` |
| Ciudades de análisis Nivel II | `[ANALYSIS_CITIES_LEVEL_II]` |

Si falta alguno de los 5 campos obligatorios, **no arranques la fase**: pide al humano que complete `INPUT_HUMANO.md` antes.

`BUSINESS_DESCRIPTION` y `BASE_LOCATION` **no se pueden inferir**. Si falta uno de ellos, para.

### Input humano (opcional)

Si el humano aportó alguno de estos, también se incorporan como `origen: humano, estado: final`:

| Campo opcional | Variable |
|---|---|
| Nombre real de la empresa | `[REAL_COMPANY_NAME]` |
| Teléfono real | `[REAL_PHONE]` |
| Email real | `[REAL_EMAIL]` |
| Dominio real | `[REAL_DOMAIN]` |
| Horarios reales | `[REAL_HOURS]` |
| Dirección real | `[REAL_ADDRESS]` |
| Servicios confirmados | `[CONFIRMED_SERVICES]` |
| Servicios excluidos | `[EXCLUDED_SERVICES]` |
| Preferencias de marca | `[BRAND_PREFERENCES]` |
| Activos disponibles | `[ASSETS_AVAILABLE]` |

Todo lo que el humano no aporte en estos campos opcionales se genera en el Bloque 3 (identidad provisional).

## Reglas de datos

Todo dato de esta fase lleva dos etiquetas obligatorias:

| Etiqueta | Valores permitidos |
|---|---|
| `origen` | `humano` / `inventado` / `investigado` |
| `estado` | `final` / `provisional` |

`origen: doctrina` no aplica en Fase 0. La doctrina entra a partir de Fase A.

Regla de oro:

- Dato que viene del humano → `origen: humano, estado: final`.
- Derivación mecánica desde un dato humano (ej. país desde ciudad) → `origen: humano, estado: final` (es evidencia directa del input humano, no invención).
- Dato del negocio que el humano no aporta y la IA inventa razonable → `origen: inventado, estado: provisional`. **Nunca final.**
- Dato observado en mercado (competidores, SERPs, Local Pack) → `origen: investigado`, `estado: final` si el patrón es fuerte (aparece en 3+ fuentes relevantes), `provisional` si es débil.

Detalle completo en `../../../../../Modo_Conocimiento/03_GMB_Crush_Reglas_de_Datos.md`.

## Tareas obligatorias

Produces 4 bloques, en este orden.

### Bloque 1 — Input humano normalizado

Copia literalmente los 5 campos obligatorios + los opcionales que hayan venido rellenos. No reinterpretes, no resumas, no corrijas errores ortográficos del humano.

Cada campo sale con `origen: humano, estado: final`.

### Bloque 2 — Derivaciones obvias desde el input

Deduce mecánicamente:

| Derivación | Se deduce desde | Ejemplo |
|---|---|---|
| País / mercado | `BASE_LOCATION` | Valencia → España |
| Idioma principal | `BASE_LOCATION` | Valencia → Español |
| Región / provincia / comunidad autónoma | `BASE_LOCATION` | Valencia → Comunidad Valenciana |
| Ciudad principal | `BASE_LOCATION` | Valencia → Valencia |
| Sector principal | `BUSINESS_DESCRIPTION` | "cambio bañera por ducha" → Reformas de baño / accesibilidad |
| Tipo probable de negocio (physical / SAB / hybrid) | `BUSINESS_DESCRIPTION` | "servicio a domicilio" → SAB |
| Servicio principal probable | `BUSINESS_DESCRIPTION` | "cambio bañera por ducha" → Cambio de bañera por ducha |

Todos con `origen: humano, estado: final` porque son evidencia directa del input humano.

Si una derivación no es obvia y requiere interpretación → **no la hagas aquí**. Es trabajo de Fase A.

### Bloque 3 — Identidad provisional del negocio

Genera los datos del negocio que el humano no aportó. Cada uno con `origen: inventado, estado: provisional`. **Nunca `final`** hasta que el humano los sustituya por reales.

| Dato | Regla para inventar razonable |
|---|---|
| Nombre provisional | Coherente con descripción y ciudad base. No usar marcas reales existentes. |
| Teléfono provisional | Formato válido del país. Placeholder genérico (ej. `+34 900 000 000`). |
| Email provisional | `info@` + dominio provisional sugerido. |
| Dominio provisional | Relacionado con servicio + ciudad. Verifica que no pertenezca a competidor existente. |
| Horarios provisionales | Estándar del sector (ej. L-V 9:00–18:00 para servicios profesionales). |
| Dirección provisional | Solo si el humano no aportó `REAL_ADDRESS`. Si la ciudad ya está (desde `BASE_LOCATION`), el resto se deja abierto. |

Si el humano aportó el dato real en los campos opcionales, **no inventes**: usa el real con `origen: humano, estado: final`.

### Bloque 4 — Investigación de mercado en bruto

Investigación exhaustiva del mercado en las ciudades de `ANALYSIS_CITIES_LEVEL_I` y, con menos profundidad, en `ANALYSIS_CITIES_LEVEL_II`.

Recolecta los siguientes sub-bloques. Cada elemento con `origen: investigado` y `estado` según fuerza:

- `strong` → aparece en 3 o más fuentes relevantes → `estado: final`.
- `medium` → aparece en 2 fuentes → `estado: final` con nota.
- `weak` → aparece en 1 fuente o con baja calidad → `estado: provisional`.

#### 4.1 Competidores

Para cada competidor relevante encontrado en Local Pack y orgánicos Top 10:

| Campo |
|---|
| Nombre |
| URL |
| Ciudad donde se le encontró |
| Categoría GBP principal (si es observable) |
| Categorías GBP adicionales (si son observables) |
| Servicios que listan en la web |
| Estructura de URL observada (ej. `/servicio-ciudad/`) |
| Trust signals visibles (licencias, certificaciones, años, reseñas) |
| Fuerza del hallazgo (strong / medium / weak) |

Lista **todos** los competidores relevantes encontrados. No elijas "los mejores" ni "los 3 principales". Lista plana.

#### 4.2 Categorías GBP observadas en el sector

Lista plana de todas las categorías GBP que aparecen en el conjunto de competidores, con número de ocurrencias:

| Categoría GBP | Ocurrencias | Fuerza |
|---|---:|---|

No elijas una como "principal". Solo enumera.

#### 4.3 Servicios mencionados en competidores

Lista plana de todos los servicios que aparecen en los competidores. No priorices:

| Servicio | Nº de competidores que lo listan | Fuerza |
|---|---:|---|

#### 4.4 Barrios / zonas mencionados

Barrios o zonas que los competidores mencionan para las ciudades de análisis:

| Ciudad | Barrio / zona | Nº de menciones | Fuerza |
|---|---|---:|---|

#### 4.5 FAQs recurrentes en el sector

Preguntas que aparecen repetidas en secciones FAQ, PAA ("Otras preguntas") o contenido de competidores:

| Pregunta | Nº de ocurrencias | Fuerza |
|---|---:|---|

#### 4.6 Keywords de alta intención

Keywords comerciales detectadas (autocomplete, PAA, títulos de competidores):

| Keyword | Intención (commercial / informational / mixed) | Fuerza |
|---|---|---|

#### 4.7 Entidades NLP del sector

Entidades (productos, conceptos, normativas, materiales) que aparecen repetidamente en contenido relevante:

| Entidad | Contexto de uso | Fuerza |
|---|---|---|

#### 4.8 Trust signals típicos

Elementos de confianza que usan los competidores:

| Trust signal | Nº de competidores que lo usan | Fuerza |
|---|---:|---|

#### 4.9 Patrones de URL observados

Estructuras de URL que se repiten en competidores:

| Patrón | Ejemplo | Nº de competidores que lo usan |
|---|---|---:|

## Handoff a Fase A

Al terminar, deja un apartado **Handoff** en `DATA_GMB_CRUSH.md` con:

- lista de archivos producidos;
- resumen numérico (cuántos competidores, cuántas categorías, cuántos servicios, cuántas FAQs, etc.);
- datos con `estado: provisional` que bloquean publicación aunque no bloqueen Fase A;
- bloqueos encontrados (ej. no se encontraron competidores en una ciudad);
- fuentes consultadas (para auditoría y reproducibilidad).

## Si te bloqueas

- **Falta un campo obligatorio del input humano** → no arranques. Pide al humano.
- **No encuentras competidores en una ciudad** → declara el bloqueo en Handoff y sigue con las demás ciudades. Fase A decidirá si esa ciudad queda fuera de MVP.
- **Un dato parece relevante pero no encaja en ningún bloque** → lístalo al final en un sub-bloque `4.10 — Otros hallazgos` con su etiquetado.
- **Tienes dudas sobre si algo es derivación o investigación** → si sale del input humano solo, es derivación (Bloque 2). Si tuviste que mirar fuera, es investigación (Bloque 4).
