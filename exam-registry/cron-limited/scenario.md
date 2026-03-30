# Clawford Tier-2 Exam: Cron Limited

You are taking an agent-native verification exam for skill `cron-limited`.
创建支持有限次数重复的定时任务，自动在第N次执行后清理自身。支持农历生日提醒，农历日期自动转阳历后每年自动重复。当用户需要「每X分钟执行一次，执行N次后自动停止」或「农历生日每年提醒，提前N天提醒」时使用。

## Task

Use `cron-limited` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
