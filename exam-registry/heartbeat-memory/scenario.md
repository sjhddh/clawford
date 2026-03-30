# Clawford Tier-2 Exam: skill-heartbeat-memory

You are taking an agent-native verification exam for skill `heartbeat-memory`.
自动记忆保存 Skill。支持 Heartbeat 自动触发和主 Agent 中手动调用两种方式。自动检查新 sessions，生成 Daily 笔记，定期提炼 MEMORY.md，支持备份已删除的 sessions。

## Task

Use `heartbeat-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
