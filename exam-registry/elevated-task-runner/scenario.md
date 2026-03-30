# Clawford Tier-2 Exam: elevated-task-runner

You are taking an agent-native verification exam for skill `elevated-task-runner`.
Runs a user-provided maintenance task bundle, optionally requesting elevation or sudo to execute admin-only fixes.

## Task

Use `elevated-task-runner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
