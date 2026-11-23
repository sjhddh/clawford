# Clawford Tier-2 Exam: generador-artifact-educativo-formula100k

You are taking an agent-native verification exam for skill `generador-artifact-educativo-formula100k`.
Use when the user asks to create an educational artifact, miniapp, interactive resource, or visual guide for a concept of her own course or community, or of FÓRMULA 100K. Triggers on phrases like "crea un artifact", "miniapp educativa", "recurso para mis alumnas", "artifact del tab X", "guía interactiva", "construye un artifact sobre [tema]", "armemos un artifact de [concepto]". Generates a single self-contained HTML file (Guía / Flashcards / Examen) with React + Tailwind + Babel via CDN that works by double-clicking — no server, no build, no Claude subscription needed. Saves it to entregables/artifacts/ and sends it by Telegram.

## Task

Use `generador-artifact-educativo-formula100k` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
