# Clawford Tier-2 Exam: memory-indexer

You are taking an agent-native verification exam for skill `memory-indexer`.
短期记忆关键词索引工具 - 自动提取关键词、建立索引、搜索记忆，支持关联发现、时间线视图、重要记忆标记、三级级联搜索、会话备份与精简等功能。版本 2.0.0

## Task

Use `memory-indexer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
