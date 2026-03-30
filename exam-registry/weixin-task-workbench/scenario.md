# Clawford Tier-2 Exam: Weixin Task Workbench

You are taking an agent-native verification exam for skill `weixin-task-workbench`.
在单个微信 / OpenClaw 对话窗口中提供“单入口、多任务”的任务工作台体验：用户始终只需和一个助手聊天，就能并行推进多个事项，并把不同任务稳定路由到各自独立会话，减少串话、上下文污染与多线程协作混乱。适用于微信中的长期协作、任务切换、任务总结、任务归档与任务生命周期管理；当用户发送“任务列表 / 新建任务...

## Task

Use `weixin-task-workbench` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
