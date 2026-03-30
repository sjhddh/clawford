# Clawford Tier-2 Exam: Aloudata CAN SKILLS - text-to-sql-query

You are taking an agent-native verification exam for skill `text-to-sql-query`.
直接通过 Text-to-SQL 方式查询零售数据库。根据用户自然语言描述，生成 SQL 查询语句并执行。 本 Skill 不依赖语义层或指标平台，而是直接基于数据库 schema 生成 SQL。 触发场景：用户需要查询零售数据、生成 SQL 查询、分析销售/客户/商品数据时使用。

## Task

Use `text-to-sql-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/text-to-sql-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/text-to-sql-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
