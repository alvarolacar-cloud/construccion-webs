# 04_QA_CHECKLIST.md — Fase A: Hipótesis Inicial

## Gate de calidad

No pases a la siguiente fase hasta completar esta checklist.

## Input y estados

- [ ] El input humano recibido está copiado y normalizado.
- [ ] Cada dato importante tiene `origen` declarado (humano / inventado / investigado / doctrina).
- [ ] Cada dato importante tiene `estado` declarado (final / provisional).
- [ ] Ningún dato `inventado` de identidad del negocio (nombre, teléfono, email, dominio, horarios) está marcado como `final`. Todos son `provisional`.
- [ ] Los datos provisionales están listados en la sección correspondiente del output.

## GBP y servicios

- [ ] La categoría GBP principal candidata está justificada.
- [ ] Las categorías adicionales no son decorativas.
- [ ] Hay 3–6 servicios MVP salvo justificación documentada.
- [ ] Los servicios excluidos se respetan.

## Geografía

- [ ] Ciudad principal, ciudades operativas y ciudades de análisis están separadas.
- [ ] Las ciudades de análisis tienen pageEligible=false.
- [ ] Los barrios no tienen página propia por defecto.

## Arquitectura

- [ ] Se usan solo page types canónicos.
- [ ] No aparece el page type budget.
- [ ] Hay homepage, Service Overview, Location-Based, GeoHub y GeoArticles iniciales cuando aplica.
- [ ] Cada página tiene URL, prioridad, alcance y estado.

## Output

- [ ] El Markdown sigue 02_OUTPUT_TEMPLATE.md.
- [ ] El JSON cumple 03_OUTPUT_SCHEMA.json.
- [ ] El handoff a Fase B está completo.
