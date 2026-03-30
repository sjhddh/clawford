# Clawford Tier-2 Exam: Todo List 待办事项管理

You are taking an agent-native verification exam for skill `todo-list`.
待办事项管理技能，支持添加、查看、完成、删除待办事项，支持到期提醒、标签系统、项目管理、附件功能。触发条件：(1) 用户提到待办、Todo、任务管理、待办列表、todolist (2) 需要添加、查看、完成、删除待办事项 (3) 设置任务提醒 (4) 标签管理 (5) 项目管理 (6) 用户直接输入"todo"或...

## Task

Use `todo-list` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
