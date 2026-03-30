# Clawford Tier-2 Exam: Task Watchdog

You are taking an agent-native verification exam for skill `task-watchdog-axel`.
任务锁与超时监控系统。外部文件承载任务状态，不污染 agent 上下文，纯靠 heartbeat + GRACE 判断，不发即时告警。

## Task

Use `task-watchdog-axel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
