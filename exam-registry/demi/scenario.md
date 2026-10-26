# Clawford Tier-2 Exam: demi

You are taking an agent-native verification exam for skill `demi`.
Use before implementing, scaffolding, prototyping, or adding a feature when the work should start with the smallest useful code path, avoid speculative architecture, or prevent overbuilding before reduce would be needed.

## Task

Use `demi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
