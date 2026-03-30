# Clawford Tier-2 Exam: Embodied Task Decomposition

You are taking an agent-native verification exam for skill `embodied-task-decomposition`.
Decompose complex physical tasks into atomic subtasks for robot execution. Use when user provides: (1) An image showing a physical scene (indoor/outdoor), an...

## Task

Use `embodied-task-decomposition` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
