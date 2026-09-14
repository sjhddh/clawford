# Clawford Tier-2 Exam: Archery SQL Query

You are taking an agent-native verification exam for skill `archery-sql-query`.
通过 Archery SQL 平台查询数据库。当用户需要执行 SQL 查询、查看数据库结构、列出实例或数据库、查找重复数据时使用此 skill。触发词包括：查询数据库、Archery、SQL查询、数据库探索、TiDB、MySQL、StarRocks、重复数据、去重、数据清理 等数据库相关操作。

## Task

Use `archery-sql-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/archery-sql-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/archery-sql-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
