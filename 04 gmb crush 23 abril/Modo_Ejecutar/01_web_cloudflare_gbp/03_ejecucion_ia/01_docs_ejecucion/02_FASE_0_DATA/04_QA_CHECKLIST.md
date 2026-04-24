# 04_QA_CHECKLIST.md — Fase 0: Data

Lista de verificación que la fase tiene que superar antes de pasar a Fase A.

Si algún punto falla, **no se pasa de fase**: se corrige el output y se vuelve a pasar el checklist entero.

## Input humano

- [ ] Los 5 campos obligatorios del input humano están copiados literalmente del `INPUT_HUMANO.md`.
- [ ] Ningún campo obligatorio está vacío. Si `KNOWN_RESTRICTIONS` es "ninguna", se declara explícitamente como tal (no se deja en blanco).
- [ ] Los campos opcionales que el humano aportó están también copiados con `origen: humano, estado: final`.
- [ ] Los campos opcionales NO aportados no aparecen como `humano`. Van en §3 como `inventado, provisional`.

## Derivaciones

- [ ] País, idioma, región, ciudad principal, sector, tipo de negocio y servicio principal probable están todos rellenos.
- [ ] Cada derivación indica de qué campo del input humano se deduce.
- [ ] Todas las derivaciones tienen `origen: humano, estado: final`.
- [ ] Ninguna derivación requirió investigar fuera del input humano. (Si tuviste que mirar fuera, no es derivación, es investigación y va a §4.)

## Identidad provisional

- [ ] Nombre, teléfono, email, dominio, horarios y dirección tienen valor (provisional o aportado por humano).
- [ ] Ningún dato inventado está marcado como `final`. Todos los inventados son `provisional`.
- [ ] Si el humano aportó el dato real en §1.2, NO hay duplicado en §3. El dato real prevalece.
- [ ] El teléfono provisional usa formato válido del país del negocio.
- [ ] El dominio provisional no pertenece a ningún competidor detectado en §4.

## Investigación de mercado

- [ ] Se consultaron Local Pack + orgánicos Top 10 para cada ciudad de `ANALYSIS_CITIES_LEVEL_I`.
- [ ] Cada competidor tiene `id` único, `nombre`, `url`, `ciudad` y `fuerza` declarados.
- [ ] No se ha elegido "el mejor competidor" ni se ha descartado ninguno relevante. Lista plana.
- [ ] Cada categoría GBP observada tiene número de ocurrencias.
- [ ] Cada servicio mencionado tiene número de competidores que lo listan.
- [ ] Cada barrio tiene ciudad asociada y número de menciones.
- [ ] Cada FAQ tiene número de ocurrencias.
- [ ] Cada keyword tiene intención declarada (commercial / informational / mixed).
- [ ] Cada entidad NLP tiene contexto de uso.
- [ ] Cada trust signal tiene número de competidores que lo usan.
- [ ] Cada patrón de URL tiene ejemplo y número de competidores.
- [ ] Todo hallazgo tiene `origen: investigado` y una fuerza declarada (strong / medium / weak).
- [ ] La fuerza asignada es coherente con las reglas: strong = 3+ fuentes, medium = 2, weak = 1 o baja calidad.
- [ ] Datos con fuerza `weak` están marcados `estado: provisional`. Datos strong/medium están `final`.

## Disciplina de no decidir

- [ ] No hay ninguna "categoría GBP principal elegida" en el output. Solo hay una lista de categorías observadas.
- [ ] No hay ninguna lista de "servicios MVP". Solo hay servicios observados en competidores.
- [ ] No hay ninguna lista de "ciudades operativas". Solo hay las ciudades del input humano y las que aparecen en §4.
- [ ] No hay URL map. Solo patrones de URL observados.
- [ ] No hay page types propuestos. Los page types los impone doctrina cuando Fase A los aplique.

## Estados

- [ ] Cada dato importante tiene `origen` declarado.
- [ ] Cada dato importante tiene `estado` declarado.
- [ ] Ningún dato marcado como `origen: doctrina`. La doctrina entra a partir de Fase A.

## Inventario de provisionales

- [ ] La sección §5 lista todos los datos con `estado: provisional` del output.
- [ ] Cada provisional indica motivo y tipo de sustitución (humano o investigación adicional).

## Bloqueos

- [ ] Si alguna ciudad no dio competidores suficientes, está declarado en §6.
- [ ] Si alguna fuente no se pudo consultar, está declarado en §6.
- [ ] Si no hay bloqueos, la sección §6 existe y dice explícitamente "sin bloqueos".

## Fuentes

- [ ] Cada fuente consultada está listada en §7 con su tipo (Local Pack, orgánico, SERP, PAA, autocomplete, otro).
- [ ] Las fuentes cubren todas las ciudades de `ANALYSIS_CITIES_LEVEL_I`.

## Handoff

- [ ] La sección §8 "Handoff a Fase A" está completa.
- [ ] Lista los archivos producidos.
- [ ] Declara qué datos tiene disponibles Fase A para consumir.
- [ ] Declara qué datos tiene que decidir Fase A (no los decide Data).
- [ ] Lista los provisionales críticos.
- [ ] Lista los bloqueos heredados.

## Archivos y formato

- [ ] Existe `DATA_GMB_CRUSH.md` en la carpeta de la fase.
- [ ] Existe `DATA_GMB_CRUSH.json` en la carpeta de la fase.
- [ ] El JSON valida contra `03_OUTPUT_SCHEMA.json`.
- [ ] El Markdown sigue la estructura de `02_OUTPUT_TEMPLATE.md` (mismas secciones en mismo orden).

## Coherencia final

- [ ] El Markdown y el JSON contienen los mismos datos (el JSON no tiene datos que falten en el MD ni al revés).
- [ ] El resumen ejecutivo (§0) tiene números que coinciden con los conteos reales de las demás secciones.
