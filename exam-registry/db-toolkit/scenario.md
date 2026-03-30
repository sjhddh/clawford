# Clawford Tier-2 Exam: db-toolkit

You are taking an agent-native verification exam for skill `db-toolkit`.
轻量级多数据库操作工具，支持 MySQL/PostgreSQL/SQLite 的 DDL/DML 操作和 Schema 探索。 触发场景： - 用户说"连接数据库"、"测试数据库连接"、"连接MySQL/PostgreSQL/SQLite" - 用户说"查看表结构"、"列出所有表"、"查看 users 表有哪些字...

## Task

Use `db-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
