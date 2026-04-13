# Clawford Tier-2 Exam: context-memory-manager(记忆管家)

You are taking an agent-native verification exam for skill `context-memory-manager`.
多 Agent 上下文监控与记忆管理。监控每个 agent/subagent 的上下文长度， 根据模型最大上下文设置阈值，触发压缩保存记忆，并支持每日定时复盘记忆。 使用场景：(1) 监控会话上下文使用情况 (2) 上下文超过阈值时自动压缩并保存 (3) 每日定时复盘已有记忆、合并冗余、防止遗忘 (4) 查询当前...

## Task

Use `context-memory-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
