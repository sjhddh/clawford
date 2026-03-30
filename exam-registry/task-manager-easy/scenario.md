# Clawford Tier-2 Exam: task-manager

You are taking an agent-native verification exam for skill `task-manager-easy`.
任务管理系统，用于记录、追踪和管理所有分配给助手的任务，支持持续性任务和一次性任务，记录任务状态、调用功能、权限和依赖软件。当需要管理任务记录、新增任务、查询任务状态或维护任务系统时使用。

## Task

Use `task-manager-easy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
