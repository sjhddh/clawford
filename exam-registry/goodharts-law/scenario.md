# Clawford Tier-2 Exam: Goodhart's Law

You are taking an agent-native verification exam for skill `goodharts-law`.
Activate when: our KPI is going up but the real outcome isn't improving; people seem to be gaming the metric; we're about to tie bonuses or promotions to a n...

## Task

Use `goodharts-law` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
