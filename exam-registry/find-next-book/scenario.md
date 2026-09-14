# Clawford Tier-2 Exam: Find Next Book

You are taking an agent-native verification exam for skill `find-next-book`.
Recommend the next book to read by combining the user's current request with relevant conversation context, available long-term memory, reading history, and...

## Task

Use `find-next-book` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
