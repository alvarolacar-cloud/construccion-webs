# DOC C — DISEÑO Y LAYOUT

## Propósito
Traducir la arquitectura aprobada en Doc A Regenerado a un sistema visual, de componentes y de layout que sea:
- claro,
- consistente,
- reutilizable,
- compatible con SEO local,
- compatible con conversión.

## Regla central
Doc C **no reescribe la arquitectura**.
Su función es decidir:
- cómo se ve;
- cómo se ordena visualmente;
- qué componentes existen;
- qué assets hacen falta;
- cómo se comporta el sitio en responsive.

## Prohibiciones
Doc C no puede:
- eliminar familias de página;
- inventar nuevas URLs;
- ocultar bloques esenciales del sistema;
- degradar claridad semántica por estética;
- convertir páginas distintas en la misma plantilla sin justificarlo.

## Lectura obligatoria
- `00_PRINCIPIOS_NO_NEGOCIABLES_GMB_CRUSH.md`
- `00_MATRIZ_FAMILIAS_Y_SCHEMA_GMB_CRUSH.md`
- Doc A Regenerado aprobado
- `design.tokens.template.json`

---

## 0. Metadata y control
- Proyecto:
- Negocio:
- Responsable:
- Fecha:
- Versión:
- Basado en Doc A Regenerado versión:
- Estado:

---

## 1. Objetivo visual
Describe en 8–12 líneas:
- tono visual buscado;
- nivel de sobriedad o expresividad;
- equilibrio entre confianza, claridad y conversión;
- señales que el diseño debe transmitir;
- límites que no se deben cruzar.

---

## 2. Referencias y criterio de extracción

### 2.1 Referencias tomadas
| Referencia | Tipo | URL o fuente | Qué se toma | Qué no se toma |
|---|---|---|---|---|
| `{{reference_name}}` | `competidor/no competidor` | `{{url_or_source}}` | `{{elements}}` | `{{limits}}` |

### 2.2 Conclusión de referencias
Explica:
- por qué estas referencias ayudan;
- qué patrones estructurales se adoptan;
- qué patrones visuales se descartan;
- cómo se evita copiar visualmente sin criterio.

---

## 3. Tokens de diseño aprobados

### 3.1 Base visual
| Token | Valor | Nota |
|---|---|---|
| font base |  |  |
| font headings |  |  |
| color principal |  |  |
| color secundario |  |  |
| color acento |  |  |
| radio estándar |  |  |
| shadow base |  |  |
| max-width |  |  |
| spacing scale |  |  |

### 3.2 Uso semántico del color
Define:
- color de CTA principal;
- color de CTA secundaria;
- color de trust;
- color de alertas suaves;
- límites de uso.

---

## 4. Reglas globales de layout

### 4.1 Estructura general
- ancho máximo:
- ancho ideal de lectura:
- padding por breakpoint:
- comportamiento de grids:
- jerarquía visual de títulos:
- separación entre secciones:

### 4.2 Reglas de legibilidad
- tamaño mínimo de párrafo:
- contraste mínimo:
- longitud de línea razonable:
- uso de bullets:
- uso de acordeones:
- iconografía sí/no:

### 4.3 Reglas de conversión
- ubicación del CTA principal:
- repetición máxima razonable del CTA:
- comportamiento en móvil:
- formularios above the fold sí/no:
- sticky CTA sí/no:

---

## 5. Inventario de componentes

| Componente | Obligatorio | Variante(s) | Dónde se usa | Restricciones |
|---|---|---|---|---|
| header | `sí` |  | global |  |
| footer | `sí` |  | global |  |
| hero | `sí` |  | home / páginas clave |  |
| service cards | `sí/no` |  | home / hubs / servicios |  |
| trust block | `sí/no` |  | home / local pages |  |
| reviews block | `sí/no` |  | home / local pages / reviews |  |
| faq block | `sí/no` |  | varias |  |
| CTA block | `sí` |  | varias |  |
| breadcrumbs | `sí/no` |  | interiores |  |
| local proof block | `sí/no` |  | service+city / geohub |  |
| article teaser cards | `sí/no` |  | hubs / articles |  |
| form block | `sí/no` |  | contact / quote / home |  |

---

## 6. Header y footer

### 6.1 Header
Rellena:
- logo:
- elementos del menú:
- comportamiento sticky:
- breakpoint de colapso:
- CTA visible:
- teléfono visible sí/no:

### 6.2 Footer
Rellena:
- bloques:
- NAP:
- enlaces legales:
- enlaces a clusters:
- CTA final:
- iconos sociales sí/no:

---

## 7. Layout-map de Homepage
Documenta el orden real de secciones.

| Orden | Sección | Obligatoria | Objetivo SEO / UX | Componente |
|---|---|---|---|---|
| 1 | hero | `sí` | entidad + servicio + ciudad + CTA |  |
| 2 | quick answer / intro | `sí/no` | AI / claridad |  |
| 3 | service menu / services grid | `sí` | acceso a pilares |  |
| 4 | trust / proof | `sí` | credibilidad |  |
| 5 | why choose us / differentiators | `sí/no` | uniqueness |  |
| 6 | projects / results | `sí/no` | prueba real |  |
| 7 | reviews | `sí/no` | confianza |  |
| 8 | FAQs / NLP headings | `sí/no` | voz / AI / objeciones |  |
| 9 | CTA final + NAP | `sí` | conversión |  |

### 7.1 Reglas específicas de home
- el H1 no puede ser genérico;
- debe poder leerse servicio principal y ciudad sin hacer scroll excesivo;
- debe existir acceso claro a los servicios principales;
- deben existir trust signals visibles;
- el diseño no puede ocultar el NAP o el CTA principal.

---

## 8. Layout-map de Service Overview
| Orden | Sección | Obligatoria | Objetivo | Componente |
|---|---|---|---|---|
| 1 | hero / intro | `sí` | fijar servicio |  |
| 2 | authority | `sí` | confianza |  |
| 3 | uniqueness | `sí` | diferenciación |  |
| 4 | depth / process | `sí` | explicar servicio |  |
| 5 | intent / personas / problemas | `sí` | responder intención |  |
| 6 | optimization / related services | `sí` | profundidad semántica |  |
| 7 | FAQs | `sí` | objeciones |  |
| 8 | local variants links | `sí` | cluster local |  |
| 9 | CTA final | `sí` | conversión |  |

### 8.1 Regla crítica
No introducir rasgos visuales que hagan parecer esta página una landing local.

---

## 9. Layout-map de Service + City
| Orden | Sección | Obligatoria | Objetivo | Componente |
|---|---|---|---|---|
| 1 | hero local | `sí` | servicio + ciudad + CTA |  |
| 2 | intro geoespecífica | `sí` | contexto local |  |
| 3 | trust local | `sí/no` | prueba en contexto |  |
| 4 | authority | `sí` | experiencia |  |
| 5 | uniqueness | `sí` | diferenciación local |  |
| 6 | depth / process | `sí` | explicar qué incluye |  |
| 7 | local concerns / pain points | `sí` | relevancia local |  |
| 8 | related city services | `sí/no` | cluster ciudad |  |
| 9 | FAQs locales | `sí` | objeciones locales |  |
| 10 | CTA final | `sí` | conversión |  |

### 9.1 Regla crítica
Cada página local debe sentirse localizada, pero sin fingir presencia física inexistente.

---

## 10. Layout-map de Additional Category
| Orden | Sección | Obligatoria | Objetivo | Componente |
|---|---|---|---|---|
| 1 | hero | `sí` | categoría/servicio + ciudad |  |
| 2 | intro AUDIO | `sí` | alinear categoría GBP |  |
| 3 | process / service breakdown | `sí` | profundidad |  |
| 4 | benefits / comparisons | `sí` | apoyo semántico |  |
| 5 | voice-search FAQs | `sí` | AI / intención |  |
| 6 | related pages | `sí` | cluster |  |
| 7 | CTA local | `sí` | conversión |  |

---

## 11. Layout-map de GeoHub
| Orden | Sección | Obligatoria | Objetivo | Componente |
|---|---|---|---|---|
| 1 | hero ciudad | `sí` | fijar ciudad y cobertura |  |
| 2 | intro de mercado / ciudad | `sí` | contexto |  |
| 3 | grid de servicios de ciudad | `sí` | cluster local |  |
| 4 | categorías adicionales de ciudad | `sí/no` | soporte GBP |  |
| 5 | geoarticles / recursos | `sí/no` | profundidad |  |
| 6 | trust local / stats | `sí/no` | credibilidad |  |
| 7 | CTA ciudad | `sí` | conversión |  |

---

## 12. Layout-map de GeoArticle
| Orden | Sección | Obligatoria | Objetivo | Componente |
|---|---|---|---|---|
| 1 | intro contextual | `sí` | captar intención long-tail |  |
| 2 | subheader 1 | `sí` | desarrollar ángulo 1 |  |
| 3 | subheader 2 | `sí` | desarrollar ángulo 2 |  |
| 4 | subheader 3 | `sí` | desarrollar ángulo 3 |  |
| 5 | bullets | `sí/no` | claridad |  |
| 6 | FAQs | `sí` | AI / voz |  |
| 7 | enlaces de salida | `sí` | cluster |  |
| 8 | CTA interno | `sí` | reconducir a transaccional |  |

---

## 13. Layout-map de páginas de confianza
Rellena, según aplique:
- about / nosotros:
- reviews:
- projects:
- contact:
- quote / presupuesto:
- faq hub:

Para cada una, define:
- orden de bloques;
- CTA principal;
- relación con clusters de servicio o ciudad.

---

## 14. Responsive y accesibilidad

### 14.1 Responsive
- comportamiento del menú:
- orden de bloques móviles:
- formularios en móvil:
- cards en móvil:
- tablas en móvil:
- CTAs sticky sí/no:

### 14.2 Accesibilidad mínima
- jerarquía de headings coherente;
- labels de formularios;
- contraste suficiente;
- foco visible;
- alt text planificado;
- links distinguibles.

---

## 15. Inventario de assets
| Asset | Tipo | Uso | Fuente | Estado |
|---|---|---|---|---|
|  | `foto/icono/mapa/illustration/logo/video` |  |  | `pendiente/listo/aprobado` |

---

## 16. Desviaciones aprobadas
Si el diseño se aparta de una convención del sistema, documentar:
- qué cambia;
- por qué cambia;
- quién lo aprueba;
- qué impacto tiene.

---

## 17. Gate de aprobación
No pasar a Doc D si no se cumple todo:

- [ ] Doc C respeta la arquitectura aprobada.
- [ ] Existe layout map para todas las familias activas.
- [ ] Los componentes base están inventariados.
- [ ] Los tokens visuales están definidos.
- [ ] La home mantiene claridad semántica.
- [ ] Las páginas locales mantienen contexto local.
- [ ] Las páginas de autoridad siguen distinguiéndose de las locales.
- [ ] Responsive y accesibilidad están contemplados.
- [ ] Los assets necesarios están listados.
