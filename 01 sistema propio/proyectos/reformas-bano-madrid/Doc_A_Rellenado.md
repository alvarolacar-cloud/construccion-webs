# DOCUMENTO A — Hipótesis del Usuario

Sistema Rank-and-Rent · Versión 6.0

## OBJETIVO
Este documento lo rellenas tú a solas, antes de hablar con la IA. Representa tu hipótesis inicial sobre el proyecto: lo que crees que funciona, cómo crees que deben ser las páginas y qué quieres construir. No necesita ser perfecto — el Doc B se encargará de contrastarlo con el mercado real y devolverte este mismo documento validado.

Cuando termines, pásaselo a la IA con la instrucción: *“Ejecuta el Documento B usando este Documento A como input.”*

**Reglas de estructura:**

- Todos los silos definidos en el punto 2.1 deben aparecer también en el punto 2.2 con al menos una página listada. Si por ejemplo decidimos crear silos como Nosotros o Presupuesto Online, se listan igualmente con su única página (estos silos no son obligatorios, son un ejemplo de páginas que pueden tratarse como silo aunque solo tengan una página).
- En el punto 1.3, la sección de referencias manuales se deja vacía si no se desean incluir webs de referencia adicionales.

## BLOQUE 1 — Datos del Negocio y de Competidores

### 1.1 — Variables del Negocio

| Variable | Tu Valor |
| :--- | :--- |
| [NICHE] | Reforma de Baño |
| [KW_PRIMARY] | Reformas de Baño Madrid |
| [COMPANY_NAME] | Reformas de Baño Madrid Pro |
| [DOMAIN] | reformasbanomadridpro.es |
| [SITE_URL] | https://reformasbanomadridpro.es |
| [PHONE] | +34910123456 |
| [PHONE_DISPLAY] | 910 12 34 56 |
| [ADDRESS] | Calle de la Princesa 45, 28008 Madrid |
| [EMAIL] | info@reformasbanomadridpro.es |
| [LOCATION_CITY] | Madrid |
| [LOCATION_STATE] | Comunidad de Madrid |
| [FORM_ENDPOINT] | https://formspree.io/f/xmadridbath |

### 1.2 — Zonas de Operación

| # | Nombre | Nivel |
| :--- | :--- | :--- |
| 1 | Madrid | Ciudad |
| 2 | Moncloa-Aravaca | Distrito |
| 3 | Argüelles | Barrio |
| 4 | Ciudad Universitaria | Barrio |
| 5 | Casa de Campo | Barrio |

### 1.3 — Competidores con los que Contrastar

Ciudades de búsqueda:

| # | Ciudad |
| :--- | :--- |
| 1 | Madrid |

Referencias manuales (sites que ya conoces y quieres incluir aunque no aparezcan en el Local Pack):

| # | URL / Dominio | Por qué lo incluyes |
| :--- | :--- | :--- |
| — | — | — |

## BLOQUE 2 — Hipótesis

### 2.1 — Silos

| # | Nombre del Silo | Propósito |
| :--- | :--- | :--- |
| 1 | Servicios | Captura búsquedas transaccionales de cada servicio (ej. cambio bañera, reforma integral) |
| 2 | Zonas | Captura búsquedas locales (ej. reforma baño Argüelles, reforma baño Moncloa) |
| 3 | Blog | Outer border semántico — captura long tails informacionales y dudas de clientes |
| 4 | Presupuesto Online | Herramienta interactiva para generar leads cualificados y calcular costes aproximados |
| 5 | Nosotros | Silo de trust — equipo, historia, certificaciones, garantías y proyectos realizados |

### 2.2 — Páginas

**Silo de Servicios:**

| # | Nombre de la Página | Tipo |
| :--- | :--- | :--- |
| 1 | Reforma Integral de Baño | Service page |
| 2 | Cambio de Bañera por Ducha | Service page |
| 3 | Instalación de Mamparas | Service page |
| 4 | Muebles de Baño a Medida | Service page |

**Silo de Location Pages:**

| # | Nombre de la Página | Tipo |
| :--- | :--- | :--- |
| 1 | Reforma de Baño en Madrid | Location page — ciudad |
| 2 | Reforma de Baño en Moncloa | Location page — distrito |
| 3 | Reforma de Baño en Argüelles | Location page — barrio |

**Silo de Blog:**

| # | Nombre de la Página | Tipo |
| :--- | :--- | :--- |
| 1 | ¿Cuánto cuesta reformar un baño en Madrid en 2024? | Blog post |
| 2 | Tendencias en azulejos para baños pequeños | Blog post |
| 3 | Permisos necesarios para reformar un baño en Madrid | Blog post |

**Silo de Nosotros:**

| # | Nombre de la Página | Tipo |
| :--- | :--- | :--- |
| 1 | Nosotros | Página de silo |

**Silo de Presupuesto Online:**

| # | Nombre de la Página | Tipo |
| :--- | :--- | :--- |
| 1 | Presupuesto Online | Página de silo |

### 2.3 — URLs

| Página | URL Propuesta |
| :--- | :--- |
| Homepage | / |
| Hub Servicios | /servicios/ |
| Reforma Integral de Baño | /servicios/reforma-integral-bano/ |
| Cambio de Bañera por Ducha | /servicios/cambio-banera-por-ducha/ |
| Instalación de Mamparas | /servicios/instalacion-mamparas/ |
| Muebles de Baño a Medida | /servicios/muebles-bano-medida/ |
| Hub Zonas | /zonas/ |
| Reforma de Baño en Madrid | /zonas/madrid/ |
| Reforma de Baño en Moncloa | /zonas/madrid/moncloa/ |
| Reforma de Baño en Argüelles | /zonas/madrid/arguelles/ |
| Hub Blog | /blog/ |
| ¿Cuánto cuesta reformar un baño en Madrid? | /blog/cuanto-cuesta-reformar-bano-madrid/ |
| Tendencias en azulejos | /blog/tendencias-azulejos-banos-pequenos/ |
| Permisos para reformar baño | /blog/permisos-reforma-bano-madrid/ |
| Hub Nosotros | /nosotros/ |
| Presupuesto Online | /presupuesto/ |

### 2.4 — Árbol Visual de Links

```text
Homepage
├── /servicios/
│   ├── /servicios/reforma-integral-bano/ → /zonas/madrid/
│   ├── /servicios/cambio-banera-por-ducha/ → /zonas/madrid/
│   ├── /servicios/instalacion-mamparas/ → /zonas/madrid/
│   └── /servicios/muebles-bano-medida/ → /zonas/madrid/
├── /zonas/
│   ├── /zonas/madrid/ → /servicios/ (cards)
│   ├── /zonas/madrid/moncloa/ → /zonas/madrid/
│   └── /zonas/madrid/arguelles/ → /zonas/madrid/moncloa/
├── /blog/
│   ├── /blog/cuanto-cuesta-reformar-bano-madrid/ → /servicios/reforma-integral-bano/
│   ├── /blog/tendencias-azulejos-banos-pequenos/ → /servicios/reforma-integral-bano/
│   └── /blog/permisos-reforma-bano-madrid/ → /servicios/reforma-integral-bano/
├── /nosotros/
└── /presupuesto/
```

### 2.5 — Entidades y Particularidades

**Homepage:**

| Tipo de entidad | Ejemplos para este nicho |
| :--- | :--- |
| Servicios | Reforma integral, cambio bañera por ducha, instalación mamparas, alicatado |
| Métricas | Más de 15 años de experiencia, +500 baños reformados en Madrid, valoración 4.9/5 |
| Zonas de cobertura | Madrid capital, Moncloa, Argüelles, Chamberí, Centro |
| Confianza | Presupuesto sin compromiso, garantía de 2 años, financiación a medida, limpieza post-obra |

**Service Page:**

| Tipo de entidad | Ejemplos para este nicho |
| :--- | :--- |
| Marcas | Roca, Porcelanosa, Grohe, Hansgrohe, Salgar, Profiltek |
| Materiales | Plato de resina mineral, gres porcelánico, microcemento, cristal templado |
| Especificaciones | Mamparas de 8mm, platos antideslizantes clase 3, inodoros rimless |
| Procesos | Demolición, desescombro, fontanería multicapa, impermeabilización, alicatado, rejuntado |

**Location Page:**

| Tipo de entidad | Ejemplos para este nicho |
| :--- | :--- |
| Geográficas | Distrito Moncloa-Aravaca, Barrio de Argüelles, CP 28008, Calle Princesa, Pintor Rosales |
| Demográficas | Edificios clásicos, pisos antiguos que requieren actualización de fontanería |
| Locales | Normativa del Ayuntamiento de Madrid, licencias de obra menor (actuación comunicada), gestión de sacos de escombros en la vía pública |

### 2.6 — Contenido

**Homepage:**

| Sección | Tu propuesta de contenido |
| :--- | :--- |
| [H1] | Reformas de Baño en Madrid — Especialistas en Moncloa y Argüelles |
| Intro | Presentación de la empresa local, destacando la especialización en reformas rápidas, limpias y con acabados de primera calidad en el centro de Madrid. |
| Nuestros Servicios | Top 4 servicios (Reforma Integral, Cambio a Ducha, Mamparas, Muebles). Nombre + breve descripción + link a su página específica. |
| Por Qué Elegirnos | Destacar: Visita y presupuesto gratuito, materiales de primera, ejecución rápida (cambio de bañera en 24h), y gestión de licencias en Madrid. |
| Testimonios | Widget de reseñas. 4-5 testimonios reales de clientes en Argüelles, Moncloa y otras zonas de Madrid. |
| CTA | Formulario rápido de contacto + teléfono click-to-call + botón a "Calcula tu Presupuesto". |

**Service Page:**

| Sección | Tu propuesta de contenido |
| :--- | :--- |
| [H1] | [Nombre del Servicio] en Madrid — Calidad y Garantía |
| Intro | Explicación detallada del servicio, a quién va dirigido y cuáles son los principales beneficios de contratar a especialistas. |
| Cómo Funciona | Proceso claro: 1. Contacto y Visita → 2. Presupuesto Cerrado → 3. Ejecución de la Obra → 4. Limpieza y Entrega. |
| Materiales y Opciones | Catálogo visual de opciones (tipos de platos de ducha, estilos de azulejos, marcas con las que trabajamos). |
| ¿Cuánto Cuesta? | Rango de precios aproximado en Madrid y explicación de los factores que influyen en el presupuesto final (tamaño, calidades). |
| FAQs | 5-7 preguntas frecuentes sobre el servicio específico (tiempos de obra, ruidos, garantías). Schema FAQPage incluido. |

**Location Page:**

| Sección | Tu propuesta de contenido |
| :--- | :--- |
| [H1] | Reformas de Baño en [Barrio/Distrito] |
| La Zona y el Problema | Contexto local: mención a la antigüedad de los edificios en la zona (ej. pisos en Argüelles) y la necesidad de actualizar instalaciones antiguas de plomo/uralita. |
| Servicios en [Zona] | Cards con los servicios adaptados al contexto local + links a las service pages correspondientes. |
| Proyectos en [Zona] | Galería de fotos del antes y después de baños reformados en esa zona específica + testimonios locales. |
| FAQs locales | Preguntas sobre normativas del Ayuntamiento de Madrid, permisos para contenedores de escombros en calles estrechas, horarios permitidos para hacer ruido. |
