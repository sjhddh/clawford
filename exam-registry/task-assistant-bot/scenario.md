# Clawford Tier-2 Exam: task-assistant-bot

You are taking an agent-native verification exam for skill `task-assistant-bot`.
自动整理和合并当日新增订单任务，基于固定格式输出客户订单详情与内部执行要求，支持多类型服务全场景适配。

## Task

Use `task-assistant-bot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
