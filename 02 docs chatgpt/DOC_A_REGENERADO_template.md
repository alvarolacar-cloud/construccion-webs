# DOC A REGENERADO — ARQUITECTURA FINAL VALIDADA

## Propósito
Convertir Doc A y Doc B en una **arquitectura canónica definitiva**.
Este documento es la fuente de verdad para:
- inventario de páginas;
- slugs;
- clusters;
- prioridades;
- enlazado interno;
- schema map;
- alcance real del proyecto.

## Regla de autoridad
A partir de este punto:
- Doc A queda como histórico;
- Doc B queda como evidencia de contraste;
- **Doc A Regenerado manda** sobre arquitectura y contenido estructural.

## Prohibiciones
Desde aquí no se puede:
- cambiar familias de página sin decisión registrada;
- inventar slugs en Doc D;
- mezclar servicios o ciudades en una URL transaccional;
- rediseñar arquitectura en Doc C.

## Lectura obligatoria
- `00_PRINCIPIOS_NO_NEGOCIABLES_GMB_CRUSH.md`
- `00_MATRIZ_FAMILIAS_Y_SCHEMA_GMB_CRUSH.md`
- `00_MATRIZ_ENLAZADO_GMB_CRUSH.md`
- Doc B aprobado

---

## 0. Metadata y control
- Proyecto:
- Negocio:
- Responsable:
- Fecha:
- Versión:
- Estado: `borrador | aprobado`
- Sustituye a Doc A versión:
- Basado en Doc B versión:

---

## 1. Resumen ejecutivo definitivo
Redacta un resumen claro que responda:
- qué categoría GBP manda;
- qué servicios se priorizan;
- qué ciudades se priorizan;
- qué familias de página se construirán;
- cuál es la estrategia de cluster;
- qué queda fuera de alcance.

---

## 2. Variables definitivas del negocio

### 2.1 Identidad canónica
| Campo | Valor |
|---|---|
| Nombre comercial |  |
| Nombre legal |  |
| Dominio |  |
| NAP canónico |  |
| Teléfono canónico |  |
| Email canónico |  |
| Ciudad principal |  |
| Región / estado |  |
| País |  |
| Modelo local | `service-area | storefront | hybrid` |
| Objetivo principal de conversión |  |

### 2.2 GBP definitivo
| Campo | Valor |
|---|---|
| Categoría GBP principal |  |
| URL GBP |  |
| Place ID / ID interno |  |
| ¿La categoría principal se ancla desde la home? | `sí/no` |
| Categorías adicionales aprobadas |  |

### 2.3 Activos aprobados
- reseñas:
- proyectos:
- imágenes:
- certificaciones:
- garantías:
- perfiles externos:
- formularios / CRM:
- otros:

---

## 3. Taxonomía definitiva de servicios

### 3.1 Servicios principales
| ID | Servicio | Slug | ¿Es service overview obligatorio? | ¿Tiene páginas servicio + ciudad? | ¿Tiene GeoArticles? | Prioridad |
|---|---|---|---|---|---|---|
| `S-01` |  |  | `sí/no` | `sí/no` | `sí/no` | `alta/media/baja` |

### 3.2 Servicios secundarios o complementarios
| ID | Servicio | Tratamiento | Motivo |
|---|---|---|---|
| `SC-01` |  | `URL propia / bloque interno / FAQ / artículo / no trabajar` |  |

### 3.3 Relación servicio ↔ categoría GBP
| Servicio | Categoría GBP principal | Categoría GBP adicional relacionada | Observaciones |
|---|---|---|---|
|  | `sí/no` |  |  |

---

## 4. Taxonomía definitiva de ciudades y zonas

### 4.1 Ciudades aprobadas
| ID | Ciudad | Slug | Tier | ¿Tiene presencia física? | ¿Tiene GeoHub? | ¿Tiene páginas servicio + ciudad? | Prioridad |
|---|---|---|---|---|---|---|---|
| `C-01` |  |  | `principal/secundaria/soporte` | `sí/no` | `sí/no` | `sí/no` | `alta/media/baja` |

### 4.2 Zonas que no tendrán URL propia
| Zona | Se menciona en | Motivo |
|---|---|---|
|  | `home / city page / article / service+city` |  |

### 4.3 Reglas geográficas del proyecto
Documenta:
- qué ciudades merecen cluster completo;
- qué ciudades solo merecen fase 2;
- qué zonas no deben convertirse en URL;
- cómo se evitará fingir presencia física.

---

## 5. Activación final por familia de página

| Familia | ¿Se activa? | Conteo final | Razón |
|---|---|---|---|
| Homepage | `sí` | `1` |  |
| Service Overview | `sí/no` |  |  |
| Location-Based Service | `sí/no` |  |  |
| Additional Category | `sí/no` |  |  |
| GeoHub | `sí/no` |  |  |
| GeoArticle | `sí/no` |  |  |
| Páginas de confianza | `sí/no` |  |  |

---

## 6. Inventario de páginas por familia

### 6.1 Homepage
| ID | URL | H1 objetivo | Objetivo SEO principal | CTA principal | Prioridad |
|---|---|---|---|---|---|
| `H-01` | `/` | `{{brand}} + {{primary_service}} + {{main_city}}` | entidad + categoría principal + ciudad principal |  | `alta` |

### 6.2 Service Overview Pages
| ID | Servicio | URL | H1 objetivo | Debe enlazar a | Priority |
|---|---|---|---|---|---|
| `SO-01` |  | `/{{category}}/{{service}}/` |  | `sus páginas locales, home, relacionados, geoarticles` | `alta/media/baja` |

### 6.3 Location-Based Service Pages
| ID | Servicio | Ciudad | URL | H1 objetivo | Debe enlazar a | Priority |
|---|---|---|---|---|---|---|
| `LS-01` |  |  | `/{{category}}/{{city}}/{{service}}/` |  | `overview padre, geohub, servicios de ciudad, geoarticles` | `alta/media/baja` |

### 6.4 Additional Category Pages
| ID | Categoría adicional | Ciudad | Servicio / ángulo | URL | Debe enlazar a | Priority |
|---|---|---|---|---|---|---|
| `AC-01` |  |  |  | `/{{additional-category}}/{{city}}/{{service}}/` | `geohub, páginas locales relacionadas, geoarticles` |  |

### 6.5 GeoHub Pages
| ID | Ciudad | URL | Rol del hub | Debe enlazar a | Priority |
|---|---|---|---|---|---|
| `GH-01` |  | `/{{city}}/` | `contenedor de ciudad` | `home, servicios de ciudad, categorías adicionales, geoarticles, contacto` |  |

### 6.6 GeoArticle Pages
| ID | Servicio | Ciudad | Intención | URL | Debe enlazar a | Priority |
|---|---|---|---|---|---|---|
| `GA-01` |  |  | `informativa/pain-point/...` | `/{{city}}/{{topic-slug}}/` | `service+city, geohub, artículo relacionado` |  |

### 6.7 Páginas de confianza y apoyo
| ID | Tipo | URL | Objetivo | Relación con clusters |
|---|---|---|---|---|
| `T-01` | `about/reviews/projects/contact/quote/faq` |  |  |  |

---

## 7. Árbol canónico de URLs
Documenta el árbol definitivo aprobado.

```text
/
├── {{category}}/
│   ├── {{service}}/
│   ├── {{city}}/
│   │   ├── {{service}}/
│   │   └── {{additional-service-or-category}}/
├── {{city}}/
│   └── {{topic-slug}}/
├── about/
├── reviews/
├── projects/
├── contact/
└── quote/
```

### 7.1 Reglas de slug
- consistentes;
- en minúsculas;
- sin ambigüedad;
- sin duplicados;
- sin reescrituras posteriores sin plan de redirección.

---

## 8. Requisitos de contenido por familia

### 8.1 Homepage
- H1 alineado con marca + servicio principal + ciudad principal.
- Intro con entidad + servicio + ciudad.
- 3–6 servicios principales enlazados.
- señales de confianza;
- CTA;
- NAP;
- soporte semántico a la categoría GBP principal;
- quick answer / summary block si se aprueba;
- FAQs y/o headings conversacionales si se aprueba.

### 8.2 Service Overview
- sin referencias locales dominantes;
- cobertura AUDIO;
- proceso, beneficios, problemas resueltos;
- FAQs informativas y comerciales;
- enlaces a variantes locales;
- soporte a autoridad temática.

### 8.3 Service + City
- cobertura AUDIO;
- introducción geoespecífica natural;
- problemas y expectativas locales;
- trust local;
- CTA localizada;
- FAQs locales;
- enlaces al servicio padre, GeoHub y cluster de ciudad.

### 8.4 Additional Category
- soporte a categoría GBP adicional;
- intro AUDIO;
- FAQs de voz e intención;
- enlaces a GeoHub y servicios relacionados;
- evitar duplicación inútil.

### 8.5 GeoHub
- resumen de mercado/ciudad;
- lista de servicios de la ciudad;
- lista de categorías adicionales;
- enlaces a GeoArticles;
- CTA local.

### 8.6 GeoArticle
- un solo servicio + una sola ciudad + una sola intención principal;
- contexto real;
- 3–5 subheaders;
- 3–5 FAQs;
- CTA interno;
- enlaces obligatorios;
- no fingir ubicación física.

---

## 9. Framework AUDIO por familia
Marca el nivel de exigencia:

| Familia | Authority | Uniqueness | Depth | Intent | Optimization |
|---|---|---|---|---|---|
| Homepage | `parcial` | `parcial` | `parcial` | `alta` | `alta` |
| Service Overview | `alta` | `alta` | `alta` | `alta` | `alta` |
| Service + City | `alta` | `alta` | `alta` | `alta` | `alta` |
| Additional Category | `alta` | `alta` | `alta` | `alta` | `alta` |
| GeoHub | `media` | `media` | `media` | `alta` | `alta` |
| GeoArticle | `media` | `media` | `alta` | `alta` | `alta` |

---

## 10. Linking map definitivo

### 10.1 Matriz operativa del proyecto
| Fuente | Destino | Obligatorio | Observaciones |
|---|---|---|---|
| Homepage | Service Overviews | `sí/no` |  |
| Homepage | GeoHub principal | `sí/no` |  |
| Service Overview | Service + City relacionados | `sí/no` |  |
| Service + City | GeoHub de ciudad | `sí/no` |  |
| GeoArticle | Service + City correspondiente | `sí/no` |  |

### 10.2 Anchor text guidance
Define:
- tipos de anchors permitidos;
- anchors a evitar;
- lógica de variación semántica.

---

## 11. Schema map definitivo

| Familia / URL | Schema | Campos críticos | Responsable de implementación |
|---|---|---|---|
| Homepage |  |  |  |
| Service Overview |  |  |  |
| Service + City |  |  |  |
| Additional Category |  |  |  |
| GeoHub |  |  |  |
| GeoArticle |  |  |  |

---

## 12. Navegación final

### 12.1 Header
- items:
- dropdowns:
- CTA:
- límites:
- qué no debe incluir:

### 12.2 Footer
- grupos de enlaces:
- contacto:
- ciudades o clusters:
- legal:
- CTA:

---

## 13. Conversión y trust map

| Activo | Dónde aparece | Objetivo |
|---|---|---|
| reseñas |  |  |
| proyectos |  |  |
| garantías |  |  |
| badges |  |  |
| equipo |  |  |
| formulario |  |  |
| teléfono |  |  |

---

## 14. Orden de construcción y publicación

### 14.1 Construcción
1. home
2. service overviews
3. service + city prioritarias
4. additional category prioritarias
5. geohubs
6. geoarticles
7. páginas de confianza
8. QA

### 14.2 Publicación
Rellena el orden real aprobado:
1.
2.
3.
4.
5.

---

## 15. Fuera de alcance
Lista expresamente lo que **no** se va a construir en esta fase para evitar ambigüedades.

---

## 16. Gate de aprobación
No pasar a Doc C / Doc D si no se cumple todo:

- [ ] La categoría GBP principal está cerrada.
- [ ] Las categorías GBP adicionales relevantes están cerradas.
- [ ] La lista final de servicios está cerrada.
- [ ] La lista final de ciudades está cerrada.
- [ ] El inventario de URLs por familia está completo.
- [ ] El linking map está documentado.
- [ ] El schema map está documentado.
- [ ] El orden de construcción y publicación está acordado.
- [ ] El alcance excluido también está documentado.
