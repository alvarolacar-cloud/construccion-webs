# 04_QA_CHECKLIST.md — Fase F: Medición e Iteración

## Gate de calidad

No pases a la siguiente fase hasta completar esta checklist.

## Datos

- [ ] Se usaron datos reales. Si una fuente (Search Console, GBP Insights, GeoGrid, Analytics) no está disponible, se declara explícitamente como `not_available` en la sección "Fuentes de datos" del output. `not_available` aquí significa "la fuente de métrica no existe", no es un `estado` de dato del sistema.
- [ ] No se usaron datos simulados como evidencia.
- [ ] Las fuentes y periodos están documentados.

## Diagnóstico

- [ ] Indexación revisada.
- [ ] Search Console revisado.
- [ ] GBP Insights revisado si disponible.
- [ ] GeoGrid revisado si disponible.
- [ ] Servicios y zonas débiles identificadas.

## Acciones

- [ ] No se recomiendan páginas nuevas sin evidencia.
- [ ] Los GeoArticles recomendados refuerzan páginas existentes.
- [ ] Las location pages nuevas requieren ciudad operativa real.
- [ ] Las acciones están priorizadas.

## Output

- [ ] Se generó PLAN_MEDICION_ITERACION_30_60_90.md.
- [ ] El JSON cumple 03_OUTPUT_SCHEMA.json.
- [ ] Hay plan 30/60/90.
