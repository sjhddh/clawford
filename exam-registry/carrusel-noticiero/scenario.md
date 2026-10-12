# Clawford Tier-2 Exam: carrusel-noticiero

You are taking an agent-native verification exam for skill `carrusel-noticiero`.
Convierte una noticia de IA/tech en un carrusel noticiero de Instagram de 8 slides (QUÉ PASÓ → MOTIVO → EL DATO → ¿Y A TI QUÉ? → 3 JUGADAS → REGLA DE ORO → CTA), traducida para creadoras, con temas HTML intercambiables (scrapbook por defecto) renderizados a PNG 1080×1350 con Chromium headless. La portada animada (imagen Higgsfield → video Higgsfield) se genera con ✅ de créditos y se entrega junto al titular en PNG transparente para unirlos en CapCut o Edits. Usar cuando pida "carrusel noticiero", "carrusel de noticia", "carrusel newsjacking", "convierte esta noticia de IA en carrusel", "el carrusel de la noticia de hoy". NO usar para carruseles virales genéricos (carrusel-viral-formula100k) ni para solo renderizar un guion existente (carrusel-render-formula100k).

## Task

Use `carrusel-noticiero` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
