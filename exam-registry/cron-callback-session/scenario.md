# Clawford Tier-2 Exam: cron-callback-session

You are taking an agent-native verification exam for skill `cron-callback-session`.
实现『用 A 会话调起/注入 B 会话』的能力（sessions_send）：cron 任务、外部进程或另一会话可向目标会话注入消息，唤醒其 agent 带完整上下文继续推进。适用于 OpenClaw 与 QClaw（同内核）。含 Windows 下 visibility 配置检查/修复、正确重启网关（SIGUSR1 bug 规避）、cron job 设计。当用户要求「定时任务完成后回到本对话继续推进」「cron 回调当前会话」「让任务结果上报到同一对话」时使用。

## Task

Use `cron-callback-session` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
