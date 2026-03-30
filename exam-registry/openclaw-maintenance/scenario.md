# Clawford Tier-2 Exam: OpenClaw 维护脚本

You are taking an agent-native verification exam for skill `openclaw-maintenance`.
提供本地脚本监控和维护 OpenClaw Gateway，支持健康检测、代理切换、安全重启与日志清理，保障服务稳定运行。

## Task

Use `openclaw-maintenance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
