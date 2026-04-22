# REVISION_DE_COBERTURA_GMB.md
## Auditoría de cobertura de principios GMB Crush en los 5 documentos finales

### Objetivo
Comprobar si la versión de 5 documentos cubre los principios troncales de GMB Crush y si cada escenario puede ejecutarse sin depender ciegamente del punto de partida inicial.

## Conclusión ejecutiva
La versión anterior tenía una **base transversal fuerte**, pero los escenarios seguían dependiendo demasiado de ella para entender reglas como:
- diferencia entre `Service Overview` y `servicio + ciudad`;
- obligación de soporte para categorías adicionales activas en GBP;
- prohibición de mezclar varias ciudades/servicios en una URL transaccional;
- uso honesto de `LocalBusiness`, `sameAs`, `areaServed` y schema;
- papel exacto de GeoHubs y GeoArticles;
- requisitos de AI Overview, FAQs, quick answers y señales semánticas.

En esta revisión se han endurecido los 4 escenarios para que incluyan un bloque transversal autónomo con:
- familias de página;
- reglas de arquitectura y cluster;
- interlinking mínimo;
- schema mínimo;
- AI Overview / semántica;
- reglas de verdad y compliance.

## Principios revisados contra la fuente GMB Crush
1. Homepage como root entity anchor.
2. Service Overview como pilar no geolocalizado.
3. Local pages `servicio + ciudad` como URLs transaccionales locales.
4. Additional Category Pages como soporte obligatorio de categorías adicionales reales.
5. GeoHub Pages como contenedores por ciudad.
6. GeoArticles como boosters semánticos y no como relleno.
7. Interlinking jerárquico obligatorio.
8. AUDIO en páginas transaccionales y locales.
9. FAQs, quick answers y señales orientadas a AI Overview/voz.
10. Schema mínimo por familia de página.
11. Prohibición de fingir oficinas o presencia física.
12. QA final siempre sobre URL publicada.
13. Cluster geográfico, ciudad núcleo, ciudades primarias/secundarias y zonas de soporte.
14. Soporte obligatorio para categoría principal y categorías adicionales activas en GBP.

## Resultado de la revisión
- `00_BASE_DEL_SISTEMA_GMB.md`: reforzado con quick answers, FAQPage, Speakable, co-ocurrencias, service area overview, `sameAs`, `areaServed`, `WebPage` en service pages, estándar editorial de GeoArticles e interlinking más exacto.
- `01_ESCENARIO_SIN_WEB_Y_SIN_GBP.md`: reforzado con schema por familia, no mezclar ciudades/servicios, soporte real de categorías adicionales y papel no transaccional del GeoArticle.
- `02_ESCENARIO_SIN_WEB_Y_CON_GBP.md`: reforzado con obligaciones de soporte para categorías activas en la ficha, reglas de schema veraz y explicitación de AUDIO en páginas locales.
- `03_ESCENARIO_CON_WEB_Y_SIN_GBP.md`: reforzado con separación clara de familias de páginas, soporte obligatorio previo a crear GBP y regla contra reutilizar URLs heredadas que destruyan la arquitectura.
- `04_ESCENARIO_CON_WEB_Y_CON_GBP.md`: reforzado con requisitos explícitos de ancla de entidad, separación entre pilares y local pages, control de mezcla de URLs y alineación estricta de servicios/zonas entre web y GBP.

## Estado final
Con esta revisión, cada escenario ya puede leerse de forma más autónoma. La base sigue siendo útil como doctrina común, pero los escenarios ya contienen suficientes principios GMB como para ejecutarse sin dejar huecos graves por el camino.


## Resultado de la pasada doctrinal final

En la versión actual se ha dado una pasada adicional para que la documentación no solo “contenga” la doctrina, sino que quede **impregnada de ella** en tres niveles:

1. **Base doctrinal absorbida**  
   La base explica de forma explícita qué piezas doctrinales proceden del Analysis Framework, del Universal Framework, del Homepage Framework, de los marcos de Location, Service, GeoHub, GeoArticle y Additional Categories.

2. **Mandato doctrinal dentro de cada escenario**  
   Cada escenario incorpora un bloque permanente con obligaciones doctrinales que no dependen del punto de partida del cliente.

3. **Test final de impregnación doctrinal**  
   Cada escenario termina con una prueba de fidelidad GMB Crush para evitar cierres “aparentes” que todavía no respeten la doctrina completa.

### Conclusión revisada
A fecha de esta versión, los 5 documentos pueden leerse como un sistema **scenario-first**, pero siguen respirando la doctrina completa de GMB Crush: arquitectura por familias de página, soporte a GBP principal y adicional, cluster geográfico, interlinking, AUDIO, AI Overview, schema veraz, honestidad operativa y QA sobre URL publicada.

---

## Revisión adicional v4 — Biblioteca de prompts

Se añade `06_BIBLIOTECA_DE_PROMPTS_GMB_CRUSH.md` para cubrir una laguna operativa detectada en la versión v3: los principios y fases estaban presentes, pero no existía una biblioteca centralizada de prompts copy-ready.

Cobertura añadida:
- prompts de clasificación de escenario;
- prompts de intake;
- prompts de categoría principal y categorías adicionales GBP;
- prompts de zonas, ciudades y barrios;
- prompts de auditoría y contraste SERP;
- prompts de arquitectura;
- prompts de homepage y AI Overview;
- prompts de Service Overview Pages;
- prompts de Location-Based Service Pages;
- prompts de Additional Category Pages;
- prompts de GeoHub;
- prompts de GeoArticle;
- prompts de implementación técnica;
- prompts de QA final;
- secuencia de prompts por escenario.

Estado: cobertura operativa ampliada.
