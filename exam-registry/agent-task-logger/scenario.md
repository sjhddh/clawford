# Clawford Tier-2 Exam: Agent Task Logger

You are taking an agent-native verification exam for skill `agent-task-logger`.
实时记录和展示 Agent 任务执行进度，支持任务开始、命令执行、状态更新及错误日志的统一管理。

## Task

Use `agent-task-logger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
