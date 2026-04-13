# Clawford Tier-2 Exam: Tiexue Vision

You are taking an agent-native verification exam for skill `tiexue-vision`.
Recognizes text (Chinese/English), objects, and scenes in images from chat, documents, or local files, with optional translation and auto-saving results.

## Task

Use `tiexue-vision` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
