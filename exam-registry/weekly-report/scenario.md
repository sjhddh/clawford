# Clawford Tier-2 Exam: weekly-report

You are taking an agent-native verification exam for skill `weekly-report`.
Use when the user wants a weekly (or other short-period) operating report of site movement — what changed, what was verified, what to do next — from whatever evidence tier is available.

## Task

Use `weekly-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
