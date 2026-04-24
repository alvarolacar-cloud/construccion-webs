# 02_OUTPUT_TEMPLATE.md — Fase 0: Data

## Archivos que debe producir la fase

```txt
DATA_GMB_CRUSH.md
DATA_GMB_CRUSH.json
```

---

# DATA GMB CRUSH

## 0. Resumen ejecutivo

| Campo | Valor |
|---|---|
| Proyecto |  |
| Ciudad principal |  |
| Fecha de recolección |  |
| Nº de competidores recolectados |  |
| Nº de categorías GBP observadas |  |
| Nº de servicios mencionados |  |
| Nº de barrios con señal |  |
| Nº de FAQs recurrentes |  |
| Nº de keywords de alta intención |  |
| Datos con `estado: provisional` |  |

## 1. Input humano normalizado

### 1.1 Campos obligatorios

| Campo | Valor recibido | Origen | Estado |
|---|---|---|---|
| `BUSINESS_DESCRIPTION` |  | humano | final |
| `BASE_LOCATION` |  | humano | final |
| `KNOWN_RESTRICTIONS` |  | humano | final |
| `ANALYSIS_CITIES_LEVEL_I` |  | humano | final |
| `ANALYSIS_CITIES_LEVEL_II` |  | humano | final |

### 1.2 Campos opcionales aportados por el humano

Solo rellenar los que el humano haya aportado.

| Campo | Valor | Origen | Estado |
|---|---|---|---|
| `REAL_COMPANY_NAME` |  | humano | final |
| `REAL_PHONE` |  | humano | final |
| `REAL_EMAIL` |  | humano | final |
| `REAL_DOMAIN` |  | humano | final |
| `REAL_HOURS` |  | humano | final |
| `REAL_ADDRESS` |  | humano | final |
| `CONFIRMED_SERVICES` |  | humano | final |
| `EXCLUDED_SERVICES` |  | humano | final |
| `BRAND_PREFERENCES` |  | humano | final |
| `ASSETS_AVAILABLE` |  | humano | final |

## 2. Derivaciones obvias desde el input

Datos que salen mecánicamente del input humano. No son investigación ni invención.

| Derivación | Valor | Se deduce desde | Origen | Estado |
|---|---|---|---|---|
| País / mercado |  | `BASE_LOCATION` | humano | final |
| Idioma principal |  | `BASE_LOCATION` | humano | final |
| Región / comunidad autónoma |  | `BASE_LOCATION` | humano | final |
| Ciudad principal |  | `BASE_LOCATION` | humano | final |
| Sector principal |  | `BUSINESS_DESCRIPTION` | humano | final |
| Tipo probable de negocio (physical / SAB / hybrid) |  | `BUSINESS_DESCRIPTION` | humano | final |
| Servicio principal probable |  | `BUSINESS_DESCRIPTION` | humano | final |

## 3. Identidad provisional del negocio

Datos del negocio que el humano no aportó y la IA inventa razonable para desbloquear. **Todos con `estado: provisional`**. El humano los sustituye por reales antes de publicar.

Si el humano aportó el dato real en §1.2, **no inventes**: copia el real con `origen: humano, estado: final` y deja aquí nota "aportado por humano".

| Dato | Valor provisional | Regla aplicada | Origen | Estado |
|---|---|---|---|---|
| Nombre provisional |  | Coherente con sector + ciudad, sin marcas reales | inventado | provisional |
| Teléfono provisional |  | Formato válido país, placeholder genérico | inventado | provisional |
| Email provisional |  | `info@` + dominio provisional | inventado | provisional |
| Dominio provisional |  | Sector + ciudad, no pertenece a competidor | inventado | provisional |
| Horarios provisionales |  | Estándar del sector | inventado | provisional |
| Dirección provisional |  | Solo ciudad (el resto queda abierto) | inventado | provisional |

## 4. Investigación de mercado en bruto

Todo el mercado observado en las ciudades de análisis. Lista plana, sin priorizar ni decidir.

Fuerza del hallazgo:
- `strong` → 3+ fuentes relevantes → `estado: final`.
- `medium` → 2 fuentes → `estado: final` con nota.
- `weak` → 1 fuente o baja calidad → `estado: provisional`.

### 4.1 Competidores

| ID | Nombre | URL | Ciudad | Categoría GBP principal | Categorías GBP adicionales | Servicios listados | Estructura URL | Trust signals visibles | Origen | Estado | Fuerza |
|---|---|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  | investigado |  |  |

### 4.2 Categorías GBP observadas en el sector

| Categoría GBP | Ocurrencias | Ciudades donde aparece | Origen | Estado | Fuerza |
|---|---:|---|---|---|---|
|  |  |  | investigado |  |  |

### 4.3 Servicios mencionados en competidores

| Servicio | Nº competidores que lo listan | Ciudades | Origen | Estado | Fuerza |
|---|---:|---|---|---|---|
|  |  |  | investigado |  |  |

### 4.4 Barrios / zonas mencionados

| Ciudad | Barrio / zona | Nº de menciones | Fuente (competidor que lo menciona) | Origen | Estado | Fuerza |
|---|---|---:|---|---|---|---|
|  |  |  |  | investigado |  |  |

### 4.5 FAQs recurrentes en el sector

| Pregunta | Nº de ocurrencias | Fuente | Origen | Estado | Fuerza |
|---|---:|---|---|---|---|
|  |  |  | investigado |  |  |

### 4.6 Keywords de alta intención

| Keyword | Intención (commercial / informational / mixed) | Fuente (autocomplete / PAA / competidor) | Origen | Estado | Fuerza |
|---|---|---|---|---|---|
|  |  |  | investigado |  |  |

### 4.7 Entidades NLP del sector

| Entidad | Contexto de uso | Nº de ocurrencias | Origen | Estado | Fuerza |
|---|---|---:|---|---|---|
|  |  |  | investigado |  |  |

### 4.8 Trust signals típicos

| Trust signal | Nº competidores que lo usan | Ejemplo | Origen | Estado | Fuerza |
|---|---:|---|---|---|---|
|  |  |  | investigado |  |  |

### 4.9 Patrones de URL observados

| Patrón | Ejemplo | Nº competidores que lo usan | Origen | Estado | Fuerza |
|---|---|---:|---|---|---|
|  |  |  | investigado |  |  |

### 4.10 Otros hallazgos

Sub-bloque libre para cualquier dato recolectado que sea relevante y no encaje en los bloques anteriores.

| Dato | Descripción | Origen | Estado | Fuerza |
|---|---|---|---|---|
|  |  | investigado |  |  |

## 5. Datos con `estado: provisional` (inventario)

Lista explícita de todo lo que quedó en `provisional` para que Fase A sepa qué no está cerrado y el humano sepa qué tiene que sustituir antes de publicar.

| Dato | Sección | Motivo de provisional | Tipo de sustitución |
|---|---|---|---|
|  | §3 Identidad provisional / §4.x Mercado |  | humano sustituye / investigación adicional |

## 6. Bloqueos encontrados

Cosas que no se pudieron recolectar. No se resuelven aquí — se declaran para que Fase A decida qué hacer.

| Bloqueo | Ciudad / ámbito | Impacto esperado |
|---|---|---|
|  |  |  |

## 7. Fuentes consultadas

Para auditoría y reproducibilidad.

| Fuente | URL / descripción | Ciudad | Tipo (Local Pack / orgánico / SERP / PAA / autocomplete) |
|---|---|---|---|
|  |  |  |  |

## 8. Handoff a Fase A

Obligatorio. Sin este handoff completo no se pasa de fase.

- **Archivos producidos:** `DATA_GMB_CRUSH.md` + `DATA_GMB_CRUSH.json`.
- **Qué tiene disponible Fase A:** input humano normalizado, derivaciones, identidad provisional, mercado en bruto.
- **Qué debe decidir Fase A a partir de aquí:** categoría GBP principal, servicios MVP, ciudades operativas, page types aplicables, URL map inicial, interlinking inicial.
- **Datos provisional críticos:** [listar los más bloqueantes de §5].
- **Bloqueos que Fase A tiene que resolver:** [listar de §6].
- **Riesgos:** [si los hay, con impacto y probabilidad].
- **Recomendaciones para Fase A:** [observaciones de la recolección que pueden orientar sin decidir por ella].
