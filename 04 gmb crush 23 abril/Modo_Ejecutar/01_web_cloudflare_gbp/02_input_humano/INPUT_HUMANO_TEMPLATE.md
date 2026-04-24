# INPUT HUMANO — Plantilla

Esta es la plantilla del input humano para este objetivo. Para arrancar una ejecución:

1. Duplica este archivo como `INPUT_HUMANO.md` en esta misma carpeta.
2. Rellena los campos obligatorios. Los opcionales puedes dejarlos vacíos.
3. Arranca Fase A.

Si un campo obligatorio queda sin rellenar, la IA no puede ejecutar Fase A y debe pedirlo en el chat antes de arrancar.

---

## Metadatos del proyecto

| Campo | Valor |
|---|---|
| Nombre del proyecto |  |
| Fecha de creación |  |
| Versión del input | v1 |

---

## Campos obligatorios

Sin estos cinco campos el sistema no arranca.

### BUSINESS_DESCRIPTION

Descripción del negocio: qué hace, qué ofrece, a quién. Texto libre, cuanto más específico mejor.

```

```

### BASE_LOCATION

Ubicación base del negocio (ciudad o municipio principal).

```

```

### KNOWN_RESTRICTIONS

Restricciones conocidas: presupuesto, plazos, limitaciones técnicas, legales o de negocio.

Si no hay restricciones, escribe literalmente `NINGUNA`. No lo dejes vacío.

```

```

### ANALYSIS_CITIES_LEVEL_I

Ciudades de análisis de primer nivel (mercado principal objetivo). Una por línea.

Recordatorio: ciudades de análisis ≠ ciudades operativas. No generan páginas locales por sí solas.

```

```

### ANALYSIS_CITIES_LEVEL_II

Ciudades de análisis de segundo nivel (mercado secundario o expansión). Una por línea.

```

```

---

## Campos opcionales

Todo lo que dejes vacío la IA lo tratará como `origen: inventado, estado: provisional`. Antes de publicar, se sustituye por los valores reales.

### Identidad del negocio

| Campo | Valor |
|---|---|
| `REAL_COMPANY_NAME` (nombre real) |  |
| `REAL_PHONE` (teléfono real) |  |
| `REAL_EMAIL` (email real) |  |
| `REAL_DOMAIN` (dominio real) |  |
| `REAL_ADDRESS` (dirección real si aplica) |  |
| `REAL_HOURS` (horarios reales) |  |

### Servicios

| Campo | Valor |
|---|---|
| `CONFIRMED_SERVICES` (servicios que SÍ se ofrecen) |  |
| `EXCLUDED_SERVICES` (servicios que NO se ofrecen) |  |

### Marca y activos

| Campo | Valor |
|---|---|
| `BRAND_PREFERENCES` (tono, valores, estilo) |  |
| `ASSETS_AVAILABLE` (fotos, logos, vídeos, colores de marca) |  |

### Contexto adicional (opcional libre)

Cualquier otra cosa que la IA deba saber y no encaje arriba.

```

```

---

## Reglas de este archivo

- La IA **no puede inventar ni inferir** `BUSINESS_DESCRIPTION` ni `BASE_LOCATION`. Si faltan, pide al humano antes de arrancar.
- `KNOWN_RESTRICTIONS` puede ser `NINGUNA`, pero no puede estar vacío sin declaración.
- Las ciudades de análisis no son operativas por defecto. Solo se convierten en operativas en fases posteriores con evidencia.
- Todo campo opcional vacío → la IA lo crea con `origen: inventado, estado: provisional`.
- Este archivo es fuente de verdad del input: si cambia algo durante la ejecución, se actualiza aquí y se versiona (v2, v3…).
