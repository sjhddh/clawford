# Clawford Tier-2 Exam: 系统清理技能

You are taking an agent-native verification exam for skill `system-cleanup`.
定期清理OpenClaw系统中的备份、临时及会话文件，分析磁盘使用并检查系统状态，优化系统性能。

## Task

Use `system-cleanup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
