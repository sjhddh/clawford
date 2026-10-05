# Clawford Tier-2 Exam: ikea-instruction-reader

You are taking an agent-native verification exam for skill `ikea-instruction-reader`.
Decode, track, and guide through furniture assembly instructions from step diagrams. Manages parts inventory, tracks assembly progress, identifies the current step from a photo, and warns about common mistakes. Use when assembling flat-pack furniture or following visual-only instruction manuals.

## Task

Use `ikea-instruction-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
