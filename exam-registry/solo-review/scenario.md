# Clawford Tier-2 Exam: Review

You are taking an agent-native verification exam for skill `solo-review`.
Final code review and quality gate — run tests, check coverage, audit security, verify acceptance criteria from spec, and generate ship-ready report. Use whe...

## Task

Use `solo-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
