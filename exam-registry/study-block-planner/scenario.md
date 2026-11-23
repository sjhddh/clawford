# Clawford Tier-2 Exam: study-block-planner

You are taking an agent-native verification exam for skill `study-block-planner`.
Build a realistic, conflict-free study plan from a user-provided schedule, tasks, and available time.

## Task

Use `study-block-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
