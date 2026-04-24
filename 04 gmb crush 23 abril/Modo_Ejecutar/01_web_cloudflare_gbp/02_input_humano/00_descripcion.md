# Input - Qué da el humano para iniciar el proceso

El humano proporciona cinco campos obligatorios para arrancar el sistema. Sin estos cinco datos no se puede ejecutar ninguna fase.

## Campos obligatorios

| Campo | Descripción |
|---|---|
| `BUSINESS_DESCRIPTION` | Descripción del negocio: qué hace, qué ofrece, a quién. |
| `BASE_LOCATION` | Ubicación base del negocio (ciudad o municipio principal). |
| `KNOWN_RESTRICTIONS` | Restricciones conocidas: presupuesto, plazos, limitaciones técnicas, legales o de negocio. |
| `ANALYSIS_CITIES_LEVEL_I` | Ciudades de análisis de primer nivel (mercado principal objetivo). |
| `ANALYSIS_CITIES_LEVEL_II` | Ciudades de análisis de segundo nivel (mercado secundario o expansión). |

## Reglas

- Estos cinco campos son el único input que el humano necesita dar al inicio.
- La IA no puede inventar ni inferir `BASE_LOCATION` ni `BUSINESS_DESCRIPTION`.
- `KNOWN_RESTRICTIONS` puede estar vacío si no hay restricciones conocidas, pero debe declararse explícitamente como vacío.
- Las ciudades de análisis no son ciudades operativas por defecto; solo generan páginas locales si también están confirmadas como ciudades operativas en fases posteriores.
