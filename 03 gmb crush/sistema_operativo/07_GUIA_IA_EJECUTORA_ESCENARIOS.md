# GUÍA PARA IA EJECUTORA — FASES COMUNES Y ADAPTACIÓN POR ESCENARIO

**Sistema:** GMB Crush Local SEO / Web Production System  
**Uso:** documento operativo para una IA que debe ejecutar un proyecto real.  
**Idea central:** el sistema es *scenario-first*. Primero se identifica el punto de partida del cliente; después se ejecutan las fases comunes adaptadas a ese escenario.

---

## 0. Objetivo de este documento

Este documento explica cómo debe actuar una IA ejecutora cuando recibe el pack GMB Crush con:

- `README.md`
- `00_BASE_DEL_SISTEMA_GMB.md`
- `01_ESCENARIO_SIN_WEB_Y_SIN_GBP.md`
- `02_ESCENARIO_SIN_WEB_Y_CON_GBP.md`
- `03_ESCENARIO_CON_WEB_Y_SIN_GBP.md`
- `04_ESCENARIO_CON_WEB_Y_CON_GBP.md`
- `05_IMPLEMENTACION_TECNICA.md`
- `06_BIBLIOTECA_DE_PROMPTS_GMB_CRUSH.md`
- `REVISION_DE_COBERTURA_GMB.md`
- carpeta `fuentes_originales_gmb_crush/`

Su función es evitar una confusión importante:

> Las fases operativas son comunes a los cuatro escenarios, pero no se ejecutan igual en todos.

Dicho de forma simple:

> **Escenario primero. Fases después. Prompts según fase. Implementación cuando toque. QA al final.**

---

## 1. Regla de autoridad documental

La IA ejecutora debe respetar esta jerarquía:

```text
1. Fuentes originales GMB Crush
2. 00_BASE_DEL_SISTEMA_GMB.md
3. Escenario aplicable
4. 05_IMPLEMENTACION_TECNICA.md
5. 06_BIBLIOTECA_DE_PROMPTS_GMB_CRUSH.md
6. REVISION_DE_COBERTURA_GMB.md
```

Pero el **orden práctico de lectura** no es exactamente el mismo que la jerarquía doctrinal.

### Orden práctico de lectura

```text
1. README.md
2. 00_BASE_DEL_SISTEMA_GMB.md
3. Escenario aplicable
4. 05_IMPLEMENTACION_TECNICA.md cuando se llegue a producción
5. 06_BIBLIOTECA_DE_PROMPTS_GMB_CRUSH.md según la fase
6. REVISION_DE_COBERTURA_GMB.md al final
7. Fuentes originales GMB Crush solo si hay duda, contradicción o auditoría doctrinal
```

La IA no debe empezar por los prompts.  
La IA no debe empezar por la implementación técnica.  
La IA no debe leer los cuatro escenarios y mezclarlos.  
La IA debe clasificar el caso y ejecutar el escenario correcto.

---

## 2. Regla principal: scenario-first

El sistema no se ejecuta preguntando:

> “¿Qué fase toca ahora?”

Se ejecuta preguntando:

> “¿Cuál es el punto de partida real del cliente?”

Solo después se aplican las fases.

### Los cuatro puntos de partida

| Situación real del cliente | Documento aplicable |
|---|---|
| No tiene web y no tiene GBP | `01_ESCENARIO_SIN_WEB_Y_SIN_GBP.md` |
| No tiene web y sí tiene GBP | `02_ESCENARIO_SIN_WEB_Y_CON_GBP.md` |
| Tiene web y no tiene GBP | `03_ESCENARIO_CON_WEB_Y_SIN_GBP.md` |
| Tiene web y sí tiene GBP | `04_ESCENARIO_CON_WEB_Y_CON_GBP.md` |

---

## 3. Qué es común a todos los escenarios

Todos los escenarios deben respetar los mismos principios GMB Crush:

1. La **Homepage** es el ancla raíz de entidad.
2. Las **Service Overview Pages** son pilares de autoridad por servicio, sin ciudad.
3. Las **Location-Based Service Pages** son páginas transaccionales para `servicio + ciudad`.
4. Las **Additional Category Pages** dan soporte a categorías GBP adicionales.
5. Los **GeoHub Pages** agrupan señales locales por ciudad o zona estratégica.
6. Los **GeoArticle Pages** refuerzan topicalidad, AI Overview, long-tail y relevancia geográfica.
7. El sitio debe tener interlinking entre home, servicios, ciudades, GeoHubs, GeoArticles y páginas de categorías.
8. No se deben mezclar varios servicios o varias ciudades en una misma URL transaccional.
9. No se debe fingir presencia física donde no existe.
10. La categoría GBP principal y las categorías adicionales relevantes deben tener soporte web.
11. Las zonas, barrios y áreas servidas deben tratarse como señales geográficas reales, no como relleno.
12. El QA final debe hacerse sobre URL publicada, no sobre borrador local.

---

## 4. Fases comunes del sistema

Las fases comunes son:

```text
Fase 0 — Clasificación del escenario
Fase 1 — Intake, entidad y punto de partida
Fase 2 — Contraste SERP, competidores y mercado local
Fase 3 — Arquitectura GMB Crush objetivo
Fase 4 — Contenido, AI Overview, AUDIO y UX
Fase 5 — Implementación técnica
Fase 6 — GBP: creación, conexión o alineación
Fase 7 — QA final y cierre
```

Estas fases existen en todos los escenarios.  
Lo que cambia es:

- el punto de entrada;
- el peso de cada fase;
- los riesgos;
- los datos necesarios;
- los entregables;
- los gates;
- el tipo de producción.

---

# 5. Fase 0 — Clasificación del escenario

## Objetivo

Determinar qué playbook se debe ejecutar.

## Preguntas obligatorias

1. ¿Existe una web publicada?
2. ¿Existe una GBP / ficha de Google Business Profile?
3. ¿La web actual pertenece al negocio correcto?
4. ¿La GBP actual está verificada o al menos reclamada?
5. ¿El NAP coincide entre activos existentes?
6. ¿Hay riesgo de duplicados, cambios de nombre, cambios de dirección o historial conflictivo?

## Output obligatorio

```text
Escenario elegido:
Motivo:
Activos existentes:
Activos inexistentes:
Datos disponibles:
Datos faltantes:
Riesgo principal:
Documento de escenario que se ejecutará:
```

## Adaptación por escenario

| Escenario | Decisión principal |
|---|---|
| Sin web y sin GBP | Crear entidad digital completa desde cero. |
| Sin web y con GBP | Construir web para soportar una GBP existente. |
| Con web y sin GBP | Auditar web y preparar entidad para futura GBP. |
| Con web y con GBP | Auditar y alinear web + GBP sin romper activos existentes. |

## Gate de avance

No avanzar hasta que el escenario esté elegido y justificado.

---

# 6. Fase 1 — Intake, entidad y punto de partida

## Objetivo común

Recolectar y normalizar toda la información base del negocio.

## Datos mínimos comunes

```text
- Nombre legal o comercial
- NAP completo
- Teléfono
- Email
- Dominio, si existe
- GBP, si existe
- Ciudad principal
- Dirección física, si existe
- Tipo de negocio: físico, SAB o híbrido
- Servicios principales
- Servicios secundarios
- Categoría GBP principal o categoría objetivo
- Categorías adicionales o candidatas
- Zonas servidas
- Barrios relevantes
- Ciudades secundarias
- Activos disponibles: fotos, reseñas, casos, logos, vídeos
- Restricciones legales, geográficas o comerciales
```

## Adaptación por escenario

| Escenario | Cómo se ejecuta esta fase |
|---|---|
| **Sin web y sin GBP** | Se crea el mapa de entidad desde cero. Hay que definir NAP, ciudad principal, servicios, zonas, barrios, categoría GBP candidata y modelo de presencia. |
| **Sin web y con GBP** | Se audita la GBP existente. La ficha aporta datos, pero no se asumen correctos. Se revisan categoría, NAP, servicios, áreas servidas, reseñas, fotos y descripción. |
| **Con web y sin GBP** | Se audita la web como activo base. Se extraen URLs, servicios, contenidos, NAP, zonas, autoridad, señales útiles y problemas. |
| **Con web y con GBP** | Se hace auditoría cruzada web + GBP. Se buscan inconsistencias, duplicidades, servicios sin soporte, categorías mal alineadas y URLs de destino incorrectas. |

## Output obligatorio

```text
- Ficha de entidad normalizada
- Mapa de servicios
- Mapa de zonas, barrios y ciudades
- Categoría GBP principal o candidata
- Categorías adicionales o candidatas
- Modelo físico/SAB/híbrido
- Activos existentes
- Riesgos de entidad
```

## Gate de avance

No avanzar sin:

```text
- servicio principal definido;
- ciudad principal definida;
- modelo de presencia física/SAB definido;
- lista inicial de servicios;
- lista inicial de zonas o áreas servidas;
- categoría GBP principal o candidata.
```

---

# 7. Fase 2 — Contraste SERP, competidores y mercado local

## Objetivo común

Contrastar la hipótesis inicial contra la realidad de Google, competidores, Local Pack, resultados orgánicos y patrones de contenido.

## Qué debe analizar la IA

```text
- Queries principales
- Queries servicio + ciudad
- Queries servicio + barrio si procede
- Competidores en Local Pack
- Competidores orgánicos
- Categorías GBP usadas por competidores
- Tipos de páginas que rankean
- Servicios más visibles
- Ciudades y zonas con demanda
- Barrios o subzonas mencionadas por competidores
- Estructura de URLs
- Uso de páginas de servicio
- Uso de páginas locales
- Uso de blogs o GeoArticles
- Señales de confianza
- Reseñas
- Schema aparente
- Gaps del cliente
```

## Adaptación por escenario

| Escenario | Qué busca principalmente |
|---|---|
| **Sin web y sin GBP** | Validar antes de construir qué categoría, servicios, ciudades y zonas merecen prioridad. |
| **Sin web y con GBP** | Comprobar si la GBP existente está bien alineada con la realidad competitiva. |
| **Con web y sin GBP** | Determinar si la web actual ya contiene activos útiles y qué debe corregirse antes de crear GBP. |
| **Con web y con GBP** | Detectar qué está frenando el rendimiento actual y qué se debe preservar, corregir, migrar o eliminar. |

## Output obligatorio

```text
- Lista de competidores
- Queries analizadas
- Categorías GBP observadas
- Servicios prioritarios
- Zonas y barrios relevantes
- Gaps semánticos
- Gaps geográficos
- Tipos de páginas necesarias
- Oportunidades rápidas
- Riesgos competitivos
```

## Gate de avance

No avanzar si no se ha validado:

```text
- si la categoría GBP tiene sentido;
- qué servicios merecen página;
- qué ciudades o zonas merecen cobertura;
- qué estructura mínima necesita el sitio;
- qué competidores marcan el estándar local.
```

---

# 8. Fase 3 — Arquitectura GMB Crush objetivo

## Objetivo común

Convertir la investigación en una arquitectura concreta de páginas, URLs, clusters, interlinking y soporte a GBP.

## Arquitectura obligatoria a considerar

```text
Homepage
Service Overview Pages
Location-Based Service Pages
Additional Category Pages
GeoHub Pages
GeoArticle Pages
Contacto / presupuesto / conversión
```

## Reglas de arquitectura

### Homepage

Debe responder:

```text
Quién es el negocio
Qué servicio principal ofrece
Dónde opera
Por qué confiar
Cómo contactar
Qué servicios principales existen
Qué ciudad o zona principal cubre
```

### Service Overview Page

Ruta recomendada:

```text
/[categoria]/[servicio]/
```

Función:

```text
Pilar de autoridad del servicio sin ciudad.
```

### Location-Based Service Page

Ruta recomendada:

```text
/[categoria]/[ciudad]/[servicio]/
```

Función:

```text
Página transaccional para intención servicio + ciudad.
```

Regla:

```text
Una ciudad. Un servicio. Una intención principal.
```

### Additional Category Page

Ruta recomendada:

```text
/[categoria]/[ciudad]/[servicio-categoria-adicional]/
```

Función:

```text
Dar soporte web real a una categoría adicional de GBP.
```

### GeoHub

Ruta recomendada:

```text
/[ciudad]/
```

o

```text
/[categoria]/[ciudad]/
```

Función:

```text
Agrupar todas las páginas, servicios, categorías y artículos relacionados con una ciudad o zona estratégica.
```

### GeoArticle

Ruta recomendada:

```text
/[ciudad]/[tema-servicio]/
```

o

```text
/[categoria]/[ciudad]/[tema-servicio]/
```

Función:

```text
Refuerzo semántico, long-tail, AI Overview y topical authority.
```

No es una landing page.  
No debe competir con la página servicio + ciudad.  
Debe apoyar internamente a la página transaccional.

## Adaptación por escenario

| Escenario | Arquitectura resultante |
|---|---|
| **Sin web y sin GBP** | Arquitectura nueva y limpia. Se decide todo desde cero. |
| **Sin web y con GBP** | Arquitectura nueva diseñada para soportar la GBP existente o corregida. |
| **Con web y sin GBP** | Arquitectura híbrida. Se conserva lo útil, se corrige lo débil y se prepara soporte para GBP. |
| **Con web y con GBP** | Arquitectura de migración o refactor. Se preserva autoridad y se corrigen gaps. |

## Output obligatorio

```text
- Sitemap objetivo
- Matriz servicio × ciudad
- Matriz categoría GBP × página soporte
- Lista de Service Overview Pages
- Lista de Location-Based Service Pages
- Lista de Additional Category Pages
- Lista de GeoHubs
- Lista inicial de GeoArticles
- Reglas de interlinking
- URLs definitivas
```

## Gate de avance

No avanzar si:

```text
- hay categoría GBP sin soporte;
- hay servicio importante sin página;
- hay ciudad prioritaria sin cobertura;
- se mezclan servicios o ciudades;
- no existe GeoHub para ciudad principal o zona estratégica;
- no hay plan de GeoArticles;
- no hay interlinking definido.
```

---

# 9. Fase 4 — Contenido, AI Overview, AUDIO y UX

## Objetivo común

Producir o corregir el contenido que hará visible, entendible y convertible la arquitectura.

## Reglas comunes

Todo contenido debe:

```text
- responder a intención real;
- estar alineado con la categoría GBP;
- usar lenguaje natural;
- incluir señales semánticas;
- incluir contexto local cuando aplique;
- usar estructura escaneable;
- incluir FAQs;
- incluir CTA;
- apoyar AI Overview;
- evitar relleno;
- evitar claims falsos.
```

## AI Overview

AI Overview debe trabajarse en todos los escenarios mediante:

```text
- H1 claro;
- quick answers;
- FAQs naturales;
- H2/H3 orientados a preguntas;
- schema FAQPage cuando aplique;
- Speakable cuando aplique;
- contenido semánticamente completo;
- GeoArticles long-tail;
- respuestas directas a objeciones reales;
- lenguaje local humanizado.
```

## AUDIO

Las páginas transaccionales y de categoría adicional deben cubrir:

```text
Authority
Uniqueness
Depth
Intent
Optimization
```

## Zonas y barrios

Las zonas y barrios deben usarse cuando aporten contexto real:

```text
- en introducciones locales;
- en GeoHubs;
- en GeoArticles;
- en FAQs;
- en bloques de cobertura;
- en páginas de servicio + ciudad si son relevantes.
```

No deben usarse para fingir presencia física.

## Adaptación por escenario

| Escenario | Trabajo de contenido |
|---|---|
| **Sin web y sin GBP** | Crear todo desde cero. |
| **Sin web y con GBP** | Crear contenido nuevo alineado con la GBP existente. |
| **Con web y sin GBP** | Reusar, reescribir, ampliar o eliminar contenido actual. |
| **Con web y con GBP** | Consolidar, corregir y ampliar sin destruir señales útiles. |

## Output obligatorio

```text
- H1 por página
- Meta title por página
- Meta description por página
- Quick answer donde aplique
- FAQs
- CTAs
- Bloques AUDIO
- Señales de confianza
- Copy de homepage
- Copy de Service Overview Pages
- Copy de Location-Based Service Pages
- Copy de Additional Category Pages
- Copy de GeoHubs
- Briefs o drafts de GeoArticles
- Enlaces internos planificados
- Schema previsto
```

## Gate de avance

No avanzar si:

```text
- la homepage no deja claro quién, qué y dónde;
- las páginas locales no tienen contexto local real;
- no hay FAQs orientadas a intención y AI Overview;
- no hay CTAs;
- no hay señales de confianza;
- el contenido no soporta la categoría GBP;
- los GeoArticles no enlazan al cluster correcto.
```

---

# 10. Fase 5 — Implementación técnica

## Objetivo común

Convertir la arquitectura y el contenido en una web real, rastreable, rápida, mantenible y publicable.

## Stack recomendado

```text
Framework: Astro
Lenguaje: TypeScript
CSS/UI: Tailwind CSS
Contenido: data-driven / content collections
Deploy: Cloudflare Pages o equivalente
Repositorio: GitHub
Salida preferente: HTML estático, rápido y rastreable
```

## Regla técnica principal

Nada crítico debe estar hardcodeado dentro de componentes si puede vivir en datos estructurados.

Debe existir una fuente de verdad para:

```text
- negocio;
- NAP;
- servicios;
- ciudades;
- zonas;
- categorías;
- artículos;
- navegación;
- schema;
- URLs;
- enlaces internos.
```

## Adaptación por escenario

| Escenario | Implementación |
|---|---|
| **Sin web y sin GBP** | Build nuevo completo. No hay migración ni redirecciones heredadas. |
| **Sin web y con GBP** | Build nuevo completo alineado con la ficha existente. |
| **Con web y sin GBP** | Refactor, reconstrucción o migración. Hay que decidir qué URLs conservar y qué redirigir. |
| **Con web y con GBP** | Migración controlada o refactor quirúrgico. Prioridad máxima: no romper autoridad ni coherencia GBP. |

## Output obligatorio

```text
- Proyecto web funcional
- Data layer creado
- Rutas generadas
- Componentes reutilizables
- Homepage publicada
- Service Overview Pages publicadas
- Location-Based Service Pages publicadas
- Additional Category Pages publicadas si aplican
- GeoHubs publicados
- GeoArticles iniciales publicados
- Schema implementado
- Sitemap generado
- robots.txt
- Redirecciones si hay web previa
- Build sin errores
- Deploy funcionando
```

## Gate de avance

No avanzar si:

```text
- el build falla;
- las rutas clave no existen;
- falta sitemap;
- falta robots.txt;
- faltan páginas críticas;
- el schema no es veraz;
- los datos críticos están hardcodeados;
- no se han aplicado redirecciones necesarias.
```

---

# 11. Fase 6 — GBP: creación, conexión o alineación

## Objetivo común

Crear, conectar o corregir la GBP para que esté soportada por la web.

## Adaptación por escenario

| Escenario | Trabajo GBP |
|---|---|
| **Sin web y sin GBP** | Crear o preparar GBP desde cero. La web y la entidad deben nacer coherentes. |
| **Sin web y con GBP** | Auditar y alinear la GBP existente con la nueva web. |
| **Con web y sin GBP** | Crear GBP usando la web optimizada como soporte. |
| **Con web y con GBP** | Corregir discrepancias entre GBP y web sin perder señales existentes. |

## Reglas GBP

```text
- La categoría principal debe tener soporte claro en la homepage y páginas principales.
- Las categorías adicionales relevantes deben tener páginas de soporte.
- La URL conectada desde GBP debe ser correcta.
- NAP debe ser consistente.
- Los servicios de GBP deben reflejar servicios reales.
- Las áreas servidas deben ser coherentes con la web.
- No se debe añadir ciudad o zona que no se pueda justificar.
```

## Output obligatorio

Si no había GBP:

```text
- GBP creada o preparada
- Categoría principal seleccionada
- Categorías adicionales seleccionadas
- Servicios configurados
- Áreas servidas configuradas
- Descripción alineada
- Fotos preparadas
- URL web conectada
```

Si ya había GBP:

```text
- GBP auditada
- Categoría principal validada o corregida
- Categorías adicionales revisadas
- Servicios revisados
- Áreas servidas revisadas
- NAP alineado
- URL conectada correctamente
- Inconsistencias corregidas
```

## Gate de avance

No cerrar si:

```text
- GBP y web no dicen lo mismo;
- la URL de GBP apunta a una página incorrecta;
- la categoría principal no tiene soporte;
- las categorías adicionales no tienen soporte;
- el NAP no coincide;
- las áreas servidas no tienen coherencia.
```

---

# 12. Fase 7 — QA final y cierre

## Objetivo común

Validar el proyecto publicado.

El QA final debe hacerse sobre URL real, no sobre local.

## QA mínimo

```text
- Web publicada
- GBP creada o alineada
- Sitemap accesible
- robots correcto
- Schema validado
- Interlinking revisado
- Titles revisados
- Meta descriptions revisadas
- H1/H2 revisados
- Mobile revisado
- Performance revisada
- Indexabilidad revisada
- Redirecciones revisadas si aplica
- Cobertura de servicios revisada
- Cobertura de ciudades, zonas y barrios revisada
- Categoría GBP principal soportada
- Categorías adicionales soportadas
- GeoHubs correctos
- GeoArticles conectados
- AI Overview trabajado
- CTAs funcionando
- Formularios funcionando
- Teléfonos clicables
- Backlog posterior definido
```

## Adaptación por escenario

| Escenario | QA dominante |
|---|---|
| **Sin web y sin GBP** | Completitud de entidad nueva. |
| **Sin web y con GBP** | Alineación web nueva + GBP existente. |
| **Con web y sin GBP** | Preparación de web optimizada para sostener GBP nueva. |
| **Con web y con GBP** | Preservación de autoridad, redirecciones y alineación web + GBP. |

## Gate final

El proyecto solo se considera cerrado si:

```text
- la web está publicada;
- la GBP está creada o alineada;
- las páginas críticas existen;
- el interlinking está implementado;
- el schema es veraz;
- el cluster geográfico está claro;
- AI Overview está trabajado;
- las categorías GBP tienen soporte;
- no se finge presencia física;
- el QA final está aprobado.
```

---

# 13. Matriz completa: misma fase, distinta ejecución

| Fase | Sin web / sin GBP | Sin web / con GBP | Con web / sin GBP | Con web / con GBP |
|---|---|---|---|---|
| Clasificación | Confirmar ausencia total | Confirmar GBP existente | Confirmar web existente | Confirmar web + GBP |
| Intake | Crear entidad desde cero | Auditar GBP | Auditar web | Auditar web + GBP |
| Categoría GBP | Proponer y validar | Validar/corregir existente | Proponer futura categoría | Validar y alinear |
| Mercado | Definir prioridades | Comparar GBP con mercado | Ver si la web encaja | Detectar gaps y riesgos |
| Arquitectura | Crear arquitectura limpia | Crear soporte para GBP | Conservar + ampliar | Migrar/refactorizar |
| Contenido | Crear todo | Crear alineado con ficha | Reusar/corregir/ampliar | Consolidar/corregir |
| Zonas/barrios | Definir desde cero | Validar contra GBP | Extraer de web y mercado | Validar web + GBP + mercado |
| Implementación | Build nuevo | Build nuevo alineado | Refactor o reconstrucción | Migración controlada |
| GBP | Crear | Alinear existente | Crear | Corregir existente |
| QA | Completitud | Alineación ficha-web | Preparación para GBP | Preservación + alineación |

---

# 14. Primer output que debe producir una IA ejecutora

Cuando una IA reciba un caso real, su primer output debe ser:

```text
Escenario elegido:
Motivo:
Activos existentes:
Activos inexistentes:
Datos disponibles:
Datos faltantes:
Riesgo principal:
Qué cambia respecto al flujo común:
Documento de escenario aplicable:
Siguiente acción concreta:
```

## Ejemplo 1 — Sin web y sin GBP

```text
Escenario elegido: Sin web y sin GBP.

Motivo:
El cliente no tiene web publicada ni ficha de Google Business Profile.

Activos existentes:
Nombre del negocio, teléfono, servicios declarados, ciudad principal.

Activos inexistentes:
Web, GBP, páginas de servicio, páginas locales, schema, GeoHubs, GeoArticles.

Riesgo principal:
Construir desde cero con una categoría GBP mal elegida o con cobertura geográfica demasiado amplia.

Qué cambia respecto al flujo común:
La fase de intake debe definir toda la entidad desde cero.
La fase de arquitectura no conserva activos previos.
La fase GBP es creación, no alineación.

Siguiente acción:
Completar intake de entidad, servicios, ciudad principal, zonas/barrios y categoría GBP candidata.
```

## Ejemplo 2 — Con web y con GBP

```text
Escenario elegido: Con web y con GBP.

Motivo:
El cliente tiene web publicada y ficha GBP activa.

Activos existentes:
Web, URLs, contenido, NAP público, GBP, reseñas, categoría actual.

Activos inexistentes o dudosos:
Soporte real a categorías adicionales, GeoHubs, GeoArticles, arquitectura servicio + ciudad.

Riesgo principal:
Romper autoridad existente o mantener una desalineación entre categoría GBP y arquitectura web.

Qué cambia respecto al flujo común:
La fase de intake se convierte en auditoría cruzada web + GBP.
La implementación no empieza desde cero; exige preservar, redirigir o consolidar URLs.
La fase GBP no es creación, sino alineación.

Siguiente acción:
Auditar web + GBP, mapear URLs, servicios, categorías, zonas y conflictos.
```

---

# 15. Prompt maestro para IA ejecutora

Usar este prompt al iniciar un proyecto:

```md
Actúa como IA ejecutora del sistema GMB Crush.

Tu objetivo es ejecutar un proyecto real siguiendo el pack documental entregado.

Orden obligatorio de lectura:
1. Lee `README.md`.
2. Lee completo `00_BASE_DEL_SISTEMA_GMB.md`.
3. Clasifica el caso en uno de estos cuatro escenarios:
   - sin web y sin GBP;
   - sin web y con GBP;
   - con web y sin GBP;
   - con web y con GBP.
4. Lee completo solo el escenario aplicable.
5. Antes de producir web o código, lee `05_IMPLEMENTACION_TECNICA.md`.
6. Usa `06_BIBLIOTECA_DE_PROMPTS_GMB_CRUSH.md` solo como herramienta para generar outputs concretos por fase.
7. Usa `REVISION_DE_COBERTURA_GMB.md` al final como checklist de cierre.
8. Consulta `fuentes_originales_gmb_crush/` solo si hay duda doctrinal, contradicción o necesidad de auditoría.

Reglas de autoridad:
- La doctrina GMB Crush manda sobre cualquier atajo.
- El escenario elegido manda sobre el orden de ejecución.
- La implementación técnica manda sobre cómo producir la web.
- La biblioteca de prompts ayuda a producir entregables, pero no reemplaza el escenario.
- No inventes presencia física.
- No mezcles varias ciudades o varios servicios en una URL transaccional.
- No cierres un proyecto sin QA sobre URL publicada.

Método de trabajo:
- Ejecuta fase por fase.
- En cada fase entrega:
  1. decisiones tomadas;
  2. output producido;
  3. datos faltantes;
  4. riesgos;
  5. gate de avance.
- Si falta un dato crítico, decláralo y propón una hipótesis temporal marcada como pendiente.
- No pases a producción hasta tener arquitectura, páginas, interlinking, schema y cobertura geográfica definidos.

Primer output que debes producir:
1. Escenario elegido.
2. Motivo.
3. Datos disponibles.
4. Datos faltantes.
5. Riesgos iniciales.
6. Plan de fases adaptado al escenario.
7. Siguiente acción concreta.
```

---

# 16. Regla final para evitar errores

La IA ejecutora debe recordar siempre:

> No existe una ejecución genérica del sistema.  
> Existe una doctrina común y cuatro formas de aplicarla según el punto de partida.

La fórmula correcta es:

```text
Doctrina común
+ escenario aplicable
+ fases adaptadas
+ prompts por fase
+ implementación técnica
+ QA publicado
= proyecto GMB Crush ejecutado
```

---

# 17. Checklist de cierre de uso de este documento

Antes de ejecutar un proyecto, la IA debe poder responder:

```text
[ ] ¿He leído la base?
[ ] ¿He elegido un solo escenario?
[ ] ¿Sé qué cambia en ese escenario respecto al flujo común?
[ ] ¿Tengo definidos servicios, ciudad principal, zonas y categoría GBP?
[ ] ¿Tengo claro qué páginas debe producir el proyecto?
[ ] ¿Tengo claro qué prompts usar por fase?
[ ] ¿Tengo claro cuándo entra la implementación técnica?
[ ] ¿Tengo claro cómo se validará la GBP?
[ ] ¿Tengo claro que el QA se hace sobre URL publicada?
```

Si alguna respuesta es “no”, la IA no debe avanzar a producción.

---

## 18. Fuentes doctrinales consolidadas

Este documento consolida la lógica de las fuentes originales GMB Crush incluidas en el pack:

```text
- Analysis Framework
- Universal AI Local SEO Framework
- Location Pages AI Optimization Framework
- Website Homepage AI Optimization Framework
- Service Pages AI Optimization Framework
- GeoHub Pages AI Framework
- GeoArticle Pages AI Framework
- Additional Categories Pages AI Framework
```

Las fuentes originales se mantienen como respaldo doctrinal, pero este documento es la guía práctica para una IA ejecutora cuando necesita entender si las fases son comunes, cómo se adaptan y cómo avanzar sin mezclar escenarios.
