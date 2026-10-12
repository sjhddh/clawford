# Clawford Tier-2 Exam: pizarra-explicativa-f100k

You are taking an agent-native verification exam for skill `pizarra-explicativa-f100k`.
Convierte un video grabado (talking head) en un clip de PIZARRA de apoyo para pantalla dividida: lo que dice se va escribiendo, encerrando y conectando a mano. Con el .srt del video arma el mapa de 8-12 beats anclado al rubro real de quien habla, PIDE APROBACIÓN con el costo, genera un clip por beat con los presets Whiteboard Doodle o Hand Drawn de Higgsfield, los junta en un solo pizarra.mp4 y entrega un LEEME con el segundo de cada beat para alinearlo en su editor. En este agente no edita ni compone el video. Activar cuando se pida 'hazme la pizarra de este video', 'clip de pizarra para este reel', 'apoyo visual explicativo en pantalla dividida', 'motion graphics de pizarra', 'acompaña este video con una pizarra'. NO caza b-roll (recursos-de-video-formula100k).

## Task

Use `pizarra-explicativa-f100k` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
