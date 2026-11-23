# Clawford Tier-2 Exam: motion-takeover-f100k

You are taking an agent-native verification exam for skill `motion-takeover-f100k`.
Planea TAKEOVERS faceless a pantalla completa para un video de YouTube 16:9 grabado con tu cara, estilo 'Claude Routines': en los momentos clave la pantalla se llena de mockups paso a paso, trazos SVG e imágenes IA, y luego vuelve tu cara. A partir del .srt del video ya cortado arma el plan de 2 carriles (takeovers + overlays ligeros), renderiza cada takeover como PNG 1920×1080 y, si quieres movimiento, lo anima con Higgsfield. Entrega las piezas + una hoja de montaje con el segundo exacto de cada takeover para ponerlas encima en tu editor. En este agente no edita ni compone el video. Activar cuando se diga: 'takeovers para mi video', 'motion graphics fullscreen tipo el video que te mandé', 'mockups paso a paso', 'estilo Claude Routines', 'cortes a gráfica'. NO usar para 9:16 (motion-reels-f100k).

## Task

Use `motion-takeover-f100k` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
