# DOC D — CONSTRUCCIÓN DEL SITIO

## Propósito
Registrar de forma operativa y verificable cómo se ha implementado el proyecto.
Doc D es la traducción técnica de:
- Doc A Regenerado;
- Doc C;
- `project.config`;
- `design.tokens`.

## Regla central
Doc D no inventa arquitectura ni rediseña el proyecto.
Si hubo que decidir algo no previsto, debe quedar anotado como desviación.

## Lectura obligatoria
- `00_PRINCIPIOS_NO_NEGOCIABLES_GMB_CRUSH.md`
- `00_MATRIZ_FAMILIAS_Y_SCHEMA_GMB_CRUSH.md`
- `00_MATRIZ_ENLAZADO_GMB_CRUSH.md`
- Doc A Regenerado aprobado
- Doc C aprobado

---

## 0. Metadata y control
- Proyecto:
- Responsable técnico:
- Fecha:
- Versión:
- Estado:
- Repositorio:
- Rama:
- Commit base:
- Entorno objetivo:
- Stack aprobado:

---

## 1. Stack técnico

### 1.1 Stack principal
| Capa | Herramienta | Versión | Observaciones |
|---|---|---|---|
| framework |  |  |  |
| runtime |  |  |  |
| package manager |  |  |  |
| hosting |  |  |  |
| CSS |  |  |  |
| SEO helpers |  |  |  |
| QA tools |  |  |  |

### 1.2 Dependencias relevantes
| Dependencia | Uso | Obligatoria |
|---|---|---|
|  |  | `sí/no` |

---

## 2. Estructura del proyecto implementada

```text
/{{repo_or_app}}/
  src/
    components/
    layouts/
    pages/
    data/
    lib/
  public/
  package.json
  config files...
```

### 2.1 Archivos clave
| Archivo | Rol | Fuente de verdad que implementa |
|---|---|---|
|  |  |  |

---

## 3. Data layer y fuentes de verdad

### 3.1 Inputs estructurados usados
| Archivo | Estado | Observaciones |
|---|---|---|
| `project.config.json` | `usado/no usado` |  |
| `design.tokens.json` | `usado/no usado` |  |
| otros |  |  |

### 3.2 Modelo de datos implementado
Documenta:
- dónde vive la entidad del negocio;
- dónde viven servicios;
- dónde viven ciudades;
- dónde viven slugs;
- dónde vive el linking map;
- dónde viven FAQs;
- dónde vive el schema builder.

### 3.3 Regla anti-hardcode
Anota qué elementos se han sacado de componentes para evitar hardcode:
- teléfono;
- navegación;
- servicios;
- ciudades;
- CTAs;
- schema;
- slugs.

---

## 4. Rutas y plantillas

### 4.1 Plantillas activas
| Familia | ¿Tiene template reusable? | Ruta / archivo | ¿Genera rutas dinámicas? | Estado |
|---|---|---|---|---|
| homepage | `sí/no` |  | `sí/no` |  |
| service overview | `sí/no` |  | `sí/no` |  |
| service + city | `sí/no` |  | `sí/no` |  |
| additional category | `sí/no` |  | `sí/no` |  |
| geohub | `sí/no` |  | `sí/no` |  |
| geoarticle | `sí/no` |  | `sí/no` |  |
| confianza | `sí/no` |  | `sí/no` |  |

### 4.2 Rutas generadas
| URL | Familia | Fuente de datos | Estado |
|---|---|---|---|
|  |  |  | `pendiente/lista/publicada` |

---

## 5. Componentes base implementados
| Componente | Estado | Reutilizable | Dónde se usa | Comentario |
|---|---|---|---|---|
| header |  | `sí/no` |  |  |
| footer |  | `sí/no` |  |  |
| hero |  | `sí/no` |  |  |
| service grid |  | `sí/no` |  |  |
| reviews block |  | `sí/no` |  |  |
| faq block |  | `sí/no` |  |  |
| CTA block |  | `sí/no` |  |  |
| breadcrumbs |  | `sí/no` |  |  |
| local proof block |  | `sí/no` |  |  |
| article teasers |  | `sí/no` |  |  |

---

## 6. Implementación SEO on-page

### 6.1 Metadata
Describe cómo se implementan:
- title;
- meta description;
- canonical;
- Open Graph;
- robots meta.

### 6.2 Headings y semántica
Describe cómo se asegura:
- un solo H1 útil por página;
- jerarquía H2/H3;
- breadcrumbs;
- NAP donde corresponde;
- CTAs coherentes.

### 6.3 Sitemap y robots
| Elemento | Estado | Ruta | Observaciones |
|---|---|---|---|
| sitemap |  |  |  |
| robots.txt |  |  |  |
| canonical rules |  |  |  |

---

## 7. Implementación de schema

### 7.1 Builder o estrategia
Explica:
- si el schema se genera de forma centralizada o por página;
- qué inputs usa;
- qué validación se aplica.

### 7.2 Cobertura por familia
| Familia | Schema implementado | Estado | Comentario |
|---|---|---|---|
| homepage |  |  |  |
| service overview |  |  |  |
| service + city |  |  |  |
| additional category |  |  |  |
| geohub |  |  |  |
| geoarticle |  |  |  |

---

## 8. Implementación del enlazado interno

### 8.1 Cómo se materializa el linking map
- desde data:
- desde componentes:
- desde plantillas:
- desde bloques contextuales:

### 8.2 Validación de enlaces
| Tipo de enlace | Estado | Método de validación |
|---|---|---|
| home → service overview |  |  |
| service overview → service + city |  |  |
| service + city → geohub |  |  |
| geoarticle → service + city |  |  |
| geohub → cluster de ciudad |  |  |

---

## 9. Implementación por familia de página

| Familia | Conteo esperado | Conteo construido | ¿Cumple bloques mínimos? | ¿Cumple schema? | ¿Cumple linking? | Estado |
|---|---|---|---|---|---|---|
| homepage | 1 |  | `sí/no` | `sí/no` | `sí/no` |  |
| service overview |  |  |  |  |  |  |
| service + city |  |  |  |  |  |  |
| additional category |  |  |  |  |  |  |
| geohub |  |  |  |  |  |  |
| geoarticle |  |  |  |  |  |  |
| confianza |  |  |  |  |  |  |

---

## 10. Conversión y trust implementados
| Elemento | Dónde se implementa | Estado | Observaciones |
|---|---|---|---|
| teléfono visible |  |  |  |
| formularios |  |  |  |
| CTA primaria |  |  |  |
| CTA secundaria |  |  |  |
| reseñas |  |  |  |
| proyectos |  |  |  |
| NAP |  |  |  |

---

## 11. Assets y medios
| Asset | Ruta | Optimizado | Alt text planificado | Observaciones |
|---|---|---|---|---|
|  |  | `sí/no` | `sí/no` |  |

---

## 12. Build, deploy y entorno publicado

### 12.1 Build
- comando:
- salida esperada:
- warnings conocidos:
- errores corregidos:

### 12.2 Deploy
- plataforma:
- URL preview:
- URL producción:
- fecha de despliegue:
- variables de entorno:
- pasos manuales:

---

## 13. Redirecciones, errores y páginas auxiliares
Documenta:
- redirecciones necesarias;
- manejo de 404;
- gestión de páginas excluidas;
- canonical especial si aplica.

---

## 14. Incidencias y desviaciones
| ID | Incidencia o desviación | Severidad | Impacto | Resolución |
|---|---|---|---|---|
|  |  | `alta/media/baja` |  |  |

---

## 15. Checklist de handoff a QA
No pasar a Doc E si no se cumple todo:

- [ ] La URL preview o producción es accesible.
- [ ] Las familias de página activas están construidas.
- [ ] Los slugs implementados coinciden con Doc A Regenerado.
- [ ] Metadata y canonical están implementados.
- [ ] Sitemap y robots existen.
- [ ] El schema mínimo por familia está implementado.
- [ ] El enlazado interno responde a la matriz.
- [ ] No quedan páginas huérfanas conocidas.
- [ ] Las CTAs y el NAP están visibles donde toca.
- [ ] Se han documentado incidencias y desviaciones.
