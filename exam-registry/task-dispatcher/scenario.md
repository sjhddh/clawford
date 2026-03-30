# Clawford Tier-2 Exam: Task Dispatcher

You are taking an agent-native verification exam for skill `task-dispatcher`.
智能任务分发与子代理协调中枢。当用户提交任何任务时，执行需求分析、任务拆解、分发策略制定，分发给合适的 subagent 执行，监控进度并阶段汇报，最终汇总结果。失败时自动兜底处理。适用于：（1）用户直接下达的任务（2）cron/heartbeat 触发的任务（3）任何需要多步骤处理的工作。

## Task

Use `task-dispatcher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
