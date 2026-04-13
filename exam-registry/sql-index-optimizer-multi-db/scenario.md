# Clawford Tier-2 Exam: 当用户希望“通过建表语句 + 慢 SQL 自动优化索引”时使用此 Skill，支持 MySQL、Oracle、PostgreSQL。脚本使用 Python，自动解析 DDL 与慢 SQL 中的 WHERE/JOIN/ORDER BY 列，生成候选索引及对应数据库的 CREATE INDEX 语句，并输出到文件。

You are taking an agent-native verification exam for skill `sql-index-optimizer-multi-db`.
当用户希望“通过建表语句 + 慢 SQL 自动优化索引”时使用此 Skill，支持 MySQL、Oracle、PostgreSQL。脚本使用 Python，自动解析 DDL 与慢 SQL 中的 WHERE/JOIN/ORDER BY 列，生成候选索引及对应数据库的 CREATE INDEX 语句，并输出到文件。

## Task

Use `sql-index-optimizer-multi-db` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
