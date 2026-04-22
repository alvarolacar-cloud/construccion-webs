# 06 — BIBLIOTECA DE PROMPTS GMB CRUSH

## Propósito

Este documento convierte la doctrina GMB Crush en una biblioteca operativa de prompts reutilizables.

Su función es que una persona, un equipo o una IA puedan ejecutar el sistema sin improvisar prompts para cada proyecto.  
Los escenarios indican **qué camino seguir**.  
La base define **qué reglas no se pueden romper**.  
La implementación técnica define **cómo construir la web**.  
Esta biblioteca define **qué pedirle a la IA en cada fase**.

---

## Regla principal

No todos los prompts se usan siempre.  
El escenario elegido determina qué prompts aplicar y en qué orden.

Aun así, ningún proyecto GMB Crush debe cerrarse sin haber cubierto estos bloques:

1. Clasificación del punto de partida.
2. Intake de negocio, servicios, NAP, GBP y zonas.
3. Validación de categoría principal y categorías adicionales.
4. Investigación SERP/local.
5. Arquitectura de páginas.
6. Homepage.
7. Service Overview Pages.
8. Location-Based Service Pages.
9. Additional Category Pages si existen categorías adicionales GBP.
10. GeoHub Pages.
11. GeoArticle Pages.
12. Interlinking.
13. Schema.
14. Implementación técnica.
15. QA final sobre URL publicada.

---

## Variables maestras

Antes de usar cualquier prompt, rellena estas variables.

```text
[BRAND_NAME]:
[WEBSITE_URL]:
[ROOT_DOMAIN]:
[PRIMARY_GBP_CATEGORY]:
[ADDITIONAL_GBP_CATEGORIES]:
[MAIN_CITY]:
[STATE_OR_REGION]:
[COUNTRY]:
[PHONE]:
[EMAIL]:
[STREET_ADDRESS]:
[FULL_NAP]:
[GBP_URL]:
[GBP_STATUS]: sin GBP / GBP existente / GBP nueva pendiente de verificación
[BUSINESS_MODEL]: local con dirección física / SAB / híbrido
[SERVICES]:
[SERVICE_SLUGS]:
[TARGET_CITIES]:
[TARGET_NEIGHBORHOODS]:
[SERVICE_AREAS]:
[PRIMARY_CATEGORY_SLUG]:
[TONE_OF_VOICE]:
[COMPETITOR_URLS]:
[TOP_PRIORITY_SERVICES]:
[TOP_PRIORITY_CITIES]:
[TRUST_ASSETS]: reseñas, garantías, fotos, casos, certificaciones, premios
[EXISTING_URLS]:
[CMS_OR_STACK]:
[DEPLOYMENT_URL]:
```

---

# PARTE 1 — PROMPTS DE CLASIFICACIÓN E INTAKE

## P00 — Clasificar el escenario del cliente

**Cuándo usarlo:** al inicio de cualquier proyecto.

```text
Actúa como estratega senior de Local SEO siguiendo la metodología GMB Crush.

Clasifica este proyecto en uno de los cuatro escenarios operativos:

1. Cliente sin web y sin GBP.
2. Cliente sin web y con GBP.
3. Cliente con web y sin GBP.
4. Cliente con web y con GBP.

Datos disponibles:
- Marca: [BRAND_NAME]
- Web actual: [WEBSITE_URL]
- Estado de GBP: [GBP_STATUS]
- Categoría principal GBP: [PRIMARY_GBP_CATEGORY]
- Categorías adicionales: [ADDITIONAL_GBP_CATEGORIES]
- Ciudad principal: [MAIN_CITY]
- Zonas/ciudades atendidas: [SERVICE_AREAS]
- Servicios: [SERVICES]

Devuelve:
1. Escenario asignado.
2. Motivo de la clasificación.
3. Riesgo principal del punto de partida.
4. Ruta de trabajo recomendada.
5. Información faltante que impide ejecutar con seguridad.
6. Primeras 10 tareas obligatorias.
```

---

## P01 — Intake completo GMB Crush

**Cuándo usarlo:** fase inicial de cualquier escenario.

```text
Actúa como consultor GMB Crush para Local SEO, GBP y arquitectura web.

Construye un intake completo del negocio con estos datos:

- Marca: [BRAND_NAME]
- NAP completo: [FULL_NAP]
- Teléfono: [PHONE]
- Email: [EMAIL]
- Web: [WEBSITE_URL]
- GBP: [GBP_URL]
- Categoría principal: [PRIMARY_GBP_CATEGORY]
- Categorías adicionales: [ADDITIONAL_GBP_CATEGORIES]
- Servicios: [SERVICES]
- Ciudad principal: [MAIN_CITY]
- Ciudades objetivo: [TARGET_CITIES]
- Barrios o zonas objetivo: [TARGET_NEIGHBORHOODS]
- Áreas servidas: [SERVICE_AREAS]
- Modelo de negocio: [BUSINESS_MODEL]
- Activos de confianza: [TRUST_ASSETS]

Devuelve:
1. Resumen de entidad local.
2. Servicios principales y secundarios.
3. Servicios que podrían justificar página propia.
4. Ciudades y zonas por prioridad.
5. Posibles conflictos NAP o de cobertura.
6. Categorías GBP que necesitan soporte web.
7. Huecos de información.
8. Riesgos SEO-locales.
9. Próximas decisiones obligatorias.
```

---

## P02 — Validación de categoría principal GBP

**Cuándo usarlo:** antes de definir arquitectura.

```text
Actúa como experto en Google Business Profile y Local SEO.

Evalúa si la categoría principal "[PRIMARY_GBP_CATEGORY]" representa correctamente el negocio "[BRAND_NAME]" y sus servicios:

Servicios:
[SERVICES]

Ciudad principal:
[MAIN_CITY]

Categorías adicionales:
[ADDITIONAL_GBP_CATEGORIES]

Devuelve:
1. Diagnóstico de alineación categoría-servicios.
2. Servicios que la categoría principal soporta bien.
3. Servicios que podrían quedar fuera de la intención principal.
4. Categorías adicionales que deberían tener soporte de página local.
5. Keywords de alta intención asociadas a la categoría.
6. Recomendación: mantener, cambiar o revisar categoría.
7. Páginas mínimas necesarias para apoyar la categoría desde la web.
```

---

## P03 — Mapa de zonas, ciudades y barrios

**Cuándo usarlo:** en cualquier proyecto con cobertura local o service areas.

```text
Actúa como arquitecto de clusters geográficos GMB Crush.

Con estos datos:
- Ciudad principal: [MAIN_CITY]
- Ciudades objetivo: [TARGET_CITIES]
- Barrios o zonas: [TARGET_NEIGHBORHOODS]
- Áreas servidas: [SERVICE_AREAS]
- Servicios principales: [SERVICES]
- Modelo de negocio: [BUSINESS_MODEL]

Crea un modelo de cobertura geográfica que incluya:

1. Ciudad principal.
2. Ciudades prioritarias Tier 1.
3. Ciudades secundarias Tier 2.
4. Zonas o barrios útiles como referencias semánticas.
5. Áreas que no deben recibir landing page propia todavía.
6. Qué ciudades deben tener GeoHub.
7. Qué ciudades solo deben tener páginas servicio + ciudad.
8. Qué barrios deben aparecer dentro del contenido sin crear páginas independientes.
9. Riesgos de fingir presencia física.
10. Reglas de uso de NAP, mapas y `areaServed`.
```

---

# PARTE 2 — PROMPTS DE INVESTIGACIÓN Y CONTRASTE

## P10 — Auditoría Local SEO estilo Analysis Framework

**Cuándo usarlo:** cuando hay web o cuando quieres evaluar una web de referencia.

```text
Actúa como auditor Local SEO siguiendo la metodología GMB Crush.

Analiza esta web:
[WEBSITE_URL]

Datos del negocio:
- Marca: [BRAND_NAME]
- Categoría principal GBP: [PRIMARY_GBP_CATEGORY]
- Categorías adicionales: [ADDITIONAL_GBP_CATEGORIES]
- Ciudad principal: [MAIN_CITY]
- Servicios: [SERVICES]
- Ciudades objetivo: [TARGET_CITIES]

Evalúa:
1. Si la homepage refleja la categoría principal.
2. Si hay páginas dedicadas por servicio.
3. Si hay páginas ciudad o servicio + ciudad.
4. Si existen GeoHubs.
5. Si existen GeoArticles.
6. Si las categorías adicionales tienen soporte web.
7. Si el H1/H2 incluye servicio y ciudad donde corresponde.
8. Si hay schema LocalBusiness, Organization, Service, Breadcrumb, FAQPage o Article.
9. Si el interlinking conecta homepage, servicios, ciudades y artículos.
10. Si la web apoya de verdad la visibilidad de la GBP.

Devuelve:
- Tabla de checkpoints con ✅ / ❌ / ⚠️.
- Ranking potencial por servicio en escala ★☆☆☆☆ a ★★★★★.
- Principales gaps semánticos.
- Principales gaps geográficos.
- Qué conservar.
- Qué reescribir.
- Qué eliminar o redirigir.
- Plan de acción en 3 fases.
```

---

## P11 — Contraste SERP y competidores locales

**Cuándo usarlo:** antes de aprobar la arquitectura.

```text
Actúa como estratega de investigación local GMB Crush.

Para el negocio:
- Marca: [BRAND_NAME]
- Categoría principal: [PRIMARY_GBP_CATEGORY]
- Ciudad principal: [MAIN_CITY]
- Servicios: [SERVICES]
- Ciudades objetivo: [TARGET_CITIES]

Analiza estos competidores o resultados:
[COMPETITOR_URLS]

Devuelve:
1. Qué servicios aparecen repetidamente en competidores.
2. Qué páginas parecen impulsar visibilidad local.
3. Qué patrones de URL usan.
4. Qué trust signals repiten.
5. Qué tipos de contenido tienen.
6. Qué ciudades o zonas cubren.
7. Qué categorías GBP parecen apoyar.
8. Qué oportunidades no cubren.
9. Qué estructura mínima deberíamos superar.
10. Arquitectura recomendada para competir.
```

---

# PARTE 3 — PROMPTS DE ARQUITECTURA GMB CRUSH

## P20 — Arquitectura completa de páginas GMB Crush

**Cuándo usarlo:** después de intake y contraste SERP.

```text
Actúa como arquitecto de webs LocalBusiness siguiendo GMB Crush.

Crea una arquitectura completa para:
- Marca: [BRAND_NAME]
- Dominio: [ROOT_DOMAIN]
- Categoría principal: [PRIMARY_GBP_CATEGORY]
- Categorías adicionales: [ADDITIONAL_GBP_CATEGORIES]
- Servicios: [SERVICES]
- Ciudad principal: [MAIN_CITY]
- Ciudades objetivo: [TARGET_CITIES]
- Barrios/zonas: [TARGET_NEIGHBORHOODS]

Usa estas familias obligatorias:
1. Homepage.
2. Service Overview Pages sin ciudad.
3. Location-Based Service Pages.
4. Additional Category Pages si aplican.
5. GeoHub Pages.
6. GeoArticle Pages.

Devuelve:
1. Árbol completo de URLs.
2. Propósito de cada familia.
3. Tabla servicio × ciudad.
4. Qué páginas son prioritarias para el primer release.
5. Qué páginas quedan en backlog.
6. Schema recomendado por tipo de página.
7. Interlinking obligatorio.
8. Riesgos de thin content o canibalización.
9. Reglas para no mezclar múltiples servicios o ciudades en una landing.
```

---

## P21 — Matriz de URLs servicio × ciudad

**Cuándo usarlo:** antes de construcción y generación de rutas.

```text
Actúa como especialista GMB Crush en estructuras servicio + ciudad.

Con estos datos:
- Dominio: [ROOT_DOMAIN]
- Slug de categoría principal: [PRIMARY_CATEGORY_SLUG]
- Servicios: [SERVICES]
- Slugs de servicios: [SERVICE_SLUGS]
- Ciudades objetivo: [TARGET_CITIES]

Genera una matriz con:
1. Ciudades en filas.
2. Servicios en columnas.
3. URL completa para cada combinación aprobada.
4. Meta title sugerido.
5. H1 sugerido.
6. Prioridad: alta / media / baja.
7. Justificación de prioridad.
8. Enlaces internos mínimos.
9. Schema recomendado.
10. Notas de contenido local.

Usa el patrón:
https://[ROOT_DOMAIN]/[PRIMARY_CATEGORY_SLUG]/[city-slug]/[service-slug]/
```

---

## P22 — Plan de interlinking GMB Crush

**Cuándo usarlo:** antes de construir o migrar.

```text
Actúa como arquitecto de enlazado interno GMB Crush.

Para esta arquitectura:
[PEGAR ARQUITECTURA DE URLS]

Define el plan de interlinking obligatorio.

Debe incluir:
1. Homepage → Service Overviews.
2. Homepage → GeoHub principal.
3. Homepage → páginas de categorías adicionales relevantes.
4. Service Overview → todas las variantes servicio + ciudad.
5. Service Overview → servicios relacionados.
6. Location-Based Service Page → servicio padre, GeoHub, servicios hermanos y GeoArticles.
7. Additional Category Page → GeoHub, servicios relacionados y GeoArticles.
8. GeoHub → todas las páginas de servicio de la ciudad, categorías adicionales y artículos.
9. GeoArticle → página servicio + ciudad, GeoHub y artículos relacionados.
10. Breadcrumbs obligatorios.

Devuelve una tabla:
- Página origen.
- Página destino.
- Anchor text recomendado.
- Tipo de enlace.
- Motivo SEO-local.
```

---

# PARTE 4 — PROMPTS HOMEPAGE

## P30 — Análisis de homepage para categoría GBP

**Cuándo usarlo:** cuando existe homepage o al revisar un borrador.

```text
Analiza la homepage:
[WEBSITE_URL]

Evalúa si el contenido refleja correctamente:
- Categoría principal GBP: [PRIMARY_GBP_CATEGORY]
- Ciudad principal: [MAIN_CITY]
- Servicios principales: [SERVICES]

Devuelve:
1. Diagnóstico de alineación con la categoría principal.
2. Secciones que faltan.
3. Secciones que deben reescribirse.
4. Entidades y términos semánticos a añadir.
5. Riesgos de desalineación con GBP.
6. Recomendaciones concretas de mejora.
```

---

## P31 — H1 de homepage para AI Overview e intención local

```text
Analiza o crea el H1 de la homepage para:
- Marca: [BRAND_NAME]
- Servicio principal: [TOP_PRIORITY_SERVICES]
- Ciudad principal: [MAIN_CITY]
- Categoría GBP: [PRIMARY_GBP_CATEGORY]

Propón 5 opciones de H1 que:
1. Incluyan marca, servicio principal y ciudad.
2. Sean claras para usuarios.
3. Sean compatibles con AI Overview.
4. No estén sobreoptimizadas.
5. Refuercen la entidad local.
```

---

## P32 — H2/H3 FAQ-style para homepage

```text
Genera 5–7 encabezados H2/H3 para la homepage de:
- Marca: [BRAND_NAME]
- Categoría principal: [PRIMARY_GBP_CATEGORY]
- Servicio principal: [TOP_PRIORITY_SERVICES]
- Ciudad principal: [MAIN_CITY]

Los encabezados deben:
1. Estar formulados como preguntas reales o semi-preguntas.
2. Reforzar intención local.
3. Ser útiles para AI Overview y voz.
4. Cubrir dudas comerciales y de confianza.
5. Evitar keyword stuffing.
```

---

## P33 — Señales semánticas y entidades para homepage

```text
Sugiere términos semánticos, entidades, sinónimos y co-ocurrencias para mejorar la autoridad temática de la homepage.

Datos:
- Categoría principal: [PRIMARY_GBP_CATEGORY]
- Servicios: [SERVICES]
- Ciudad: [MAIN_CITY]
- Zonas/barrios: [TARGET_NEIGHBORHOODS]
- Público objetivo: [TARGET_AUDIENCE]

Devuelve:
1. Entidades principales.
2. Entidades locales.
3. Sinónimos de servicio.
4. Co-ocurrencias naturales.
5. Términos de confianza.
6. Términos de proceso.
7. Términos que NO se deben usar si crean ambigüedad.
```

---

## P34 — Metadata de homepage

```text
Escribe una meta title y meta description para la homepage.

Datos:
- Marca: [BRAND_NAME]
- Servicio principal: [TOP_PRIORITY_SERVICES]
- Ciudad: [MAIN_CITY]
- Categoría GBP: [PRIMARY_GBP_CATEGORY]

Requisitos:
- Title máximo 60 caracteres.
- Description máximo 160 caracteres.
- Incluir marca en el title.
- Reflejar intención local y confianza.
- Evitar stuffing.
- Generar 5 variantes y recomendar una.
```

---

## P35 — FAQPage + Speakable schema para homepage

```text
Crea un JSON-LD válido con FAQPage y Speakable para la homepage.

Datos:
- URL homepage: [ROOT_DOMAIN]
- Marca: [BRAND_NAME]
- Servicio principal: [TOP_PRIORITY_SERVICES]
- Ciudad: [MAIN_CITY]
- Categoría principal: [PRIMARY_GBP_CATEGORY]

Requisitos:
1. 4–6 preguntas de voz reales.
2. Respuestas breves, útiles y naturales.
3. Lenguaje local.
4. JSON-LD copy-paste ready.
5. Sin claims falsos.
```

---

## P36 — Quick Answer para AI Overview

```text
Escribe un bloque "Quick Answer" de 2 frases para la homepage.

Datos:
- Marca: [BRAND_NAME]
- Servicio principal: [TOP_PRIORITY_SERVICES]
- Ciudad: [MAIN_CITY]
- Público objetivo: [TARGET_AUDIENCE]

Debe ser:
1. Claro.
2. Resumible por AI Overview.
3. Natural para voz.
4. Específico sin exagerar.
5. Orientado a conversión.
```

---

## P37 — Mini menú de servicios para homepage

```text
Genera un mini menú de servicios para la homepage.

Datos:
- Marca: [BRAND_NAME]
- Categoría: [PRIMARY_GBP_CATEGORY]
- Servicios: [SERVICES]

Devuelve 4–6 servicios con:
1. Nombre claro.
2. Descripción de una línea.
3. URL sugerida hacia Service Overview.
4. Anchor text recomendado.
5. Prioridad comercial.
```

---

## P38 — Enlaces internos desde homepage

```text
Propón los enlaces internos principales desde la homepage.

Datos:
- Homepage: [ROOT_DOMAIN]
- Servicios: [SERVICES]
- Ciudades: [TARGET_CITIES]
- GeoHub principal: [MAIN_CITY]
- Categorías adicionales: [ADDITIONAL_GBP_CATEGORIES]

Devuelve 5–10 enlaces con:
1. URL destino.
2. Anchor text.
3. Ubicación sugerida en homepage.
4. Motivo SEO-local.
5. Prioridad.
```

---

# PARTE 5 — PROMPTS SERVICE OVERVIEW PAGES

## P40 — Generar Service Overview Page

**Cuándo usarlo:** para páginas de servicio sin ciudad.

```text
Actúa como estratega SEO y redactor experto GMB Crush.

Escribe una Service Overview Page no geolocalizada.

Datos:
- Marca: [BRAND_NAME]
- Categoría principal: [PRIMARY_GBP_CATEGORY]
- Servicio: [SERVICE]
- URL objetivo: https://[ROOT_DOMAIN]/[PRIMARY_CATEGORY_SLUG]/[SERVICE_SLUG]/

Objetivo:
Posicionar esta página como pilar de autoridad temática para todas las variantes locales del servicio.

Requisitos:
1. 850–1.000 palabras.
2. Sin referencias a una ciudad concreta.
3. H1 con servicio y marca.
4. Meta title ≤ 60 caracteres.
5. Meta description ≤ 160 caracteres.
6. Intro de 100–150 palabras.
7. Estructura AUDIO:
   - Authority.
   - Uniqueness.
   - Depth.
   - Intent.
   - Optimization.
8. Bullet points en al menos 2 secciones.
9. FAQ de 3–5 preguntas realistas.
10. CTA no agresivo.
11. Enlaces internos a homepage, servicios relacionados, variantes servicio + ciudad y un recurso útil.
12. Schema Service + WebPage + BreadcrumbList + Speakable.
13. Evitar contenido genérico o relleno.
```

---

## P41 — Brief de Service Overview Page

```text
Crea un brief editorial para una Service Overview Page.

Datos:
- Servicio: [SERVICE]
- Marca: [BRAND_NAME]
- Categoría: [PRIMARY_GBP_CATEGORY]
- URLs locales que debe apoyar: [LOCAL_SERVICE_URLS]

Devuelve:
1. Search intent principal.
2. Entidades semánticas.
3. Secciones H2.
4. FAQs.
5. Diferenciadores.
6. Enlaces internos.
7. Schema.
8. Riesgos de canibalización.
9. Criterio de aprobación.
```

---

# PARTE 6 — PROMPTS LOCATION-BASED SERVICE PAGES

## P50 — Generar página servicio + ciudad

**Cuándo usarlo:** para cada página transaccional local prioritaria.

```text
Actúa como senior SEO strategist y content writer especializado en GMB Crush.

Crea una página local de servicio que pueda posicionar en Google Search, Local Pack y AI Overview.

Datos:
- Marca: [BRAND_NAME]
- Categoría principal: [PRIMARY_GBP_CATEGORY]
- Servicio: [SERVICE]
- Ciudad: [CITY]
- Barrios o zonas a mencionar: [TARGET_NEIGHBORHOODS]
- URL objetivo: https://[ROOT_DOMAIN]/[PRIMARY_CATEGORY_SLUG]/[city-slug]/[service-slug]/
- Teléfono: [PHONE]
- Email: [EMAIL]
- GBP URL: [GBP_URL]

Requisitos:
1. 800–1.000 palabras.
2. Un solo servicio.
3. Una sola ciudad.
4. No fingir presencia física si no existe.
5. H1 con servicio + ciudad.
6. Meta title ≤ 60 caracteres.
7. Meta description ≤ 160 caracteres.
8. Intro de 100–150 palabras con matiz local real.
9. 3–5 H2 basados en AUDIO.
10. Bullet points en al menos 2 secciones.
11. FAQs de 3–5 preguntas con formato AIO/voz.
12. CTA local.
13. Enlaces internos a:
   - GeoHub de la ciudad.
   - Service Overview padre.
   - Otros servicios en la misma ciudad.
   - Mismo servicio en otras ciudades.
   - GeoArticles relacionados.
14. JSON-LD LocalBusiness o Service con areaServed y sameAs si es veraz.
15. Evitar mezclar ciudades, servicios o claims falsos.
```

---

## P51 — Local nuance y barrios para página servicio + ciudad

```text
Enriquece esta página servicio + ciudad con contexto local real.

Datos:
- Ciudad: [CITY]
- Barrios o zonas: [TARGET_NEIGHBORHOODS]
- Servicio: [SERVICE]
- Público objetivo: [TARGET_AUDIENCE]
- Modelo de negocio: [BUSINESS_MODEL]

Devuelve:
1. Referencias locales seguras.
2. Barrios que pueden mencionarse naturalmente.
3. Problemas locales relacionados con el servicio.
4. Frases que no deben usarse porque simulan presencia física.
5. Ejemplos de párrafos con matiz local.
6. Preguntas frecuentes localizadas.
```

---

# PARTE 7 — PROMPTS ADDITIONAL CATEGORY PAGES

## P60 — Generar página de categoría adicional GBP

**Cuándo usarlo:** cuando la GBP tiene categorías adicionales relevantes.

```text
Actúa como SEO strategist y editor experto GMB Crush.

Crea una página local para apoyar una categoría adicional de Google Business Profile.

Datos:
- Marca: [BRAND_NAME]
- Categoría principal: [PRIMARY_GBP_CATEGORY]
- Categoría adicional: [ADDITIONAL_GBP_CATEGORY]
- Servicio relacionado: [SERVICE]
- Ciudad: [CITY]
- URL objetivo: https://[ROOT_DOMAIN]/[category-slug]/[city-slug]/[service-slug]/

Objetivos:
1. Construir autoridad para la categoría adicional.
2. Cubrir intención informacional y comercial.
3. Aumentar posibilidades de AI Overview.
4. Reforzar la entidad GBP.
5. Sostener el cluster local.

Requisitos:
1. 800–1.000 palabras.
2. H1 con servicio + ciudad.
3. Meta title ≤ 60 caracteres.
4. Meta description ≤ 160 caracteres.
5. Intro de 100–150 palabras con problema local.
6. 3–5 H2 basados en AUDIO.
7. Bullet points en al menos 2 secciones.
8. FAQs long-tail AIO.
9. CTA local.
10. Enlaces internos a GeoHub, servicios relacionados, páginas servicio + ciudad y GeoArticles.
11. Schema Service con areaServed + BreadcrumbList.
12. No duplicar la página principal de servicio + ciudad.
```

---

# PARTE 8 — PROMPTS GEOHUB

## P70 — Generar matriz de GeoHub Pages

**Cuándo usarlo:** cuando ya están definidas ciudades y servicios.

```text
Actúa como Matteo de GMB Crush, especialista top en GeoHub structures y frameworks AI-ready.

Genera la lista completa de GeoHub Pages y URLs de cluster.

Variables:
- Primary Business Category Slug: [PRIMARY_CATEGORY_SLUG]
- Service List: [SERVICES]
- Target Cities: [TARGET_CITIES]
- Website Root Domain: [ROOT_DOMAIN]
- State/Region: [STATE_OR_REGION]

Instrucciones:
1. Crea URLs para cada combinación servicio-ciudad aprobada.
2. Usa matriz con ciudades como filas y servicios como columnas.
3. Aplica patrón /category/city/service/.
4. Propón página GeoHub para cada ciudad prioritaria.
5. Devuelve title y H1 para GeoHub.
6. Detecta ciudades o servicios faltantes.
7. Sugiere Service Overview URLs padre.
8. Explica el interlinking del cluster.
9. Indica prioridad de publicación.
```

---

## P71 — Redactar GeoHub Page

```text
Crea una GeoHub Page para una ciudad.

Datos:
- Marca: [BRAND_NAME]
- Industria/categoría: [PRIMARY_GBP_CATEGORY]
- Ciudad: [CITY]
- Servicios disponibles en esa ciudad: [SERVICES_IN_CITY]
- Categorías adicionales disponibles: [ADDITIONAL_CATEGORY_PAGES]
- GeoArticles relacionados: [GEOARTICLES]
- URL objetivo: https://[ROOT_DOMAIN]/[city-slug]/

Requisitos:
1. H1: marca + industria/servicios + ciudad.
2. Intro con ciudad, mercado y necesidades.
3. Lista de servicios de la ciudad.
4. Lista de categorías adicionales si existen.
5. Links a GeoArticles.
6. Testimonios, stats o cobertura de barrios si son veraces.
7. Links a homepage, service overviews y contacto.
8. Schema CollectionPage + BreadcrumbList.
9. No tratarla como landing de un solo servicio.
```

---

# PARTE 9 — PROMPTS GEOARTICLE

## P80 — Ideas de GeoArticles por servicio × ciudad

```text
Actúa como Matteo de GMB Crush, especialista en arquitectura semántica, AI visibility y contenido hyperlocal.

Genera ideas de GeoArticle Pages para apoyar Service Pages y GeoHub Pages.

Variables:
- Primary Business Category Slug: [PRIMARY_CATEGORY_SLUG]
- Service List: [SERVICES]
- Target Cities: [TARGET_CITIES]
- Website Root Domain: [ROOT_DOMAIN]
- Target Audience Type: [TARGET_AUDIENCE]

Instrucciones:
1. Genera 3 ideas únicas de GeoArticle por cada combinación servicio × ciudad.
2. Para cada idea devuelve:
   - Page Title.
   - H1.
   - URL sugerida.
   - Long-tail keyword.
   - Intent type: informational / pain point / navigational / comparison / awareness.
   - Resumen de 1–2 frases.
3. Explica qué página servicio + ciudad apoya.
4. Explica qué GeoHub apoya.
5. Prioriza por impacto potencial.
```

---

## P81 — Generar GeoArticle completo

```text
Escribe un GeoArticle completo usando este tema:
[TOPIC]

Datos:
- Marca: [BRAND_NAME]
- Servicio: [SERVICE]
- Ciudad: [CITY]
- URL del servicio + ciudad: [LOCAL_SERVICE_URL]
- URL del GeoHub: [GEOHUB_URL]
- GeoArticle relacionado: [RELATED_GEOARTICLE_URL]

Requisitos:
1. 1.000–1.500 palabras.
2. Un servicio.
3. Una ciudad.
4. Una intención long-tail.
5. Introducción contextual y real.
6. 3–5 subheaders con ángulos únicos.
7. 1–2 secciones con bullets.
8. 3–5 FAQs estilo AI Overview.
9. CTA contextual, no agresivo.
10. Mencionar la ciudad 6–8 veces de forma natural.
11. No fingir presencia física si no existe.
12. Usar co-ocurrencias, NLP y entidades relacionadas.
13. Enlazar a:
   - Página servicio + ciudad.
   - GeoHub.
   - GeoArticle relacionado si existe.
14. Schema Article + FAQPage + BreadcrumbList + Speakable.
```

---

# PARTE 10 — PROMPTS DE IMPLEMENTACIÓN TÉCNICA

## P90 — Crear data layer para Astro

```text
Actúa como arquitecto técnico para una web Local SEO construida en Astro + TypeScript + Tailwind.

Crea la estructura de data layer para:
- Marca: [BRAND_NAME]
- Categoría principal: [PRIMARY_GBP_CATEGORY]
- Categorías adicionales: [ADDITIONAL_GBP_CATEGORIES]
- Servicios: [SERVICES]
- Ciudades: [TARGET_CITIES]
- Barrios: [TARGET_NEIGHBORHOODS]
- NAP: [FULL_NAP]
- GBP: [GBP_URL]

Devuelve archivos TypeScript:
1. business.ts.
2. services.ts.
3. cities.ts.
4. categories.ts.
5. articles.ts.
6. navigation.ts.

Requisitos:
- Tipado explícito.
- Slugs limpios.
- IDs estables.
- Campos para schema.
- Campos para interlinking.
- Campos para prioridades.
- No hardcodear NAP en componentes.
```

---

## P91 — Generar rutas dinámicas Astro

```text
Actúa como desarrollador Astro senior.

Diseña las rutas dinámicas necesarias para generar una web GMB Crush desde datos estructurados.

Familias:
1. Homepage.
2. Service Overview Pages.
3. Location-Based Service Pages.
4. Additional Category Pages.
5. GeoHub Pages.
6. GeoArticle Pages.

Devuelve:
1. Árbol de `src/pages`.
2. Ejemplo de `getStaticPaths()` para servicios.
3. Ejemplo de `getStaticPaths()` para servicio + ciudad.
4. Ejemplo de `getStaticPaths()` para GeoArticles.
5. Cómo pasar props a layouts.
6. Cómo evitar páginas huérfanas.
7. Cómo controlar páginas en backlog.
```

---

## P92 — Generar schema helpers

```text
Actúa como desarrollador SEO técnico.

Crea helpers TypeScript para generar JSON-LD según tipo de página:

- Organization.
- WebSite.
- LocalBusiness.
- Service.
- BreadcrumbList.
- FAQPage.
- Speakable.
- CollectionPage.
- Article.

Datos disponibles:
[business, service, city, article, breadcrumbs]

Requisitos:
1. JSON-LD válido.
2. No incluir datos falsos.
3. `areaServed` para servicios locales.
4. `sameAs` solo si hay URLs reales.
5. Breadcrumbs coherentes.
6. Funciones reutilizables.
7. Ejemplos de uso en Astro.
```

---

## P93 — QA técnico sobre URL publicada

```text
Actúa como QA técnico SEO para una web GMB Crush ya publicada.

URL publicada:
[DEPLOYMENT_URL]

Revisa:
1. Build publicado sin errores.
2. Indexabilidad.
3. robots.txt.
4. sitemap.xml.
5. Titles y descriptions.
6. H1 único por página.
7. Schema JSON-LD válido.
8. Breadcrumbs.
9. Enlaces internos.
10. Páginas huérfanas.
11. 404s.
12. Redirecciones si hubo migración.
13. Performance básica.
14. Mobile.
15. NAP visible.
16. GBP link correcto.
17. Páginas servicio + ciudad.
18. GeoHubs.
19. GeoArticles.
20. Additional Category Pages.

Devuelve:
- Tabla de errores críticos.
- Tabla de warnings.
- Acciones correctivas.
- Estado final: aprobado / no aprobado.
```

---

# PARTE 11 — PROMPTS DE QA Y CIERRE GMB CRUSH

## P100 — Test de impregnación doctrinal GMB Crush

```text
Actúa como auditor final GMB Crush.

Evalúa si este proyecto cumple la doctrina completa:

- URL publicada: [DEPLOYMENT_URL]
- Marca: [BRAND_NAME]
- Categoría principal GBP: [PRIMARY_GBP_CATEGORY]
- Categorías adicionales: [ADDITIONAL_GBP_CATEGORIES]
- Servicios: [SERVICES]
- Ciudades: [TARGET_CITIES]
- GBP URL: [GBP_URL]

Comprueba:
1. Homepage como root entity anchor.
2. Service Overview Pages sin ciudad.
3. Location-Based Service Pages para intención servicio + ciudad.
4. Additional Category Pages para categorías adicionales GBP.
5. GeoHub Pages como contenedores por ciudad.
6. GeoArticle Pages como boosters semánticos.
7. Cluster geográfico y zonas.
8. Interlinking entre homepage, servicios, ciudades y artículos.
9. Schema por familia.
10. AI Overview readiness: FAQs, quick answers, semántica, Speakable.
11. GBP support: categoría principal, adicionales, NAP, URL enlazada.
12. No fingir presencia física.
13. QA sobre URL real.

Devuelve:
- Score general 0–100.
- Score por familia de página.
- Gaps críticos.
- Gaps secundarios.
- Próximas 10 acciones.
- Veredicto: listo / listo con mejoras / no listo.
```

---

## P101 — Backlog de expansión GMB Crush

```text
Actúa como director de estrategia Local SEO.

Con base en el proyecto ya publicado:
- URL: [DEPLOYMENT_URL]
- Servicios: [SERVICES]
- Ciudades: [TARGET_CITIES]
- GeoArticles publicados: [PUBLISHED_ARTICLES]
- Páginas existentes: [EXISTING_URLS]

Crea un backlog de 90 días con:
1. Nuevas páginas servicio + ciudad.
2. Nuevos GeoHubs.
3. Nuevas páginas de categoría adicional.
4. GeoArticles por prioridad.
5. Refrescos de contenido.
6. Mejoras de interlinking.
7. Mejoras de schema.
8. Acciones GBP complementarias.
9. Métricas a vigilar.
10. Orden de publicación recomendado.
```

---

# PARTE 12 — SECUENCIA DE PROMPTS POR ESCENARIO

## Escenario 1 — Sin web y sin GBP

Usar en este orden:

```text
P00 → P01 → P02 → P03 → P11 → P20 → P21 → P22
P31 → P32 → P33 → P34 → P35 → P36 → P37 → P38
P40/P41 por cada servicio
P50/P51 por cada servicio + ciudad prioritaria
P60 si hay categorías adicionales
P70/P71 por cada ciudad con GeoHub
P80/P81 para GeoArticles iniciales
P90 → P91 → P92 → P93
P100 → P101
```

Output final:
- Web nueva publicada.
- GBP creada o preparada para verificación.
- Arquitectura GMB Crush implementada.
- QA aprobado.

---

## Escenario 2 — Sin web y con GBP

Usar en este orden:

```text
P00 → P01 → P02 → P03 → P10 sobre GBP/web inexistente como baseline → P11
P20 → P21 → P22
P31 → P32 → P33 → P34 → P35 → P36 → P37 → P38
P40/P41
P50/P51
P60 si hay categorías adicionales en GBP
P70/P71
P80/P81
P90 → P91 → P92 → P93
P100 → P101
```

Output final:
- Web nueva publicada.
- GBP existente alineada con web.
- URL correcta enlazada desde GBP.
- QA aprobado.

---

## Escenario 3 — Con web y sin GBP

Usar en este orden:

```text
P00 → P01 → P10 → P02 → P03 → P11
P20 con decisión conservar/refactorizar/eliminar
P21 → P22
P30 sobre homepage existente
P31 → P32 → P33 → P34 → P35 → P36 → P37 → P38
P40/P41 para servicios a conservar o crear
P50/P51 para páginas locales
P60 si se prevén categorías adicionales
P70/P71
P80/P81
P90 → P91 → P92 → P93
P100 → P101
```

Output final:
- Web refactorizada o ampliada.
- GBP creada sobre base web coherente.
- QA aprobado.

---

## Escenario 4 — Con web y con GBP

Usar en este orden:

```text
P00 → P01 → P10 → P02 → P03 → P11
P20 con mapa conservar/refactorizar/redirigir
P21 → P22
P30 sobre homepage existente
P31 → P32 → P33 → P34 → P35 → P36 → P37 → P38
P40/P41 para servicios existentes y faltantes
P50/P51 para gaps locales
P60 para categorías adicionales GBP no soportadas
P70/P71 para gaps de ciudades
P80/P81 para reforzar clusters
P90 → P91 → P92 → P93
P100 → P101
```

Output final:
- Web corregida o migrada.
- GBP existente alineada.
- Redirecciones preservadas.
- QA aprobado.

---

# PARTE 13 — CHECKLIST DE COBERTURA DE PROMPTS

Antes de cerrar un proyecto, confirma:

```text
[ ] Se clasificó el escenario.
[ ] Se hizo intake completo.
[ ] Se validó categoría principal GBP.
[ ] Se revisaron categorías adicionales.
[ ] Se definieron zonas, ciudades y barrios.
[ ] Se contrastó SERP/competidores.
[ ] Se generó arquitectura completa.
[ ] Se generó matriz servicio × ciudad.
[ ] Se definió interlinking.
[ ] Se trabajó homepage para AI Overview.
[ ] Se generaron o revisaron Service Overview Pages.
[ ] Se generaron o revisaron Location-Based Service Pages.
[ ] Se generaron páginas de categoría adicional si aplican.
[ ] Se generaron GeoHubs.
[ ] Se generaron GeoArticles.
[ ] Se implementó data layer.
[ ] Se implementaron rutas dinámicas.
[ ] Se implementó schema.
[ ] Se publicó la web.
[ ] Se hizo QA técnico.
[ ] Se hizo test doctrinal GMB Crush.
[ ] Se creó backlog de expansión.
```

---

# Regla final

Un proyecto no está terminado cuando tiene una web publicada.

Está terminado cuando la web publicada cumple:

1. Doctrina GMB Crush.
2. Arquitectura local correcta.
3. Soporte real a GBP.
4. Cobertura de servicios, ciudades y zonas.
5. Interlinking implementado.
6. Schema correcto.
7. AI Overview readiness.
8. QA final aprobado sobre URL real.
