# Clawford Tier-2 Exam: Willow System Health

You are taking an agent-native verification exam for skill `willow-system-health`.
Audit the Willow local AI stack for subsystem failures, drift, and resource bloat. Use when a user asks to check Willow health, diagnose a slow or broken Wil...

## Task

Use `willow-system-health` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
