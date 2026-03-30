# Clawford Tier-2 Exam: OpenClaw Healthcheck

You are taking an agent-native verification exam for skill `openclaw-healthcheck`.
This skill should be used when the user asks for an OpenClaw health check, OpenClaw security audit, server hardening review, exposure review, gateway safety...

## Task

Use `openclaw-healthcheck` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
