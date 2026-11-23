# Clawford Tier-2 Exam: sql-optimizer

You are taking an agent-native verification exam for skill `sql-optimizer`.
This skill should be used when the user wants SQL queries written from business requirements, or has an existing SQL query that needs performance tuning. Trigger phrases include '写个 SQL', '帮我优化这条 SQL', '这个查询很慢', 'SQL 优化', 'WHERE 条件怎么写', 'SQL for this request'. It produces dialect-appropriate SQL plus concrete index and rewrite recommendations.

## Task

Use `sql-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
