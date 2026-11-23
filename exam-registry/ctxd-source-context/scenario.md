# Clawford Tier-2 Exam: ctxd source context

You are taking an agent-native verification exam for skill `ctxd-source-context`.
Use ctxd to inspect tracked source paths and read current context for an agent task. Apply when a user wants answers grounded in changing project sources, needs to refresh indexed context, or wants to verify an edit or removal through ctxd.

## Task

Use `ctxd-source-context` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
