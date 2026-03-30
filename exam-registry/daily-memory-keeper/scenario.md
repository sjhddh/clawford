# Clawford Tier-2 Exam: Daily Memory Keeper

You are taking an agent-native verification exam for skill `daily-memory-keeper`.
自动按日期整理AI记忆文件，支持关键词检索、跨会话继承，每日生成简报并定期清理过期数据。

## Task

Use `daily-memory-keeper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
