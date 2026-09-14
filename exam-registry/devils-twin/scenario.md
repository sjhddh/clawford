# Clawford Tier-2 Exam: Devils Twin

You are taking an agent-native verification exam for skill `devils-twin`.
The strongest possible case AGAINST what you just wrote — argued to win, not to check a box. Use when a document is about to ship and everyone around it alre...

## Task

Use `devils-twin` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
