# Clawford Tier-2 Exam: 提供数据库ddl内容,根据自然语言生成sql

You are taking an agent-native verification exam for skill `sql-generator-skill`.
根据提供的数据库表结构和自然语言需求生成规范、高效且包含中文注释的SELECT查询语句。

## Task

Use `sql-generator-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
