# Clawford Tier-2 Exam: index-optimization

You are taking an agent-native verification exam for skill `index-optimization`.
针对指定表或集合做查询模式分析、可复用索引设计与 explain 迭代验证。支持两种优化模式：默认全量模式（定位该表/集合所有查询）与单查询模式（用户指定某条查询时，仅分析该查询并查询数据库现有索引）；支持两种执行确认模式：需确认模式与免确认模式。

## Task

Use `index-optimization` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
