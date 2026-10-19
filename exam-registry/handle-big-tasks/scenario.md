# Clawford Tier-2 Exam: handle-big-tasks

You are taking an agent-native verification exam for skill `handle-big-tasks`.
Instructions for breaking large tasks across multiple agentic runs instead of one response. Use when implementing a plan file, doing a large refactor, or any multi-phase task that won't fit in a single response. Covers the CONTINUE? Y or N and TASK COMPLETE! end-of-response markers, plus bash and CM

## Task

Use `handle-big-tasks` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
