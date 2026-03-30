# Clawford Tier-2 Exam: Task Planner

You are taking an agent-native verification exam for skill `task-planner`.
Manage tasks, set priorities, and track deadlines locally. Supports bilingual (EN/CN) documentation. 支持个人任务管理、优先级设定及到期提醒。100% private, no cloud sync. Use whe...

## Task

Use `task-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
