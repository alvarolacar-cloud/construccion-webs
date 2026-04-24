# 01_INPUT.md — Fase B: Contraste de Mercado GMB Crush

## Objetivo

Convertir la hipótesis inicial de Fase A en una **Hipótesis Contrastada GMB Crush** basada en señales reales de mercado.

La Fase B no existe para cuestionar la doctrina GMB Crush. Existe para validar prioridades, categorías, servicios, ciudades, URLs, entidades, argumentos y contenido contra el mercado real.

## Restricciones de doctrina

El mercado puede cambiar:

- prioridad de servicios;
- categorías candidatas;
- páginas MVP vs backlog;
- entidades NLP;
- FAQs;
- argumentos de conversión;
- temas de GeoArticles;
- URLs propuestas;
- intensidad de cobertura geográfica.

El mercado no puede eliminar:

- Homepage como root entity anchor;
- Service Overview Pages;
- Location-Based Service Pages;
- Additional Category Pages cuando procedan;
- GeoHub principal;
- GeoArticles como boosters;
- interlinking jerárquico;
- schema SEO;
- QA.

## Archivos de esta fase

Lee también:

```txt
03_OUTPUT_SCHEMA.json
04_QA_CHECKLIST.md
```

Consume:

```txt
HIPOTESIS_INICIAL_GMB_CRUSH.md
HIPOTESIS_INICIAL_GMB_CRUSH.json
```

Produce:

```txt
HIPOTESIS_CONTRASTADA_GMB_CRUSH.md
LOG_CONTRASTE_GMB_CRUSH.md
HIPOTESIS_CONTRASTADA_GMB_CRUSH.json
```

## Inputs obligatorios

| Input | Uso |
|---|---|
| Hipótesis inicial Markdown | Leer estrategia, riesgos y contexto. |
| Hipótesis inicial JSON | Consumir páginas, servicios, ciudades y estados. |
| Ciudades de análisis Nivel I | Investigación completa. |
| Ciudades de análisis Nivel II | Research punch estratégico. |
| Restricciones del negocio | Evitar recomendaciones inválidas. |

## Fuentes preferentes

Prioriza:

1. Local Pack / Map Pack.
2. Websites de competidores locales reales.
3. Páginas de servicio y local pages de competidores.
4. SERPs orgánicas locales.
5. PAA / preguntas frecuentes.
6. Autocomplete / búsquedas relacionadas.
7. Directorios solo como señal secundaria, nunca como benchmark estructural.

## Tareas obligatorias

### 1. Preparar matriz de contraste

Lista lo que vas a validar:

- categoría GBP principal;
- categorías adicionales;
- servicios MVP;
- servicios backlog;
- ciudades operativas;
- ciudades de análisis;
- familias de página;
- URL patterns;
- temas GeoArticle;
- entidades NLP;
- argumentos de conversión;
- schema e interlinking.

### 2. Ejecutar análisis Nivel I

Para cada ciudad Nivel I, analiza:

- query principal de categoría;
- queries por servicio MVP;
- queries de categoría adicional;
- competidores del Local Pack;
- competidores orgánicos;
- patrones de homepage;
- patrones de service pages;
- patrones de local pages;
- FAQs;
- entidades;
- CTAs;
- señales de confianza;
- barrios o zonas mencionadas;
- reviews y argumentos repetidos.

### 3. Ejecutar análisis Nivel II

Para cada ciudad Nivel II, ejecuta un análisis punch con 4 queries:

1. `[primary category] [city]`
2. `[top service] [city]`
3. `[service near me]` adaptado a ciudad/mercado
4. `[problem/intent query] [city]`

Extrae patrones diferenciales:

- servicios repetidos;
- problemas recurrentes;
- FAQs;
- entidades locales;
- categorías adicionales;
- claims de conversión;
- oportunidades GeoArticle.

### 4. Clasificar patrones

Marca cada patrón como:

| Tipo | Definición |
|---|---|
| `strong` | Repetido en varios competidores relevantes o Local Pack. |
| `medium` | Aparece en algunos competidores o SERPs. |
| `weak` | Aparece una vez o con baja calidad. |
| `discarded` | No aporta valor o contradice restricciones/doctrina. |

### 5. Validar categoría GBP

Evalúa:

- si la categoría principal candidata coincide con la intención real;
- si competidores usan otra categoría más clara;
- si hay categorías adicionales relevantes;
- qué servicios debe soportar cada categoría;
- qué páginas necesita la web para soportar la GBP.

### 6. Validar servicios

Para cada servicio:

- presencia en competidores;
- intención comercial;
- profundidad de contenido;
- posibilidad de Service Overview;
- necesidad de Location-Based Page;
- prioridad MVP/backlog;
- señales de rentabilidad;
- riesgo de canibalización.

### 7. Validar geografía

Distingue:

- ciudades operativas confirmadas;
- ciudades de análisis no operativas;
- barrios como contexto;
- ciudades futuras;
- GeoHubs necesarios;
- Location-Based Pages válidas;
- oportunidades GeoArticle.

No conviertas ciudades de análisis en ciudades operativas sin evidencia o aprobación.

### 8. Validar arquitectura final

Crea el mapa definitivo:

- homepage;
- Service Overview Pages;
- Location-Based Service Pages;
- Additional Category Pages;
- GeoHub principal;
- GeoHubs secundarios si aplican;
- GeoArticles iniciales;
- Service Area Overview;
- contact / conversion;
- legales.

### 9. Crear log de decisiones

Cada cambio frente a Fase A debe tener:

- dato original;
- dato final;
- tipo de cambio;
- evidencia;
- fuente o patrón;
- impacto;
- estado;
- decisión.

### 10. Crear handoff a Fase C y D

Fase C necesita:

- arquitectura final;
- tono visual deseado;
- secciones requeridas por page type;
- prioridades UX/conversión;
- referencias de competidores útiles.

Fase D necesita:

- páginas finales;
- URLs finales;
- data layer;
- interlinking;
- schema;
- contenido crítico;
- QA técnico esperado.

## Reglas de decisión

- Si un patrón contradice la doctrina, no se adopta.
- Si un competidor tiene mala arquitectura pero buen diseño, se puede extraer inspiración visual en Fase C, no copiar arquitectura.
- Si una categoría adicional no tiene intención diferenciada, va a backlog.
- Si un servicio no tiene intención comercial suficiente, va a backlog o GeoArticle.
- Si un barrio no cumple señales, se usa como contexto.
- Si hay conflicto entre volumen y rentabilidad, prioriza intención comercial y calidad del lead.

## Errores a evitar

- Usar directorios como benchmark principal.
- Cambiar la arquitectura por imitar competidores.
- Crear páginas para todas las ciudades analizadas.
- Validar todo lo de Fase A sin evidencia.
- Descartar page types obligatorios por no verlos en competidores.
- No registrar cambios en el log.
- Pasar a Fase C/D sin JSON estructurado.
