# DOC_0 — ANÁLISIS DE COMPETIDORES

## Propósito

Este documento se ejecuta al inicio del proceso. Su función es analizar los competidores reales del Local Pack de Google para el negocio del cliente y producir dos outputs que alimentan el resto del sistema:

1. **Propuesta de servicios** para incluir en la web
2. **Selección de la web de referencia**

---

## Inputs necesarios

Antes de ejecutar este documento, el usuario debe proporcionar:

- **Descripción del negocio**: qué hace, en qué se especializa (1-2 frases)
- **País del negocio**
- **Ciudades a analizar**: lista de ciudades separadas por comas

---

## Instrucciones de ejecución

### Paso 1 — Construir la keyword principal por ciudad

Para cada ciudad indicada, construye la keyword principal en el idioma local de esa ciudad siguiendo el patrón:

> `[servicio principal] [ciudad]`

Ejemplos: `reformas de baño madrid`, `reforma bany barcelona`, `plomberie paris`, `bathroom renovation london`

Si el negocio opera en una ciudad con idioma cooficial (catalán, euskera, gallego), usa el idioma mayoritario de búsqueda en esa ciudad.

### Paso 2 — Extraer el Local Pack

Para cada ciudad, navega a Google y extrae los 3 resultados del Local Pack para esa keyword.

**Fallback obligatorio**: si el Local Pack muestra solo directorios (Habitissimo, Houzz, Milanuncios, Páginas Amarillas, Yelp, etc.), usa la query:

> `[servicio] [ciudad] -site:habitissimo.es -site:houzz.es -site:milanuncios.com`

y toma los primeros 3 resultados orgánicos de empresas reales con web propia.

### Paso 3 — Analizar cada competidor

Para cada uno de los 3 competidores por ciudad, navega a su web y extrae:

- Nombre de la empresa
- URL del sitio web
- País del negocio (mismo país que el cliente o extranjero)
- Servicios que presta (todos los que aparecen en homepage, menú de navegación y páginas de servicio)
- Estructura web detectada (familias de página: homepage, service pages, location pages, blog, contacto, sobre nosotros, proyectos, galería, FAQ, etc.)

Presenta los resultados ciudad por ciudad en este formato:

```
## [Ciudad] — keyword analizada: "[keyword]"

### Competidor 1: [Nombre]
- URL: [url]
- País: [país]
- Servicios: [lista]
- Estructura web: [familias detectadas]

### Competidor 2: [Nombre]
...

### Competidor 3: [Nombre]
...
```

---

## Output 1 — Propuesta de servicios para la web

Una vez analizados todos los competidores de todas las ciudades, genera una tabla consolidada:

| Servicio | Competidores mismo país | Competidores extranjeros | Decisión propuesta | Motivo |
|---|---|---|---|---|

**Reglas de decisión:**

- Si el servicio lo presta al menos un competidor del **mismo país** → **INCLUIR** (obligatorio)
- Si el servicio solo aparece en competidores **extranjeros** → **PROPONER** (recomendado, pendiente de validación)
- Si el servicio no aparece en ningún competidor pero es coherente con el negocio → **PROPONER CON NOTA**

> **Nota importante**: esta propuesta es orientativa. La arquitectura final de servicios la decide el sistema en función de la demanda real, la competencia y las reglas de construcción. Ningún servicio marcado como INCLUIR puede eliminarse sin justificación explícita en la fase de investigación.

---

## Output 2 — Selección de web de referencia

Presenta una tabla resumen de todos los competidores analizados:

| Competidor | País | URL | Puntos fuertes | Puntos débiles | Puntuación (1-5) |
|---|---|---|---|---|---|

A continuación, propón la web de referencia:

> **Web de referencia propuesta:** `[nombre]` — `[URL]`
>
> **Motivo:** `[2-3 frases: por qué es la mejor referencia en términos de estructura, contenido, diseño y autoridad local]`

El usuario revisa esta propuesta y confirma cuál será la web de referencia definitiva. La web elegida se usará en la fase de diseño para la extracción de tokens visuales y de layout.

---

## Gate de aprobación

No pasar al Doc A si no se cumple todo:

- [ ] Se han analizado al menos 3 competidores reales por ciudad.
- [ ] Todos los competidores tienen web propia (no directorios).
- [ ] La tabla de propuesta de servicios está completa con decisión para cada servicio.
- [ ] El usuario ha confirmado la web de referencia definitiva.
- [ ] La web de referencia confirmada está anotada para la fase de diseño.
