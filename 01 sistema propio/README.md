# Construcción Webs. Sistema Propio

Sistema propio de construcción de webs locales (Rank-and-Rent) basado en cinco documentos que guían el proceso de principio a fin: desde la hipótesis inicial hasta la revisión y QA antes de publicar.

---

## El Sistema: 5 Documentos

| Doc | Nombre | Propósito |
| :--- | :--- | :--- |
| **A** | Hipótesis del Usuario | Define la estructura del sitio antes de investigar el mercado: silos, páginas, keywords, URLs, entidades y argumentos de venta. |
| **B** | Motor de Investigación y Contraste | Analiza los 3 competidores reales del Local Pack de Google y valida (o ajusta) la hipótesis del Doc A. Genera el Doc A Regenerado. |
| **C** | Extracción de Diseño y Layout | Extrae los tokens de diseño exactos (colores, tipografía, componentes) y el Layout-Map sección a sección de la web líder del mercado. Genera el inventario de assets visuales. |
| **D** | Constructor del Sitio | Construye el sitio web completo usando el Doc A Regenerado como fuente de contenido y el Doc C como fuente de diseño. |
| **E** | Revisión y QA | Audita el sitio construido en tres bloques: técnico (enlaces, SEO, Schema), contenido (entidades, copy, keywords) y comparativa final contra competidores. |

## Flujo de Ejecución

```
Doc A (hipótesis) → Doc B (contraste) → Doc A Regenerado → Doc C (diseño) → Doc D (construcción) → Doc E (QA)
```

Cada documento tiene una parada de aprobación del usuario antes de avanzar al siguiente.

---

## Estructura del Repositorio

```
construccion-webs-sistema-propio/
├── docs/                          ← Documentos del sistema (reutilizables)
│   ├── DOCUMENTO_A_Hipotesis_del_Usuario.pdf
│   ├── DOCUMENTO_B_Motor_de_Investigacion_y_Contraste.pdf
│   ├── DOCUMENTO_C_Extraccion_de_Diseno_y_Layout.pdf
│   ├── DOCUMENTO_D_Constructor_del_Sitio.pdf
│   └── DOCUMENTO_E_Revision_y_QA.pdf
├── proyectos/                     ← Un directorio por proyecto ejecutado
│   └── reformas-bano-madrid/
│       ├── Doc_A_Rellenado.md     ← Hipótesis rellena con datos del negocio
│       ├── Doc_A_Regenerado.md    ← Doc A validado tras análisis de mercado
│       ├── Doc_C_Definitivo.md    ← Design tokens + Layout-Map + Assets
│       └── web/                   ← Código fuente del sitio (React + Tailwind)
└── README.md
```

---

## Proyectos Ejecutados

| Proyecto | Nicho | Zona | Estado |
| :--- | :--- | :--- | :--- |
| [reformas-bano-madrid](./proyectos/reformas-bano-madrid/) | Reforma de Baño | Argüelles y Moncloa, Madrid | Construido |
