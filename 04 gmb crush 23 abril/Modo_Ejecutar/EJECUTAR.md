# EJECUTAR

Punto de entrada del sistema GMB Crush. Si eres una IA y acabas de llegar a este repo, empieza aquí.

---

## 1. Qué es esto

Un sistema para producir webs de SEO local alineadas con la doctrina GMB Crush y con su Google Business Profile correspondiente.

El sistema tiene dos piezas y solo dos:

- **Input humano** — lo que el humano da.
- **Ejecución por la IA** — todo lo que la IA hace con ese input.

El conocimiento del sistema vive en `Modo_Conocimiento/`. Los objetivos ejecutables viven en `Modo_Ejecutar/`.

---

## 2. Principios rectores

Antes de ejecutar nada, interiorízalos. Rigen sobre todo lo demás.

1. **Todo parte del input humano.** Sin los 5 campos obligatorios del humano (ver sección 3), no se arranca.
2. **Lo que el humano no da, la IA lo resuelve.** Cada dato producido por la IA lleva dos etiquetas obligatorias:
   - `origen` ∈ {`humano`, `inventado`, `investigado`, `doctrina`}
   - `estado` ∈ {`final`, `provisional`}

3. **Reproducibilidad.** El proceso debe ser lo bastante preciso como para que dos IAs ejecutándolo con el mismo input humano lleguen al mismo resultado estructural. Respetar los schemas, los templates y los QA checklists sin atajos.

---

## 3. Los 5 inputs humanos

Son los únicos datos que el humano aporta al arranque:

```
BUSINESS_DESCRIPTION       — descripción del negocio
BASE_LOCATION              — ciudad/municipio base del negocio
KNOWN_RESTRICTIONS         — restricciones conocidas
ANALYSIS_CITIES_LEVEL_I    — ciudades de análisis principal
ANALYSIS_CITIES_LEVEL_II   — ciudades de análisis secundario
```

`BUSINESS_DESCRIPTION` y `BASE_LOCATION` **no se pueden inferir**: si faltan, pregunta al humano antes de arrancar.

Todo lo demás (nombre legal, teléfono, email, horarios, fotos, reseñas, licencias, etc.) la IA lo inventa razonable durante el proceso con `origen: inventado, estado: provisional`. El humano los sustituye por reales antes de publicar.

---

## 4. Jerarquía de fuentes de verdad

De arriba a abajo. Ninguna capa inferior puede contradecir a una superior.

```
Modo_Conocimiento/01_GMB_Crush_Master_Framework.md      ← doctrina madre (qué es el sistema)
Modo_Conocimiento/02_GMB_Crush_Doctrina_Operativa.md    ← doctrina operativa global
Modo_Conocimiento/03_GMB_Crush_Reglas_de_Datos.md       ← reglas transversales sobre datos
Modo_Ejecutar/<objetivo>/                               ← objetivo self-contained y ejecutable
  01_explicacion_objetivo/                        ← qué buscamos y de dónde partimos
  02_input_humano/                                 ← qué da el humano
  03_ejecucion_ia/                                ← las 7 fases 0, A–F
```

Si algo en un objetivo o en una fase contradice la doctrina, manda la doctrina.

---

## 5. Cómo arrancar

### Paso 1 — Identifica el objetivo

El humano te dice en el chat qué objetivo trabajas. Si no te lo ha dicho, pregúntaselo.

Los objetivos viven en `Modo_Ejecutar/`. Cada carpeta es un objetivo distinto (ej. `01_web_cloudflare_gbp`).

### Paso 2 — Lee el objetivo

Abre la carpeta del objetivo y lee, en este orden:

```
01_explicacion_objetivo/
02_input_humano/
03_ejecucion_ia/01_docs_ejecucion/00_COMO_EJECUTAR.md
03_ejecucion_ia/01_docs_ejecucion/01_ESCENARIO_OVERVIEW.md
```

Esto te da: qué se busca, qué input necesitas, qué fases ejecutar y en qué orden.

### Paso 3 — Obtén el input humano

Mira si existe un archivo `INPUT_HUMANO.md` rellenado dentro de `02_input_humano/`.

- **Si existe y está completo** → úsalo como input.
- **Si no existe o está vacío** → pregúntale al humano en el chat, campo por campo, usando `INPUT_HUMANO_TEMPLATE.md` como guía, y créalo tú rellenándolo.

No arranques Fase 0 sin tener los 5 campos obligatorios.

### Paso 4 — Interioriza las reglas de doctrina

Las reglas de doctrina ya están embebidas en el `01_INPUT.md` de cada fase. No necesitas leer `Modo_Conocimiento/` para ejecutar. Esos documentos son referencia para quien quiera entender el sistema en profundidad.

### Paso 5 — Ejecuta las fases en orden

Para cada fase (0 → A → B → C → D → E → F):

1. Lee los archivos de contrato de la fase: `01_INPUT.md`, `03_OUTPUT_SCHEMA.json`, `04_QA_CHECKLIST.md`.
2. Lee los outputs de las fases anteriores (viven en la carpeta de cada fase anterior, ver sección 6).
3. Produce los archivos que la fase pide. Los nombres están en la cabecera de `02_OUTPUT_TEMPLATE.md`.
4. Escríbelos en la misma carpeta de la fase que estás ejecutando (ver sección 6).
5. Pasa el QA checklist. Si falla algún punto, corrige antes de avanzar.
6. No pases a la siguiente fase hasta completar el handoff.

---

## 6. Dónde escribir los outputs

**Regla:** cada fase escribe sus outputs dentro de su propia carpeta, al lado de sus 4 archivos de contrato.

Ejemplo para Fase A:

```
03_FASE_A_HIPOTESIS_INICIAL/
  01_INPUT.md                          ← instrucciones de ejecución (no tocar)
  02_OUTPUT_TEMPLATE.md                ← referencia visual del output (doc soporte, no leer)
  03_OUTPUT_SCHEMA.json                ← contrato JSON (no tocar)
  04_QA_CHECKLIST.md                   ← gate de calidad (no tocar)
  HIPOTESIS_INICIAL_GMB_CRUSH.md       ← lo produces tú
  HIPOTESIS_INICIAL_GMB_CRUSH.json     ← lo produces tú
```

Los archivos con prefijo numérico (`01_`, `03_`, `04_`) son los archivos de contrato que lees. El `02_OUTPUT_TEMPLATE.md` es documentación de soporte para humanos; no es necesario leerlo para ejecutar. Los archivos sin prefijo numérico son los outputs producidos por la IA.

La siguiente fase lee los outputs de la anterior por ruta relativa. Ejemplo: Fase B lee `../03_FASE_A_HIPOTESIS_INICIAL/HIPOTESIS_INICIAL_GMB_CRUSH.md` y `.json`.

---

## 7. Reglas de datos (resumen)

Cada dato importante producido por la IA lleva dos etiquetas obligatorias: `origen` y `estado`.

| Etiqueta | Valores | Significado |
|---|---|---|
| `origen` | `humano` | Dato que dio el humano (los 5 inputs + cualquier otro que aporte). |
| `origen` | `inventado` | La IA lo creó con criterio razonable para desbloquear el pipeline. |
| `origen` | `investigado` | La IA lo obtuvo investigando mercado (competidores, SERPs, PAA). |
| `origen` | `doctrina` | Dato impuesto por la doctrina (page types, schema, interlinking, URL patterns). |
| `estado` | `final` | Dato cerrado, publicable. |
| `estado` | `provisional` | Dato puesto para desbloquear, debe sustituirse antes de publicar. |

**Regla de publicación (no negociable):** no se publica si queda algún dato en `estado: provisional`.

Datos que arrancan siempre como `inventado + provisional` y la IA no puede dar por reales hasta que el humano los sustituya: nombre legal, teléfono, email, horarios, dominio, licencias, reseñas, fotos, precios, nombres de empleados, fecha de apertura.


---

## 8. Qué NO hacer

- No contradecir las restricciones de doctrina declaradas en cada fase.
- No contradecir la doctrina desde una fase.
- No cambiar page types canónicos.
- No pasar de fase sin completar el QA checklist.
- No producir outputs sin `origen` y `estado` declarados.
- No marcar como `final` un dato `inventado` que el humano no ha confirmado.
- No sobrescribir los archivos con prefijo numérico (`01_`, `02_`, `03_`, `04_`) de cada fase.
- No commitear secretos, tokens ni credenciales.

---

## 9. Si te quedas bloqueada

- **Falta un campo obligatorio del input humano** → pregunta al humano, no arranques.
- **La fase anterior tiene outputs incompletos** → no arranques la actual; vuelve a la anterior y complétala.
- **Un patrón de mercado contradice la doctrina** → manda la doctrina. Registra la discrepancia en el log de la fase.
- **Dos opciones válidas sin forma clara de decidir** → elige siguiendo las prioridades declaradas en `01_INPUT.md` de la fase. Declara la decisión y su motivo en el log.

---

## 10. Estado final del sistema

Un objetivo está **completo** cuando existen todos los outputs de las 7 fases (0, A–F) en sus carpetas correspondientes y todos los QA checklists están cerrados.

Un objetivo está **publicable** cuando además ningún dato importante queda en `estado: provisional`, y los gates de publicación descritos en la doctrina se cumplen.

Completo ≠ publicable. La web puede estar construida en preview con provisionales. No se publica hasta que el humano sustituye los reales.
