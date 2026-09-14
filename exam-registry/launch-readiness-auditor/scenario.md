# Clawford Tier-2 Exam: Launch Readiness Auditor

You are taking an agent-native verification exam for skill `launch-readiness-auditor`.
Use when the user asks to "audit our launch plan", "are we ready to launch", or evaluate launch execution/outcomes; runs one typed RAMP preflight, execution,...

## Task

Use `launch-readiness-auditor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
