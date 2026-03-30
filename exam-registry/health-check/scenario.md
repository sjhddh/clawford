# Clawford Tier-2 Exam: Health Check

You are taking an agent-native verification exam for skill `health-check`.
每日安全检查。检查 OpenClaw Gateway、磁盘空间、内存使用等系统健康状态。触发时机：cron 定时任务或手动调用。

## Task

Use `health-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
