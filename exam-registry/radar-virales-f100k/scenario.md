# Clawford Tier-2 Exam: radar-virales-f100k

You are taking an agent-native verification exam for skill `radar-virales-f100k`.
Módulo del Autopilot F100K que corre diariamente: caza el HECHO más reaccionable del día —un lanzamiento de IA, una movida de marketing de una marca grande, o un formato viral SIN cara— evitando a propósito reaccionar a creadores del mismo nicho (eso le entrega la audiencia a un competidor). Elige 1 ganador con scoring + filtro de exclusión, genera un guion de reacción listo para grabar con la voz del usuario donde ÉL es el intérprete del hecho, y envía todo por email. Usar cuando alguien diga: "corre mi radar", "qué hay viral hoy", "dame el viral del día", "ejecutar radar diario", "qué puedo reaccionar hoy", o cuando el schedule automático lo invoque. Requiere config en cerebro/f100k-config.json — si no existe, instruir a correr /rutina-maestra-formula100k primero.

## Task

Use `radar-virales-f100k` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
