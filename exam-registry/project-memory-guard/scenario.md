# Clawford Tier-2 Exam: Project Memory Guard

You are taking an agent-native verification exam for skill `project-memory-guard`.
Enforce project boundaries and memory writeback rules before anything enters project memory. Use before: writing notes into project memory, saving outputs/ta...

## Task

Use `project-memory-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
