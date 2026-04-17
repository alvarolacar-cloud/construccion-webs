# DOC A — HIPÓTESIS INICIAL DEL NEGOCIO

## Propósito
Definir la **primera hipótesis operativa** del proyecto:
- entidad;
- categoría GBP;
- oferta;
- servicios;
- ciudades;
- intención de búsqueda;
- arquitectura inicial;
- riesgos a validar en Doc B.

## Cuándo se usa
Se crea al inicio del proyecto, antes del contraste competitivo y antes de fijar la arquitectura final.

## Qué no puede hacer
Doc A no puede:
- dar por cerrada la arquitectura;
- aprobar el diseño;
- asumir que todas las ciudades o servicios merecen la misma prioridad;
- sustituir el contraste de mercado.

## Lectura obligatoria antes de rellenar
- `00_PRINCIPIOS_NO_NEGOCIABLES_GMB_CRUSH.md`
- `00_MATRIZ_FAMILIAS_Y_SCHEMA_GMB_CRUSH.md`
- `00_MATRIZ_ENLAZADO_GMB_CRUSH.md`

---

## 0. Metadata y control
- Proyecto: `{{project_slug}}`
- Negocio: `{{business_name}}`
- Responsable: `{{owner_name}}`
- Fecha: `{{yyyy-mm-dd}}`
- Versión: `v1`
- Estado: `borrador | en revisión | aprobado`
- Basado en `project.config`: `sí/no`
- Referencias previas disponibles: `{{notes}}`

---

## 1. Resumen ejecutivo inicial
Escribe en 8–12 líneas una hipótesis clara de:
- qué es el negocio;
- qué categoría GBP principal parece más lógica;
- cuál es el servicio principal percibido;
- cuál es la ciudad principal;
- qué objetivo de conversión domina;
- qué ambición local parece razonable;
- qué dudas grandes deben comprobarse en Doc B.

**Bloque de redacción**
> `{{initial_executive_summary}}`

---

## 2. Datos base del negocio

### 2.1 Identidad
| Campo | Valor |
|---|---|
| Nombre comercial | `{{business_name}}` |
| Nombre legal | `{{legal_name}}` |
| Dominio actual o previsto | `{{root_domain}}` |
| Tipo de negocio local | `{{service-area | storefront | hybrid}}` |
| Ciudad principal | `{{main_city}}` |
| Región / provincia / estado | `{{region}}` |
| País | `{{country}}` |
| Teléfono principal | `{{phone}}` |
| Email principal | `{{email}}` |
| NAP provisional | `{{nap}}` |
| Objetivo principal de conversión | `{{call | form | whatsapp | visit | quote}}` |

### 2.2 Activos y señales iniciales disponibles
Marca lo que existe hoy:
- [ ] GBP activo
- [ ] reseñas reales
- [ ] fotos reales
- [ ] equipo identificable
- [ ] proyectos/casos
- [ ] certificaciones
- [ ] garantías
- [ ] precios base o rangos
- [ ] formularios o CRM
- [ ] redes o perfiles externos
- [ ] contenido previo reutilizable

### 2.3 Restricciones o condicionantes
- legales:
- operativos:
- geográficos:
- de marca:
- técnicos:
- de tiempo:

---

## 3. Hipótesis GBP

### 3.1 Categoría principal propuesta
- Categoría GBP principal propuesta: `{{primary_gbp_category}}`
- Justificación inicial:
- Riesgo de ambigüedad:
- Alternativas consideradas:

### 3.2 Categorías adicionales propuestas
| Categoría adicional | Motivo inicial | ¿Parece requerir página local dedicada? |
|---|---|---|
| `{{additional_category_1}}` | `{{reason}}` | `sí/no` |

### 3.3 Hipótesis de alineación web ↔ GBP
Responde:
- ¿la home debería anclarse a esta categoría?
- ¿qué servicios deberían sostenerla?
- ¿qué familias de página parecen necesarias para que la arquitectura refleje realmente el GBP?

---

## 4. Inventario inicial de servicios

### 4.1 Lista inicial
| Servicio | Slug tentativo | Tipo | Prioridad percibida | Objeciones conocidas | ¿Merece service overview? | ¿Merece servicio + ciudad? |
|---|---|---|---|---|---|---|
| `{{service_name}}` | `{{service_slug}}` | `principal/secundario/complementario` | `alta/media/baja` | `{{objection}}` | `sí/no` | `sí/no` |

### 4.2 Servicio principal percibido
- Servicio principal tentativo:
- Razón:
- Riesgo de que no sea el mejor ancla:
- Relación con la categoría GBP principal:

### 4.3 Servicios que podrían no merecer URL propia
Lista aquí servicios:
- demasiado secundarios;
- duplicados de otros;
- poco transaccionales;
- mejor tratados como FAQ, bloque interno o GeoArticle.

---

## 5. Hipótesis geográfica

### 5.1 Ciudades y zonas iniciales
| Ciudad / zona | Tipo | Prioridad | ¿Hay presencia física? | Motivo de interés | Riesgo de cobertura débil |
|---|---|---|---|---|---|
| `{{city_name}}` | `ciudad/barrio/distrito/zona` | `alta/media/baja` | `sí/no` | `{{reason}}` | `{{risk}}` |

### 5.2 Ciudad principal
- Ciudad principal propuesta:
- Razón:
- Relación con el GBP:
- Relación con la home:
- ¿Requiere GeoHub desde el inicio?: `sí/no`

### 5.3 Hipótesis de cluster geográfico
Indica:
- qué ciudades parecen prioritarias;
- cuáles podrían quedar en fase 2;
- qué barrios o distritos merecen mención interna pero no URL propia;
- qué ciudades pueden ser demasiado débiles para una primera ola.

---

## 6. Hipótesis de intención de búsqueda

### 6.1 Intenciones principales
| Intención | Ejemplo de query interna | Etapa del usuario | Familia de página que probablemente la resuelve |
|---|---|---|---|
| transaccional local | `{{query}}` | `alta intención` | `service+city` |
| informativa comercial | `{{query}}` | `media` | `service overview` |
| comparativa / objeción | `{{query}}` | `media` | `geoarticle` |
| navegación de marca | `{{query}}` | `alta` | `homepage / contact` |

### 6.2 Dudas que hay que comprobar en SERP
- ¿qué combinaciones servicio + ciudad activan Local Pack?
- ¿qué intenciones están mejor resueltas por competidores?
- ¿qué categorías adicionales aparecen de forma recurrente?
- ¿qué tipo de contenido long-tail domina?

---

## 7. Hipótesis inicial de arquitectura GMB Crush

### 7.1 Activación preliminar por familia
| Familia | ¿Se activa? | Motivo inicial | Volumen tentativo |
|---|---|---|---|
| Homepage | `sí` | `siempre` | `1` |
| Service Overview | `sí/no` |  | `{{count}}` |
| Location-Based Service | `sí/no` |  | `{{count}}` |
| Additional Category | `sí/no` |  | `{{count}}` |
| GeoHub | `sí/no` |  | `{{count}}` |
| GeoArticle | `sí/no` |  | `{{count}}` |
| Páginas de confianza | `sí/no` |  | `{{count}}` |

### 7.2 Riesgos de arquitectura detectados ya
- riesgo de querer cubrir demasiadas ciudades;
- riesgo de categorías GBP no justificadas;
- riesgo de servicios sin masa suficiente;
- riesgo de thin content;
- riesgo de duplicación entre service overview y service + city.

---

## 8. Inventario preliminar de URLs

### 8.1 URLs de primera ola
| Familia | URL tentativa | Motivo | Prioridad |
|---|---|---|---|
| homepage | `/` | entidad principal | `alta` |
| service overview | `/{{category}}/{{service}}/` | autoridad temática | `alta` |
| service + city | `/{{category}}/{{city}}/{{service}}/` | intención local | `alta` |

### 8.2 URLs dudosas o sujetas a contraste
Anota las que:
- podrían sobrar;
- podrían cambiar de slug;
- podrían requerir fusión o división;
- podrían pertenecer a otra familia.

---

## 9. Hipótesis inicial de enlazado

### 9.1 Relación home → cluster
- La home debería enlazar a:
- El menú debería exponer:
- El footer debería reforzar:

### 9.2 Relación service overview → local
- Cada service overview debería enlazar a:
- Debería cruzarse con estos servicios relacionados:
- Debería apoyarse con estos GeoArticles tentativos:

### 9.3 Relación city cluster
- Cada ciudad prioritaria debería tener:
- El GeoHub de cada ciudad debería enlazar a:
- Las páginas servicio + ciudad deberían enlazar a:

---

## 10. Hipótesis de contenido y confianza

### 10.1 Señales de autoridad a incluir
- reseñas:
- acreditaciones:
- años de experiencia:
- equipo:
- proyectos:
- garantías:
- tiempos de respuesta:
- cualquier otra prueba relevante:

### 10.2 Entidades, términos y temas a explorar
- entidades del sector:
- sinónimos del servicio:
- objeciones típicas:
- comparativas:
- temas educativos para GeoArticles:
- referencias locales potencialmente útiles:

### 10.3 FAQs iniciales
Lista 8–15 preguntas tentativas que luego deberán validarse o depurarse.

---

## 11. Hipótesis de navegación y conversión

### 11.1 Navegación principal tentativo
- item 1:
- item 2:
- item 3:
- item 4:
- CTA principal:
- CTA secundaria:

### 11.2 Conversión
- acción principal que debe lograr la home:
- acción principal que debe lograr cada página local:
- fricciones previsibles:
- respuestas necesarias en el copy:

---

## 12. Supuestos que obligatoriamente debe validar Doc B
Lista aquí cada hipótesis que no debe pasar a arquitectura final sin contraste:
1.
2.
3.
4.
5.

---

## 13. Bloqueos y riesgos
| Riesgo | Severidad | Qué lo resolvería |
|---|---|---|
| `{{risk}}` | `alta/media/baja` | `{{resolution}}` |

---

## 14. Veredicto de salida hacia Doc B
Resume:
- qué parece claro;
- qué parece débil;
- qué merece prioridad de contraste;
- qué no debe darse por cierto todavía.

---

## 15. Gate de aprobación
No pasar a Doc B si no se cumple todo:

- [ ] El negocio está definido con datos mínimos.
- [ ] Existe hipótesis de categoría GBP principal.
- [ ] Existe lista inicial de servicios.
- [ ] Existe lista inicial de ciudades.
- [ ] La arquitectura inicial ya distingue familias GMB Crush.
- [ ] Hay URLs tentativas suficientes para contrastar.
- [ ] Se ha registrado lo que sigue siendo hipótesis y no certeza.
