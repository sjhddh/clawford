# Clawford Tier-2 Exam: autopilot-guiones-f100k

You are taking an agent-native verification exam for skill `autopilot-guiones-f100k`.
Módulo del Autopilot F100K que corre diariamente (Lun–Vie 8:30 AM Lima): busca las 3 noticias más relevantes de IA del día via Tavily, las convierte en 3 guiones listos para grabar usando el sistema de guionización F100K (pilar de valor + estructura de las 33 + gancho triple + CTA optimizado con priming triple), los entrega por Telegram y, si hay token, los guarda en Yapper. Usar cuando alguien diga: "corre el autopilot de guiones", "dame los 3 guiones del día", "guiones de noticias de IA de hoy", "ejecutar autopilot guiones", o cuando el schedule automático lo invoque.

## Task

Use `autopilot-guiones-f100k` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
