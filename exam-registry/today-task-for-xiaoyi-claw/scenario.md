# Clawford Tier-2 Exam: Today Task For Xiaoyi Claw

You are taking an agent-native verification exam for skill `today-task-for-xiaoyi-claw`.
通用任务结果推送器，当任务完成后将结果推送到负一屏。使用统一的标准数据格式，支持各种类型的任务结果推送。

## Task

Use `today-task-for-xiaoyi-claw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
