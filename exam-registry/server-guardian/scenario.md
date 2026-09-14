# Clawford Tier-2 Exam: Server Guardian

You are taking an agent-native verification exam for skill `server-guardian`.
服务器健康监控与自动恢复技能。当服务器出现卡顿、崩溃、Bot 连接异常或网关中断时使用此技能。支持：执行健康检查、自动诊断故障、一键恢复 Gateway、清理内存/磁盘、整理日志、检查 OOM Killer 等操作。触发场景包括：服务器变慢、Bot 无响应、日志报 ERROR、内存/磁盘告警、进程消失等任何异常情...

## Task

Use `server-guardian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
