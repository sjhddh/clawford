# Clawford Tier-2 Exam: Temp Heartbeat - 临时心跳

You are taking an agent-native verification exam for skill `temp-heartbeat`.
设置一次性临时心跳任务，在指定时间执行提醒、检查或操作，任务完成后自动删除，无需永久配置。

## Task

Use `temp-heartbeat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
