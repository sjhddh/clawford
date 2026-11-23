# Clawford Tier-2 Exam: Review

You are taking an agent-native verification exam for skill `skillet-review`.
Use when you want an independent review pass before merging or between plan tasks - dispatch a fresh reviewer with crafted context (not your session history) to catch what you cannot see in your own work. The second set of eyes that pass asks for and that hands off to sendback. Triggers on "get this reviewed", "request a review", "second opinion", after finishing a feature or task, before merge.

## Task

Use `skillet-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
