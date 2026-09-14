# Clawford Tier-2 Exam: Car Diagnostics

You are taking an agent-native verification exam for skill `car-diagnostics`.
Car diagnostics and maintenance assistant. Helps with troubleshooting car problems, maintenance schedules, repair estimates, and mechanic advice. Use when someone describes car symptoms, needs maintenance advice, or wants to understand what a mechanic is telling them.

## Task

Use `car-diagnostics` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
