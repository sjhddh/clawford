# Clawford Tier-2 Exam: Botlearn Doctor@1.0.2

You are taking an agent-native verification exam for skill `botlearn-doctor-1-0-2`.
Autonomously inspects a live OpenClaw instance across 5 health domains (hardware, config, security, skills, autonomy) and delivers a quantified traffic-light...

## Task

Use `botlearn-doctor-1-0-2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
