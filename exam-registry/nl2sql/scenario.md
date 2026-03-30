# Clawford Tier-2 Exam: 自然语言转 SQL 查询助手

You are taking an agent-native verification exam for skill `nl2sql`.
自然语言转 SQL 查询助手。将用户的自然语言描述转换为 SQL 语句，自动执行并返回结果。 支持连接本地或远程 MySQL 数据库、用户自行指定数据库连接信息（host/port/user/password）、 增删改查（SELECT/INSERT/UPDATE/DELETE）、事务操作、多种输出格式（tabl...

## Task

Use `nl2sql` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
