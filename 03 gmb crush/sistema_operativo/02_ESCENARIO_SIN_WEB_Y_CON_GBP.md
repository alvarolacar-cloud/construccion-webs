# 02_ESCENARIO_SIN_WEB_Y_CON_GBP.md
## Playbook completo para cliente sin web útil y con ficha GBP ya existente

> **Cuándo usar este escenario**
>
> Úsalo cuando el cliente tiene una GBP viva o recuperable, pero no tiene una web útil que la sostenga:
> - no existe web;
> - existe una web mínima, irrelevante o no apta como soporte real;
> - la ficha tiene valor que debe protegerse: reseñas, categoría, historial o visibilidad.

Aquí el activo crítico no es la web; es la ficha. El sistema debe construir una web que la soporte sin romper lo que la GBP ya ha acumulado.

---


## Resumen ejecutivo del escenario

| Aspecto | Decisión operativa |
| --- | --- |
| Foco principal | proteger el valor de la GBP y darle soporte web real |
| Riesgo dominante | tocar una ficha viva sin que la nueva web la sostenga |
| Sesgo de trabajo | GBP-first en auditoría, web-first en soporte y arquitectura |
| Momento de actuar sobre GBP | auditar primero, cambiar después, una vez exista soporte web suficiente |
| Lógica heredada A/B/C/D/E | A=descubrimiento+entidad, B=contraste, A regenerado=modelo objetivo, C=diseño, D=construcción, E=QA con foco dual web+GBP |

## Cómo detectar si te has equivocado de escenario

Si durante la ejecución aparece cualquiera de estos signos, detente y re-clasifica:
- la web “inútil” sí tiene URLs, tráfico o estructura rescatable;
- la GBP “ausente” en realidad existe, es recuperable o concentra reseñas valiosas;
- la cobertura geográfica real del negocio es mucho más limitada de lo que parecía;
- el servicio principal con el que arrancaste no es el que mejor representa la intención dominante;
- la entidad pública del negocio difiere de la entidad operativa real.


## 1. Resultado final que debe conseguirse

Al cerrar este escenario, el cliente debe tener:

- auditoría completa de la GBP existente;
- entidad canónica armonizada con la ficha o corregida con criterio;
- web nueva o reconstruida que soporte la categoría principal;
- soporte real a categorías adicionales relevantes;
- conexión correcta entre ficha y nueva web;
- QA final de coherencia web + GBP.

---

## 2. Qué hace especial a este escenario

### 2.1 Ventajas
- ya existe una señal local viva;
- hay datos útiles en la ficha: categorías, reseñas, servicios, fotos, preguntas, áreas, horas, naming real;
- la GBP ayuda a reducir ambigüedades sobre la entidad operativa.

### 2.2 Riesgos dominantes
- asumir que la ficha ya está bien solo por existir;
- cambiar categorías o datos sin que la nueva web los soporte;
- construir una web genérica que no conecte con lo que la GBP ya promete;
- perder coherencia entre nombre, teléfono, horarios, ciudad principal y servicio principal;
- enlazar la ficha a una web débil o a una URL incorrecta.

### 2.3 Regla central del escenario
La GBP se audita primero, pero no se toma como verdad automática.  
La web se construye para sostener la realidad defendible del negocio y la promesa que la ficha debe mantener.

---

## 3. Qué NO debe hacerse en este escenario

- no tocar a ciegas una categoría principal viva sin investigación;
- no añadir categorías adicionales porque "ya están ahí" si la web no las va a soportar;
- no copiar texto de la descripción de GBP a la web como si eso fuese arquitectura;
- no dejar la ficha enlazando a una home vacía;
- no ignorar las reseñas, preguntas o servicios ya declarados en la ficha.

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
2. **Fase 1 — Auditoría y congelación controlada de la GBP**
3. **Fase 2 — Normalización de entidad**
4. **Fase 3 — Investigación y contraste**
5. **Fase 4 — Modelo objetivo y arquitectura**
6. **Fase 5 — Sistema visual y construcción de web**
7. **Fase 6 — Reconexión y optimización de la GBP**
8. **Fase 7 — QA final y calibración**

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
Confirmar que el escenario correcto es "sin web útil + con GBP viva".

### Tareas obligatorias
- confirmar estado actual de la ficha:
  - propietario y acceso;
  - nivel de completitud;
  - estado de verificación;
  - categoría principal;
  - categorías adicionales;
  - NAP visible;
  - enlace web actual;
  - áreas de servicio;
  - reseñas;
  - preguntas y respuestas;
  - fotos y contenido existente;
- confirmar que la web actual no sirve como soporte o debe reemplazarse;
- recopilar materiales del negocio y accesos.

### Entregables
- snapshot inicial de la GBP;
- clasificación oficial del escenario;
- inventario básico del proyecto.

### Gate de paso
No avanzar sin acceso o visibilidad suficiente sobre:
- categoría principal actual;
- NAP actual;
- URL actual vinculada a la ficha;
- reseñas y estado general de la ficha.

---

## 6. Fase 1 — Auditoría y congelación controlada de la GBP

### Objetivo
Proteger el activo existente y entender qué partes deben respetarse, corregirse o sustituirse.

### Qué debe auditarse
- nombre visible del negocio;
- categoría principal;
- categorías adicionales;
- descripción;
- servicios/productos cargados;
- áreas de servicio;
- horario;
- teléfono;
- URL web enlazada;
- preguntas y respuestas;
- reseñas y patrones repetidos en reseñas;
- fotos y señales visuales;
- posibles incoherencias con la realidad actual del negocio.

### Tareas obligatorias
- documentar todo lo anterior;
- extraer insights útiles:
  - servicios que más se repiten en reseñas;
  - zonas mencionadas;
  - dolores, ventajas y atributos percibidos;
  - lenguaje real del cliente;
- detectar incoherencias:
  - naming extraño;
  - dirección no alineada con el modelo real;
  - categoría principal dudosa;
  - categorías adicionales débiles;
  - web actual irrelevante o confusa;
- decidir qué campos deben quedar estables hasta tener la nueva web lista.

### Entregables
- auditoría de GBP;
- lista de campos a mantener temporalmente;
- lista de cambios candidatos una vez exista soporte web.

### Gate de paso
No tocar cambios importantes en la ficha hasta haber decidido:
- si la categoría principal actual se mantiene o se corrige;
- qué URL futura va a sostener la entidad;
- qué categorías adicionales sí tendrán soporte.

---


## 6.1 Qué valor estratégico debe extraerse de la ficha antes de tocarla

La GBP existente ya contiene señales útiles. Antes de hacer cambios, extrae:
- lenguaje real de reseñas;
- servicios mencionados con más frecuencia;
- zonas repetidas por clientes;
- atributos valorados;
- preguntas recurrentes;
- fotos reales aprovechables;
- desajustes entre promesa y percepción.

Ese material debe alimentar home, FAQs, trust blocks y local pages de la nueva web.

## 7. Fase 2 — Normalización de entidad

### Objetivo
Cerrar la verdad canónica del negocio y compararla con la ficha existente.

### Tareas obligatorias
- fijar nombre comercial canónico;
- fijar NAP canónico;
- fijar ciudad núcleo y zonas aprobadas;
- definir servicio principal y secundarios;
- decidir relación entre realidad del negocio y promesa actual de la GBP:
  - qué se conserva;
  - qué se corrige;
  - qué se elimina;
- documentar pruebas de confianza reutilizables:
  - reseñas GBP;
  - fotos;
  - casos;
  - certificaciones;
  - tiempos de respuesta;
  - hitos.

### Entregables
- entidad canónica aprobada;
- matriz de alineación web futura ↔ GBP actual;
- lista de correcciones necesarias en la ficha.

### Gate de paso
No investigar arquitectura sin haber resuelto la tensión entre:
- lo que la ficha dice hoy;
- lo que el negocio puede defender realmente.

---

## 8. Fase 3 — Investigación y contraste

### Objetivo
Confirmar la categoría correcta y descubrir qué estructura debe tener la web para apoyar a la ficha.

### Qué debe analizarse
- si la categoría principal actual es realmente la mejor;
- qué familias de páginas usan competidores fuertes del Local Pack;
- qué tipos de local pages existen;
- cómo sostienen las categorías adicionales;
- qué ciudades priorizan;
- qué señales de confianza y conversión repiten.

### Tareas obligatorias
- revisar la categoría principal actual frente a alternativas posibles;
- revisar resultados locales y orgánicos por:
  - servicio principal;
  - ciudad núcleo;
  - servicios secundarios importantes;
- estudiar arquitectura de competidores;
- filtrar qué categorías adicionales merecen soporte real;
- decidir qué ciudades entran en release 1.

### Entregables
- contraste de mercado;
- confirmación o corrección de categoría principal;
- shortlist de familias y clusters prioritarios.

### Gate de paso
No pasar a arquitectura sin poder responder:
- ¿qué debe soportar la home?
- ¿qué páginas pilar son imprescindibles?
- ¿qué city pages sostienen de verdad la ficha?
- ¿qué categorías adicionales sí tendrán página local?

---

## 9. Fase 4 — Modelo objetivo y arquitectura

### Objetivo
Diseñar la web que va a sostener la ficha actual o corregida.

### Tareas obligatorias
- definir homepage como ancla de entidad;
- definir Service Overview pages prioritarias;
- definir GeoHub principal;
- definir páginas `servicio + ciudad` esenciales;
- definir páginas de categorías adicionales de release 1 solo si la ficha las mantendrá;
- definir primeros GeoArticles para clusters con landing transaccional;
- definir enlazado interno;
- decidir qué URL debe recibir el enlace principal desde GBP una vez publicada la nueva web.

### Regla sobre la URL de la ficha
Por defecto, la ficha debe enlazar a la mejor URL pública que mejor represente la entidad y convierta sin confundir:
- normalmente la home en negocios multi-servicio o de marca amplia;
- una landing principal muy específica solo si es realmente la mejor representación del negocio.

### Entregables
- sitemap aprobado;
- mapa de soporte a la GBP;
- slugs y prioridades;
- plan de interlinking.

### Gate de paso
No construir si no está claro:
- cómo la nueva web va a corregir o sostener la ficha;
- qué páginas justifican cada categoría viva.

---

## 10. Fase 5 — Sistema visual y construcción de web

### Objetivo
Construir una web nueva o una reconstrucción limpia que soporte a la ficha.

### Orden recomendado
1. base técnica;
2. home;
3. páginas pilar;
4. GeoHub principal;
5. local pages prioritarias;
6. categorías adicionales soportadas en GBP;
7. páginas de confianza y soporte;
8. GeoArticles prioritarios.

### Fuentes de valor específicas de este escenario
La propia GBP puede alimentar la web con:
- lenguaje real de reseñas;
- preguntas frecuentes;
- atributos más valorados;
- fotografías reales;
- horarios y promesas operativas;
- zonas que los clientes mencionan de forma natural.

### Requisitos obligatorios
Requisitos obligatorios mínimos por encima del bloque transversal anterior:
- la home debe reflejar la categoría principal de la ficha;
- las categorías adicionales mantenidas en GBP deben tener soporte real;
- la web debe incorporar señales de confianza ya presentes en la ficha cuando sea veraz;
- las páginas `servicio + ciudad` y de categoría adicional deben usar AUDIO, FAQs y CTA claros;
- la arquitectura no puede mezclar varios servicios/ciudades en la misma URL transaccional;
- el schema local debe usar `sameAs`, `areaServed` y `LocalBusiness` solo cuando sea veraz.

### Gate de paso
No conectar la nueva web a la ficha si la web todavía no soporta:
- categoría principal;
- top servicios;
- ciudad núcleo;
- CTAs y rutas de contacto;
- coherencia de NAP.

---

## 11. Fase 6 — Reconexión y optimización de la GBP

### Objetivo
Actualizar la ficha para que quede alineada con la nueva web.

### Tareas obligatorias
- actualizar enlace web a la URL correcta;
- revisar categoría principal y corregir si procede;
- mantener solo categorías adicionales ya soportadas;
- revisar descripción del negocio;
- revisar servicios o productos cargados;
- revisar horarios;
- revisar áreas de servicio;
- revisar fotos y assets visuales;
- añadir o corregir atributos solo si son reales.

### Tareas recomendables
- preparar UTMs de seguimiento si la operativa lo requiere;
- revisar preguntas frecuentes y respuestas;
- alinear lenguaje de la ficha con la promesa de la nueva web.

### Gate de paso
No dar por optimizada la ficha si sigue prometiendo:
- servicios sin página de soporte;
- zonas no aprobadas;
- una entidad distinta a la que la web presenta.

---

## 12. Fase 7 — QA final y calibración

### Objetivo
Cerrar la alineación entre web nueva y ficha existente.

### Checklist obligatorio

#### Coherencia de entidad
- nombre;
- teléfono;
- dirección o modelo SAB;
- horario;
- ciudad núcleo.

#### Coherencia de categoría
- categoría principal correcta;
- categorías adicionales filtradas y soportadas;
- home alineada;
- pilar de servicio alineado;
- local pages suficientes para release 1.

#### Coherencia de cluster
- GeoHub principal;
- páginas locales prioritarias;
- enlaces entre hub, pilares y local pages;
- primeros boosters solo donde ya exista landing principal.

#### Técnica
- indexación;
- schema;
- sitemap;
- formularios;
- móvil;
- analítica.

#### GBP
- enlace correcto;
- campos principales revisados;
- activos visuales coherentes.

### Entregables de cierre
- checklist QA;
- backlog de expansión;
- plan de mantenimiento coordinado web + GBP.

---

## 13. Definición de “escenario completado”

Este escenario está completo cuando:
- la ficha sigue siendo un activo válido;
- la nueva web la sostiene de verdad;
- la categoría principal puede defenderse en ambos activos;
- las categorías adicionales ya no dependen de fe, sino de páginas concretas;
- la web y la GBP apuntan a la misma entidad y al mismo cluster núcleo.

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


## 14. Qué viene después

El crecimiento sano posterior suele ser:
1. ampliar más city pages prioritarias;
2. ampliar soporte a categorías adicionales si el negocio lo merece;
3. publicar GeoArticles por cluster;
4. aprovechar reseñas y nuevos casos como pruebas en la web;
5. refinar CRO y seguimiento.


## 15. Test final de impregnación doctrinal GMB Crush de este escenario

Marca “sí” solo si la evidencia ya existe:

1. ¿Se auditó y protegió el valor histórico de la GBP antes de tocar categorías, URLs o señales?  
2. ¿La nueva web se construyó para **dar soporte real** a la ficha y no solo para “tener web”?  
3. ¿La homepage ya funciona como ancla de entidad raíz / root entity anchor con la misma identidad que la GBP?  
4. ¿La categoría principal de la ficha tiene soporte claro en homepage, pilares y páginas locales?  
5. ¿Cada categoría adicional activa que se mantiene tiene soporte defendible en la arquitectura?  
6. ¿Las páginas `servicio + ciudad` responden a intención local real sin mezclar ciudades ni servicios?  
7. ¿El cluster por ciudad incluye hubs o equivalente cuando la amplitud geográfica lo exige?  
8. ¿Los GeoArticles previstos refuerzan tópica y ciudad sin fingir presencia física?  
9. ¿La reconexión final de la GBP apunta a las mejores URLs y no a páginas débiles?  
10. ¿El QA final validó coherencia entre ficha, web, NAP, categorías, enlaces, schema y cobertura?

Si alguna respuesta clave es “no”, la web puede existir, pero todavía no está realmente impregnada de doctrina GMB Crush.

---

# Anexo — Secuencia de prompts operativos asociada

Este escenario debe ejecutarse junto con `06_BIBLIOTECA_DE_PROMPTS_GMB_CRUSH.md`.

Secuencia recomendada:

```text
P00 → P01 → P02 → P03 → P10 → P11 → P20 → P21 → P22 → P31/P38 → P40/P41 → P50/P51 → P60 si aplica → P70/P71 → P80/P81 → P90/P92 → P93 → P100 → P101
```

Regla:
- Los prompts no sustituyen el criterio del escenario.
- El escenario manda sobre el orden y la prioridad.
- La biblioteca de prompts aporta instrucciones copy-ready para producir cada fase sin improvisar.
- Si una categoría adicional GBP existe, se deben usar los prompts de Additional Category Pages.
- Si una ciudad entra en Tier 1, debe evaluarse GeoHub y cluster de GeoArticles.
- Si hay barrios o zonas relevantes, deben integrarse como contexto semántico sin crear páginas artificiales salvo justificación estratégica.
