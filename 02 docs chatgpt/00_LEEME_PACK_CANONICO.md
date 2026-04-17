# PACK CANÓNICO DE PLANTILLAS GMB CRUSH — V2

## Qué es este pack
Este pack sustituye la versión genérica anterior y convierte las plantillas en una guía **canónica, extensa y ejecutable** para documentar, diseñar, construir y validar una web local siguiendo la lógica GMB Crush.

Está redactado en formato **aséptico**:
- sin ejemplos de nicho,
- sin copy comercial,
- sin decisiones cerradas de negocio,
- con placeholders y tablas para rellenar.

## Qué corrige frente al pack anterior
Esta versión deja explícitos los principios que antes estaban implícitos:
- jerarquía obligatoria de familias de página,
- framework AUDIO como regla operativa,
- requisitos mínimos por tipo de página,
- matriz de enlazado interno,
- schema mínimo por familia,
- relación directa entre GBP, servicios, ciudades y arquitectura,
- QA sobre URL publicada, no solo sobre código local.

## Orden oficial de uso
1. `project.config.template.json`
2. `DOC_A_template.md`
3. `DOC_B_template.md`
4. `DOC_A_REGENERADO_template.md`
5. `design.tokens.template.json`
6. `DOC_C_template.md`
7. `DOC_D_template.md`
8. `DOC_E_template.md`

## Documentos de referencia del pack
Antes de rellenar plantillas, leer:
- `00_PRINCIPIOS_NO_NEGOCIABLES_GMB_CRUSH.md`
- `00_MATRIZ_FAMILIAS_Y_SCHEMA_GMB_CRUSH.md`
- `00_MATRIZ_ENLAZADO_GMB_CRUSH.md`

## Jerarquía de autoridad entre documentos
| Documento | Función | Puede cambiar qué | No puede cambiar qué |
|---|---|---|---|
| `project.config` | inputs estructurados del proyecto | datos operativos, servicios, ciudades, categorías, NAP | reglas del sistema |
| Doc A | hipótesis inicial | primeras hipótesis de arquitectura y narrativa | diseño final, prioridades definitivas |
| Doc B | contraste | valida, corrige, amplía o elimina hipótesis | diseño final |
| Doc A Regenerado | arquitectura final | inventario de páginas, URLs, clusters, linking, prioridades | sistema visual |
| Doc C | diseño y layout | tokens, componentes, layouts, assets, responsive | arquitectura, servicios, ciudades, slugs |
| Doc D | implementación | traducción exacta a código, entorno, build y deploy | reescribir estrategia o rediseñar |
| Doc E | QA | estado final, bloqueos, mejoras | inventar arquitectura fuera de alcance |

## Regla de gobierno
Si hay conflicto:
1. mandan los principios no negociables;
2. luego manda Doc A Regenerado sobre arquitectura;
3. luego manda Doc C sobre diseño;
4. luego manda Doc D sobre implementación real;
5. Doc E no redefine el proyecto, pero sí puede bloquear publicación.

## Qué debe conseguir un proyecto ejecutado con este pack
- representar correctamente la entidad principal del negocio;
- soportar la categoría GBP principal y las adicionales;
- separar servicios, ciudades e intenciones en URLs útiles;
- construir clusters reales por ciudad y por servicio;
- reforzar GBP, orgánico y visibilidad en respuestas de IA;
- convertir con señales claras de confianza y llamadas a la acción;
- dejar rastro documental suficiente para repetir el sistema.

## Regla de honestidad
Este pack no promete rankings garantizados.
Sí pretende hacer reproducible una base local muy fuerte de:
- SEO local,
- arquitectura semántica,
- relevancia geográfica,
- enlazado interno,
- schema,
- conversión,
- QA operativo.

## Estructura del pack
- `00_PRINCIPIOS_NO_NEGOCIABLES_GMB_CRUSH.md`
- `00_MATRIZ_FAMILIAS_Y_SCHEMA_GMB_CRUSH.md`
- `00_MATRIZ_ENLAZADO_GMB_CRUSH.md`
- `DOC_A_template.md`
- `DOC_B_template.md`
- `DOC_A_REGENERADO_template.md`
- `DOC_C_template.md`
- `DOC_D_template.md`
- `DOC_E_template.md`
- `project.config.template.json`
- `design.tokens.template.json`

## Cómo usarlo de forma correcta
1. duplicar este pack dentro de `docs/plantillas/`;
2. crear la carpeta del proyecto;
3. rellenar `project.config` antes de Doc A;
4. no saltarse Doc B;
5. no construir sin Doc A Regenerado aprobado;
6. no rediseñar en Doc D;
7. no cerrar el proyecto sin Doc E sobre URL publicada.

## Regla final
Estas plantillas son guías operativas.
No sustituyen el criterio profesional, pero sí deben impedir:
- improvisación,
- mezcla de capas,
- páginas ambiguas,
- slugs arbitrarios,
- contenido sin intención,
- diseño que contradice arquitectura,
- QA superficial.
