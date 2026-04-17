# Documento C — Extracción de Diseño y Layout

Sistema Rank-and-Rent · Versión 8.0

Este documento contiene los tokens de diseño exactos y el mapa de layout extraídos de la web líder del mercado (reforcam.com). Sirve como la única fuente de verdad visual para la construcción del sitio (Documento D). No se deben tomar decisiones de diseño fuera de este documento.

## 1. DESIGN TOKENS

Todos los valores CSS exactos listos para su implementación (ej. con Tailwind CSS).

### Tipografía
| Token | Propiedad CSS | Valor |
| :--- | :--- | :--- |
| `--font-family-primary` | `font-family` | 'Poppins', sans-serif |
| `--text-h1-hero` | `font-size` / `line-height` / `font-weight` | 48px / 62.4px / 700 |
| `--text-h1-page` | `font-size` / `line-height` / `font-weight` | 42px / 54.6px / 500 |
| `--text-h2` | `font-size` / `line-height` / `font-weight` | 30px / 30px / 500 |
| `--text-h3` | `font-size` / `line-height` / `font-weight` | 24px / 24px / 500 |
| `--text-body` | `font-size` / `line-height` / `font-weight` | 16px / 24px / 400 |
| `--text-nav` | `font-size` / `line-height` / `font-weight` | 14px / 20px / 400 |
| `--text-btn` | `font-size` / `font-weight` / `text-transform` | 14px / 700 / uppercase |
| `--text-faq-tab` | `font-size` / `font-weight` | 26px / 700 |

### Colores
| Token | Propiedad CSS | Valor | Uso |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `color` / `background-color` | `#B30000` | CTAs, iconos, separadores, links nav, tabs activos |
| `--color-bg-dark` | `background-color` | `#151515` | Sección formulario, top bar, pre-footer/footer superior |
| `--color-bg-darker` | `background-color` | `#0B0B0B` | Footer inferior (copyright) |
| `--color-bg-light` | `background-color` | `#F6F6F6` | Secciones alternadas (servicios, exposiciones) |
| `--color-bg-white` | `background-color` | `#FFFFFF` | Secciones principales, cards |
| `--color-text-main` | `color` | `#303035` | Body text |
| `--color-text-heading` | `color` | `#151515` | H2, H3 |
| `--color-text-white` | `color` | `#FFFFFF` | H1 hero, texto sobre fondos oscuros |

### Componentes y Utilidades
| Token | Propiedad CSS | Valor |
| :--- | :--- | :--- |
| `--btn-padding` | `padding` | 20px 60px |
| `--btn-radius` | `border-radius` | 0px |
| `--card-radius` | `border-radius` | 4px (Ajuste de mejora sobre el original) |
| `--card-shadow` | `box-shadow` | 0 4px 6px -1px rgba(0, 0, 0, 0.1) (Ajuste de mejora) |
| `--divider-height` | `border-top-width` | 2px |
| `--divider-width` | `width` | 116.5px |
| `--divider-color` | `border-top-color` | `#B30000` |

---

## 2. LAYOUT-MAP

Ficha detallada de cada sección por tipo de página con layout, proporciones y requerimientos.

### 2.1. Homepage

| # | Nombre de la Sección | Layout | Columnas | Fondo | Requerimientos Imagen | Notas |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Top bar | flex | 2 (izq/der) | `--color-bg-dark` | N/A | Email izq, Teléfono der |
| 2 | Header / Nav | flex | 3 (Logo, Nav, Tel) | `--color-bg-white` | Logo horizontal | Navegación centrada |
| 3 | Hero | block | 1 (full-width) | Imagen | Foto real, full-width | Overlay oscuro sutil. H1 centrado |
| 4 | Grid Servicios | grid | 4 | `--color-bg-white` | Iconos o fotos pequeñas | Cards con `--card-radius` y sombra |
| 5 | Empresa / Métricas | flex | 2 (55/45) | `--color-bg-light` | N/A | Texto izq, 3 contadores numéricos der |
| 6 | CTA / Formulario | block | 1 (centrado) | `--color-bg-dark` | N/A | Formulario de presupuesto destacado |
| 7 | Exposiciones | grid | 2 | `--color-bg-white` | Fotos reales (tienda) | Información de ubicaciones físicas |
| 8 | Servicios Secundarios | grid | 3 | `--color-bg-light` | Iconos | Grid de especialidades |
| 9 | Blog Destacados | grid | 3 | `--color-bg-white` | Fotos reales, ratio 16:9 | Últimas 3 entradas |
| 10 | Testimonios | grid | 3 | `--color-bg-white` | Avatares pequeños | Estilo Google Reviews |
| 11 | Pre-footer Contacto | flex | 2 (30/70) | `--color-bg-light` | Foto real, ratio 4:3 | Imagen izq, Datos de contacto der |
| 12 | Footer | grid | 3 | `--color-bg-darker` | Logo blanco | Logo+datos / Enlaces 1 / Enlaces 2 |

### 2.2. Service Page (ej. Cambio Bañera por Ducha)

| # | Nombre de la Sección | Layout | Columnas | Fondo | Requerimientos Imagen | Notas |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Hero Servicio | block | 1 (full-width) | Imagen | Foto real, full-width | Sin overlay de texto, solo imagen ambiente |
| 2 | H1 + Intro | block | 1 (centrado) | `--color-bg-white` | N/A | Título principal de la página |
| 3 | Beneficios / Opciones | grid | 3 | `--color-bg-white` | Fotos reales cuadradas | Cards con ventajas del servicio |
| 4 | CTA / Formulario | block | 1 (centrado) | `--color-bg-dark` | N/A | Formulario de conversión principal |
| 5 | Info Detallada | flex | 2 (45/55) | `--color-bg-white` | Foto real vertical | Imagen izq, Texto der |
| 6 | Qué Incluye | grid | 2 | `--color-bg-light` | N/A | Lista con checkmarks (bullets) |
| 7 | Diferenciadores | grid | 3 | `--color-bg-white` | Iconos | Rapidez, garantía, etc. |
| 8 | Galería Antes/Después | grid | 4 | `--color-bg-white` | Fotos reales | Grid de imágenes de proyectos |
| 9 | FAQs | block | 1 (centrado) | `--color-bg-white` | N/A | Acordeón o tabs con `--text-faq-tab` |
| 10 | Exposiciones | grid | 2 | `--color-bg-light` | Fotos reales (tienda) | Reutiliza sección de homepage |
| 11 | Pre-footer Contacto | flex | 2 (30/70) | `--color-bg-white` | Foto real, ratio 4:3 | Reutiliza sección de homepage |
| 12 | Footer | grid | 3 | `--color-bg-darker` | Logo blanco | Reutiliza sección de homepage |

### 2.3. Location Page (Diseño derivado para SEO Local)

*Nota: Reforcam no usa Location Pages, pero aplicamos su sistema de diseño a la estructura requerida en el Doc A.*

| # | Nombre de la Sección | Layout | Columnas | Fondo | Requerimientos Imagen | Notas |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Hero Local | block | 1 (full-width) | Imagen | Foto real zona local | Overlay oscuro. H1 centrado (ej. "Reformas en Argüelles") |
| 2 | Problema Local + Intro | flex | 2 (50/50) | `--color-bg-white` | Mapa o foto local | Contexto del barrio/distrito |
| 3 | Servicios en Zona | grid | 3 | `--color-bg-light` | Iconos o fotos | Cards apuntando a Service Pages |
| 4 | Proyectos Locales | grid | 2 | `--color-bg-white` | Fotos reales | Galería filtrada por zona |
| 5 | CTA / Formulario | block | 1 (centrado) | `--color-bg-dark` | N/A | Formulario de conversión |
| 6 | FAQs Locales | block | 1 (centrado) | `--color-bg-white` | N/A | Normativas, licencias de la zona |
| 7 | Pre-footer + Footer | mix | mix | mix | mix | Reutiliza global |

### 2.4. Blog (Listado y Post)

**Listado de Blog:**
| # | Nombre de la Sección | Layout | Columnas | Fondo | Requerimientos Imagen | Notas |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | H1 Blog | block | 1 | `--color-bg-white` | N/A | Título simple |
| 2 | Posts Destacados | grid | 2 | `--color-bg-white` | Fotos 16:9 | 2 últimos posts más grandes |
| 3 | Grid de Posts | grid | 3 | `--color-bg-white` | Fotos 16:9 | Resto de posts |
| 4 | Paginación | flex | 1 (centrado) | `--color-bg-white` | N/A | Enlaces numerados |

**Post Individual:**
| # | Nombre de la Sección | Layout | Columnas | Fondo | Requerimientos Imagen | Notas |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Hero Post | block | 1 (full-width) | Imagen | Foto real destacada | Título H1 sobre la imagen o debajo |
| 2 | Contenido | block | 1 (estrecha) | `--color-bg-white` | Imágenes inline | Max-width reducido para lectura |
| 3 | CTA Inline | block | 1 | `--color-bg-light` | N/A | Banner para pedir presupuesto |
| 4 | Pre-footer + Footer | mix | mix | mix | mix | Reutiliza global |

---

## 4. INVENTARIO DE ASSETS VISUALES

Este bloque se genera automáticamente a partir del Layout-Map (Bloque 2). La IA cuenta las secciones con imagen en cada tipo de página y genera todas las imágenes necesarias antes de que el Documento D empiece a construir el código.

### Regla de generación

1. **Contar:** Recorre el Layout-Map y cuenta las filas cuya columna "Requerimientos Imagen" no sea N/A. Ese número es el mínimo de imágenes únicas a generar para ese tipo de página.
2. **Describir:** Para cada imagen genera un prompt basado en tres datos del proyecto: (a) nicho del negocio (Doc A 1.1), (b) zona geográfica (Doc A 1.2) y (c) estilo fotográfico del competidor líder (extraído en el Bloque 2 del Doc C).
3. **Generar y entregar:** Genera todas las imágenes, súbelas a la CDN con `manus-upload-file --webdev` y entrega el inventario con la URL de CDN de cada imagen y la página/sección donde se usa. El Doc D recibe este inventario y no genera ninguna imagen, solo las referencia.

### Inventario generado para este proyecto (Reformas Baño Madrid Pro)

**Estilo fotográfico de referencia (Reforcam):** Fotografía de interiores de alta calidad, iluminación cálida y natural, acabados modernos en blanco y gris, encuadres amplios que muestran el baño completo, sin personas.

| # | Imagen | Página / Sección | Ratio | URL CDN |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Hero Homepage | Homepage — Sección 3 (Hero) | 16:9 full-width | https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-homepage-CpBHWLohyRwJUcBfNFcFAa.webp |
| 2 | Hero Cambio Bañera | Service Page Cambio Bañera — Sección 1 (Hero) | 16:9 full-width | https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-cambio-banera-EZM3WzYHDMbet3SY4CtKg4.webp |
| 3 | Hero Reforma Integral | Service Page Reforma Integral — Sección 1 (Hero) | 16:9 full-width | https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-reforma-integral-PtkybgjiNmqgdLfcNLHh8K.webp |
| 4 | Hero Argüelles | Location Page Argüelles — Sección 1 (Hero Local) | 16:9 full-width | https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/hero-arguelles-g4sPkhdTuAwopFWkTx5iKu.webp |
| 5 | Galería Proyectos 1 | Homepage Sección 9 / Service Pages Sección 8 / Proyectos | 4:3 | https://d2xsxph8kpxj0f.cloudfront.net/310519663319194189/GtDWXkEw3HZjzzH6Ch3b8h/bathroom-gallery-1-Uvk9yuCwaxcjRzCnVZQ6gX.webp |

> **Nota de escala:** En este proyecto se generaron 5 imágenes base que se reutilizan en múltiples secciones. Para proyectos con mayor presupuesto de generación, se recomienda generar una imagen única por cada sección con imagen del Layout-Map, especialmente para las Service Pages (mínimo 4 imágenes por página: hero, beneficios ×3, info detallada, galería ×4).
