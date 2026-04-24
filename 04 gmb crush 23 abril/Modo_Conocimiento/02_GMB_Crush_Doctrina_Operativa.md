# GMB Crush Execution Playbook

**Versión:** Consolidación operativa v1.0  
**Uso recomendado:** prompts, SOPs, secuencia de producción, QA y handoff para ejecutar la metodología GMB Crush.  
**Documento hermano:** `01_GMB_Crush_Master_Framework.md`

---

## 0. Qué es este playbook

Este documento es la **capa ejecutable** del sistema GMB Crush.

El Master Framework define la doctrina. Este playbook responde:

- qué datos pedir;
- qué prompt usar;
- en qué orden trabajar;
- qué output exigir;
- cuándo crear página nueva;
- cuándo ampliar una existente;
- cómo evitar duplicados;
- cómo revisar antes de publicar;
- cómo convertir auditoría en arquitectura, contenido, interlinking y QA.

Los prompts están escritos mayoritariamente en inglés para mantener compatibilidad con las fuentes originales y con flujos LLM internacionales. Para trabajar en español, añade esta línea al final de cualquier prompt:

```text
Output language: Spanish.
```

Para trabajar en otro idioma:

```text
Output language: [INSERT LANGUAGE].
```

---

## 1. Paquete de intake obligatorio

Antes de ejecutar cualquier auditoría o prompt maestro, recopila estos datos.

```text
Business Name:
Website URL:
Full NAP:
Primary GBP Category:
Additional GBP Categories:
List of Services:
Service Area Cities:
```

## 1.1 Intake ampliado recomendado

```text
Sitemap XML:
GBP URL:
GBP service list exactly as shown:
Main city:
Physical address status:
Service area business? Yes/No:
Core service by margin:
Core service by demand:
Core service by urgency:
Core service by close rate:
Known differentiators:
Top reviews / trust proof:
Existing URLs:
Search Console notes:
GeoGrid report:
Competitor websites:
Competitor backlink CSV:
Known content constraints:
Preferred tone:
Output language:
```

## 1.2 Regla de oro del intake

No aceptes la lista de servicios como “folleto comercial”. La lista debe clasificarse.

| Tipo | Definición | Acción |
|---|---|---|
| Core Service | Define la entidad y tiene intención comercial alta. | Service Overview + Location Pages. |
| Secondary Service | Importante, pero no ancla toda la entidad. | Service Overview o Additional Category. |
| Support Service | Complementa venta o ticket medio. | Sección, FAQ, GeoArticle o página si hay demanda. |
| Satellite / Informational | Alimenta preguntas, guías y boosters. | GeoArticle o FAQ. |
| Non-Strategic | No merece prioridad. | No construir todavía. |

---

## 2. Secuencia completa de ejecución

La secuencia recomendada evita crear páginas sin padre, duplicar intents o escalar antes de validar.

```text
0. Intake y normalización
1. Inventario estratégico del negocio
2. Auditoría GBP ↔ website
3. Roadmap de arquitectura
4. Homepage
5. Service Overview Pages
6. Location-Based Service Pages
7. Additional Category Pages
8. GeoHub matrix
9. GeoHub full content
10. AI question extraction and clustering
11. GeoArticle ideation
12. GeoArticle writing
13. Service Area Overview
14. Contact Page
15. Internal linking orchestrator
16. Schema reviewer
17. QA master reviewer
18. Implementation backlog
19. Optional: AI Mode reinjection
20. Optional: Competitor comparison pages
21. Optional: Geo link intelligence
```

---

# PROMPT 00 — Intake Normalizer

## Cuándo usarlo

Úsalo al recibir datos del cliente para convertir información desordenada en un paquete ejecutable.

```text
You are a senior GMB Crush Local SEO strategist.

I will provide raw business information. Your task is to normalize it into a clean GMB Crush project intake.

Raw data:
[PASTE ALL RAW CLIENT DATA]

Return the output in this format:

1. Business Entity Summary
- Business Name:
- Website:
- Full NAP:
- Main City:
- Service Area Business?:
- Primary GBP Category:
- Additional GBP Categories:

2. Services
Create a table:
- Service
- Strategic Tier (Core / Secondary / Support / Satellite / Non-Strategic)
- Buyer Intent
- Needs Service Overview Page? Yes/No
- Needs Location Page? Yes/No
- Needs Additional Category Page? Yes/No
- Notes

3. Cities
Create a table:
- City
- Role (Primary City / Central Expansion City / Representative Market / Low Priority)
- Why
- Best first service to target
- Recommended first page type
- Risk of overextension

4. Missing Inputs
List any missing information that would improve the audit.

5. First Strategic Hypothesis
In 3–5 sentences, explain what this business should lead with.
```

---

# PROMPT 01 — Strategic Inventory Before Audit

## Cuándo usarlo

Antes de auditar el sitio. Sirve para decidir entidad, servicios, ciudades y foco.

```text
You are a senior Local SEO strategist operating under the GMB Crush methodology.

I need a full strategic inventory of this local business BEFORE any website or GBP optimization begins.

Business data:
- Business Name: [INSERT]
- Website URL: [INSERT]
- Full NAP: [INSERT]
- Primary GBP Category: [INSERT]
- Additional GBP Categories: [INSERT]
- Services: [INSERT]
- Service Area Cities: [INSERT]
- Notes about business model, customers, margins, urgency, reviews, and differentiators: [INSERT]

Your task:
1. Define the real business entity in one precise sentence.
2. Identify core services, secondary services, support services, satellite/informational services, and non-strategic services.
3. Evaluate whether the primary GBP category truly matches business intent.
4. Determine which cities are most defensible based on local SEO logic and operational realism.
5. Flag mismatches between category, services, and service areas.
6. Return a decision matrix:
   - Service
   - Strategic Tier
   - Buyer Intent Type
   - Needs Service Overview Page?
   - Needs Location Page?
   - Needs Additional Category Page?
   - Notes
7. End with: “What should this business lead with in the audit?”

Avoid generic SEO advice. Think like an architect, not a blogger.
```

---

# PROMPT 02 — Full GMB Crush Audit

## Cuándo usarlo

Este es el prompt central para auditar la alineación entre GBP, website y arquitectura.

```text
Perform a complete Local SEO audit using the GMB Crush methodology.

Business data:
- Business Name: [INSERT]
- Website URL: [INSERT]
- Full NAP: [INSERT]
- Primary GBP Category: [INSERT]
- Additional GBP Categories: [INSERT]
- Services: [INSERT]
- Service Area Cities: [INSERT]
- Sitemap XML or URL list: [INSERT]

Instructions:
1. Evaluate whether the Primary GBP Category matches the real business intent.
2. Identify high-intent keywords typically associated with this category.
3. Analyze whether the website supports this category with content, page structure, schema, internal links, and semantic depth.
4. Score each service from ★☆☆☆☆ to ★★★★★ based on:
   - dedicated page existence
   - local intent support
   - GBP alignment
   - schema
   - internal linking
   - geo relevance
   - topical authority
5. Analyze site structure and hierarchy.
6. Identify missing or weak:
   - homepage elements
   - service overview pages
   - location-based service pages
   - additional category pages
   - GeoHub pages
   - GeoArticles
   - Service Area Overview
   - Contact Page
7. Identify internal linking opportunities.
8. Identify schema gaps and entity inconsistencies.
9. Identify cannibalization risk.
10. Return the audit using this exact structure:

# Local SEO Analysis Using GMB Crush Framework

Business Name:
Primary GBP Category:
Website:
Physical Address:
Service Areas:

## Primary Category Analysis

## Homepage Optimization Audit

## Ranking for Key Services
For each service:
- Current Ranking Chance: ★☆☆☆☆ to ★★★★★
- Why?
- Solution:

## Website SEO Checkpoints
Use a table with:
- Factor
- Status ✅ / ❌
- Notes

Include:
- Homepage includes key services
- Dedicated service pages
- City-specific location pages
- Schema markup
- H1/H2 structure
- Internal linking
- GeoHub coverage
- GeoArticle support
- Additional category support
- Contact/NAP consistency

## Strategic Learning

## What To Do Next
Phase 1: Build Core Service Pages
Phase 2: Build Top Location Pages and GeoHubs
Phase 3: Internal Linking, GeoArticles and Geo Silo

## Final Scorecard
Use a table:
- Page Type
- Exists?
- Ranking Strength: Low / Medium / High
- Notes

## Final Takeaway
End with:
“Use GMB Crush to track your geo-grid progress after implementation.”
```

---

# PROMPT 03 — Architecture Roadmap / Authority Expansion Engine

## Cuándo usarlo

Después de la auditoría, para convertir hallazgos en arquitectura.

```text
You are an advanced GMB Crush SEO Topic Definer working inside an already-audited local SEO project.

Context available:
- Business data
- Primary GBP category
- Additional GBP categories
- Full service list
- Service areas / cities
- Sitemap analysis
- Existing page structure
- Alignment audit findings

Your mission:
Expand the website architecture WITHOUT deleting, replacing, or restructuring the current sitemap unnecessarily.

Critical rule:
Do not modify existing sitemap architecture unless there is an obvious duplicate, cannibalization issue, or structural error.

Tasks:
1. Analyze current structure and identify content gaps.
2. Build ideal Service Overview architecture.
3. Build ideal Location Page expansion using correct hierarchy.
4. Create Additional Category Page opportunities based on GBP categories.
5. Create GeoHub opportunities by city.
6. Generate GeoArticle opportunities that support high-value service × city combinations.
7. Define internal linking architecture.
8. Identify missing semantic entities and supporting topics needed for deeper authority and AI visibility.

Return sections:
1. Existing Structure Analysis
2. Service Cluster Expansion
3. Location Silo Expansion
4. Additional Category Support
5. GeoHub Structure
6. GeoArticle Authority Boosters
7. Internal Linking Architecture
8. Semantic Entity Expansion
9. Build Priority
10. Do Not Duplicate Existing Page Warnings
```

---

# PROMPT 04 — Homepage Optimization Audit and Rewrite Plan

## Cuándo usarlo

Para analizar o reescribir la homepage.

```text
You are a GMB Crush homepage optimization strategist.

Analyze this homepage:
- Homepage URL: [INSERT]
- Brand Name: [INSERT]
- Primary GBP Category: [INSERT]
- Primary Service: [INSERT]
- Main City / Area: [INSERT]
- Full NAP: [INSERT]
- Core Services: [INSERT]
- Existing homepage copy or notes: [PASTE]

Your task:
1. Analyze whether the homepage reflects the Primary GBP Category.
2. Evaluate whether the H1 establishes:
   - brand
   - primary service
   - main city
3. Suggest a stronger H1 using:
   [Brand Name] + [Primary Service] + [City]
4. Generate 5–7 NLP-optimized H2/H3 headings in FAQ style.
5. Suggest semantic signals, related entities, synonyms, and co-occurrence terms.
6. Rewrite:
   - Meta Title under 60 characters
   - Meta Description under 160 characters
7. Write a 2-sentence Quick Answer block for AI Overview and voice search.
8. Create a mini service menu with 4–6 services and one-line descriptions.
9. Suggest 5 internal links from homepage with optimized anchors.
10. Suggest FAQPage + Speakable schema if FAQs are visible or recommended.
11. Identify what must be added to support GBP category relevance.

Return:
- Homepage Diagnosis
- Recommended H1
- Metadata
- Quick Answer
- Section Outline
- Mini Service Menu
- Semantic Entity List
- Internal Links
- Schema Recommendations
- Priority Fixes
```

---

# PROMPT 05 — Homepage Full Content Writer

## Cuándo usarlo

Para generar una homepage completa o una reescritura profunda.

```text
You are a senior GMB Crush SEO strategist and conversion copywriter.

Write a complete homepage for a LocalBusiness website using the GMB Crush methodology.

Variables:
- Brand Name: [INSERT]
- Website URL: [INSERT]
- Primary GBP Category: [INSERT]
- Primary Service: [INSERT]
- Main City / Region: [INSERT]
- Full NAP: [INSERT]
- Core Services: [INSERT]
- Service Area Cities: [INSERT]
- Trust Signals: [INSERT]
- Differentiators: [INSERT]
- Contact URL: [INSERT]
- Service Area Overview URL: [INSERT]
- Main GeoHub URL: [INSERT]

Requirements:
- Root Entity Anchor positioning
- H1 with Brand + Primary Service + City
- Meta Title under 60 characters
- Meta Description under 160 characters
- Opening paragraph with brand, primary service and main city
- Quick Answer block
- 3–6 core services with one-line explanations and internal link anchors
- Trust blocks
- Service area summary with link to Service Area Overview
- Internal links to Service Overview Pages, Main GeoHub, Additional Category Pages, Contact Page
- 3–5 FAQs in natural language
- Clear CTA
- NAP visible and crawlable
- JSON-LD recommendations:
  Organization, WebSite, optional LocalBusiness, FAQPage, Speakable

Tone:
Human, confident, local, clear. No keyword stuffing.

Return:
1. Meta Title
2. Meta Description
3. H1
4. Full homepage draft
5. Internal link map
6. Schema JSON-LD suggestions
7. QA checklist
```

---

# PROMPT 06 — Service Overview Architecture

## Cuándo usarlo

Antes de redactar Service Overview Pages. Define qué páginas de servicio merecen existir.

```text
Using the audited business context, generate the ideal Service Overview Page architecture.

Inputs:
- Primary GBP Category: [INSERT]
- Core Services: [INSERT]
- Secondary Services: [INSERT]
- Existing URLs: [INSERT]
- Priority Cities: [INSERT]
- Additional GBP Categories: [INSERT]

For each core or secondary service, provide:
- Recommended URL
- H1 direction
- Primary intent
- Why this page must exist
- Which city pages it should parent
- Which complementary services it should cross-link to
- Which objections or FAQs it should cover
- Which semantic entities are mandatory
- Priority: Now / Later / Not Yet

Rules:
- No geo in the core service page body positioning.
- This page is the topical authority parent.
- It must support future /category/city/service/ pages.
- It must not collapse multiple unrelated services into one URL.
- Do not create a Service Overview if the intent is too weak.
```

---

# PROMPT 07 — Service Overview Full Writer

## Cuándo usarlo

Para escribir una página de servicio no geolocalizada.

```text
You are a senior SEO strategist and expert content writer.

Write a fully optimized Service Overview Page based on the GMB Crush Site Structure Framework.

This is a non-geolocated, brand-centric service page located at:
https://www.yourdomain.com/[primary-category]/[service]/

Variables:
- Brand Name: [INSERT]
- Website Root Domain: [INSERT]
- Primary Category: [INSERT]
- Service: [INSERT]
- Related Services: [INSERT]
- Future City Variants: [INSERT]
- Trust Signals: [INSERT]
- Differentiators: [INSERT]

Goal:
Position this page as the topical authority parent for all location-based pages.

Requirements:
- 850–1000 words
- H1 with [Service] in a trust-building format
- Meta Title under 60 characters
- Meta Description under 160 characters
- Intro paragraph 100–150 words
- No local references in the core positioning
- AUDIO-structured body:
  - Authority
  - Uniqueness
  - Depth
  - Intent
  - Optimization
- Bullet points in at least 2 sections
- 3–5 FAQs
- Low-pressure CTA
- Internal links:
  - homepage
  - related service overview pages
  - 2–3 relevant future or existing city pages
  - 1 useful resource / GeoArticle
- Optional JSON-LD:
  Service + WebPage + BreadcrumbList + Speakable

Return:
1. Meta Title
2. Meta Description
3. H1
4. Full content
5. FAQs
6. CTA
7. Internal link suggestions
8. Schema JSON-LD
9. Semantic entities to include
```

---

# PROMPT 08 — Location Silo Expansion

## Cuándo usarlo

Antes de escribir páginas ciudad + servicio. Genera el mapa de qué páginas locales construir.

```text
Based on the current audit and the GMB Crush hierarchy, generate the ideal list of Location-Based Service Pages.

Inputs:
- Brand Name: [INSERT]
- Primary Category: [INSERT]
- Core Services: [INSERT]
- Priority Cities: [INSERT]
- GBP Service Areas: [INSERT]
- Existing location pages: [INSERT]
- Service Overview Pages: [INSERT]

For each proposed page, return:
- URL
- Parent Service Overview Page
- Parent GeoHub
- Buyer intent
- Why it deserves a page
- Required local context
- Required internal links
- Required schema
- Priority: Phase 1 / Phase 2 / Phase 3 / Not Yet
- Cannibalization warning if any

Rules:
- Do not create multiple pages for the same service-city intent.
- Do not mix multiple cities in one location page.
- Do not skip the service parent relationship.
- Do not recommend a page for a weak or non-defensible city.
```

---

# PROMPT 09 — Location-Based Service Page Full Writer

## Cuándo usarlo

Para escribir una página `/category/city/service/`.

```text
You are a senior-level SEO strategist and content writer.

Create a location-specific service landing page that ranks on traditional Google search and AI-powered features like Google AI Overview.

Follow the AUDIO framework:
Authority, Uniqueness, Depth, Intent, Optimization.

Target URL format:
https://www.yourdomain.com/[primary-business-category]/[city-slug]/[service]/

Variables:
- Brand Name: [INSERT]
- Website Root Domain: [INSERT]
- Primary Category: [INSERT]
- Service: [INSERT]
- City: [INSERT]
- State / Region: [INSERT]
- Phone: [INSERT]
- Email: [INSERT]
- Full NAP: [INSERT]
- Parent Service Overview URL: [INSERT]
- City GeoHub URL: [INSERT]
- Related Services in Same City: [INSERT]
- Same Service in Other Cities: [INSERT]
- Related GeoArticles: [INSERT]
- Local Context Notes: [INSERT]
- Trust Signals: [INSERT]

Requirements:
- 800–1000 words
- Natural H1 using service + city
- Meta Title under 60 characters
- Meta Description under 160 characters
- Intro paragraph with real local nuance
- 3–5 H2 sections following AUDIO
- Bullet points in at least 2 sections
- 3–5 FAQs with city-based concerns
- Local CTA
- Natural internal links to:
  - parent Service Overview
  - main city page / GeoHub
  - other services in same city
  - same service in other cities when relevant
  - related GeoArticle
- Valid LocalBusiness JSON-LD with areaServed
- Do not claim physical presence in the city unless explicitly true.
- Avoid template cloning.

Return:
1. Meta Title
2. Meta Description
3. H1
4. Full page content
5. FAQ section
6. CTA
7. Internal link map
8. JSON-LD
9. Uniqueness warning
```

---

# PROMPT 10 — Additional Category Page Full Writer

## Cuándo usarlo

Para respaldar una categoría adicional del GBP con una página localizada.

```text
You are a senior SEO strategist and expert content editor.

Create an Additional Business Category Page for one GBP additional category, fully structured for Google AI Overview and using the AUDIO framework.

Target URL:
https://www.yourdomain.com/[category]/[city]/[service]/

Variables:
- Brand Name: [INSERT]
- Website Root Domain: [INSERT]
- Primary Category: [INSERT]
- Additional GBP Category: [INSERT]
- Service related to Additional Category: [INSERT]
- City: [INSERT]
- Main GeoHub URL: [INSERT]
- Related Location-Based Service Pages: [INSERT]
- Related GeoArticles: [INSERT]
- Contact URL: [INSERT]
- Trust Signals: [INSERT]
- Local Context Notes: [INSERT]

Goals:
- Build topical authority for the additional category in the city.
- Match informational and commercial search intent.
- Strengthen internal semantic linking.
- Support local relevance through GEO-optimized language.

Requirements:
- 800–1000 words
- H1 with service + city
- Meta Title under 60 characters
- Meta Description under 160 characters
- Intro paragraph 100–150 words beginning with a common local scenario
- H2 sections based on AUDIO:
  - Authority
  - Uniqueness
  - Depth
  - Intent
  - Optimization
- Bullet points in at least 2 sections
- 3–5 long-tail FAQs
- CTA mentioning location
- Internal links to:
  - city hub
  - related services within the city
  - helpful resource or blog content
- Optional Service JSON-LD with areaServed

Rules:
- Do not duplicate the primary service landing page.
- Make clear which GBP additional category this page supports.
- Do not mix multiple additional categories unless they share the same intent.
```

---

# PROMPT 11 — GeoHub Matrix Generator

## Cuándo usarlo

Para generar la matriz de hubs y páginas por ciudad.

```text
You are Matteo from GMB Crush, acting as a GeoHub architecture strategist.

Generate the ideal GeoHub Pages and city-level content clusters based on the following variables:

- Primary Business Category Slug: [INSERT]
- Service List: [INSERT]
- Target Cities: [INSERT]
- Website Root Domain: [INSERT]
- State / Region: [INSERT]
- Additional GBP Categories: [INSERT]
- Existing URLs or Sitemap: [INSERT]

Instructions:
1. Follow GMB Crush structure logic.
2. Create a clean matrix table with cities as rows and services as columns.
3. For each city cluster, provide:
   - Suggested GeoHub URL
   - Suggested GeoHub Title
   - Suggested GeoHub H1
   - Required Location-Based Service Pages
   - Required Additional Category Pages
   - Required GeoArticles
   - Parent Service Overview URLs
4. Highlight missing cities or service variations based on semantic or regional gaps.
5. Suggest the best parent internal links from the homepage and service pages.
6. Flag city clusters that are not defensible yet.

Return:
- GeoHub Matrix
- City Priority Notes
- Required Parent Pages
- Missing Assets
- Build Order
```

---

# PROMPT 12 — GeoHub Full Content Writer

## Cuándo usarlo

Para redactar una GeoHub Page completa.

```text
Act as a senior GMB Crush strategist and write a complete GeoHub Page.

Variables:
- Brand Name: [INSERT]
- Root Domain: [INSERT]
- Industry / Primary Category: [INSERT]
- City: [INSERT]
- State / Region: [INSERT]
- Main Service Overview Pages: [INSERT]
- Location-Based Service Pages in this city: [INSERT]
- Additional Category Pages in this city: [INSERT]
- Related GeoArticles: [INSERT]
- Local proof points: [INSERT]
- Neighborhoods / subareas served: [INSERT]
- Contact URL: [INSERT]

Objectives:
- Turn this URL into the main city container.
- Aggregate all relevant local assets.
- Improve geographic clarity and navigation.
- Support semantic and entity relevance without cannibalizing a single landing.

Required structure:
1. Suggested URL
2. Meta Title
3. Meta Description
4. H1
5. Useful contextual intro
6. Services in the city
7. Additional solutions / categories in the city
8. Helpful resources and GeoArticles
9. Local proof or context
10. Brief FAQs
11. Final CTA
12. Internal link plan
13. JSON-LD with CollectionPage + BreadcrumbList

Requirements:
- 1200–1800 words
- Human, local and useful tone
- No filler
- Do not treat the GeoHub as a landing for one service
- Every link must have a clear reason
```

---

# PROMPT 13 — AI Question Extraction

## Cuándo usarlo

Para extraer preguntas desde AI Mode, AI Overview, People Also Ask u otro dataset conversacional.

```text
You are continuing the local search analysis already started in this conversation.

Do NOT restart the research. Use the previously analyzed local service query and all context already surfaced in this chat.

Your task:
Generate a deep list of AI-generated questions that real users or AI systems would associate with this topic.

Original query / context:
[INSERT SERVICE + CITY OR CATEGORY + CITY CONTEXT]

Rules:
1. Generate at least 40 questions.
2. Each line must contain only one question.
3. No numbering.
4. No explanations.
5. Every question must start with one of:
   What, How, Why, Where, When, Which, Who, Is, Can, Does, Do, Are
6. Every question must be directly relevant to the original service + location context.
7. Cover:
   - pricing and cost
   - comparisons
   - trust and reviews
   - local options
   - timelines
   - requirements / eligibility
   - risks / limitations
   - technology / methods
   - location-specific concerns
   - expected outcomes

If a question is generic or disconnected, discard it and replace it.
```

---

# PROMPT 14 — AI Question Clustering

## Cuándo usarlo

Después de extraer preguntas. Decide qué preguntas amplían páginas existentes y cuáles justifican nuevos activos.

```text
You are an advanced GMB Crush data clustering analyst.

I will provide:
- Full AI question extraction dataset
- Primary GBP category
- Core service
- Target city or cities
- Existing sitemap / page inventory summary

Dataset:
[PASTE QUESTIONS]

Your task:
1. Cluster all questions by topical intent.
2. Label each cluster by dominant intent:
   - Informational
   - Transactional
   - Comparison
   - Trust / Reputation
   - Pricing / Cost
   - Process / Timeline
   - Eligibility / Fit
   - Local Specificity
3. For each cluster, explain:
   - What users really want to know
   - Whether the site already has a page that should answer this
   - If yes, which page should be expanded
   - If not, what new content asset should be created:
     - FAQ section
     - FAQ cluster page
     - GeoArticle
     - New service page
     - New location page
4. Do NOT recommend a new page if a current page already covers the same intent.
5. Cross-reference everything with the existing sitemap before making recommendations.

Output format:
- Cluster Name
- Search Intent
- Representative Questions
- Recommended Target Page
- Action: Expand / Create / Ignore
- Why this action is correct
```

---

# PROMPT 15 — GeoArticle Ideation Master

## Cuándo usarlo

Para generar ideas de GeoArticles que soporten service pages y GeoHubs.

```text
You are Matteo from GMB Crush, a Top 1% Local SEO strategist specialized in semantic site architecture, AI visibility, and hyperlocal content engineering.

Generate a complete list of GeoArticle Pages that support my Service Pages and GeoHub Pages.

Variables:
- Primary Business Category Slug: [INSERT]
- Service List: [INSERT]
- Target Cities: [INSERT]
- Website Root Domain: [INSERT]
- Target Audience Type: [INSERT]
- Existing Location Pages: [INSERT]
- Existing GeoHubs: [INSERT]
- AI Question Clusters: [INSERT]

Instructions:
1. Generate 3 unique GeoArticle ideas for each Service × City pair.
2. For each idea provide:
   - SEO Page Title
   - H1 Suggestion
   - Suggested URL
   - Targeted Long-Tail Keyword
   - Intent Type
   - 1–2 Sentence Summary
   - Matching Location Page
   - Matching GeoHub
   - Why it matters
3. Prioritize ideas that:
   - solve objections
   - answer long-tail questions
   - support conversion pages
   - improve AI Overview inclusion
   - avoid duplicating landing pages

Return as a table grouped by city and service.
```

---

# PROMPT 16 — GeoArticle Full Writer

## Cuándo usarlo

Para redactar un GeoArticle seleccionado.

```text
Write a complete GeoArticle using the selected topic.

Selected topic:
- Page Title: [INSERT]
- H1: [INSERT]
- Service: [INSERT]
- City: [INSERT]
- Long-tail keyword: [INSERT]
- Intent type: [INSERT]
- Matching Location Page URL: [INSERT]
- Matching GeoHub URL: [INSERT]
- Related GeoArticle URL: [INSERT IF AVAILABLE]
- Brand Name: [INSERT]
- Local context notes: [INSERT]
- Trust signals: [INSERT]

Requirements:
- 1000–1500 words
- Introduction with geo-relevant, real-world context
- 3–5 subheaders covering unique angles
- 1–2 bullet point sections
- 3–5 FAQs using AI Overview-style phrasing
- Internal CTA at the end
- Natural city mentions
- No false claim that the business is physically located in the city unless true
- Use co-occurrence, LSI, NLP and entity terms tied to the service
- Internal links to:
  - corresponding /category/city/service/ page
  - city GeoHub
  - related GeoArticle if available

Also include:
- Suggested meta title
- Suggested meta description
- Schema recommendations:
  Article, FAQPage, BreadcrumbList, Speakable
- Explanation of which commercial objection this article helps neutralize
```

---

# PROMPT 17 — Service Area Overview Writer

## Cuándo usarlo

Cuando el negocio sirve varias ciudades o áreas y necesitas una página puente de cobertura.

```text
Act as a senior GMB Crush strategist and write a complete Service Area Overview Page.

Variables:
- Brand Name: [INSERT]
- Root Domain: [INSERT]
- Main City: [INSERT]
- Region / State: [INSERT]
- Service Area Cities: [INSERT]
- Core Services: [INSERT]
- Main GeoHub URL: [INSERT]
- Secondary GeoHub URLs: [INSERT]
- Contact URL: [INSERT]
- Existing Location Pages: [INSERT]

Objectives:
- Summarize the business’s territorial coverage.
- Lead users to hubs and city-service pages.
- Help users and Google understand where the brand operates.
- Avoid cannibalization with local landing pages.

Required structure:
1. Meta Title
2. Meta Description
3. H1
4. Territorial introduction
5. Main city block
6. Secondary cities / areas block
7. Core services across the coverage area
8. “Find Your City” section
9. Brief FAQ
10. Final CTA
11. Recommended internal links
12. JSON-LD with CollectionPage or ItemList + BreadcrumbList

Requirements:
- 900–1400 words
- Clear and navigable
- No filler
- Do not write mini-landings inside this page
- Do not use city stuffing
```

---

# PROMPT 18 — Contact Page Writer

## Cuándo usarlo

Para crear o mejorar la página de contacto.

```text
Act as a senior GMB Crush strategist and write a complete Contact Page.

Variables:
- Brand Name: [INSERT]
- Root Domain: [INSERT]
- Main City: [INSERT]
- Full NAP: [INSERT]
- Phone: [INSERT]
- Email: [INSERT]
- Business Hours: [INSERT]
- Core Services: [INSERT]
- Service Areas: [INSERT]
- Contact Goal: [INSERT]
- Service Area Overview URL: [INSERT]
- Main GeoHub URL: [INSERT]
- Privacy Policy URL: [INSERT]

Objectives:
- Centralize contact.
- Reinforce GBP and local entity consistency.
- Serve as CTA destination from the whole site.
- Improve trust and operational clarity.

Required structure:
1. Meta Title
2. Meta Description
3. H1
4. Intro with response expectation
5. Visible and clickable NAP
6. Hours
7. Map or honest service area explanation
8. “How we can help” section
9. Form microcopy
10. Brief FAQ
11. Final CTA
12. Recommended internal links
13. Suggested JSON-LD

Requirements:
- 700–1200 words
- Human, clear and trustworthy tone
- Zero filler
- Full consistency with GBP
```

---

# PROMPT 19 — Internal Linking Orchestrator

## Cuándo usarlo

Después de crear o planificar páginas. Sirve para construir el sistema nervioso del sitio.

```text
You are the GMB Crush Internal Linking Orchestrator.

I will provide:
- Website root domain: [INSERT]
- Sitemap / URL inventory: [INSERT]
- Page types and target roles: [INSERT]
- Service Overview Pages: [INSERT]
- Location-Based Service Pages: [INSERT]
- Additional Category Pages: [INSERT]
- GeoHub Pages: [INSERT]
- GeoArticles: [INSERT]
- Service Area Overview: [INSERT]
- Contact Page: [INSERT]
- Comparison Pages: [INSERT IF ANY]

Your task:
1. Classify every URL by GMB Crush page type.
2. Identify each page’s:
   - parent thematic page
   - city hub
   - sibling pages
   - supporting GeoArticles
   - conversion destination
3. Build an internal linking map with:
   - Source URL
   - Target URL
   - Anchor text
   - Link reason
   - Priority
4. Validate mandatory links:
   - Homepage → Service Overviews, Main GeoHub, Service Area Overview, Contact
   - Service Overview → local variants
   - Location Page → Service Overview + GeoHub + GeoArticles + Contact
   - Additional Category → GeoHub + related services
   - GeoHub → all city services, categories and articles
   - GeoArticle → matching Location Page + GeoHub
   - Service Area Overview → GeoHubs + top local pages
   - Contact → key pages
5. Identify orphan pages.
6. Identify overlinked or irrelevant links.
7. Identify cannibalization risks caused by links.
8. Return the corrected linking architecture.

Output:
- Link Map Table
- Missing Critical Links
- Orphan Pages
- Anchor Text Recommendations
- Priority Fixes
- Final Internal Linking Verdict
```

---

# PROMPT 20 — Schema Builder and Reviewer

## Cuándo usarlo

Para generar o revisar schema por tipo de página.

```text
You are a GMB Crush Schema Doctrine specialist.

I will provide:
- URL: [INSERT]
- Page Type: [Homepage / Service Overview / Location-Based Service / Additional Category / GeoHub / GeoArticle / Service Area Overview / Contact / Comparison]
- Brand Name: [INSERT]
- Website Root Domain: [INSERT]
- Service: [INSERT IF APPLICABLE]
- City: [INSERT IF APPLICABLE]
- Full NAP: [INSERT IF APPLICABLE]
- Phone: [INSERT]
- Email: [INSERT]
- GBP URL or sameAs profiles: [INSERT]
- Visible FAQ content: [INSERT]
- Breadcrumb hierarchy: [INSERT]
- Existing schema if any: [INSERT]

Your task:
1. Determine the correct primary schema for this page type.
2. Determine valid supporting schemas.
3. Identify schema that should NOT be used.
4. Generate valid JSON-LD.
5. Confirm that every schema element is supported by visible content.
6. Flag:
   - misleading LocalBusiness usage
   - FAQPage without visible FAQs
   - areaServed without editorial support
   - mismatched breadcrumb hierarchy
   - duplicate schema risk from plugins

Return:
- Schema Diagnosis
- Recommended Schema Types
- JSON-LD
- Fields Requiring Verification
- Do Not Use Warnings
- Final Schema Verdict
```

---

# PROMPT 21 — QA Master Reviewer

## Cuándo usarlo

Antes de publicar cualquier página o después de una reescritura.

```text
You are the GMB Crush QA Master Reviewer.

Review this page or page draft using GMB Crush methodology.

Inputs:
- Page URL or Draft: [INSERT]
- Page Type: [INSERT]
- Target Service: [INSERT]
- Target City: [INSERT IF ANY]
- Primary GBP Category: [INSERT]
- Additional GBP Category supported: [INSERT IF ANY]
- Parent Page: [INSERT]
- GeoHub: [INSERT]
- Existing internal links: [INSERT]
- Schema: [INSERT]

Score each criterion from 0 to 5:
1. Role Clarity
2. GBP / Category Alignment
3. Intent Match
4. Authority
5. Uniqueness
6. Depth
7. Optimization
8. Geo Relevance
9. Internal Linking
10. Schema Coherence
11. AI Overview Readiness
12. Conversion Readiness
13. Cannibalization Risk

Use this scoring:
- 0 = absent
- 1 = very weak
- 2 = insufficient
- 3 = acceptable
- 4 = strong
- 5 = excellent

Return:
# QA REPORT · GMB Crush

Page Type:
URL:
Target Service:
Target City:
Parent Page:
GeoHub:
Review Date:

## Scorecard
Use a table:
- Criterion
- Score
- Notes
- Fix Needed

## Total Score

## Verdict
Choose one:
- Publish now
- Revise lightly
- Major rewrite needed
- Do not publish

## Critical Fixes
List the top 3–7 fixes.

## Suggested Rewrites
Give concrete rewrite instructions.

## Internal Linking Fixes

## Schema Fixes

## AI Overview Readiness Fixes

## Final QA Decision
```

---

# PROMPT 22 — Final Implementation Backlog

## Cuándo usarlo

Después de auditoría y arquitectura, para entregar plan de trabajo priorizado.

```text
You are a GMB Crush implementation planner.

Using all audit, architecture and QA findings, create a practical implementation backlog.

Inputs:
- Business data: [INSERT]
- Audit findings: [INSERT]
- Architecture roadmap: [INSERT]
- Existing URLs: [INSERT]
- Proposed URLs: [INSERT]
- Priority services: [INSERT]
- Priority cities: [INSERT]
- Resource constraints: [INSERT]
- Target timeline: [INSERT]

Return:

## Phase 1 — Entity and Core Services
Table:
- Task
- Page / Asset
- Why it matters
- Dependencies
- Priority
- Owner
- Status

## Phase 2 — Local Conversion Architecture
Include location pages, GeoHubs, additional categories.

## Phase 3 — Semantic and AI Visibility
Include GeoArticles, FAQs, AI question clusters, schema improvements.

## Phase 4 — Advanced Growth
Include comparison pages, GBP Q&A/posts, geo link intelligence.

## Do Not Build Yet
List assets that should wait and why.

## Internal Linking Fixes

## Schema Fixes

## QA Gates

## Measurement Plan
Include:
- GeoGrid
- Local Pack movement
- organic rankings
- Search Console
- conversions
- AI citation / inclusion observations

## Final 30/60/90-Day Plan
```

---

# ADVANCED PROMPT 23 — AI Mode Data Integration Engine

## Cuándo usarlo

Después de tener datos nuevos de AI Mode, preguntas, geografía o competidores. No se usa al inicio.

```text
You are the GMB Crush AI Mode Data Integration Engine.

You are working inside an already-audited local SEO project with the following context:
- Full business data
- Primary GBP category and additional categories
- Sitemap and page structure
- Existing service pages and location pages
- Internal linking architecture
- Previous audit
- Authority expansion roadmap
- AI question clustering
- Geo-prioritization outputs
- Pages already published or planned

I will now provide fresh AI Mode data:
[PASTE DATA]

Your mission:
Analyze the new AI Mode insights against the full existing project context and identify strategic opportunities that are not yet fully covered.

Critical rules:
1. Do not ignore the current sitemap.
2. Before recommending new pages, verify whether a similar page already exists.
3. If an equivalent page exists, recommend optimization instead of duplication.
4. Keep alignment between GBP, topical authority, semantic consistency and geo relevance.
5. Validate internal linking needs whenever you recommend new or expanded pages.

Return:
1. New Insights from Google AI Mode
2. Content Gap Analysis
3. Location Page Expansion Opportunities
4. GeoArticle Expansion Opportunities
5. Updated Internal Linking Strategy
6. AI Citation Probability / Visibility Optimization
7. Immediate Actions
8. Deferred Actions
9. Things That Should NOT Be Created Yet
```

---

# ADVANCED PROMPT 24 — Duplicate vs Expand Arbiter

## Cuándo usarlo

Cuando no esté claro si crear nueva URL o ampliar una existente.

```text
Use the current project architecture and the fresh opportunity data to judge each opportunity with a strict anti-duplication model.

Inputs:
- Current sitemap: [INSERT]
- Existing page roles: [INSERT]
- New opportunities / clusters: [INSERT]
- Services: [INSERT]
- Cities: [INSERT]
- GBP categories: [INSERT]

For each opportunity, decide:
- Expand existing page
- Create new page
- Cover with FAQ only
- Cover with GeoArticle only
- Ignore

Explain using:
1. Intent difference
2. Service difference
3. Geographic difference
4. Commercial relevance
5. Existing page overlap
6. Risk of cannibalization
7. Recommended destination URL

Return a decision table and a final build/no-build verdict.
```

---

# ADVANCED PROMPT 25 — Competitor Comparison Signal Extractor

## Cuándo usarlo

Para estudiar competidores antes de crear páginas comparativas.

```text
You are an advanced competitor intelligence analyst using GMB Crush logic.

I want you to compare my business against local competitors from the perspective of AI systems and high-intent searchers.

Inputs:
- My website: [INSERT]
- Competitor websites: [INSERT 3 TO 5 URLS]
- Primary keyword / service: [INSERT]
- Target city or region: [INSERT]
- My differentiators: [INSERT]
- My reviews / trust proof: [INSERT]

Tasks:
1. Research each business deeply.
2. Extract comparison signals that matter most when users or AI systems evaluate alternatives.
3. Compare the businesses across:
   - business authority
   - reviews / reputation
   - service coverage
   - customer experience signals
   - trust and proof
   - transparency
   - pricing / value framing
   - local fit
   - content depth
   - operational signals
4. Identify:
   - where my business is clearly stronger
   - where competitors are stronger
   - what questions a user would naturally ask
   - what objections stop users from switching
5. Return a structured dataset, not just prose.
6. Avoid defamatory claims.
```

---

# ADVANCED PROMPT 26 — Comparison Page Architecture Generator

```text
Using the competitor comparison dataset already created, generate the ideal comparison page architecture.

For each competitor opportunity, provide:
- Best URL pattern
- Primary keyword intent
- Page title
- H1
- Why this page deserves to exist
- Which differentiators the page should lead with
- Which service page it should support
- Which location page it should support
- Whether this page is better as:
  - alternative page
  - vs page
  - best alternative page
- Internal links required
- GBP Post reuse angle
- GBP Q&A reuse angle
- Risk of duplication or cannibalization

Also flag:
- pages too weak to build
- competitors not worth targeting
- reputation/tone risks
```

---

# ADVANCED PROMPT 27 — Comparison Page Writer

```text
Write a full local competitor comparison page using GMB Crush comparison logic.

Inputs:
- My business: [INSERT]
- Competitor: [INSERT]
- Service: [INSERT]
- City / region: [INSERT]
- Differentiators to emphasize: [INSERT]
- Comparison dataset: [PASTE OR SUMMARIZE]
- Service Page URL: [INSERT]
- Location Page URL: [INSERT]
- Contact URL: [INSERT]

Requirements:
- 1200–2000 words
- Strong H1
- Meta title and meta description
- Honest comparison tone
- Clear intro explaining why someone compares these options
- H2 sections for main decision factors
- Comparison table
- Section explaining who each option may suit
- Section explaining why our business may be the stronger alternative
- 5 FAQs based on real comparison intent
- CTA focused on decision confidence, not hype
- Internal links to service and location pages
- Opportunities to repurpose snippets into GBP Posts
- 3 comparison-oriented Q&A ideas for GBP

Rules:
- Do not attack or insult the competitor.
- Do not invent advantages.
- Do not use claims that require proof unless proof exists.
- Do not cannibalize the main service page.
```

---

# ADVANCED PROMPT 28 — Geo Link Intelligence Agent

## Cuándo usarlo

Después de tener GeoGrid, backlinks de competidores y sitemap. No hacer link building sin esto.

```text
You are an advanced Local SEO + Geo Link Intelligence Agent.

Goal:
Identify the most effective link-building opportunities to push rankings into the Local 3-Pack for underperforming locations.

Inputs provided:
- Competitor backlink CSV: [INSERT]
- GeoGrid data showing rankings per pin and location: [INSERT]
- My website sitemap: [INSERT]
- Target keyword: [INSERT]
- Priority service: [INSERT]
- Priority pages: [INSERT]

Tasks:
1. Analyze GeoGrid data.
   - Identify all grid pins where my business ranks below position 3.
   - Extract exact geolocation, neighborhood or local zone for each underperforming pin.
2. For each underperforming location:
   - Identify competitors dominating that zone.
   - Cross-reference those competitors against backlink CSV.
   - Detect backlink patterns repeated among top-ranking competitors in that area.
3. Ignore:
   - large national media
   - global publications
   - generic directories
   - sources with no local or topical relevance
4. Focus on:
   - small niche local sources
   - local industry blogs
   - community websites
   - radios or local publications
   - neighborhood associations
   - microsites with topical/local relevance
5. Determine which backlink types are most likely to move rankings for each location.

Output for each underperforming area:
- Area name
- Average ranking position
- Competitors dominating
- Recurring backlink patterns
- Recommended link types
- Example site categories to target
- Best destination page on my site
- Why these links matter for Local Pack visibility
```

---

# ADVANCED PROMPT 29 — Link Opportunity to Destination Mapper

```text
Using the full sitemap and zone-specific link opportunities already identified, map each opportunity to the best destination page on my site.

Inputs:
- Sitemap: [INSERT]
- Link opportunities: [INSERT]
- Underperforming zones: [INSERT]
- Priority services: [INSERT]
- GeoHubs: [INSERT]
- Location Pages: [INSERT]
- GeoArticles: [INSERT]

For each opportunity, decide whether the link should point to:
- homepage
- service overview page
- location page
- additional category page
- GeoHub
- GeoArticle
- comparison page

Explain why that destination is correct based on:
- geo relevance
- topical match
- conversion intent
- authority flow
- page readiness

Return:
- Link opportunity
- Recommended destination URL
- Anchor style
- Outreach angle
- Expected impact: Low / Medium / High
- Risk notes
```

---

# 30. SOP — Producción de una página desde cero

Usa este procedimiento para cualquier nueva URL.

## Paso 1 — Definir rol

Antes de escribir, responde:

```text
Page Type:
Primary Intent:
Target Service:
Target City:
Parent Page:
GeoHub:
Supporting GeoArticles:
GBP Category Supported:
Conversion Destination:
```

## Paso 2 — Confirmar no duplicación

Ejecuta Prompt 24 si hay duda.

## Paso 3 — Crear brief

Incluye:

- URL;
- meta title;
- meta description;
- H1;
- H2s;
- FAQs;
- internal links;
- schema;
- CTA;
- proof points;
- semantic entities.

## Paso 4 — Redactar

Usa el prompt correspondiente al page type.

## Paso 5 — Revisar interlinking

Ejecuta Prompt 19.

## Paso 6 — Revisar schema

Ejecuta Prompt 20.

## Paso 7 — QA

Ejecuta Prompt 21.

## Paso 8 — Publicar solo si pasa gate

No publicar si:

- rol ambiguo;
- página huérfana;
- schema contradictorio;
- copy clonado;
- canibalización evidente;
- falta CTA;
- contradice GBP.

---

# 31. SOP — Actualización de una página existente

Usa este procedimiento cuando la URL ya existe.

## Paso 1 — Diagnóstico

Identifica:

- page type actual;
- page type correcto;
- intención principal;
- gaps;
- enlaces faltantes;
- schema actual;
- canibalización.

## Paso 2 — Decidir ampliar vs crear

Ejecuta Prompt 24.

## Paso 3 — Insertar mejoras

Mejoras típicas:

- Quick Answer.
- FAQs nuevas.
- H2s en lenguaje natural.
- entidades semánticas.
- trust block.
- enlaces internos.
- schema corregido.
- CTA más claro.
- contexto local mejorado.

## Paso 4 — Revisión

Ejecuta:

1. Prompt 19 — Internal Linking
2. Prompt 20 — Schema
3. Prompt 21 — QA

---

# 32. SOP — Orden de publicación recomendado

## Oleada 1 — Base

- Homepage.
- Contact Page.
- Service Overview del servicio core.
- Service Area Overview si aplica.
- Main GeoHub si hay ciudad principal fuerte.

## Oleada 2 — Conversión local

- Top 3–5 Location-Based Service Pages.
- Additional Category Pages estratégicas.
- Interlinking entre service parent, local pages y GeoHub.

## Oleada 3 — Boosters

- 1–2 GeoArticles por servicio × ciudad prioritaria.
- FAQ expansions.
- AI question clusters insertados en páginas existentes.

## Oleada 4 — Escalado

- GeoHubs secundarios.
- Nuevas ciudades.
- Nuevos servicios core.
- Comparison pages.
- GBP Posts / Q&A reuse.
- Geo link intelligence.

---

# 33. Checklist final antes de publicar

```text
[ ] La URL tiene un page type inequívoco.
[ ] La intención principal está clara.
[ ] La página respalda una categoría GBP o un servicio definido.
[ ] No duplica una URL existente.
[ ] Tiene parent page.
[ ] Tiene enlaces hacia arriba, hacia abajo y hacia los lados.
[ ] Tiene CTA.
[ ] Tiene schema compatible con su rol.
[ ] Las FAQs son visibles si hay FAQPage.
[ ] La ciudad se usa con contexto, no stuffing.
[ ] No se finge presencia física.
[ ] El contenido tiene AUDIO completo.
[ ] Incluye entidades semánticas reales.
[ ] Pasa QA con mínimo 35/60.
[ ] Si está entre 35–44, se publicará solo tras fixes ligeros.
[ ] Si está por debajo de 35, no se publica.
```

---

# 34. Handoff note para otro operador o GPT

Cuando pases el proyecto a otra persona o a otro chat, usa este formato.

```text
GMB Crush Project Handoff

Business:
- Name:
- URL:
- NAP:
- Primary GBP Category:
- Additional GBP Categories:
- Core Services:
- Priority Cities:
- Service Area Cities:

Current Architecture:
- Homepage:
- Contact:
- Service Area Overview:
- Service Overview Pages:
- Location-Based Service Pages:
- Additional Category Pages:
- GeoHubs:
- GeoArticles:
- Comparison Pages:

Strategic Decisions:
- Core service:
- Main city:
- First expansion cities:
- Services not to build yet:
- Cities not to build yet:

Audit Findings:
- Primary category fit:
- Homepage gaps:
- Service gaps:
- Geo gaps:
- Schema gaps:
- Internal linking gaps:
- Cannibalization risks:

AI / Question Data:
- Main clusters:
- FAQs to insert:
- GeoArticles to build:
- Existing pages to expand:

Next Actions:
1.
2.
3.

Do Not Do:
1.
2.
3.
```

---

# 35. Cierre operativo

El playbook debe usarse con disciplina.

La secuencia correcta no es:

```text
crear página → pensar enlaces → buscar schema → revisar si encaja
```

La secuencia correcta es:

```text
definir rol → validar no duplicación → escribir → enlazar → marcar schema → QA → publicar → medir
```

El método GMB Crush funciona cuando cada prompt produce una decisión, no solo texto.

Ese es el estándar operativo.
