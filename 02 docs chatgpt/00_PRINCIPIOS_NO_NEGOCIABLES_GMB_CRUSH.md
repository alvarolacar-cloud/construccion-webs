# PRINCIPIOS NO NEGOCIABLES — GMB CRUSH

## Propósito
Este documento fija los principios que **siempre** deben cumplirse al rellenar las plantillas del sistema.
Si una decisión contradice estos principios, la decisión debe revisarse antes de avanzar.

---

## 1. La Homepage es el ancla de entidad principal
La home no es una portada vacía.
Debe establecer con claridad:
- quién es la marca;
- qué servicio principal ofrece;
- cuál es la ciudad principal;
- qué categorías o familias de servicio soporta;
- cuál es el siguiente paso deseado para el usuario.

### Test operativo
La home debe incluir, como mínimo:
- H1 alineado con marca + servicio principal + ciudad principal;
- introducción clara con entidad + servicio + ciudad;
- acceso a servicios principales;
- señales de confianza;
- CTA principal;
- NAP visible y rastreable;
- enlaces a páginas estratégicas del cluster.

### Fallo típico
Una home que habla de “soluciones integrales” o “calidad” sin dejar claro servicio principal, categoría GBP y ciudad.

---

## 2. Service Overview ≠ Service in City
Una página de servicio sin ciudad y una página de servicio + ciudad **no son intercambiables**.

### Service Overview
Sirve para:
- construir autoridad temática;
- explicar qué es el servicio;
- soportar todas sus variantes locales.

### Service + City
Sirve para:
- responder intención transaccional local;
- reforzar GBP y Local Pack;
- convertir búsquedas del tipo “servicio en ciudad”.

### Fallo típico
Usar una sola página genérica para intentar posicionar servicio y todas las ciudades.

---

## 3. Cada página transaccional debe tener una intención principal única
Una URL transaccional no debe mezclar:
- varios servicios principales;
- varias ciudades;
- varias categorías GBP distintas;
- varias promesas incompatibles.

### Regla práctica
Una página debe poder resumirse en una frase:
`Esta URL existe para posicionar y convertir {{servicio}} en {{ciudad}}`.

---

## 4. Toda categoría GBP debe tener soporte real en la arquitectura
La categoría GBP principal y cada categoría GBP adicional deben reflejarse en el sitio.

### Implicación práctica
- la categoría principal debe tener soporte en la home, service overviews, páginas servicio + ciudad y clusters de contenido;
- cada categoría adicional debe tener, al menos, una página local de soporte y su conexión con GeoHub y contenido relacionado.

### Fallo típico
Añadir categorías GBP que no tienen respaldo semántico ni URLs dedicadas.

---

## 5. No se construye un sitio local serio sin GeoPages y sin GeoArticles
Las familias mínimas del sistema son:
1. Homepage
2. Service Overview Pages
3. Location-Based Service Pages
4. Additional Category Pages
5. GeoHub Pages
6. GeoArticle Pages

### Regla práctica
Si faltan GeoHub o GeoArticle en un proyecto con ambición local, el sistema está incompleto.

---

## 6. Los GeoArticles no son “blog por rellenar”
Un GeoArticle no es una landing page y tampoco un artículo genérico.
Es un booster semántico que debe:
- apoyar una relación concreta entre servicio y ciudad;
- trabajar una intención long-tail real;
- enlazar a la página servicio + ciudad;
- enlazar al GeoHub de la ciudad;
- aportar profundidad temática útil.

### Prohibición
No fingir presencia física en una ciudad si no existe.
La relevancia geográfica se construye con contexto real, no con afirmaciones falsas.

---

## 7. El framework AUDIO es obligatorio en las páginas clave
Las páginas transaccionales y las páginas de autoridad deben cubrir:
- **Authority**
- **Uniqueness**
- **Depth**
- **Intent**
- **Optimization**

### Regla práctica
Si una página no deja claro:
- por qué confiar,
- qué la diferencia,
- qué incluye,
- qué intención satisface,
- cómo se conecta semánticamente,
entonces está incompleta.

---

## 8. El enlazado interno es arquitectura, no decoración
Cada familia de página tiene obligaciones de enlazado.
No se enlaza “porque queda bien”, sino para:
- reforzar clusters temáticos;
- reforzar clusters geográficos;
- mejorar rastreo;
- distribuir autoridad interna;
- orientar conversión.

### Regla práctica
Toda página debe saber:
- de dónde recibe enlaces,
- a qué páginas debe enlazar,
- qué rol ocupa dentro del cluster.

---

## 9. El schema es mínimo obligatorio, no detalle opcional
Cada familia de página debe implementar, como mínimo, el schema que corresponda.

### Ejemplos de mínimo esperado
- Homepage: `Organization`, `WebSite` y `LocalBusiness` solo si aplica.
- Service Overview: `Service`, `BreadcrumbList`, `Speakable`.
- Service + City: `LocalBusiness` con `address`, `geo`, `areaServed`, `sameAs` si aplica.
- Additional Category: `Service` con `areaServed`, `BreadcrumbList`.
- GeoHub: `CollectionPage`, `BreadcrumbList` como mínimo recomendado.
- GeoArticle: `Article`, `FAQPage`, `BreadcrumbList`, `Speakable`.

---

## 10. El diseño no puede romper la claridad SEO
Doc C puede definir apariencia, ritmo visual y componentes.
No puede:
- cambiar el mapa de páginas aprobado;
- eliminar bloques semánticos necesarios;
- esconder CTAs críticos;
- sacrificar claridad por estética;
- suprimir navegación útil.

### Test operativo
Si el diseño hace difícil entender:
- qué se ofrece,
- dónde se ofrece,
- cómo avanzar,
entonces el diseño está fallando al sistema.

---

## 11. Doc D no puede inventar arquitectura
La implementación debe traducir lo aprobado.
Si el equipo técnico necesita cambiar algo sustancial, debe:
1. documentarlo;
2. justificarlo;
3. elevarlo para aprobación.

### Cambios que no deben ocurrir sin control
- slugs nuevos;
- familias de página eliminadas;
- rutas combinadas;
- copy estructural inventado;
- enlaces internos redefinidos sin criterio.

---

## 12. El QA final solo vale sobre URL publicada o accesible
Doc E no se cierra sobre maqueta o código local.
Debe ejecutarse sobre:
- entorno de preview estable, o
- entorno de producción.

### Qué debe validar
- indexabilidad;
- arquitectura;
- contenido;
- schema;
- enlazado;
- conversión;
- coherencia visual;
- adaptación móvil.

---

## 13. Reglas de longitud y densidad mínima
Como referencia operativa:
- homepage: mínimo 1.000 palabras útiles;
- páginas transaccionales principales: mínimo 1.000 palabras útiles;
- geoarticles: 1.200–1.800 palabras;
- FAQs: 3–5 cuando aplique;
- bullets: al menos en 2 secciones cuando ayuden a claridad.

### Aclaración
La longitud no sustituye a la utilidad.
El objetivo es profundidad clara, no relleno.

---

## 14. Regla de verdad local
Se puede ser relevante para una ciudad sin fingir tener oficina allí.

### Sí hacer
- usar referencias locales reales;
- hablar de barrios, tipos de vivienda, hábitos o normativa si aportan valor;
- explicar problemas frecuentes del contexto local.

### No hacer
- inventar oficinas;
- afirmar presencia física inexistente;
- incrustar mapas o direcciones engañosas.

---

## 15. Regla de ejecución
El orden correcto del sistema es:
1. Inputs estructurados
2. Doc A
3. Doc B
4. Doc A Regenerado
5. Doc C
6. Doc D
7. Doc E

No se invierte este orden.

---

## Checklist de cumplimiento rápido
Marca antes de aprobar cualquier fase:

- [ ] La home fija entidad + servicio principal + ciudad principal.
- [ ] Existen service overviews separadas de las páginas servicio + ciudad.
- [ ] Cada servicio prioritario tiene soporte sin ciudad y con ciudad.
- [ ] Cada categoría GBP adicional tiene respaldo real.
- [ ] Cada ciudad prioritaria tiene su cluster.
- [ ] Existen GeoArticles planificados.
- [ ] El framework AUDIO se aplica donde corresponde.
- [ ] Hay una matriz de enlazado definida.
- [ ] El schema mínimo por familia está documentado.
- [ ] El QA final se hará sobre URL publicada.
