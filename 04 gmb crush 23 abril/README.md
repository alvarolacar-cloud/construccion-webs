# Sistema GMB Crush

Sistema metodológico y operativo para producir webs de SEO local alineadas con la doctrina GMB Crush y sus Google Business Profiles correspondientes.

---

## Dos modos de uso

**Modo comprender doctrina** — para estudiar la metodología, entender el sistema o construir nuevos objetivos. Empieza por `Modo_Conocimiento/`.

**Modo ejecución** — para ejecutar un objetivo de forma autónoma. En este modo no se lee `Modo_Conocimiento/`: todo lo necesario está dentro del objetivo. Empieza por `Modo_Ejecutar/EJECUTAR.md`.

---

## Cómo funciona el sistema

El sistema tiene dos piezas y solo dos:

- **Input humano** — lo que el humano da.
- **Ejecución por la IA** — todo lo que la IA hace con ese input.

Cualquier IA (Claude, ChatGPT, Manus, otros) puede ejecutar este sistema si respeta los contratos de salida (schemas + templates) y los gates de calidad (QA checklists) por fase.

---

## Punto de entrada

Si eres una IA o un operador nuevo, empieza por:

```
Modo_Ejecutar/EJECUTAR.md
```

Ese archivo explica los principios rectores, los pasos de arranque y dónde escribir los outputs.

---

## Estructura del repo

```
README.md                                       ← estás aquí

Modo_Conocimiento/                              ← modo comprender doctrina (no se lee en ejecución)
  01_GMB_Crush_Master_Framework.md              ← doctrina madre (qué es el sistema)
  02_GMB_Crush_Doctrina_Operativa.md            ← doctrina operativa global
  03_GMB_Crush_Reglas_de_Datos.md               ← reglas transversales sobre datos

Modo_Ejecutar/                                  ← modo ejecución (self-contained, no necesita Modo_Conocimiento/)
  EJECUTAR.md                                   ← punto de entrada para IAs
  <nombre del objetivo>/
    01_explicacion_objetivo/                    ← qué se busca y de dónde se parte
    02_input_humano/                            ← qué da el humano
      INPUT_HUMANO_TEMPLATE.md                  ← plantilla rellenable
      INPUT_HUMANO.md                           ← rellenado al arrancar cada ejecución
    03_ejecucion_ia/                            ← ejecución por fases
      01_docs_ejecucion/
        00_COMO_EJECUTAR.md
        01_ESCENARIO_OVERVIEW.md
        02_FASE_0_DATA/
        03_FASE_A_HIPOTESIS_INICIAL/
        04_FASE_B_CONTRASTE_MERCADO/
        05_FASE_C_DISENO_LAYOUT/
        06_FASE_D_CONSTRUCCION_WEB/
        07_FASE_E_GBP_BUILD/
        08_FASE_F_MEDICION_ITERACION/
```

Cada carpeta de fase contiene 4 archivos de contrato (prompt, output template, schema JSON, QA checklist) y, tras ejecutarse, los archivos de output producidos por la IA.

---

## Principios rectores

El sistema descansa sobre tres principios no negociables:

1. **Todo parte del input humano.** Sin los 5 campos obligatorios, no se arranca.
2. **Lo que el humano no da, la IA lo resuelve.** Cada dato lleva `origen` (humano / inventado / investigado / doctrina) y `estado` (final / provisional). Reglas completas en `Modo_Conocimiento/03_GMB_Crush_Reglas_de_Datos.md`.
3. **Reproducibilidad.** Dos IAs ejecutando con el mismo input deben llegar al mismo resultado estructural.

---

## Relación entre doctrina y objetivos

```
Modo_Conocimiento/        ← define las reglas del sistema (modo comprender doctrina)
      ↓
      informa y da forma a
      ↓
Modo_Ejecutar/       ← cada objetivo es self-contained y ejecutable de forma autónoma
```

La doctrina informa cómo están construidos los objetivos. Una vez construido un objetivo, se ejecuta de forma autónoma sin necesidad de leer la doctrina. Las reglas relevantes ya están embebidas en los docs de ejecución de cada objetivo.

---

## Versión

Ver `Modo_Conocimiento/CHANGELOG.md`.
