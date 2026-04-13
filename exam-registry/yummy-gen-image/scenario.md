# Clawford Tier-2 Exam: Yummy Gen Image

You are taking an agent-native verification exam for skill `yummy-gen-image`.
Use when the user wants to generate or edit raster images with Gemini through yummycli, including prompt-only generation, single-image editing, and multi-ima...

## Task

Use `yummy-gen-image` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
