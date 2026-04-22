# 04_ESCENARIO_CON_WEB_Y_CON_GBP.md
## Playbook completo para cliente con web y ficha GBP ya existentes

> **Cuándo usar este escenario**
>
> Úsalo cuando el cliente ya tiene ambos activos en producción:
> - web publicada;
> - GBP activa o recuperable;
> - posibles rankings, leads, reseñas, URLs y señales históricas que proteger.

Es el escenario más delicado. Aquí el sistema no solo construye: también corrige, preserva, migra y realinea sin destruir valor.

---


## Resumen ejecutivo del escenario

| Aspecto | Decisión operativa |
| --- | --- |
| Foco principal | realinear dos activos vivos sin destruir valor acumulado |
| Riesgo dominante | romper URLs, señales o reseñas por cambios precipitados |
| Sesgo de trabajo | preservación inteligente + corrección estructural + expansión controlada |
| Momento de actuar sobre GBP | solo después de que la nueva arquitectura esté pública y estable |
| Lógica heredada A/B/C/D/E | A=auditoría/entidad, B=contraste, A regenerado=modelo objetivo, C=refactor/migración, D=implementación, E=QA final |

## Cómo detectar si te has equivocado de escenario

Si durante la ejecución aparece cualquiera de estos signos, detente y re-clasifica:
- la web “inútil” sí tiene URLs, tráfico o estructura rescatable;
- la GBP “ausente” en realidad existe, es recuperable o concentra reseñas valiosas;
- la cobertura geográfica real del negocio es mucho más limitada de lo que parecía;
- el servicio principal con el que arrancaste no es el que mejor representa la intención dominante;
- la entidad pública del negocio difiere de la entidad operativa real.


## 1. Resultado final que debe conseguirse

Al cerrar este escenario, el cliente debe tener:

- auditoría cruzada de web y GBP;
- matriz clara de alineación, gap y riesgo;
- entidad canónica aprobada;
- arquitectura corregida y escalable;
- preservación o redirección inteligente de activos valiosos;
- web y GBP apuntando a la misma categoría principal y al mismo núcleo geográfico;
- QA final aprobado sobre la versión publicada.

---

## 2. Qué hace especial a este escenario

### 2.1 Ventajas
- ya existen señales públicas;
- puede haber URLs con tracción;
- puede haber reseñas y autoridad local acumuladas;
- el material real del negocio suele ser mayor.

### 2.2 Riesgos dominantes
- romper URLs valiosas;
- cambiar la ficha demasiado deprisa;
- mantener una ficha fuerte apoyada en una web débil;
- rediseñar por estética y dañar la arquitectura;
- duplicar clusters;
- arrastrar incoherencias históricas de nombre, categoría o cobertura;
- crecer en nuevas ciudades antes de arreglar el núcleo.

### 2.3 Regla central del escenario
Primero se audita y se congela el riesgo.  
Luego se decide qué se preserva, qué se corrige y qué se expande.  
Solo entonces se ejecutan cambios.

---

## 3. Qué NO debe hacerse en este escenario

- no rehacer todo sin auditar;
- no cambiar URLs con tráfico sin plan de redirección;
- no corregir la GBP sin que la web acompañe;
- no mantener categorías adicionales sin soporte web;
- no asumir que una web bonita ya está bien;
- no expandir a más ciudades si el cluster núcleo está roto.

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
2. **Fase 1 — Auditoría conjunta web + GBP**
3. **Fase 2 — Normalización de entidad**
4. **Fase 3 — Investigación y contraste**
5. **Fase 4 — Modelo objetivo y arquitectura correctiva**
6. **Fase 5 — Sistema visual, preservación y diseño de migración**
7. **Fase 6 — Refactor, expansión o migración controlada**
8. **Fase 7 — Alineación final de GBP**
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
Asegurar accesos, snapshots y control del punto de partida antes de tocar nada.

### Tareas obligatorias
- acceso a hosting, CMS o repo;
- acceso a analítica y GSC si existen;
- acceso a GBP;
- inventario de stakeholders y aprobadores;
- snapshot del sitio;
- snapshot de la ficha;
- inventario de objetivos y problemas percibidos por el cliente.

### Entregables
- clasificación oficial del escenario;
- tablero base de activos;
- snapshots completos.

### Gate de paso
No auditar sin tener captura de estado actual de ambos activos.

---

## 6. Fase 1 — Auditoría conjunta web + GBP

### Objetivo
Entender qué dicen hoy la web y la ficha, dónde coinciden y dónde chocan.

### Qué debe auditarse en la web
- arquitectura completa;
- URLs indexables;
- home;
- páginas de servicio;
- city pages;
- hubs;
- blog/boosters;
- páginas de soporte;
- titles, metas, headings;
- schema;
- NAP;
- CTAs;
- rendimiento e indexabilidad;
- páginas con tráfico o señales.

### Qué debe auditarse en la GBP
- nombre;
- categoría principal;
- categorías adicionales;
- descripción;
- servicios/productos;
- áreas de servicio;
- horario;
- teléfono;
- URL enlazada;
- reseñas;
- preguntas y respuestas;
- fotos;
- posibles problemas o incoherencias.

### Tareas obligatorias
- crear una matriz de alineación:
  - qué categoría promete la web;
  - qué categoría promete la GBP;
  - qué servicios soporta cada una;
  - qué ciudades soporta cada una;
  - qué pruebas de confianza muestra cada una;
- clasificar activos y riesgos:
  - conservar;
  - corregir;
  - expandir;
  - retirar;
- documentar URLs con valor;
- documentar campos de ficha sensibles.

### Entregables
- auditoría cruzada web + GBP;
- matriz de alineación y gap;
- inventario de activos protegidos.

### Gate de paso
No pasar a estrategia sin saber con claridad:
- qué valor histórico debe preservarse;
- qué contradicciones son críticas;
- qué señales actuales son aprovechables.

---

## 7. Fase 2 — Normalización de entidad

### Objetivo
Cerrar la verdad operativa del negocio por encima de la inercia histórica.

### Tareas obligatorias
- fijar nombre comercial canónico;
- fijar NAP;
- decidir ciudad núcleo;
- decidir servicio principal y secundarios;
- decidir categoría principal correcta;
- decidir categorías adicionales reales;
- decidir si hay datos o configuraciones heredadas que deben eliminarse;
- inventariar pruebas reutilizables:
  - reseñas;
  - casos;
  - proyectos;
  - fotos;
  - métricas;
  - credenciales.

### Regla crítica
La historia del activo importa, pero no manda por encima de la verdad actual del negocio.

### Entregables
- entidad canónica aprobada;
- lista de correcciones obligatorias en web y ficha.

### Gate de paso
No diseñar la arquitectura objetivo sin una decisión formal sobre:
- categoría principal;
- NAP;
- ciudad núcleo;
- servicios y zonas reales.

---

## 8. Fase 3 — Investigación y contraste

### Objetivo
Validar la mejor arquitectura posible frente al mercado y no solo frente al legado del cliente.

### Tareas obligatorias
- revisar resultados locales y orgánicos para combinaciones clave;
- estudiar competidores fuertes;
- documentar:
  - familias de páginas;
  - clusters detectados;
  - densidad geográfica;
  - trust blocks;
  - patrones de FAQs;
  - soporte a categorías adicionales;
- decidir si el legado del cliente está:
  - infradesarrollado;
  - mal orientado;
  - parcialmente bien resuelto;
- priorizar ciudades y servicios de release 1.

### Entregables
- contraste de mercado;
- shortlist de clusters prioritarios;
- justificación de corrección o expansión.

### Gate de paso
No cerrar arquitectura sin saber:
- qué parte del sistema actual merece preservación real;
- qué parte solo existe por costumbre;
- qué exige el mercado para competir.

---

## 9. Fase 4 — Modelo objetivo y arquitectura correctiva

### Objetivo
Definir el sistema final que reconciliará web y GBP.

### Tareas obligatorias
- decidir la home objetivo;
- definir páginas pilar de servicio;
- definir GeoHub principal y secundarios si aplican;
- definir páginas `servicio + ciudad` prioritarias;
- definir páginas de categorías adicionales;
- definir GeoArticles prioritarios;
- decidir qué URLs existentes se conservan como finales;
- decidir qué URLs se redirigen;
- decidir qué clusters se construyen primero;
- decidir qué URL debe quedar enlazada desde GBP.

### Regla crítica
La arquitectura final debe equilibrar dos cosas:
- ambición futura del sistema;
- preservación inteligente del valor existente.

### Entregables
- sitemap objetivo;
- plan de preservación/redirección;
- mapa de interlinking;
- plan de release.

### Gate de paso
No ejecutar cambios si aún no están definidos:
- slugs finales;
- redirects;
- prioridad de clusters;
- soporte a categorías adicionales.

---

## 10. Fase 5 — Sistema visual, preservación y diseño de migración

### Objetivo
Decidir cuánto diseño se conserva y cómo se migrará sin perder claridad ni valor.

### Tareas obligatorias
- auditar UX/UI actual;
- decidir si se conserva, refactoriza o rediseña;
- definir componentes reutilizables;
- decidir cómo se integran trust blocks, FAQs, CTAs, breadcrumbs y navegación;
- preparar el plan de migración:
  - orden de publicación;
  - ventanas de cambio;
  - control de redirects;
  - control de enlaces internos.

### Entregables
- guía de rediseño o refactor;
- plan de migración;
- lista de bloques/componentes.

### Gate de paso
No empezar migración si no hay plan claro para:
- preservar valor;
- evitar roturas;
- mantener navegación coherente.

---


## 10.1 Regla de congelación de riesgo

Antes de mover URLs, categorías o estructuras importantes, congela y documenta:
- páginas con leads históricos;
- páginas con enlaces o autoridad;
- categoría principal actual de la ficha;
- URL actualmente enlazada desde GBP;
- activos visuales o mensajes que no deben perderse sin sustitución.

Si no puedes explicar qué proteges y por qué, todavía no debes migrar.

## 11. Fase 6 — Refactor, expansión o migración controlada

### Objetivo
Llevar la arquitectura objetivo a producción protegiendo los activos valiosos.

### Orden recomendado
1. reforzar/corregir base técnica;
2. rehacer o ajustar home;
3. rehacer/crear páginas pilar;
4. crear/reforzar GeoHub principal;
5. crear/reforzar local pages prioritarias;
6. crear soporte a categorías adicionales;
7. reforzar páginas de soporte y pruebas;
8. publicar boosters donde ya exista cluster transaccional;
9. desplegar redirects y revisar enlaces internos.

### Tareas obligatorias
- actualizar NAP en todo el sitio;
- corregir schema de páginas clave;
- revisar canonicals;
- revisar sitemap;
- desplegar redirects;
- comprobar páginas huérfanas;
- actualizar CTAs y formularios;
- validar móvil.

### Entregables
- sitio corregido o migrado;
- redirects activos;
- release 1 estable.

### Gate de paso
No tocar la ficha como si ya estuviese alineada hasta que:
- la web nueva o refactorizada esté pública;
- el cluster núcleo esté claro;
- las categorías adicionales tengan soporte real.

---

## 12. Fase 7 — Alineación final de GBP

### Objetivo
Ajustar la ficha para que refleje el nuevo sistema publicado.

### Tareas obligatorias
- revisar URL enlazada;
- revisar categoría principal;
- conservar solo categorías adicionales soportadas;
- revisar descripción, servicios/productos y áreas de servicio;
- revisar horario, teléfono y demás datos;
- revisar assets visuales.

### Tareas recomendables
- actualizar preguntas y respuestas si hay incoherencias;
- reforzar activos de reseñas y señales de confianza en la web;
- preparar seguimiento de tráfico/leads desde ficha.

### Gate de paso
No dar por alineada la ficha si:
- sigue apuntando a una URL vieja o insuficiente;
- mantiene servicios/categorías sin soporte web;
- el NAP aún difiere del sitio.

---

## 13. Fase 8 — QA final y calibración

### Objetivo
Verificar que el sistema nuevo funciona y que el legado ya no genera contradicciones.

### Checklist obligatorio

#### Preservación
- URLs valiosas resueltas;
- redirects correctos;
- páginas antiguas conflictivas tratadas.

#### Web
- home fuerte y alineada como ancla de entidad;
- service overviews correctas y diferenciadas de las local pages;
- local pages prioritarias;
- hubs correctos;
- categorías adicionales soportadas;
- boosters/GeoArticles enlazando bien y sin hacerse pasar por landings;
- CTAs operativos;
- ausencia de URLs que mezclen múltiples servicios o ciudades de forma destructiva.

#### GBP
- categoría principal correcta;
- categorías adicionales filtradas;
- URL correcta;
- datos consistentes;
- zonas y servicios reales;
- nada en la ficha que la web no sostenga.

#### Técnica
- indexabilidad;
- sitemap;
- robots;
- schema;
- móvil;
- analítica;
- formularios.

#### Cluster
- interlinking correcto;
- señales locales coherentes;
- ciudad núcleo reforzada.

### Entregables de cierre
- checklist QA;
- lista de incidencias residuales;
- backlog de expansión y mantenimiento.

---

## 14. Definición de “escenario completado”

Este escenario solo está completo cuando:
- el legado útil se ha preservado;
- el legado dañino se ha corregido o retirado;
- la web y la GBP ya representan la misma entidad;
- la categoría principal es defendible en ambos activos;
- la arquitectura local básica es clara y escalable;
- el QA final no muestra contradicciones críticas.

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

La expansión sana posterior suele seguir este orden:
1. reforzar cluster núcleo;
2. completar ciudades y servicios primarios;
3. ampliar soporte a categorías adicionales solo si el negocio lo justifica;
4. sumar GeoArticles por cluster consolidado;
5. mejorar CRO, seguimiento y pruebas.


## 16. Test final de impregnación doctrinal GMB Crush de este escenario

Marca “sí” solo si la evidencia ya existe:

1. ¿La auditoría conjunta web + GBP protegió el valor real antes de mover arquitectura o categorías?  
2. ¿La nueva homepage o homepage corregida actúa como ancla de entidad raíz / root entity anchor coherente con la ficha?  
3. ¿La categoría principal quedó reforzada en toda la arquitectura y no solo en el texto de la ficha?  
4. ¿Las categorías adicionales activas tienen soporte web local defendible o un plan explícito de retirada?  
5. ¿Las URLs heredadas problemáticas se corrigieron sin destruir valor útil ni dejar señales huérfanas?  
6. ¿Las páginas `servicio + ciudad` cumplen intención local y dejan de mezclar ciudades o servicios?  
7. ¿Los GeoHubs y GeoArticles estructuran la expansión geográfica y semántica sin inflar el sitio artificialmente?  
8. ¿El interlinking final crea clusters claros por servicio y por ciudad?  
9. ¿La GBP enlaza ahora a URLs realmente fuertes y alineadas con sus categorías?  
10. ¿El QA final publicado confirma coherencia entre ficha, web, arquitectura, schema, clusters, cobertura y conversión?

Si alguna respuesta clave es “no”, la migración o refactor puede estar hecha, pero todavía no está cerrada bajo doctrina GMB Crush.

---

# Anexo — Secuencia de prompts operativos asociada

Este escenario debe ejecutarse junto con `06_BIBLIOTECA_DE_PROMPTS_GMB_CRUSH.md`.

Secuencia recomendada:

```text
P00 → P01 → P10 → P02 → P03 → P11 → P20 → P21 → P22 → P30/P38 → P40/P41 → P50/P51 → P60 → P70/P71 → P80/P81 → P90/P92 → P93 → P100 → P101
```

Regla:
- Los prompts no sustituyen el criterio del escenario.
- El escenario manda sobre el orden y la prioridad.
- La biblioteca de prompts aporta instrucciones copy-ready para producir cada fase sin improvisar.
- Si una categoría adicional GBP existe, se deben usar los prompts de Additional Category Pages.
- Si una ciudad entra en Tier 1, debe evaluarse GeoHub y cluster de GeoArticles.
- Si hay barrios o zonas relevantes, deben integrarse como contexto semántico sin crear páginas artificiales salvo justificación estratégica.
