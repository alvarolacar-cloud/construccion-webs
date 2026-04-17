# MATRIZ DE ENLAZADO INTERNO — GMB CRUSH

## Propósito
Definir la lógica de enlazado interno del sistema para que cada familia de página refuerce:
- la entidad principal;
- la cobertura temática;
- la cobertura geográfica;
- la jerarquía del sitio;
- la conversión.

El enlazado interno no es ornamental.
Es parte de la arquitectura.

---

## 1. Matriz maestra

| Fuente | Debe enlazar a | Mínimo operativo | Objetivo del enlace | Tipo de anchor recomendado |
|---|---|---|---|---|
| Homepage | Service Overview Pages | `3–6` | transferir relevancia a pilares temáticos | descriptivo por servicio o solución |
| Homepage | GeoHub principal | `1` | conectar entidad con ciudad principal | ciudad o cobertura principal |
| Homepage | Additional Category Pages | `según existan` | reforzar categorías GBP adicionales | servicio/categoría + intención |
| Homepage | Contacto / presupuesto | `1–2` | conversión | acción clara |
| Service Overview | Todas sus variantes servicio + ciudad prioritarias | `todas las prioritarias` | pasar autoridad temática a intención local | servicio + ciudad + modificador natural |
| Service Overview | Homepage | `1` | reforzar jerarquía | marca o solución principal |
| Service Overview | Servicios relacionados | `2–4` | cross-sell y claridad semántica | descriptivo |
| Service Overview | GeoArticles relacionados | `1–3` | profundidad temática | pregunta o beneficio |
| Service + City | Service Overview padre | `1` | relación temática madre | servicio genérico |
| Service + City | GeoHub de la ciudad | `1` | relación geográfica madre | ciudad o cobertura local |
| Service + City | Otros servicios de la misma ciudad | `2–4` | cluster local y navegación útil | otro servicio + ciudad |
| Service + City | GeoArticles relacionados | `1–3` | soporte long-tail y objeciones | pregunta o tema |
| Additional Category | GeoHub de la ciudad | `1` | anclar categoría al cluster local | ciudad + categoría |
| Additional Category | Service + City relacionados | `1–3` | reforzar semántica cruzada | servicio relacionado |
| Additional Category | GeoArticles del mismo tema | `1–2` | apoyo informativo | pregunta o problema |
| GeoHub | Homepage | `1` | devolver jerarquía a entidad | marca o ciudad principal |
| GeoHub | Service + City de la ciudad | `todos los principales` | distribuir autoridad a las páginas convertidoras | servicio + ciudad |
| GeoHub | Additional Category Pages de la ciudad | `según existan` | soporte de entidad adicional | categoría + ciudad |
| GeoHub | GeoArticles de la ciudad | `1+ por cluster` | completar cluster local | tema long-tail |
| GeoHub | Contacto / presupuesto | `1` | conversión | acción |
| GeoArticle | Service + City correspondiente | `1` | empujar intención comercial | servicio + ciudad |
| GeoArticle | GeoHub correspondiente | `1` | devolver al cluster de ciudad | ciudad |
| GeoArticle | Otro GeoArticle relacionado | `0–1` | cluster editorial | tema cercano |
| Páginas de confianza | Servicios y ciudades relevantes | `según caso` | reforzar credibilidad contextual | anchor descriptivo |

---

## 2. Reglas de anchor text
Usar anchors que mezclen:
- intención,
- beneficio,
- entidad,
- claridad.

### Sí usar
- anchors descriptivos;
- anchors naturales con contexto;
- anchors que expliquen el valor del clic;
- variación semántica razonable.

### No abusar
- exact match repetido;
- anchors genéricos vacíos;
- enlaces sin justificación en el flujo de lectura;
- links ocultos en bloques irrelevantes.

---

## 3. Reglas de cluster

### Cluster por servicio
Cada servicio principal debe tener:
- 1 service overview;
- N páginas servicio + ciudad;
- N geoarticles relacionados;
- enlaces internos coherentes entre todas sus capas.

### Cluster por ciudad
Cada ciudad prioritaria debe tener:
- 1 GeoHub;
- N páginas servicio + ciudad;
- N páginas de categoría adicional si aplica;
- N geoarticles locales;
- conexión con contacto o presupuesto.

### Cluster por categoría GBP adicional
Cada categoría adicional relevante debe tener:
- al menos 1 página local dedicada;
- relación clara con servicios ya existentes;
- relación clara con GeoHub de la ciudad;
- soporte semántico suficiente para justificar la categoría.

---

## 4. Patrón de navegación recomendado

### Desde la home
- acceso a pilares temáticos;
- acceso a la ciudad principal;
- acceso a conversión;
- acceso a categorías adicionales si son estratégicas.

### Desde cada página de servicio
- subida a su overview;
- bajada a sus variantes locales;
- lateral hacia servicios relacionados;
- apoyo informativo con GeoArticles.

### Desde cada página local
- subida al service overview;
- subida al GeoHub;
- lateral a otros servicios de la ciudad;
- apoyo con GeoArticles.

### Desde cada GeoArticle
- salida clara a la página transaccional correspondiente;
- vuelta al GeoHub;
- profundidad con otro contenido temático si aporta.

---

## 5. Señales de fallo
El enlazado se considera deficiente si ocurre alguno de estos casos:
- páginas huérfanas;
- service overviews sin salida hacia páginas locales;
- páginas locales sin vuelta al GeoHub o al servicio padre;
- GeoArticles aislados;
- home sin acceso visible a los clusters;
- anchor text repetitivo y artificial;
- enlaces que no siguen lógica temática o geográfica.

---

## 6. Control antes de publicar
Marca:

- [ ] La home enlaza a pilares y cluster principal.
- [ ] Cada service overview enlaza a sus variantes locales.
- [ ] Cada service + city enlaza a overview, GeoHub y apoyo local.
- [ ] Cada additional category enlaza a GeoHub y páginas relacionadas.
- [ ] Cada GeoHub reúne y redistribuye autoridad a su ciudad.
- [ ] Cada GeoArticle enlaza a su página transaccional y a su GeoHub.
- [ ] No hay páginas huérfanas.
- [ ] Los anchors son naturales y útiles.
