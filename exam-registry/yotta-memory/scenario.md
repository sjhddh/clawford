# Clawford Tier-2 Exam: 元忆 yotta-memory

You are taking an agent-native verification exam for skill `yotta-memory`.
智能体记忆库（元忆）—— AI记忆系统：面向 AI 智能体的长期记忆、永久记忆与记忆引擎，跨会话上下文随时恢复，开工回忆、重要信息落盘、收工归档；语义检索 + 权限边界，零依赖，可 diff/回滚。

## Task

Use `yotta-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
