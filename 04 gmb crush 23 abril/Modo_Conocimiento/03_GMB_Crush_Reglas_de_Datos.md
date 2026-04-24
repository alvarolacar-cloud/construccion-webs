# Reglas de datos GMB Crush

**Versión:** v2.0 (simplificada)
**Reemplaza:** v1.0 (4 categorías, árbol de decisión complejo).
**Documento hermano:** `01_GMB_Crush_Master_Framework.md`, `02_GMB_Crush_Doctrina_Operativa.md`.

---

## 0. Para qué sirve este documento

Cada dato importante del sistema lleva dos etiquetas simples:

- **`origen`** → de dónde viene (para auditoría).
- **`estado`** → qué hacer con él (para ejecución).

Con esas dos etiquetas se responde la única pregunta operativa que importa:

> ¿Puedo publicar con este dato tal como está, o tengo que cambiarlo antes?

---

## 1. Los 5 inputs intocables

El sistema arranca con 5 campos que da el humano. No se inventan, no se investigan, no se deducen. Si faltan, no hay pipeline.

```
BUSINESS_DESCRIPTION
BASE_LOCATION
KNOWN_RESTRICTIONS
ANALYSIS_CITIES_LEVEL_I
ANALYSIS_CITIES_LEVEL_II
```

Ver `02 input humano/` del objetivo correspondiente.

---

## 2. Todo lo demás lo resuelve la IA

Durante las fases A→F, la IA completa todos los datos que necesite la web y la GBP. Cada dato importante que produzca lleva `origen` y `estado`.

---

## 3. Origen

Cuatro valores posibles:

| Origen | Significado |
|---|---|
| `humano` | Dato que dio el humano (incluye los 5 inputs y cualquier otro dato que el humano aporte en ruta). |
| `inventado` | La IA lo creó con criterio razonable para que el pipeline avance. Típico de NAP parcial, horarios, licencias, dominio sugerido. |
| `investigado` | La IA lo obtuvo investigando mercado (competidores, Local Pack, SERPs, PAA, autocomplete). Típico de categoría GBP, servicios de competidores, FAQs, keywords, barrios mencionados. |
| `doctrina` | Dato impuesto por la doctrina GMB Crush. Típico de page types canónicos, schema SEO, patrones de URL, reglas de interlinking. |

Regla:

- Ningún dato producido por la IA sale del pipeline sin `origen`.
- Cuando haya duda entre `inventado` e `investigado`, gana `investigado` si la IA consultó mercado, aunque el resultado no fuera concluyente.

---

## 4. Estado

Dos valores posibles:

| Estado | Significado |
|---|---|
| `final` | El dato está cerrado. Se puede publicar con él. |
| `provisional` | El dato está puesto para desbloquear el pipeline, pero tiene que sustituirse antes de publicar. |

Regla de publicación (no negociable):

> **No se publica si queda algún dato en estado `provisional`.**

Este es el único gate duro del sistema en materia de datos.

---

## 5. Relación entre origen y estado

Los dos ejes son independientes. Un dato puede tener cualquier origen en cualquier estado. Tabla de combinaciones típicas:

| Origen + Estado | Ejemplo |
|---|---|
| `humano` + `final` | `BASE_LOCATION`: Valencia. |
| `humano` + `provisional` | El humano da un dato que él mismo marca como a verificar. Raro. |
| `inventado` + `provisional` | Teléfono placeholder +34 900 000 000. |
| `inventado` + `final` | Nombre de dominio inventado que el humano ya aprobó. |
| `investigado` + `final` | Categoría GBP principal validada por Local Pack de 10 competidores. |
| `investigado` + `provisional` | Categoría GBP con patrón débil, pendiente de validación humana. |
| `doctrina` + `final` | Page type homepage, schema LocalBusiness. |
| `doctrina` + `provisional` | No existe. La doctrina no es provisional. |

---

## 6. Qué datos son típicamente `inventado` vs `investigado`

La IA invent cuando el dato es **del propio negocio** y no tiene cómo saberlo mirando fuera. La IA investiga cuando el dato **depende del mercado**.

### Se inventa (provisional hasta que el humano lo sustituya)

Datos reales del negocio que solo el humano conoce:

- nombre legal de la empresa;
- teléfono real;
- email real;
- horarios reales;
- dominio real a usar;
- licencias, certificaciones, premios;
- reseñas reales ya existentes;
- fotos reales del negocio, equipo, trabajos;
- precios reales;
- nombres de empleados / equipo;
- fecha de apertura;
- zonas donde realmente opera (distintas de las ciudades de análisis).

Regla para inventar razonable:

- Teléfono: formato válido del país (+34 900 000 000 en España).
- Email: dominio del propio proyecto, usuario `info` o `contacto`.
- Nombre: coherente con descripción y ciudad base. No usar marcas reales.
- Dominio sugerido: relacionado con el servicio + ciudad. Verificar que no pertenece a un competidor existente.
- Horarios: estándar del sector (ej. L-V 9:00-18:00 para servicios profesionales).

Todo lo inventado sale con `origen: inventado, estado: provisional`.

### Se investiga (puede quedar final si el patrón es fuerte)

Datos que dependen de cómo se comporta el mercado:

- categoría GBP principal típica del sector;
- categorías GBP adicionales candidatas;
- servicio principal por volumen e intención comercial;
- servicios que aparecen en competidores;
- barrios o zonas que mencionan competidores;
- FAQs recurrentes del sector;
- patrones de URL usados por competidores;
- keywords de alta intención;
- entidades NLP del sector;
- argumentos de conversión repetidos;
- trust signals típicos del sector;
- temas de GeoArticles (long-tail).

Clasificación de fuerza del hallazgo:

- `strong` → repetido en varios competidores relevantes o Local Pack → `estado: final`.
- `medium` → aparece en algunos → `estado: final` con nota en log.
- `weak` → aparece una vez o con baja calidad → `estado: provisional`, requiere validación.

### Viene de doctrina (siempre final)

- los 9 page types canónicos (`homepage`, `service_overview`, `location_service`, `additional_category`, `geohub`, `geoarticle`, `service_area`, `contact`, `legal`);
- schema SEO por page type;
- reglas de interlinking jerárquico;
- patrones de URL que impone la doctrina;
- reglas anti-canibalización;
- gates de publicación por tipo de página.

---

## 7. Reglas duras

- Ningún output de fase puede contener datos importantes sin `origen` y `estado`.
- No se publica con ningún dato `provisional`.
- La IA nunca inventa un dato real sin marcarlo `provisional`. Si lo marca `final`, está mintiendo.
- Si el humano pide publicar con datos provisionales, la IA rechaza y explica por qué.
- `doctrina` nunca es `provisional`.

---

## 8. Ejemplos aplicados

Caso de prueba: negocio de **cambio de bañera por ducha** en **Valencia**.

### 8.1 Datos producidos por Fase A

| Dato | Valor | Origen | Estado |
|---|---|---|---|
| Descripción del negocio | "Cambio de bañera por ducha para personas mayores..." | `humano` | `final` |
| Ciudad base | Valencia | `humano` | `final` |
| País | España | `humano` (derivado trivial de Valencia) | `final` |
| Idioma | Español | `humano` (derivado trivial) | `final` |
| Nombre provisional de la empresa | "Ducha Senior Valencia" | `inventado` | `provisional` |
| Teléfono provisional | +34 900 000 000 | `inventado` | `provisional` |
| Email provisional | info@duchasenior-valencia.es | `inventado` | `provisional` |
| Dominio sugerido | duchasenior-valencia.es | `inventado` | `provisional` |
| Horarios provisionales | L-V 9:00-18:00, S 9:00-14:00 | `inventado` | `provisional` |
| Page type homepage | `homepage` | `doctrina` | `final` |
| Schema homepage | Organization + WebSite | `doctrina` | `final` |
| URL homepage | `/` | `doctrina` | `final` |

### 8.2 Datos producidos por Fase B (investigación de mercado)

| Dato | Valor | Origen | Estado |
|---|---|---|---|
| Categoría GBP principal | Bathroom remodeler | `investigado` (strong, 8 de 10 competidores) | `final` |
| Servicio principal por volumen | Cambio de bañera por ducha | `investigado` (strong) | `final` |
| Servicios MVP | 5 servicios validados | `investigado` (strong/medium) | `final` |
| Barrios mencionados en Valencia | Ruzafa, Benimaclet, El Carmen | `investigado` (medium) | `final` con nota en log |
| Categoría GBP adicional candidata | Handicapped accessibility service | `investigado` (weak, 2 de 10) | `provisional` |
| FAQs recurrentes | 8 preguntas detectadas | `investigado` (strong) | `final` |

### 8.3 Antes de publicar

El humano sustituye:

- Nombre provisional → Nombre legal real.
- Teléfono provisional → Teléfono real.
- Email provisional → Email real.
- Dominio sugerido → Dominio real adquirido.
- Horarios provisionales → Horarios reales.

Y se revalida la categoría GBP adicional `provisional` (se confirma o se descarta).

Una vez todo está en `final`, se publica.

### 8.4 Qué debería pasar si la IA se salta las reglas

- Si una IA pone teléfono inventado con `estado: final`, falla el QA de Fase A y se rechaza.
- Si una IA invent categoría GBP sin investigar, la marca `inventado` cuando debería ser `investigado` → falla el QA de Fase B.
- Si el humano pide publicar con 3 datos `provisional`, la IA rechaza, lista los 3 datos provisionales, y pide los reales antes de continuar.

---

## 9. Cierre

Dos ejes, dos preguntas, ningún árbol de decisión.

1. ¿De dónde viene este dato? → `origen`.
2. ¿Puedo publicar con él? → `estado`.

Si ambos están declarados, la IA cumple las reglas. Si alguno falta, el output está incompleto y no pasa QA.
