# 04_QA_CHECKLIST.md — Fase D: Construcción Web

## Gate de calidad

No pases a la siguiente fase hasta completar esta checklist.

## Rutas

- [ ] Todas las URLs aprobadas en Fase B existen.
- [ ] No hay rutas duplicadas.
- [ ] No hay páginas huérfanas.
- [ ] No hay page types no canónicos.

## SEO técnico

- [ ] Cada página tiene H1 único.
- [ ] Cada página tiene meta title y meta description.
- [ ] Cada página tiene canonical.
- [ ] Sitemap y robots están presentes.
- [ ] Schema JSON-LD implementado por tipo de página.

## GMB Crush

- [ ] El interlinking respeta la jerarquía.
- [ ] Service Overview y Location-Based no se confunden.
- [ ] GeoArticles enlazan a página transaccional y GeoHub.
- [ ] GeoHub enlaza páginas locales de la ciudad.

## Producción

- [ ] No hay placeholders críticos.
- [ ] No hay datos provisionales en producción.
- [ ] Contenido SEO crítico está renderizado en HTML.
- [ ] No se han commiteado secretos o tokens.

## Output

- [ ] Se generó LOG_CONSTRUCCION_GMB_CRUSH.md.
- [ ] Se generó QA_TECNICO_GMB_CRUSH.md.
- [ ] El JSON cumple 03_OUTPUT_SCHEMA.json.
- [ ] El handoff a Fase E está completo.
