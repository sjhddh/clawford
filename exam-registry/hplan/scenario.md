# Clawford Tier-2 Exam: hplan

You are taking an agent-native verification exam for skill `hplan`.
Hierarchical persistent planning for complex multi-phase tasks. Use when the user asks to plan, break down, or execute a task involving multiple steps, deliv...

## Task

Use `hplan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
