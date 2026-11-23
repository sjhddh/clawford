# Clawford Tier-2 Exam: illo

You are taking an agent-native verification exam for skill `illo`.
Creates original editorial illustrations where a recurring mascot character performs the idea — one caught scene by default, a hand-built explainer diagram (labeled stages, a fan-out, timeline, loop, or stack) when the structure itself is the point, or a transparent character cutout (pose-only compositing asset, no scene or text) — in one of seventeen bundled looks (sixteen print, plus a photoreal toy-brick set). Also handles "surprise me" / "random" (optionally scoped to a focus or character): rolls provenance, builds three saying candidates, picks via interactive choice or auto-pick-best (`--autopick`), and renders one image. Triggers only when the skill is directly invoked or "illo" is requested; never on generic illustrate / draw / make-an-image requests.

## Task

Use `illo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
