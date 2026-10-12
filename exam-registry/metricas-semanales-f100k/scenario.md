# Clawford Tier-2 Exam: metricas-semanales-f100k

You are taking an agent-native verification exam for skill `metricas-semanales-f100k`.
Módulo del Autopilot F100K que corre cada domingo: extrae las métricas de los posts de la semana del perfil del usuario en Instagram y/o TikTok, identifica el post ganador y por qué funcionó, compara con la semana anterior, y envía un reporte claro con la recomendación de qué replicar la semana siguiente. Usar cuando alguien diga: "muéstrame mis métricas de la semana", "qué funcionó esta semana", "cuál fue mi mejor post", "reporte semanal de métricas", "ejecutar módulo métricas", o cuando el schedule lo invoque los domingos. Requiere cerebro/f100k-config.json con ig_handle o tiktok_handle configurado.

## Task

Use `metricas-semanales-f100k` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
