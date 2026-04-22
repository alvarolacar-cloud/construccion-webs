# 03_ESCENARIO_CON_WEB_Y_SIN_GBP.md
## Playbook completo para cliente con web existente y sin ficha GBP

> **Cuándo usar este escenario**
>
> Úsalo cuando el cliente ya tiene web publicada o parcialmente desarrollada, pero no tiene GBP viva y bien configurada:
> - el sitio existe y tiene valor potencial o real;
> - todavía no hay ficha, o la ficha no es operativa/reclamable;
> - la prioridad es alinear y reforzar la web antes de crear la GBP.

Aquí el activo principal es la web. El sistema debe decidir si se conserva, se refactoriza o se reconstruye parcialmente antes de activar la ficha.

---


## Resumen ejecutivo del escenario

| Aspecto | Decisión operativa |
| --- | --- |
| Foco principal | auditar la web heredada y convertirla en base legítima de una futura GBP |
| Riesgo dominante | crear una GBP sobre una web que todavía no soporta la entidad |
| Sesgo de trabajo | web-first: preservar, podar, refactorizar y luego conectar con GBP |
| Momento de actuar sobre GBP | solo después de corregir o reforzar la web hasta que pueda sostener la ficha |
| Lógica heredada A/B/C/D/E | A=descubrimiento+auditoría, B=contraste, A regenerado=modelo objetivo, C=refactor visual, D=construcción/refactor, E=QA |

## Cómo detectar si te has equivocado de escenario

Si durante la ejecución aparece cualquiera de estos signos, detente y re-clasifica:
- la web “inútil” sí tiene URLs, tráfico o estructura rescatable;
- la GBP “ausente” en realidad existe, es recuperable o concentra reseñas valiosas;
- la cobertura geográfica real del negocio es mucho más limitada de lo que parecía;
- el servicio principal con el que arrancaste no es el que mejor representa la intención dominante;
- la entidad pública del negocio difiere de la entidad operativa real.


## 1. Resultado final que debe conseguirse

Al cerrar este escenario, el cliente debe tener:

- auditoría clara del sitio existente;
- decisión formal de conservar, refactorizar o reconstruir;
- entidad canónica fijada;
- arquitectura local aprobada;
- web corregida o ampliada hasta poder sostener la futura GBP;
- ficha GBP creada/verificada sobre una base web coherente;
- QA final aprobado.

---

## 2. Qué hace especial a este escenario

### 2.1 Ventajas
- ya existe un activo web, con posibles contenidos, URLs, autoridad o pruebas aprovechables;
- el sitio permite detectar qué entiende hoy el mercado sobre la entidad;
- la web puede convertirse en el cimiento correcto de la futura ficha.

### 2.2 Riesgos dominantes
- creer que cualquier web existente ya sirve para SEO local;
- sobrevalorar páginas inútiles solo porque ya están publicadas;
- crear la GBP antes de corregir una web mal alineada;
- mantener estructura, slugs o contenidos que confunden la categoría principal;
- no preservar URLs valiosas al refactorizar.

### 2.3 Regla central del escenario
La GBP no debe nacer antes de que la web pueda sostener la entidad y la categoría principal con dignidad.

---

## 3. Qué NO debe hacerse en este escenario

- no abrir la GBP solo para "ir avanzando" si la web aún contradice la oferta;
- no tirar la web sin auditar si puede tener activos aprovechables;
- no conservar contenido débil solo por antigüedad;
- no dejar títulos, slugs o headings heredados que estorben la nueva arquitectura;
- no publicar nuevas city pages sin resolver antes la estructura madre.

---

## 4. Hoja de ruta oficial

## 4.1 Principios GMB Crush que siguen siendo obligatorios en este escenario

Aunque el punto de partida cambie, este escenario **no puede saltarse** estos principios. Esta sección existe para que el documento sea autosuficiente y no dependa de leer otro archivo antes de ejecutarlo.

### A. Entidad, categoría y verdad operativa
- la web y la GBP deben representar la **misma entidad**;
- debe existir una **categoría principal defendible** que ordene la arquitectura;
- toda **categoría adicional** que se mantenga o se active en GBP debe tener soporte web real;
- cada categoría GBP relevante —principal o adicional— debe tener soporte web defendible, y las adicionales activas deben tener al menos una URL local específica cuando su intención lo requiera;
- no se inventan servicios, zonas, barrios, oficinas, coberturas ni diferenciales;
- no se publica una promesa local que el negocio no pueda sostener con operación y contenido.

### B. Familias de página que estructuran cualquier proyecto
Todo proyecto debe valorar estas familias, aunque el release 1 no siempre las incluya todas con la misma profundidad:

1. **Homepage / ancla de entidad raíz / root entity anchor**  
   Debe presentar marca + servicio principal + ciudad/área principal, mostrar 3–6 servicios clave, pruebas de confianza, CTA, NAP claro, señales semánticas de categoría principal y enlazar a activos clave.

2. **Service Overview / página pilar de servicio**  
   Página no geolocalizada que explica qué es el servicio, a quién ayuda, proceso, beneficios, FAQs y enlaza a las variantes `servicio + ciudad`. No sustituye a las páginas locales.

3. **Location-Based Service Page / página `servicio + ciudad`**  
   Es la URL transaccional local. Debe trabajar una sola ciudad y un solo servicio principal, usar lógica **AUDIO** (Authority, Uniqueness, Depth, Intent, Optimization), incluir FAQs locales, CTA y referencias honestas del lugar.

4. **Additional Category Page / soporte de categoría adicional**  
   Da soporte a una categoría adicional real de GBP. Debe ser local, útil y no una copia ligera de otra página.

5. **GeoHub / contenedor por ciudad**  
   Agrupa todos los servicios locales, categorías adicionales y GeoArticles de una ciudad. Sirve para ordenar el cluster local.

6. **GeoArticle / booster semántico**  
   No es una landing de venta. Es una pieza long-tail que refuerza tópica, ciudad e intención y enlaza a la local page y al GeoHub.

### C. Reglas de contenido por familia de página
#### Homepage
- H1: marca + servicio principal + ciudad/área;
- párrafo de apertura alineado con categoría y ciudad núcleo;
- mini menú o bloque de servicios;
- prueba social / trust blocks;
- CTA visible;
- NAP visible y accionable;
- FAQs o quick answers si aportan;
- H2/H3 tipo pregunta cuando ayuden a AI Overview y voz;
- enlaces a pilares, hub principal, categorías adicionales activas y contacto/presupuesto.

#### Service Overview
- enfoque no geolocalizado;
- qué es, para quién, qué resuelve, proceso, beneficios y FAQs;
- CTA;
- enlaces a variantes `servicio + ciudad`, servicios relacionados y GeoArticles.

#### Servicio + ciudad
- servicio + ciudad en H1 y title;
- intro local creíble;
- cuerpo bajo lógica AUDIO;
- beneficios, qué incluye, objeciones, FAQs y CTA;
- visuales/reviews/mapa solo si son veraces y útiles;
- enlaces a service overview padre, GeoHub, servicios hermanos de la ciudad, GeoArticles y, cuando ayude, la misma prestación en otras ciudades.

#### Categoría adicional
- intro local con lógica AUDIO;
- explica cuándo aplica esa categoría/servicio;
- FAQs orientadas a intención local;
- CTA;
- enlaces a GeoHub y URLs relacionadas del cluster.

#### GeoHub
- lista enlazada de servicios locales de la ciudad;
- lista de categorías adicionales soportadas;
- bloque de GeoArticles;
- CTA;
- testimonios, barrios o cobertura solo si aportan y son reales.

#### GeoArticle
- una ciudad + un servicio/tema + una intención long-tail por URL;
- valor real, no promo disfrazada;
- FAQs naturales;
- CTA contextual;
- enlaces a local page, GeoHub y otro GeoArticle relacionado cuando exista.

### D. Reglas de arquitectura y cluster
- **nunca** mezclar múltiples ciudades y múltiples servicios en una sola URL transaccional;
- una Service Overview y una página `servicio + ciudad` no son intercambiables;
- no toda ciudad merece el mismo peso: hay ciudad núcleo, ciudades primarias, secundarias y zonas/barrio de soporte;
- no todo mercado necesita GeoHub desde el día 1, pero toda expansión geográfica debe responder a intención y capacidad real;
- los GeoArticles no son relleno: existen para reforzar clusters reales.

### E. Interlinking mínimo obligatorio
- home → service overviews + GeoHub principal + categorías adicionales activas + contacto/presupuesto;
- service overview → todas sus variantes `servicio + ciudad` + servicios relacionados + GeoArticles;
- servicio + ciudad → service overview padre + GeoHub + servicios hermanos + GeoArticles;
- categoría adicional → GeoHub + páginas locales relacionadas;
- GeoHub → todas las URLs locales de la ciudad + GeoArticles + contacto;
- GeoArticle → local page correspondiente + GeoHub + otro GeoArticle relacionado cuando exista.

### F. Schema y señales estructuradas mínimas
- **Homepage**: `Organization`, `WebSite` y `FAQPage` / `Speakable` cuando de verdad exista ese contenido; `LocalBusiness` solo si es veraz.
- **Service Overview**: `Service`, `WebPage` cuando convenga, `BreadcrumbList`, `Speakable` opcional.
- **Servicio + ciudad**: `LocalBusiness` y/o `Service`, `BreadcrumbList`, `FAQPage` si aplica; `areaServed` y `sameAs` hacia GBP solo si son veraces.
- **Categoría adicional**: `Service`, `BreadcrumbList`, `FAQPage` si aplica, `areaServed` cuando ayude.
- **GeoHub**: `CollectionPage`, `BreadcrumbList`.
- **GeoArticle**: `Article`, `FAQPage`, `BreadcrumbList`, `Speakable` cuando proceda.

### G. AI Overview, semántica y lenguaje
- usar lenguaje de categoría principal y entidades relacionadas;
- incorporar co-ocurrencias y sinónimos útiles, no stuffing;
- home y páginas clave pueden usar H2/H3 tipo pregunta, FAQs y quick answers si ayudan a extracción;
- las local pages y category pages deben sonar humanas, localizadas y útiles, no plantilladas;
- los GeoArticles deben cubrir dudas, comparativas, errores, mitos y escenarios reales.

### H. Reglas de verdad y compliance
- no fingir oficina pública donde no existe;
- no fingir presencia física ni usar dirección pública falsa para aparentar cobertura local;
- no usar mapa, dirección o schema local falso;
- no enlazar desde schema `sameAs` a activos que no representen de verdad al negocio;
- no mantener en GBP categorías, zonas o servicios que la web no soporte;
- no dar por bueno un proyecto sin revisar la **URL publicada**.

---


1. **Fase 0 — Clasificación e intake**
2. **Fase 1 — Auditoría profunda del sitio existente**
3. **Fase 2 — Normalización de entidad**
4. **Fase 3 — Investigación y contraste**
5. **Fase 4 — Modelo objetivo y arquitectura correctiva**
6. **Fase 5 — Diseño / refactor del sistema visual**
7. **Fase 6 — Refactor, ampliación y construcción**
8. **Fase 7 — Alta de GBP**
9. **Fase 8 — QA final y calibración**

---

## 4.2 Mandato doctrinal permanente de este escenario

Este escenario no debe entenderse como una simple lista de tareas. Debe ejecutarse como una **aplicación completa de la doctrina GMB Crush** a un punto de partida concreto.

Eso implica que, durante todo el escenario, siguen vivas estas obligaciones:

- el objetivo no es “sacar una web”, sino construir un sistema local que soporte **GBP, Local Pack, orgánico y visibilidad en IA** al mismo tiempo;
- la **homepage** debe comportarse como **ancla de entidad raíz / root entity anchor** y no como una portada vacía;
- las páginas **Service Overview** deben sostener la autoridad topical de los servicios sin sustituir a las páginas locales;
- las páginas **servicio + ciudad** son la unidad transaccional local y nunca deben diluirse mezclando varios servicios o varias ciudades; regla: no mezclar varias ciudades o varios servicios en una sola URL transaccional;
- las **categorías adicionales** de GBP no se dejan “colgando”: si se mantienen activas, se les da soporte web local real;
- los **GeoHubs** ordenan el cluster de ciudad y los **GeoArticles** expanden profundidad semántica y long-tail;
- el **interlinking** no es decoración: es infraestructura de relevancia y distribución de autoridad;
- el **schema** debe ser mínimo, correcto y veraz según la familia de página;
- la semántica para **AI Overview, voz y NLP** debe estar presente en la homepage, las páginas transaccionales y las piezas de soporte;
- no se finge oficina, geolocalización, autoridad, reviews, cobertura ni `sameAs` que no puedan probarse.

### Regla de pureza doctrinal
Si una solución parece más rápida pero rompe cualquiera de los puntos anteriores, **no es una solución válida en GMB Crush**, aunque técnicamente “funcione”.

## 4.3 Checklist doctrinal obligatoria antes de cerrar cualquier fase

Antes de cerrar una fase de este escenario, revisa estas preguntas:

1. ¿Sigue clara la **categoría principal** que organiza entidad, servicios, copy y arquitectura?  
2. ¿Se está dando soporte web real a la **categoría principal** y a las **categorías adicionales activas**?  
3. ¿La homepage sigue funcionando como **root entity anchor** con NAP, servicios, confianza y enlaces correctos?  
4. ¿Cada `Service Overview` se mantiene no geolocalizada y enlazada a sus variantes locales?  
5. ¿Cada página `servicio + ciudad` trabaja **una ciudad y un servicio**, con intención local, FAQs y CTA?  
6. ¿Los `GeoHub` previstos agrupan correctamente los activos de la ciudad?  
7. ¿Los `GeoArticle` previstos existen para reforzar intención y topicalidad, no como relleno?  
8. ¿El modelo de cluster geográfico distingue bien ciudad principal, ciudades prioritarias y zonas secundarias?  
9. ¿El interlinking obliga a circular la autoridad entre homepage, pilares, locales, hubs y artículos?  
10. ¿El schema previsto es el correcto: `Organization` / `WebSite`, `Service`, `LocalBusiness`, `BreadcrumbList`, `FAQPage`, `Speakable`, `CollectionPage`, `Article`, `areaServed`, `sameAs` veraz?  
11. ¿La semántica de AI Overview se está apoyando con quick answers, preguntas reales, entidades y co-ocurrencias útiles?  
12. ¿Se evita fingir presencia física en ciudades donde no existe oficina?  
13. ¿La fase que termina deja una base más alineada con GBP y no solo “más bonita”?  
14. ¿Lo que se publica es defendible frente a una auditoría GMB Crush estricta?

Si una fase falla en 2 o más puntos, la fase **no debe darse por cerrada**.

## 5. Fase 0 — Clasificación e intake

### Objetivo
Confirmar que existe una web con potencial de análisis y que no hay GBP operativa que cambie el escenario.

### Tareas obligatorias
- recopilar acceso al sitio, hosting, CMS o repo;
- inventariar stack técnico;
- confirmar inexistencia o inutilidad de la ficha;
- recopilar datos del negocio, activos, objetivos y limitaciones;
- congelar una copia del estado actual del sitio para análisis.

### Entregables
- clasificación oficial del escenario;
- carpeta de inventario de sitio;
- accesos y snapshot del punto de partida.

---

## 6. Fase 1 — Auditoría profunda del sitio existente

### Objetivo
Entender qué parte del sitio puede reutilizarse, qué debe corregirse y qué debe eliminarse.

### Qué debe auditarse
- URLs existentes;
- arquitectura de navegación;
- titles, metas y headings;
- home actual;
- páginas de servicio;
- city pages existentes;
- páginas de soporte;
- blog o contenidos;
- schema;
- datos de contacto;
- CTAs;
- rendimiento técnico;
- indexabilidad;
- canibalizaciones;
- contenidos duplicados;
- páginas con potencial y páginas sin valor.

### Clasificación recomendada de URLs
Cada URL relevante debe marcarse como:
- **conservar tal cual**;
- **conservar con mejora**;
- **fusionar**;
- **redirigir**;
- **eliminar**;
- **reconstruir desde cero**.

### Tareas obligatorias
- mapear el sitio;
- detectar la categoría que hoy transmite el sitio;
- detectar incoherencias entre servicios y estructura;
- detectar si existen ya clusters útiles;
- detectar city pages rescatables;
- detectar trust assets ya integrados o disponibles.

### Entregables
- auditoría de sitio;
- clasificación URL por URL;
- primera hipótesis de salvage vs rebuild.

### Gate de paso
No crear nueva arquitectura sin haber decidido:
- qué URLs tienen valor;
- qué se redirige;
- qué se reutiliza;
- qué se reemplaza.

---


## 6.1 Regla de salvage vs rebuild

Usa esta regla simple:

**Conservar** una parte del sitio si:
- ya transmite bien la entidad;
- tiene valor SEO, enlaces o conversiones;
- puede adaptarse sin romper la nueva arquitectura.

**Reconstruir** esa parte si:
- su intención no encaja con la categoría principal;
- mezcla servicios o ciudades sin control;
- genera duplicidad o thin content;
- no puede integrarse limpiamente en el nuevo cluster.

## 7. Fase 2 — Normalización de entidad

### Objetivo
Asegurar que la futura GBP nacerá sobre una entidad clara y sobre una web que la sostenga.

### Tareas obligatorias
- fijar nombre comercial canónico;
- fijar NAP;
- decidir ciudad núcleo;
- fijar servicio principal y secundarios;
- revisar si la web actual refleja o contradice esa entidad;
- definir el nuevo mapa limpio de servicios y zonas;
- inventariar pruebas de confianza ya presentes en la web y las externas.

### Entregables
- entidad canónica aprobada;
- matriz de alineación entidad ↔ sitio actual.

### Gate de paso
No avanzar si aún no se sabe:
- qué categoría principal debe representar la futura GBP;
- si la home actual puede adaptarse o debe rehacerse;
- qué servicios son troncales y cuáles accesorios.

---

## 8. Fase 3 — Investigación y contraste

### Objetivo
Confirmar la estrategia local correcta a partir de la SERP y los competidores.

### Tareas obligatorias
- revisar resultados locales/orgánicos para servicio principal + ciudad núcleo;
- revisar arquitectura de competidores líderes;
- detectar patrones de clusters, service pages, city pages, hubs y boosters;
- validar o corregir la categoría principal;
- decidir categorías adicionales viables;
- decidir ciudades de release 1;
- decidir si la web actual estaba subcategorizando o sobredimensionando la oferta.

### Entregables
- contraste de mercado;
- confirmación de categoría principal;
- shortlist de clusters prioritarios.

### Gate de paso
No pasar a arquitectura si aún no puedes defender:
- la categoría principal de la futura ficha;
- el rol de cada ciudad;
- la familia de páginas necesaria para cada servicio clave.

---

## 9. Fase 4 — Modelo objetivo y arquitectura correctiva

### Objetivo
Diseñar la nueva arquitectura a partir de lo que el sitio actual puede o no puede sostener.

### Tareas obligatorias
- decidir home objetivo;
- decidir Service Overview pages necesarias;
- decidir GeoHub principal y secundarios si aplica;
- decidir local pages prioritarias;
- decidir páginas de categorías adicionales;
- decidir GeoArticles prioritarios;
- decidir qué URLs existentes se conservan como slugs finales;
- decidir el plan de redirecciones.

### Regla crítica
Preservar una URL solo porque ya existe no es una razón suficiente.  
Se conserva si:
- tiene valor;
- puede sostener la nueva intención;
- no rompe la arquitectura;
- puede alinearse con la categoría principal.

### Entregables
- sitemap objetivo;
- plan de conservación/redirección;
- mapa de interlinking;
- roadmap de reconstrucción.

### Gate de paso
No tocar la web sin un plan de:
- URLs a conservar;
- URLs a redirigir;
- nuevas URLs a crear;
- orden de implementación.

---

## 10. Fase 5 — Diseño / refactor del sistema visual

### Objetivo
Decidir cuánto diseño se preserva y cuánto se rehace.

### Tareas obligatorias
- evaluar si el diseño actual:
  - transmite confianza;
  - permite CTAs claros;
  - soporta bloques locales;
  - funciona bien en móvil;
  - deja respirar la arquitectura;
- decidir:
  - conservar;
  - refactorizar;
  - rediseñar;
- definir los componentes que el nuevo sistema necesita;
- integrar tokens visuales y patrones consistentes.

### Entregables
- decisión visual formal;
- guía de refactor o rediseño;
- componentes aprobados.

### Gate de paso
No construir nuevas páginas con un diseño que:
- impida jerarquía de contenido;
- esconda la oferta;
- haga difícil enlazar o convertir.

---

## 11. Fase 6 — Refactor, ampliación y construcción

### Objetivo
Transformar el sitio existente en una web que sí pueda sostener la futura GBP.

### Orden recomendado
1. corregir base técnica;
2. rehacer o reforzar home;
3. rehacer o crear páginas pilar;
4. crear GeoHub principal;
5. crear/rehacer local pages prioritarias;
6. crear soporte a categorías adicionales si proceden;
7. reforzar páginas de soporte;
8. publicar boosters solo cuando el cluster tenga landing transaccional.

### Requisitos obligatorios
- preservar o redirigir con criterio;
- corregir NAP en todo el sitio;
- alinear titles y headings;
- limpiar páginas huérfanas o duplicadas;
- introducir schema mínimo por familia;
- asegurar interlinking correcto;
- revisar conversiones y formularios;
- separar con claridad home, service overviews, páginas `servicio + ciudad`, category pages, GeoHubs y GeoArticles;
- no reutilizar URLs heredadas que mezclen múltiples ciudades o servicios si destruyen la arquitectura;
- no crear la GBP hasta que exista soporte real para categoría principal, categorías adicionales y ciudad núcleo.

### Entregables
- sitio corregido y ampliado;
- mapa final de redirects;
- release 1 listo para sostener GBP.

### Gate de paso
No crear la GBP si la web aún no soporta:
- home fuerte;
- categoría principal;
- servicios prioritarios;
- ciudad núcleo;
- rutas de contacto claras.

---

## 12. Fase 7 — Alta de GBP

### Objetivo
Crear la ficha cuando la web ya puede actuar como soporte serio.

### Tareas obligatorias
- crear o reclamar la ficha;
- usar nombre, NAP y horario canónicos;
- seleccionar categoría principal validada;
- añadir solo categorías adicionales ya soportadas;
- vincular la mejor URL pública;
- cargar descripción y activos reales;
- configurar áreas de servicio si procede.

### Entregables
- ficha creada o verificada;
- campos básicos coherentes con la web.

### Gate de paso
No dar por cerrada la creación si la ficha:
- no refleja la web;
- presenta categorías que la web no defiende;
- tiene datos de contacto distintos a los del sitio.

---

## 13. Fase 8 — QA final y calibración

### Objetivo
Cerrar la coherencia web + nueva GBP y detectar backlog.

### Checklist obligatorio

#### Sitio
- arquitectura final correcta;
- redirects correctos;
- local pages prioritarias publicadas;
- GeoHub principal funcional;
- CTAs y formularios correctos;
- schema mínimo presente.

#### GBP
- categoría principal correcta;
- categorías adicionales filtradas;
- URL correcta;
- NAP correcto.

#### Cluster
- home enlaza a pilares y hub;
- pilares enlazan a local pages;
- local pages enlazan a hub y soporte;
- boosters enlazan a landing transaccional.

#### Técnica
- indexabilidad;
- sitemap;
- robots;
- analítica;
- móvil.

### Entregables de cierre
- checklist QA;
- backlog de expansión;
- plan de mantenimiento web + GBP.

---

## 14. Definición de “escenario completado”

Este escenario se considera completado cuando:
- la web heredada ya no contradice la entidad;
- la arquitectura local básica existe;
- la nueva GBP puede apoyarse en la web sin puntos ciegos;
- las URLs importantes están preservadas o redirigidas correctamente;
- la categoría principal puede defenderse en ambos niveles.

---


## Pack de salida obligatorio de este escenario

Antes de considerar el trabajo cerrado, deben existir estos entregables tangibles:

### 1. Pack de decisión
- escenario confirmado;
- entidad canónica;
- categoría principal;
- categorías adicionales sí/no;
- ciudad núcleo y ciudades prioritarias.

### 2. Pack de arquitectura
- sitemap final;
- lista de URLs de release 1;
- matriz servicio × ciudad;
- decisión sobre GeoHubs;
- decisión sobre GeoArticles;
- mapa de interlinking.

### 3. Pack de implementación
- stack y estado técnico;
- páginas publicadas;
- redirects si hay legado;
- formularios y CTAs operativos;
- schema mínimo implementado.

### 4. Pack de GBP
- estado final de la ficha;
- URL enlazada;
- categorías finales;
- áreas de servicio;
- observaciones de riesgo o backlog.

### 5. Pack de QA
- checklist final;
- incidencias residuales;
- backlog de expansión.


## 15. Qué viene después

Expansión recomendada:
1. completar más city pages;
2. abrir más clusters geográficos secundarios;
3. sumar páginas de categorías adicionales cuando haya razón real;
4. publicar GeoArticles por cluster;
5. reforzar pruebas, casos y FAQs.


## 16. Test final de impregnación doctrinal GMB Crush de este escenario

Marca “sí” solo si la evidencia ya existe:

1. ¿La auditoría decidió con rigor qué conservar, qué podar y qué reconstruir del sitio heredado?  
2. ¿La homepage heredada quedó convertida en una verdadera ancla de entidad raíz / root entity anchor?  
3. ¿El sitio ahora distingue con claridad `Service Overview`, páginas `servicio + ciudad`, `GeoHub` y `GeoArticle`?  
4. ¿La arquitectura corregida responde a la categoría principal real y no a la estructura histórica del sitio?  
5. ¿Las categorías adicionales previstas tienen soporte web creíble antes de la alta de GBP?  
6. ¿Se eliminaron o corrigieron URLs que mezclaban servicios, ciudades o intenciones incompatibles?  
7. ¿El interlinking ya distribuye relevancia entre home, pilares, páginas locales, hubs y artículos?  
8. ¿El schema, el NAP, la semántica y las señales locales son suficientes para justificar la futura ficha?  
9. ¿La GBP se creó solo después de que la web pudiera sostener una auditoría doctrinal razonable?  
10. ¿El QA final se hizo sobre la versión publicada, verificando que la nueva ficha enlaza a las mejores URLs?

Si alguna respuesta clave es “no”, el sitio puede haber mejorado, pero todavía no alcanza el estándar doctrinal GMB Crush para lanzar GBP con seguridad.

---

# Anexo — Secuencia de prompts operativos asociada

Este escenario debe ejecutarse junto con `06_BIBLIOTECA_DE_PROMPTS_GMB_CRUSH.md`.

Secuencia recomendada:

```text
P00 → P01 → P10 → P02 → P03 → P11 → P20 → P21 → P22 → P30/P38 → P40/P41 → P50/P51 → P60 si aplica → P70/P71 → P80/P81 → P90/P92 → P93 → P100 → P101
```

Regla:
- Los prompts no sustituyen el criterio del escenario.
- El escenario manda sobre el orden y la prioridad.
- La biblioteca de prompts aporta instrucciones copy-ready para producir cada fase sin improvisar.
- Si una categoría adicional GBP existe, se deben usar los prompts de Additional Category Pages.
- Si una ciudad entra en Tier 1, debe evaluarse GeoHub y cluster de GeoArticles.
- Si hay barrios o zonas relevantes, deben integrarse como contexto semántico sin crear páginas artificiales salvo justificación estratégica.
