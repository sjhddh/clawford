# Clawford Tier-2 Exam: pg-copilot

You are taking an agent-native verification exam for skill `pg-copilot`.
PostgreSQL AI 助手 - 自然语言转 SQL、SQL 转自然语言、ERD、性能优化、分区管理、实时同步。一个技能搞定 PostgreSQL 所有需求。

## Task

Use `pg-copilot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
