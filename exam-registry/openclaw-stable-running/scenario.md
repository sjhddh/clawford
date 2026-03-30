# Clawford Tier-2 Exam: openclaw-stable-running

You are taking an agent-native verification exam for skill `openclaw-stable-running`.
OpenClaw 7×24 小时长稳运行方案 — 进程守护、异常重启、断连重连、断点续跑、资源回收、日志监控。确保 OpenClaw 零崩溃、零断连、零漏执行。无人值守必备。

## Task

Use `openclaw-stable-running` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
