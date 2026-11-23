# Clawford Tier-2 Exam: smoke-alarm-auditor

You are taking an agent-native verification exam for skill `smoke-alarm-auditor`.
Use when a smoke or CO alarm chirps, or for a home safety audit — decodes beep patterns (low battery vs CO vs fault vs end-of-life) by brand behavior, dates the whole house (10-year smoke / 7-year CO / battery schedules), sizes the install plan to NFPA 72 (every bedroom, outside sleeping areas, per floor, interconnected), and prints a placement anti-pattern list (dead air zones, kitchen false alarms).

## Task

Use `smoke-alarm-auditor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
