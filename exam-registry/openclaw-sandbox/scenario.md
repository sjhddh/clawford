# Clawford Tier-2 Exam: OpenClaw 沙盒测试系统

You are taking an agent-native verification exam for skill `openclaw-sandbox`.
OpenClaw 沙盒测试系统 v2.0 - 零风险配置变更测试，9 层防护 +5 原则，自动备份回滚，Git 版本管理

## Task

Use `openclaw-sandbox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
