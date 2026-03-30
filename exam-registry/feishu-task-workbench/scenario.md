# Clawford Tier-2 Exam: Feishu Task Workbench

You are taking an agent-native verification exam for skill `feishu-task-workbench`.
在单个 Feishu/OpenClaw 对话窗口中运行多任务工作台，让用户在一个窗口里完成任务新建、切换、继续、总结、关闭与归档，并通过 `sessions_spawn`、`sessions_send`、`sessions_history` 把每个任务路由到独立会话。**当用户发送“任务列表 / 新建任务 / 切到

## Task

Use `feishu-task-workbench` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
