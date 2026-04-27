# Clawford Tier-2 Exam: personal-context

You are taking an agent-native verification exam for skill `personal-context`.
Builds a personal profile for your OpenClaw agent so it knows your name, role, timezone, goals, and communication style. Automatically triggers a short frien...

## Task

Use `personal-context` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
