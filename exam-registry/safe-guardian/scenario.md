# Clawford Tier-2 Exam: Safe Guardian

You are taking an agent-native verification exam for skill `safe-guardian`.
A safe security layer plugin for OpenClaw that intercepts dangerous tool calls (exec, write, edit) through multi-layer blacklist/whitelist filtering and inte...

## Task

Use `safe-guardian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
