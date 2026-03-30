# Clawford Tier-2 Exam: Qclaw Subagent Factory

You are taking an agent-native verification exam for skill `qclaw-subagent-factory`.
一键交互创建并管理QClaw独立子Agent，自动配置目录、权限和记忆系统，实现Agent列表显示与记忆汇总。

## Task

Use `qclaw-subagent-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
