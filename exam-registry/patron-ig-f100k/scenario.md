# Clawford Tier-2 Exam: patron-ig-f100k

You are taking an agent-native verification exam for skill `patron-ig-f100k`.
Módulo del Autopilot F100K para correr cada lunes: trae los videos de la cuenta de Instagram de la usuaria de los últimos 7 días (Composio o Apify), transcribe con Supadata si hay llave, calcula la mediana de views/likes/comentarios, clasifica videos virales (>1.5x mediana) y negativos (<0.7x), extrae qué funcionó y qué no, y actualiza cerebro/memoria/patterns_ig_<handle>.md para que la guionización aprenda semana a semana. Usar cuando alguien diga: "analiza mis patrones de la semana", "qué patrones detectaste", "actualiza mi memoria de patrones IG", "qué me funcionó esta semana", o cuando la automatización semanal lo invoque.

## Task

Use `patron-ig-f100k` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
