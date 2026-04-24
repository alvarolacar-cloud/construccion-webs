# 01_INPUT.md — Fase E: GBP Build & Optimization

## Objetivo

Crear un plan de construcción u optimización de Google Business Profile alineado con la web GMB Crush ya diseñada/construida.

Esta fase existe porque el escenario es **sin web y sin GBP**. La web no está completa estratégicamente si no se conecta con una GBP correctamente categorizada, enlazada y soportada por contenido.

## Archivos de esta fase

Lee también:

```txt
03_OUTPUT_SCHEMA.json
04_QA_CHECKLIST.md
```

Consume:

```txt
HIPOTESIS_CONTRASTADA_GMB_CRUSH.md
HIPOTESIS_CONTRASTADA_GMB_CRUSH.json
BUILD_OUTPUT_GMB_CRUSH.json
QA_TECNICO_GMB_CRUSH.md
datos reales del negocio
```

Produce:

```txt
PLAN_GBP_BUILD_OPTIMIZATION.md
GBP_BUILD_OUTPUT.json
```

## Reglas de seguridad y veracidad

No inventes:

- nombre legal;
- dirección;
- teléfono;
- horarios;
- reseñas;
- fotos reales;
- certificaciones;
- licencias;
- atributos;
- zonas donde no opera;
- fecha de apertura;
- URLs que no existen.

Si falta un dato del negocio (lo típico en este objetivo porque el humano solo aporta 5 inputs al arranque), márcalo `origen: inventado, estado: provisional` y lístalo en la sección "Datos provisional pendientes de sustituir" del output. El humano los sustituirá antes de publicar.

## Tareas obligatorias

### 1. Definir identidad GBP

Preparar:

- nombre recomendado;
- nombre legal si existe;
- NAP;
- tipo de negocio: physical, SAB o hybrid;
- ciudad principal;
- país/mercado;
- teléfono;
- URL principal;
- URL de cita/contacto si aplica;
- horario;
- fecha de apertura si existe.

### 2. Definir categorías GBP

Usar Fase B como fuente:

- categoría principal;
- categorías adicionales;
- motivo de cada categoría;
- páginas web que soportan cada categoría;
- riesgo de mala alineación.

Regla:

```txt
Ninguna categoría GBP importante debe quedar sin soporte web.
```

### 3. Definir servicios GBP

Crear lista de servicios GBP alineada con:

- servicios MVP;
- Service Overview Pages;
- Location-Based Service Pages;
- Additional Category Pages.

Para cada servicio:

- nombre;
- descripción breve;
- categoría asociada;
- URL soporte;
- prioridad;
- estado.

### 4. Definir áreas de servicio

Separar:

- ciudad principal;
- áreas operativas reales;
- áreas futuras;
- ciudades de análisis que NO son áreas servidas.

No transformar ciudades de análisis en áreas de servicio.

### 5. Crear descripción GBP

Redactar:

- descripción corta;
- descripción larga;
- versión natural y no keyword-stuffed;
- servicios principales;
- ciudad/zona principal;
- propuesta de valor;
- CTA.

### 6. Plan de fotos y activos

Definir qué activos se necesitan:

- logo;
- portada;
- exterior/interior si aplica;
- equipo;
- trabajos reales;
- vehículos;
- herramientas;
- antes/después si permitido;
- imágenes de servicio;
- geocontexto real si existe.

Nunca usar fotos falsas como si fueran reales.

### 7. Q&A inicial

Proponer preguntas y respuestas:

- servicios;
- cobertura;
- precios / presupuestos;
- tiempos;
- garantías;
- proceso;
- emergencias;
- requisitos.

### 8. Posts iniciales

Proponer posts GBP:

- lanzamiento;
- servicio principal;
- servicio secundario;
- área de servicio;
- oferta si existe;
- FAQ / educativo;
- llamada a contacto.

### 9. Website links y UTM

Mapear:

- link principal a homepage;
- link de cita/contacto;
- links de servicios si aplica;
- UTM recommended.

### 10. Review strategy

Definir estrategia ética:

- cuándo pedir review;
- cómo pedirla;
- qué preguntas internas usar para guiar feedback;
- qué no hacer;
- cómo responder reviews.

No crear reviews falsas ni incentivar reseñas incumpliendo normas.

## Errores a evitar

- Elegir categoría por volumen y no por intención.
- Crear categorías sin páginas soporte.
- Usar ciudades de análisis como áreas servidas.
- Inventar NAP.
- Inventar fotos.
- Inventar reseñas.
- Crear posts sin conexión con páginas.
- Omitir UTM.
- No marcar datos pendientes de confirmación.
