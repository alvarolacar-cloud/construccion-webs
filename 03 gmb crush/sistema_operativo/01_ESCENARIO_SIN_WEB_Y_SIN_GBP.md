# 01_ESCENARIO_SIN_WEB_Y_SIN_GBP.md
## Playbook completo para cliente sin web y sin ficha GBP

> **Cuándo usar este escenario**
>
> Úsalo cuando el cliente parte prácticamente de cero:
> - no tiene web útil publicada;
> - no tiene GBP operativa o recuperable;
> - no hay activos digitales vivos que merezca la pena preservar como base.

Este escenario es el más limpio para construir bien, pero exige disciplina porque no hay señales históricas que corrijan errores tempranos.

---


## Resumen ejecutivo del escenario

| Aspecto | Decisión operativa |
| --- | --- |
| Foco principal | construir entidad, web y GBP desde cero sin deuda heredada |
| Riesgo dominante | elegir mal categoría, servicio o ciudad núcleo antes de publicar |
| Sesgo de trabajo | greenfield: construir bien desde el principio y evitar inflación de páginas |
| Momento de actuar sobre GBP | después de fijar la entidad y publicar una base web coherente |
| Lógica heredada A/B/C/D/E | A=descubrimiento, B=contraste, A regenerado=modelo objetivo, C=diseño, D=construcción, E=QA |

## Cómo detectar si te has equivocado de escenario

Si durante la ejecución aparece cualquiera de estos signos, detente y re-clasifica:
- la web “inútil” sí tiene URLs, tráfico o estructura rescatable;
- la GBP “ausente” en realidad existe, es recuperable o concentra reseñas valiosas;
- la cobertura geográfica real del negocio es mucho más limitada de lo que parecía;
- el servicio principal con el que arrancaste no es el que mejor representa la intención dominante;
- la entidad pública del negocio difiere de la entidad operativa real.


## 1. Resultado final que debe conseguirse

Al cerrar este escenario, el cliente debe tener:

- entidad canónica definida;
- categoría principal validada;
- categorías adicionales filtradas;
- dominio, stack técnico y branding base preparados;
- arquitectura local aprobada;
- web publicada con home, páginas pilar, local pages prioritarias y cluster inicial sano;
- ficha GBP creada o verificada sobre una base coherente;
- conexión correcta entre web y GBP;
- QA final aprobado sobre URL pública.

---

## 2. Lo que hace especial a este escenario

### 2.1 Ventajas
- no hay deuda estructural heredada;
- no hay que proteger URLs previas ni una ficha ya viva;
- permite construir la entidad correctamente desde el inicio.

### 2.2 Riesgos dominantes
- elegir mal la categoría principal por precipitación;
- querer crear la GBP antes de tener base web suficiente;
- lanzar una web demasiado corta solo por "estar";
- intentar cubrir demasiadas ciudades desde el día 1;
- llenar la arquitectura de páginas débiles;
- no fijar bien NAP, marca, servicio principal y alcance geográfico.

### 2.3 Regla central del escenario
Primero se fija la entidad y la arquitectura.  
Después se construye la web.  
Luego se crea o se activa la GBP sobre una base ya coherente.

---

## 3. Qué NO debe hacerse en este escenario

- no crear una GBP con datos provisionales que luego cambien sin control;
- no publicar una web de una sola home pensando que "ya crecerá";
- no inventar categorías adicionales para parecer más amplio;
- no prometer zonas que el negocio todavía no puede cubrir;
- no producir GeoArticles antes de tener páginas transaccionales clave;
- no saltarse la fase de contraste con SERP y competidores.

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


Este escenario absorbe la antigua lógica A/B/A regenerado/C/D/E dentro de una única ejecución:

1. **Fase 0 — Clasificación e intake**
2. **Fase 1 — Normalización de entidad**
3. **Fase 2 — Investigación y contraste**
4. **Fase 3 — Modelo objetivo y arquitectura**
5. **Fase 4 — Sistema visual y experiencia**
6. **Fase 5 — Construcción del primer release**
7. **Fase 6 — Alta o activación de GBP**
8. **Fase 7 — QA final y calibración**

---

## 4.2 Mandato doctrinal permanente de este escenario

Este escenario no debe entenderse como una simple lista de tareas. Debe ejecutarse como una **aplicación completa de la doctrina GMB Crush** a un punto de partida concreto.

Eso implica que, durante todo el escenario, siguen vivas estas obligaciones:

- el objetivo no es “sacar una web”, sino construir un sistema local que soporte **GBP, Local Pack, orgánico y visibilidad en IA** al mismo tiempo;
- la **homepage** debe comportarse como **ancla de entidad raíz / root entity anchor** y no como una portada vacía;
- las páginas **Service Overview** deben sostener la autoridad topical de los servicios sin sustituir a las páginas locales;
- las páginas **servicio + ciudad** son la unidad transaccional local y nunca deben diluirse mezclando varios servicios o varias ciudades;
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
Confirmar que este escenario es el correcto y reunir el mínimo de información para empezar.

### Tareas obligatorias
- confirmar que no existe web útil o que no merece preservarse;
- confirmar que no existe GBP utilizable o que debe tratarse como inexistente;
- recopilar información del negocio:
  - nombre legal y nombre comercial;
  - teléfono principal;
  - email principal;
  - dirección o modelo SAB;
  - horario;
  - servicios;
  - ciudades/zonas;
  - activos disponibles: logo, fotos, casos, reseñas externas, materiales comerciales;
  - objetivo comercial principal;
  - restricciones legales, regulatorias o de marca.

### Entregables de la fase
- ficha de intake completa;
- clasificación formal del escenario;
- carpeta base del proyecto.

### Gate de paso
No avanzar si el negocio aún no ha definido:
- nombre comercial a usar;
- teléfono principal;
- servicio principal;
- área principal de operación.

---

## 6. Fase 1 — Normalización de entidad

### Objetivo
Cerrar la identidad canónica del negocio antes de investigar ni construir.

### Tareas obligatorias
- decidir nombre comercial definitivo;
- fijar NAP canónico;
- decidir si la dirección será pública o si se trata como SAB;
- fijar ciudad núcleo;
- listar servicios reales, separando:
  - servicio principal;
  - servicios secundarios;
  - servicios descartados;
- listar ciudades/zonas reales, separando:
  - núcleo;
  - primarias;
  - secundarias;
  - descartadas;
- levantar inventario de pruebas de confianza:
  - años de experiencia;
  - certificaciones;
  - casos;
  - fotos;
  - testimonios;
  - garantías;
  - marcas/proveedores;
  - tiempos de respuesta.

### Preguntas de control
- ¿cuál es la actividad que mejor define el negocio?
- ¿qué servicio trae más dinero o prioridad?
- ¿qué servicio tiene más intención de búsqueda y encaje comercial?
- ¿qué ciudad pesa más en operación o demanda?
- ¿el negocio puede sostener las zonas que dice cubrir?

### Entregables de la fase
- entidad canónica documentada;
- inventario limpio de servicios;
- inventario limpio de zonas;
- primeros activos de confianza organizados.

### Gate de paso
No avanzar si aún hay ambigüedad sobre:
- categoría principal probable;
- ciudad núcleo;
- servicio principal;
- consistencia del NAP.

---

## 7. Fase 2 — Investigación y contraste

### Objetivo
Validar o corregir la hipótesis inicial con realidad de mercado, SERP y competidores.

### Qué debe analizarse
- intención dominante del mercado local;
- páginas que usan los mejores competidores para sostener la categoría principal;
- familias de páginas detectadas en competidores fuertes;
- uso de city pages, hubs, páginas pilar y contenido de soporte;
- señales de confianza dominantes;
- cobertura geográfica realista;
- categorías adicionales plausibles;
- huecos de contenido explotables.

### Tareas obligatorias
- buscar la categoría principal candidata y sus variantes locales;
- revisar los 3 resultados locales y/o orgánicos más relevantes por servicio principal;
- documentar:
  - qué familias de páginas usan;
  - qué servicios separan;
  - qué ciudades trabajan;
  - qué tipos de trust block repiten;
  - qué FAQs o ángulos responden;
  - qué señales de entidad muestran;
- decidir si la categoría principal inicial se confirma o se corrige;
- decidir si algunas ciudades deben bajar o subir de prioridad;
- decidir si ciertas categorías adicionales son reales o se descartan.

### Entregables de la fase
- matriz de contraste de mercado;
- confirmación o corrección de categoría principal;
- validación preliminar de arquitectura local.

### Gate de paso
No avanzar si todavía no puedes defender:
- categoría principal;
- top servicios a construir primero;
- top ciudades a construir primero.

---

## 8. Fase 3 — Modelo objetivo y arquitectura

### Objetivo
Traducir la investigación a una arquitectura aprobada y ejecutable.

### Resultado que debe salir de esta fase
Un mapa de sitio local aprobado que diga exactamente:
- qué familias de páginas van a existir;
- qué slugs principales se usarán;
- qué ciudades van en release 1;
- qué servicios van en release 1;
- qué categorías adicionales se apoyarán ya;
- qué clusters se crean primero;
- cómo se enlazarán.

### Tareas obligatorias
- definir la home y su promesa principal;
- definir todas las Service Overview prioritarias;
- definir el GeoHub de ciudad núcleo;
- definir las páginas `servicio + ciudad` de release 1;
- decidir si alguna ciudad primaria adicional merece GeoHub o solo local pages;
- decidir si alguna categoría adicional entra ya o se pospone;
- decidir primeros GeoArticles solo para clusters ya aprobados;
- definir estructura de enlazado interno;
- definir prioridades de publicación:
  - obligatorio de lanzamiento;
  - importante en sprint siguiente;
  - backlog.

### Entregables de la fase
- sitemap aprobado;
- jerarquía de slugs;
- matriz servicio × ciudad;
- matriz categoría principal / categorías adicionales;
- matriz de clusters;
- esquema de interlinking.

### Gate de paso
No construir si no existe un listado cerrado de:
- URLs de release 1;
- propósito de cada URL;
- relación de cada URL con la categoría principal y con el cluster.

---

## 9. Fase 4 — Sistema visual y experiencia

### Objetivo
Definir el estilo, layout y componentes sin alterar la arquitectura aprobada.

### Principio de esta fase
El diseño debe **servir** a la estrategia, no reescribirla.

### Tareas obligatorias
- definir dirección visual general;
- crear tokens base: tipografía, color, espaciado, bordes, sombras;
- decidir estructura de la home;
- definir bloques reutilizables:
  - hero;
  - lista de servicios;
  - trust blocks;
  - FAQs;
  - CTA;
  - reseñas;
  - proyectos/casos;
  - formularios;
  - breadcrumbs;
- decidir patrón visual para:
  - páginas pilar;
  - local pages;
  - GeoHubs;
  - GeoArticles.

### Entregables de la fase
- guía visual mínima;
- diseño de bloques principales;
- criterios de uso de imágenes y pruebas;
- reglas de consistencia UX.

### Gate de paso
No pasar a construcción si todavía no están definidos:
- layout de home;
- layout de página pilar;
- layout de local page;
- CTA principal;
- tratamiento visual de pruebas y FAQs.

---

## 10. Fase 5 — Construcción del primer release

### Objetivo
Publicar el primer release sano de la web.

### Orden recomendado de construcción
1. base técnica del sitio;
2. home;
3. páginas pilar de servicio;
4. GeoHub principal;
5. páginas `servicio + ciudad` prioritarias;
6. páginas de categoría adicional de release 1, si aplican;
7. páginas de soporte;
8. primeros GeoArticles, si ya tienen landing transaccional a la que reforzar.

### Requisitos obligatorios por familia de página

#### Homepage
- marca + servicio principal + ciudad/área principal;
- bloque o mini menú de servicios;
- prueba de confianza;
- CTA fuerte;
- NAP claro;
- FAQs o quick answers si aportan;
- schema `Organization` + `WebSite` y `FAQPage` / `Speakable` cuando proceda.

#### Service Overview
- qué es el servicio;
- beneficios;
- proceso;
- FAQs;
- enfoque no geolocalizado;
- enlaces a variantes locales;
- schema `Service` + `BreadcrumbList` y `Speakable` opcional.

#### Servicio + ciudad
- servicio + ciudad en H1;
- copy local útil;
- lógica AUDIO;
- CTA;
- FAQs;
- no mezclar varios servicios ni varias ciudades;
- enlaces a pilar + GeoHub + soporte;
- schema `LocalBusiness` / `Service` + `BreadcrumbList` + `FAQPage` si aplica + `areaServed` y `sameAs` solo cuando sean veraces.

#### GeoHub
- agrupación de servicios de la ciudad;
- enlaces a páginas locales y contenidos de apoyo;
- CTA local.

#### Categoría adicional
- utilidad específica de la categoría;
- contexto local;
- FAQs;
- enlaces al cluster relacionado;
- soporte real de la categoría adicional en GBP;
- schema `Service` + `BreadcrumbList` + `areaServed` cuando proceda.

#### GeoArticle
- tema long-tail;
- valor real;
- una ciudad + una intención principal por URL;
- enlace a página transaccional;
- enlace a GeoHub;
- CTA contextual;
- schema `Article` + `FAQPage` + `BreadcrumbList` + `Speakable` cuando proceda.

### Requisitos técnicos obligatorios
- titles y metas únicos;
- headings claros;
- schema mínimo por familia;
- sitemap;
- robots;
- analítica;
- formularios funcionales;
- móvil revisado;
- enlaces internos verificados.

### Gate de paso
No dar por construida la web si faltan:
- home;
- páginas pilar prioritarias;
- local pages prioritarias;
- interlinking básico;
- CTA funcional;
- páginas de contacto/presupuesto;
- datos de contacto visibles.

---


## 10.1 Alcance mínimo recomendado del release 1

Para no lanzar un cascarón vacío, el release 1 debería incluir como mínimo:
- home;
- 1 GeoHub principal o estructura local equivalente para la ciudad núcleo;
- todas las páginas pilar de los servicios troncales;
- las páginas `servicio + ciudad` de máxima prioridad;
- contacto/presupuesto;
- soporte a categorías adicionales solo si se van a activar desde el inicio en GBP.

Si el negocio todavía no puede producir ese mínimo, retrasa el lanzamiento o reduce alcance geográfico.

## 11. Fase 6 — Alta o activación de GBP

### Objetivo
Crear o activar la GBP sobre una base web ya coherente.

### Regla crítica
La ficha no debe inventar una realidad distinta a la de la web.

### Tareas obligatorias
- crear o reclamar la ficha;
- usar nombre comercial canónico;
- usar teléfono canónico;
- fijar dirección pública solo si corresponde;
- seleccionar categoría principal ya validada;
- añadir categorías adicionales solo si la web ya las soporta;
- cargar horario;
- conectar la mejor URL pública disponible;
- preparar descripción del negocio alineada con la entidad;
- cargar imágenes reales;
- fijar áreas de servicio si el modelo lo requiere.

### Recomendación operativa
Si la verificación tarda, puede prepararse la ficha antes, pero la optimización fina debe hacerse cuando la web ya esté publicada y soportando la oferta principal.

### Entregables de la fase
- ficha creada o verificada;
- datos básicos completados;
- conexión correcta con la web.

### Gate de paso
No considerar la GBP lista si:
- usa categoría incorrecta;
- enlaza a una web débil o contradictoria;
- publica categorías adicionales sin soporte;
- muestra datos distintos al NAP aprobado.

---

## 12. Fase 7 — QA final y calibración inicial

### Objetivo
Comprobar que la web publicada y la GBP se apoyan de verdad.

### Checklist de QA obligatorio

#### Entidad
- nombre correcto;
- teléfono correcto;
- modelo de dirección correcto;
- ciudad núcleo correcta.

#### Arquitectura
- familias de páginas correctas;
- slugs correctos;
- city pages necesarias publicadas;
- GeoHub principal operativo.

#### On-page
- H1s claros;
- CTAs funcionales;
- copy útil;
- FAQs razonables;
- prueba de confianza visible.

#### Interlinking
- home enlaza a pilares y hub;
- pilares enlazan a local pages;
- local pages enlazan a pilar + hub + soporte;
- GeoArticles enlazan a su landing.

#### Técnica
- indexación correcta;
- sitemap disponible;
- robots correcto;
- schema presente;
- formularios funcionan;
- móvil revisado.

#### GBP
- categoría principal correcta;
- categorías adicionales filtradas;
- URL correcta;
- NAP consistente.

### Entregables de cierre
- checklist QA firmado;
- backlog de mejoras post-lanzamiento;
- priorización de expansión siguiente.

---

## 13. Definición de “escenario completado”

Este escenario solo se considera completado cuando:
- la web ya existe públicamente;
- la home sostiene la categoría principal;
- los servicios prioritarios tienen páginas pilar;
- la ciudad núcleo tiene al menos su cluster inicial sano;
- la GBP está creada o alineada sobre esa base;
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


## 14. Qué viene después del lanzamiento

### Sprint de expansión recomendado
Después del release 1, la expansión sana suele seguir este orden:
1. completar más páginas `servicio + ciudad` prioritarias;
2. ampliar soporte de categorías adicionales;
3. sumar GeoArticles por cluster ya existente;
4. reforzar pruebas, reseñas, proyectos y FAQs;
5. mejorar CRO y seguimiento.

### Regla de crecimiento
No expandir a una nueva ciudad o categoría si el núcleo actual aún está débil.


## 15. Test final de impregnación doctrinal GMB Crush de este escenario

Marca “sí” solo si la evidencia ya existe:

1. ¿La entidad quedó normalizada antes de crear señales públicas?  
2. ¿La categoría principal se eligió por realidad operativa y no por intuición superficial?  
3. ¿La web mínima publicada ya tiene homepage sólida, pilares de servicio suficientes y primeras páginas locales defendibles?  
4. ¿La GBP se activó solo cuando la web ya podía sostenerla?  
5. ¿Las ciudades priorizadas responden a operación real y no a inflación de cobertura?  
6. ¿El cluster inicial ya contempla `Service Overview`, `servicio + ciudad`, `GeoHub` y `GeoArticle` aunque no todos se publiquen a máxima profundidad en el release 1?  
7. ¿Las categorías adicionales previstas tienen un plan claro de soporte web?  
8. ¿La arquitectura evita mezclar varios servicios o ciudades en una sola URL transaccional?  
9. ¿La homepage, las páginas locales y el schema ya envían señales razonables para GBP y AI Overview?  
10. ¿El QA final se hizo sobre la URL publicada y no sobre una simulación local?

Si alguna respuesta clave es “no”, el escenario puede estar “terminado” en calendario, pero todavía no está terminado en doctrina GMB Crush.

---

# Anexo — Secuencia de prompts operativos asociada

Este escenario debe ejecutarse junto con `06_BIBLIOTECA_DE_PROMPTS_GMB_CRUSH.md`.

Secuencia recomendada:

```text
P00 → P01 → P02 → P03 → P11 → P20 → P21 → P22 → P31/P38 → P40/P41 → P50/P51 → P60 si aplica → P70/P71 → P80/P81 → P90/P92 → P93 → P100 → P101
```

Regla:
- Los prompts no sustituyen el criterio del escenario.
- El escenario manda sobre el orden y la prioridad.
- La biblioteca de prompts aporta instrucciones copy-ready para producir cada fase sin improvisar.
- Si una categoría adicional GBP existe, se deben usar los prompts de Additional Category Pages.
- Si una ciudad entra en Tier 1, debe evaluarse GeoHub y cluster de GeoArticles.
- Si hay barrios o zonas relevantes, deben integrarse como contexto semántico sin crear páginas artificiales salvo justificación estratégica.
