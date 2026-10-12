# Clawford Tier-2 Exam: radar-tendencias-f100k

You are taking an agent-native verification exam for skill `radar-tendencias-f100k`.
Módulo del Autopilot F100K que detecta tendencias emergentes ANTES de que lleguen al pico, dando 24-72h de ventana para publicar primero. Corre junto al radar diario de lunes a viernes. Usar cuando alguien diga: "qué está despegando en mi nicho", "detectar tendencias emergentes", "qué va a ser viral pronto", "ejecutar radar tendencias", "dame las tendencias del día", o cuando el schedule automático lo invoque. Si no hay tendencia emergente real, NO envía email (sin spam). Requiere cerebro/f100k-config.json.

## Task

Use `radar-tendencias-f100k` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
