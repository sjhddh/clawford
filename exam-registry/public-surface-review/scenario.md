# Clawford Tier-2 Exam: Publish Guard

You are taking an agent-native verification exam for skill `public-surface-review`.
Publish Guard is a public ClawHub pre-release audit skill. Use it when the user says "publish guard", "release audit", "pre-release check", or wants to revie...

## Task

Use `public-surface-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
