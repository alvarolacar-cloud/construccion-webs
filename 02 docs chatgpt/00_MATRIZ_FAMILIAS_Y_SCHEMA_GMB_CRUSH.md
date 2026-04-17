# MATRIZ DE FAMILIAS DE PÁGINA Y SCHEMA — GMB CRUSH

## Propósito
Este documento resume qué debe existir, para qué existe y qué requisitos mínimos debe cumplir cada familia de página del sistema.

---

## 1. Matriz maestra por familia

| Familia | Propósito | URL patrón canónico | ¿Cuándo es obligatoria? | Intención principal | Longitud orientativa | Bloques obligatorios | Schema mínimo | Errores que invalidan la familia |
|---|---|---|---|---|---|---|---|---|
| Homepage | ancla de entidad principal | `/` | siempre | entidad + categoría principal + ciudad principal | `>= 1.000 palabras útiles` | H1, intro clara, servicio principal, menú de servicios, señales de confianza, CTA, NAP, enlaces al cluster | `Organization`, `WebSite`, `LocalBusiness` solo si aplica | home genérica, sin ciudad, sin categoría clara, sin acceso al cluster |
| Service Overview | pilar temático sin ciudad | `/{{category}}/{{service}}/` | para cada servicio principal | autoridad temática e intención informativa/comercial | `>= 1.000 palabras útiles` | H1, explicación del servicio, beneficios, proceso, FAQs, enlaces a variantes locales y servicios relacionados | `Service`, `BreadcrumbList`, `Speakable` | meter ciudades, convertirla en landing local, no enlazar a sus variantes locales |
| Location-Based Service | página transaccional servicio + ciudad | `/{{category}}/{{city}}/{{service}}/` | para cada servicio prioritario en cada ciudad prioritaria | intención local de alta conversión | `>= 1.000 palabras útiles` | H1, meta local, intro geoespecífica, problemas locales, beneficios, proceso, trust, CTA, FAQs, enlaces al GeoHub y al servicio padre | `LocalBusiness` con `address`, `geo`, `areaServed`, `sameAs` cuando aplique | mezclar varias ciudades o varios servicios, no tener contexto local, no enlazar al cluster |
| Additional Category | soporte a categoría GBP adicional | `/{{additional-category}}/{{city}}/{{service}}/` | por cada categoría GBP adicional relevante | soporte de entidad y de intención local complementaria | `800–1.000+ palabras útiles` | H1, intro AUDIO, proceso, beneficios, comparativas, FAQs de voz, CTA, enlaces al GeoHub y servicios relacionados | `Service` con `areaServed`, `BreadcrumbList` | no conectar con GBP adicional, duplicar sin propósito, no enlazar al cluster |
| GeoHub | contenedor por ciudad | `/{{city}}/` o `/{{category}}/{{city}}/` | para cada ciudad prioritaria | agrupar servicios, categorías y contenido de una ciudad | `600–1.000+ palabras útiles` | H1, intro de mercado/ciudad, lista de servicios de la ciudad, lista de categorías adicionales, enlaces a geoarticles, CTA | `CollectionPage`, `BreadcrumbList` | ser una página vacía, sin cluster, sin enlaces salientes, sin ciudad clara |
| GeoArticle | booster semántico y long-tail | `/{{city}}/{{topic-slug}}/` o `/{{category}}/{{city}}/{{topic-slug}}/` | obligatorio si el proyecto busca cobertura local fuerte y AI visibility | informativa, pain point, comparison, awareness o navigational | `1.200–1.800 palabras útiles` | intro contextual, 3–5 subheaders, bullets, FAQs, CTA interno, enlaces al servicio + ciudad y GeoHub | `Article`, `FAQPage`, `BreadcrumbList`, `Speakable` | ser landing disfrazada, no enlazar a páginas madre, fingir presencia física |
| Páginas de confianza | reforzar credibilidad y conversión | `/about/`, `/reviews/`, `/projects/`, `/contact/`, `/quote/` | según proyecto | confianza y conversión | variable | contenido real, CTA, conexión con servicios/ciudades, datos de contacto | según caso | páginas vacías, sin relación con el cluster, sin utilidad real |

---

## 2. Requisitos de copy por familia

| Familia | H1 esperado | Meta title esperado | Intro requerida | FAQs | CTA | AUDIO |
|---|---|---|---|---|---|---|
| Homepage | marca + servicio principal + ciudad | servicio principal + ciudad + marca | debe fijar entidad, oferta y ubicación | recomendable | sí | parcial, aplicada como claridad global |
| Service Overview | servicio en formato autoritativo | servicio + marca | sin referencias locales | 3–5 | sí | sí |
| Service + City | servicio + ciudad en formato beneficio | servicio + ciudad + marca | con matiz local natural | 3–5 | sí, con urgencia local razonable | sí |
| Additional Category | servicio/categoría + ciudad | categoría/servicio + ciudad + marca | con problema local + orientación a categoría | 3–5 | sí | sí |
| GeoHub | industria/servicios en ciudad | industria o servicios + ciudad + marca | contexto de ciudad y cobertura | opcional | sí | parcial |
| GeoArticle | tema + ciudad | tema + ciudad + marca | problema o pregunta real | 3–5 | sí, interno | sí en sentido editorial |

---

## 3. Checklist mínimo por familia

### Homepage
- [ ] Define marca, servicio principal y ciudad principal.
- [ ] Muestra 3–6 servicios o grupos de servicio.
- [ ] Incluye pruebas de confianza.
- [ ] Incluye CTA principal.
- [ ] Incluye NAP visible.
- [ ] Enlaza al menos a servicio(s), GeoHub principal y contacto/presupuesto.

### Service Overview
- [ ] Existe una por servicio principal.
- [ ] No mezcla ciudades.
- [ ] Explica qué es el servicio y para quién.
- [ ] Enlaza a sus variantes locales.
- [ ] Enlaza a servicios relacionados y al home.

### Service + City
- [ ] Existe una por servicio prioritario × ciudad prioritaria.
- [ ] No mezcla varias ciudades ni servicios.
- [ ] Tiene contexto local real.
- [ ] Enlaza al servicio padre, GeoHub y otras páginas de ciudad.
- [ ] Tiene CTA y trust local.

### Additional Category
- [ ] Cada categoría GBP adicional relevante tiene soporte.
- [ ] Está conectada al GeoHub y a servicios relacionados.
- [ ] Tiene FAQs de intención/voz.
- [ ] Refuerza relevancia semántica, no solo volumen de URLs.

### GeoHub
- [ ] Existe una por ciudad prioritaria.
- [ ] Lista servicios y contenido de la ciudad.
- [ ] Enlaza a home y contacto.
- [ ] Funciona como contenedor real del cluster.

### GeoArticle
- [ ] Está asociado a un servicio y una ciudad.
- [ ] Ataca una intención long-tail concreta.
- [ ] Enlaza a servicio + ciudad y GeoHub.
- [ ] No finge presencia física.
- [ ] Aporta profundidad y contexto real.

---

## 4. Schema map mínimo por familia

| Familia | Schema mínimo | Campos críticos a comprobar |
|---|---|---|
| Homepage | `Organization`, `WebSite`, `LocalBusiness` si aplica | `name`, `url`, `sameAs`, `telephone`, `address` si corresponde |
| Service Overview | `Service`, `BreadcrumbList`, `Speakable` | `name`, `description`, `provider`, `mainEntityOfPage` |
| Service + City | `LocalBusiness` | `name`, `serviceType`, `areaServed`, `url`, `telephone`, `sameAs`, `geo` si existe |
| Additional Category | `Service`, `BreadcrumbList` | `serviceType`, `areaServed`, `provider` |
| GeoHub | `CollectionPage`, `BreadcrumbList` | `name`, `url`, `about` opcional |
| GeoArticle | `Article`, `FAQPage`, `BreadcrumbList`, `Speakable` | `headline`, `description`, `author/publisher`, `mainEntityOfPage` |

---

## 5. Reglas de publicación derivadas de esta matriz
1. No publicar solo la home y 3 servicios.
2. No considerar terminado un proyecto si faltan familias obligatorias.
3. No publicar páginas ciudad sin su relación con servicio, GeoHub y contenido de apoyo.
4. No crear categorías adicionales sin soporte real.
5. No tratar el blog como contenido suelto fuera del cluster.

---

## 6. Regla final
Esta matriz debe consultarse cada vez que:
- se aprueba arquitectura;
- se define diseño;
- se implementan rutas;
- se audita el resultado.
