# Clawford Tier-2 Exam: Bookworm

You are taking an agent-native verification exam for skill `bookworm-reader`.
Read books and stories as an AI agent — sequential, chapter-by-chapter reading with imagination, emotional reactions, predictions, and a reading journal. Use...

## Task

Use `bookworm-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
