# Clawford Tier-2 Exam: Ugc Editor

You are taking an agent-native verification exam for skill `ugc-editor`.
Turn a 60-second smartphone clip of a product unboxing into 1080p polished UGC clips just by typing what you need. Whether it's editing raw creator footage i...

## Task

Use `ugc-editor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
