# DOC B — MOTOR DE INVESTIGACIÓN Y CONTRASTE

## Propósito
Contrastar la hipótesis de Doc A con evidencia de SERP, Local Pack, competidores y patrones reales de mercado, para decidir qué debe:
- mantenerse,
- corregirse,
- eliminarse,
- añadirse,
- priorizarse.

## Regla central
Doc B no es una colección de capturas.
Debe terminar en **decisiones accionables** que modifiquen o confirmen el proyecto.

## Lectura obligatoria antes de rellenar
- `00_PRINCIPIOS_NO_NEGOCIABLES_GMB_CRUSH.md`
- `00_MATRIZ_FAMILIAS_Y_SCHEMA_GMB_CRUSH.md`
- `00_MATRIZ_ENLAZADO_GMB_CRUSH.md`
- Doc A aprobado

---

## 0. Metadata y protocolo
- Proyecto: `{{project_slug}}`
- Negocio: `{{business_name}}`
- Responsable:
- Fecha:
- Mercado / país:
- Ubicación simulada o real de búsqueda:
- Dispositivo:
- Navegador / modo:
- Idioma:
- Estado: `borrador | en revisión | aprobado`

### 0.1 Queries núcleo usadas en la investigación
| Query | Tipo de intención | Ciudad asociada | Observaciones |
|---|---|---|---|
| `{{query}}` | `transaccional/informativa/comparativa/navegacional` | `{{city}}` |  |

### 0.2 Evidencia registrada
Anota aquí dónde queda guardada la evidencia:
- capturas SERP:
- capturas Local Pack:
- URLs de competidores:
- notas de arquitectura:
- notas de diseño funcional:
- vídeos o grabaciones de scroll:
- exportaciones o checklists auxiliares:

---

## 1. Evaluación de categoría GBP principal

### 1.1 Categoría analizada
- Categoría GBP propuesta en Doc A:
- ¿Se mantiene como hipótesis principal?: `sí/no`
- Alternativa más fuerte detectada:
- Motivo del cambio o confirmación:

### 1.2 Keywords de alta intención asociadas
Lista 4–8 términos o combinaciones que parezcan sostener esta categoría.

### 1.3 Soporte web exigido por esta categoría
Responde:
- ¿qué tipos de página deben existir para respaldarla?
- ¿qué servicios deben aparecer sí o sí?
- ¿qué señales semánticas o de confianza se repiten en mercado?

---

## 2. Competidores analizados

### 2.1 Matriz base
| Competidor | Tipo | URL principal | ¿Aparece en Local Pack? | ¿Aparece en orgánico? | Observación general |
|---|---|---|---|---|---|
| `{{competitor_name}}` | `local pack / orgánico / híbrido` | `{{url}}` | `sí/no` | `sí/no` |  |

### 2.2 Qué páginas tienen
| Competidor | Home fuerte | Service Overview | Service + City | Additional Category | GeoHub | GeoArticle | Páginas de confianza | Observaciones |
|---|---|---|---|---|---|---|---|---|
| `{{competitor_name}}` | `sí/no` | `sí/no` | `sí/no` | `sí/no` | `sí/no` | `sí/no` | `sí/no` |  |

### 2.3 Patrón de URL y cluster detectado
Describe:
- si los competidores separan servicio y ciudad;
- si usan hubs por ciudad;
- si tienen categorías adicionales reales;
- si trabajan artículos long-tail;
- si existe canibalización aparente.

---

## 3. Hallazgos estructurales del mercado

### 3.1 Familias de página que más se repiten
| Familia | Frecuencia | Qué aporta en mercado | ¿Debe activarse en nuestro sistema? |
|---|---|---|---|
| Homepage |  |  | `sí/no` |
| Service Overview |  |  | `sí/no` |
| Service + City |  |  | `sí/no` |
| Additional Category |  |  | `sí/no` |
| GeoHub |  |  | `sí/no` |
| GeoArticle |  |  | `sí/no` |

### 3.2 Navegación y jerarquía
Anota:
- cómo organizan sus menús;
- si exponen ciudades;
- si empujan servicios concretos;
- si entierran contenido importante;
- si usan breadcrumbs o navegación contextual.

### 3.3 SEO checkpoints observados en mercado
| Factor | Estado habitual del mercado | Aprendizaje para el proyecto |
|---|---|---|
| homepage incluye servicios clave |  |  |
| service pages dedicadas |  |  |
| location pages por ciudad |  |  |
| schema visible o inferible |  |  |
| H1/H2 con servicio y ciudad |  |  |
| internal linking entre servicios y ciudades |  |  |

---

## 4. Hallazgos de contenido

### 4.1 Servicios y ángulos recurrentes
- servicios que más se repiten:
- servicios complementarios que el mercado usa para ampliar relevancia:
- servicios que parecen sobretrabajados:
- servicios que parecen descuidados:

### 4.2 Temas, entidades y vocabulario
- términos frecuentes:
- sinónimos:
- entidades del sector:
- comparativas:
- objeciones comunes:
- claims recurrentes:
- señales de experiencia:

### 4.3 FAQs y preguntas reales de mercado
Anota preguntas detectadas o inferidas con alta recurrencia.

### 4.4 Long-tail e ideas de GeoArticle observadas
| Tema | Ciudad | Intención | ¿Podría alimentar un GeoArticle? |
|---|---|---|---|
| `{{topic}}` | `{{city}}` | `informativa/pain-point/comparativa/...` | `sí/no` |

---

## 5. Hallazgos de confianza y conversión

### 5.1 Señales repetidas
| Señal | Frecuencia observada | Comentario |
|---|---|---|
| reseñas |  |  |
| casos/proyectos |  |  |
| fotos reales |  |  |
| equipo |  |  |
| certificaciones |  |  |
| garantías |  |  |
| tiempos de respuesta |  |  |
| formularios visibles |  |  |

### 5.2 Qué parece elevar confianza
Describe los elementos que realmente mejoran percepción de legitimidad y conversión en la muestra analizada.

### 5.3 Qué parece humo o relleno
Describe patrones que aparecen pero no deberían copiarse.

---

## 6. Hallazgos de diseño funcional

### 6.1 Patrones de layout que sí ayudan
- hero útiles:
- bloques de trust:
- cards de servicio:
- FAQs visibles:
- formularios:
- sticky CTA:
- secciones de proyectos o reseñas:
- bloques locales:

### 6.2 Patrones que perjudican
- diseño que esconde semántica;
- bloques demasiado genéricos;
- navegación confusa;
- exceso de estética sin claridad;
- páginas locales demasiado parecidas entre sí.

---

## 7. Ranking potential por servicio

Usa una escala:
- ★☆☆☆☆ muy débil
- ★★☆☆☆ débil
- ★★★☆☆ medio
- ★★★★☆ fuerte
- ★★★★★ muy fuerte

| Servicio | Chance actual estimada | ¿Por qué? | ¿Existe página dedicada en mercado? | ¿Qué tipo de página necesita? | Recomendación |
|---|---|---|---|---|---|
| `{{service_name}}` | `{{rating}}` | `{{reason}}` | `sí/no` | `overview / service+city / both` | `{{action}}` |

---

## 8. Gap analysis contra Doc A

### 8.1 Qué se confirma
Lista hipótesis de Doc A que sí se sostienen.

### 8.2 Qué se corrige
Lista hipótesis de Doc A que cambian:
- categoría;
- servicios;
- ciudades;
- familias de página;
- slugs;
- prioridades.

### 8.3 Qué se añade
Lista elementos que Doc A no contemplaba y que ahora deben entrar:
- servicios;
- categorías;
- hubs;
- páginas de confianza;
- geoarticles;
- activos visuales o trust signals.

### 8.4 Qué se elimina o pospone
Anota lo que no debe pasar a arquitectura final.

---

## 9. Decisiones accionables

### 9.1 Ledger de decisiones
| ID | Decisión | Tipo | Prioridad | Basada en qué evidencia | Impacto esperado |
|---|---|---|---|---|---|
| `D-01` | `{{decision}}` | `mantener/cambiar/eliminar/añadir/posponer` | `alta/media/baja` | `{{evidence}}` | `{{impact}}` |

### 9.2 Cambios obligatorios para Doc A Regenerado
- cambio 1:
- cambio 2:
- cambio 3:
- cambio 4:
- cambio 5:

---

## 10. Website SEO checkpoints — veredicto de contraste

| Factor | Estado esperado tras el contraste | Acción en el proyecto |
|---|---|---|
| homepage soporta servicios clave | `sí/no/parcial` |  |
| existen service overviews dedicadas | `sí/no/parcial` |  |
| existen páginas ciudad por prioridad | `sí/no/parcial` |  |
| existe schema mínimo por familia | `sí/no/parcial` |  |
| H1/H2 resuelven intención | `sí/no/parcial` |  |
| enlazado interno crea silos | `sí/no/parcial` |  |

---

## 11. Strategic learning
Comenta:
- alineación entre GBP, web y cobertura semántica + geográfica;
- desconexiones detectadas;
- oportunidades más claras;
- límites reales del proyecto.

Obligatorio tocar:
- falta de contenido por ciudad;
- servicios sin estructura propia;
- desajustes entre categorías GBP y contenido;
- necesidad de contenido long-tail.

---

## 12. Qué hacer a continuación — fases recomendadas

### Fase 1 — Pilares y soporte de categoría
Indica:
- qué service overviews deben construirse primero;
- qué categoría GBP principal o adicional exige soporte inmediato;
- qué página home debe reforzarse.

### Fase 2 — Páginas locales y hubs
Indica:
- qué combinaciones servicio × ciudad son prioritarias;
- qué GeoHubs son obligatorios;
- qué categorías adicionales necesitan página local.

### Fase 3 — GeoArticles y silo interno
Indica:
- qué clústeres necesitan artículos primero;
- qué interlinking debe montarse;
- qué páginas de apoyo o confianza faltan.

---

## 13. Veredicto final de Doc B
Resume en 10–15 líneas:
- si la hipótesis inicial estaba bien orientada o no;
- qué cambios son estructurales;
- qué arquitectura final parece más adecuada;
- qué no debe construirse.

---

## 14. Gate de aprobación
No pasar a Doc A Regenerado si no se cumple todo:

- [ ] Se han revisado al menos 3 competidores relevantes.
- [ ] Se ha registrado contexto exacto de búsqueda.
- [ ] La categoría GBP principal está confirmada o corregida.
- [ ] Existe decisión clara sobre servicios prioritarios.
- [ ] Existe decisión clara sobre ciudades prioritarias.
- [ ] Se ha evaluado la necesidad de GeoHub y GeoArticle.
- [ ] Se ha producido un ledger de decisiones accionables.
- [ ] Doc A ya no contiene hipótesis sin contraste que vayan a pasar a arquitectura final.
