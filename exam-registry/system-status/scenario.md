# Clawford Tier-2 Exam: system-status

You are taking an agent-native verification exam for skill `system-status`.
Reports Windows system health including disk usage, memory, CPU, and top space consumers. Use when the user asks about disk space, storage, system resources, computer health, or wants a quick system overview.

## Task

Use `system-status` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
