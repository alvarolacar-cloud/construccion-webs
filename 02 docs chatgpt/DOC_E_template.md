# DOC E — QA FINAL SOBRE URL PUBLICADA

## Propósito
Validar el sitio ya publicado o desplegado en preview, comprobando que:
- refleja la arquitectura acordada;
- es indexable;
- enlaza correctamente;
- mantiene coherencia visual;
- resuelve intención;
- convierte de forma razonable;
- soporta el GBP y la estrategia local definida.

## Regla crítica
Doc E no se hace sobre maquetas ni solo sobre código local.
Debe hacerse sobre una **URL accesible**.

## Lectura obligatoria
- `00_PRINCIPIOS_NO_NEGOCIABLES_GMB_CRUSH.md`
- `00_MATRIZ_FAMILIAS_Y_SCHEMA_GMB_CRUSH.md`
- `00_MATRIZ_ENLAZADO_GMB_CRUSH.md`
- Doc A Regenerado aprobado
- Doc D implementado

---

## 0. Metadata y control
- Proyecto:
- URL auditada:
- Entorno: `preview | producción`
- Responsable QA:
- Fecha:
- Versión:
- Navegador / dispositivo:
- Estado:

---

## 1. Veredicto ejecutivo
Resume:
- si el sitio está apto para publicación o continuidad;
- qué bloquea;
- qué es importante pero no bloqueante;
- qué queda como mejora menor.

---

## 2. Chequeo técnico

| Punto | Estado | Severidad | Evidencia | Observaciones |
|---|---|---|---|---|
| La URL carga correctamente | `ok/fallo` | `alta/media/baja` |  |  |
| HTTPS correcto |  |  |  |  |
| Title presente |  |  |  |  |
| Meta description presente |  |  |  |  |
| Canonical presente |  |  |  |  |
| robots meta correcto |  |  |  |  |
| sitemap accesible |  |  |  |  |
| robots.txt accesible |  |  |  |  |
| status code correcto |  |  |  |  |
| breadcrumbs presentes donde toca |  |  |  |  |
| schema presente |  |  |  |  |
| imágenes cargan |  |  |  |  |
| formularios funcionan |  |  |  |  |
| enlaces clave funcionan |  |  |  |  |
| responsive razonable |  |  |  |  |

---

## 3. Cobertura de arquitectura

| Familia | Esperada según Doc A Regenerado | Existe | Cumple propósito | Observaciones |
|---|---|---|---|---|
| Homepage | `sí/no` | `sí/no` | `sí/no` |  |
| Service Overview |  |  |  |  |
| Service + City |  |  |  |  |
| Additional Category |  |  |  |  |
| GeoHub |  |  |  |  |
| GeoArticle |  |  |  |  |
| Páginas de confianza |  |  |  |  |

---

## 4. QA de Homepage
Marca y comenta:

- [ ] La home fija entidad + servicio principal + ciudad principal.
- [ ] El H1 es claro y útil.
- [ ] Hay acceso visible a servicios principales.
- [ ] Hay trust signals.
- [ ] El CTA principal es claro.
- [ ] El NAP es visible y coherente.
- [ ] La home enlaza al cluster estratégico.
- [ ] La home refleja la categoría GBP principal.

Observaciones:

---

## 5. QA de familias interiores

### 5.1 Service Overview
- [ ] Existe una por cada servicio principal aprobado.
- [ ] No mezcla ciudades.
- [ ] Cubre Authority, Uniqueness, Depth, Intent y Optimization.
- [ ] Enlaza a variantes locales.
- [ ] Tiene FAQs útiles.
- [ ] Tiene CTA final.

### 5.2 Service + City
- [ ] Existe para las combinaciones prioritarias aprobadas.
- [ ] No mezcla varias ciudades ni varios servicios.
- [ ] Tiene contexto local real.
- [ ] Tiene trust local o señales equivalentes.
- [ ] Enlaza a service overview, GeoHub y cluster de ciudad.
- [ ] Tiene CTA local.

### 5.3 Additional Category
- [ ] Soporta realmente categorías GBP adicionales.
- [ ] No parece una página duplicada sin función.
- [ ] Tiene FAQs de voz / intención.
- [ ] Enlaza al cluster correcto.

### 5.4 GeoHub
- [ ] Actúa como contenedor real de la ciudad.
- [ ] Lista servicios, categorías o recursos de la ciudad.
- [ ] Enlaza a contacto y al cluster.

### 5.5 GeoArticle
- [ ] Responde a una intención long-tail clara.
- [ ] No finge presencia física.
- [ ] Aporta profundidad temática real.
- [ ] Enlaza a su página transaccional y a su GeoHub.

---

## 6. QA de contenido

| Punto | Estado | Observaciones |
|---|---|---|
| Claridad del servicio principal |  |  |
| Claridad de la ciudad principal |  |  |
| Cobertura de objeciones |  |  |
| Cobertura de FAQs |  |  |
| Diferenciadores claros |  |  |
| Profundidad suficiente |  |  |
| Tono humano y útil |  |  |
| Evita stuffing |  |  |
| Evita duplicación evidente |  |  |
| Evita promesas falsas |  |  |

---

## 7. QA de schema

| URL / familia | Schema esperado | ¿Existe? | ¿Es coherente? | Observaciones |
|---|---|---|---|---|
| homepage | `Organization`, `WebSite`, `LocalBusiness` si aplica | `sí/no` | `sí/no` |  |
| service overview | `Service`, `BreadcrumbList`, `Speakable` |  |  |  |
| service + city | `LocalBusiness` |  |  |  |
| additional category | `Service`, `BreadcrumbList` |  |  |  |
| geohub | `CollectionPage`, `BreadcrumbList` |  |  |  |
| geoarticle | `Article`, `FAQPage`, `BreadcrumbList`, `Speakable` |  |  |  |

---

## 8. QA de enlazado interno

| Comprobación | Estado | Observaciones |
|---|---|---|
| Home enlaza a service overviews |  |  |
| Home enlaza al GeoHub principal |  |  |
| Service overviews enlazan a variantes locales |  |  |
| Service + City enlazan a overview padre |  |  |
| Service + City enlazan a GeoHub |  |  |
| GeoHubs enlazan a su cluster completo |  |  |
| GeoArticles enlazan a service + city y GeoHub |  |  |
| No hay páginas huérfanas visibles |  |  |

---

## 9. QA de alineación GBP
Responde:
- ¿la categoría GBP principal queda soportada por la arquitectura?
- ¿las categorías GBP adicionales tienen soporte real?
- ¿las ciudades clave están bien cubiertas?
- ¿hay desconexión entre perfil local y web?

### 9.1 Evaluación de categoría principal
| Campo | Respuesta |
|---|---|
| Categoría GBP principal |  |
| ¿Está bien representada? | `sí/no/parcial` |
| Palabras / entidades de soporte presentes |  |
| Lagunas detectadas |  |

---

## 10. Ranking potential por servicio
Usa escala:
- ★☆☆☆☆ muy débil
- ★★☆☆☆ débil
- ★★★☆☆ medio
- ★★★★☆ fuerte
- ★★★★★ muy fuerte

| Servicio | Potencial actual | Motivo | Qué falta para mejorar |
|---|---|---|---|
|  |  |  |  |

---

## 11. Website SEO checkpoints

| Factor | Estado `✅ / ❌ / parcial` | Notas |
|---|---|---|
| Homepage incluye servicios clave |  |  |
| Service pages dedicadas |  |  |
| City pages / service + city pages |  |  |
| Schema markup mínimo |  |  |
| H1 / H2 correctos |  |  |
| Internal linking útil |  |  |
| Trust signals visibles |  |  |
| CTA visibles |  |  |

---

## 12. Strategic learning
Comenta:
- alineación real entre GBP, web y cobertura local;
- puntos fuertes actuales;
- disconnects;
- riesgos aún abiertos;
- carencias de contenido, estructura o linking.

---

## 13. Qué hacer a continuación

### Fase 1 — Bloqueantes
Lista cambios que deben hacerse antes de dar por bueno el sitio.

### Fase 2 — Mejoras importantes
Lista mejoras que no bloquean publicación, pero sí afectan potencial.

### Fase 3 — Mejora continua
Lista publicaciones, ampliaciones o optimizaciones posteriores:
- nuevas páginas;
- nuevos GeoArticles;
- mejoras de trust;
- mejoras de conversión;
- revisiones de linking;
- mantenimiento.

---

## 14. Final scorecard

| Área | Puntuación / estado | Comentario |
|---|---|---|
| Arquitectura |  |  |
| Alineación con GBP |  |  |
| Cobertura de servicios |  |  |
| Cobertura geográfica |  |  |
| SEO on-page |  |  |
| Schema |  |  |
| Internal linking |  |  |
| Trust / conversión |  |  |
| Diseño funcional |  |  |
| QA técnico |  |  |

---

## 15. Final takeaway
Escribe un cierre breve y claro que responda:
- qué tan bien la web soporta la visibilidad local;
- qué falta en páginas y estructura;
- qué tan cerca está de un soporte serio para Local Pack, orgánico y AI visibility.

---

## 16. Gate de cierre
Marca el resultado final:

- [ ] aprobado sin bloqueos
- [ ] aprobado con mejoras importantes
- [ ] no aprobado; requiere correcciones previas

Firmas o responsables:
- responsable QA:
- responsable proyecto:
- fecha:
