# Clawford Tier-2 Exam: 专利排行榜

You are taking an agent-native verification exam for skill `patent-ranking`.
专利排行榜、专利排名。当用户说「这个领域谁的专利最多」「江苏高校专利排名」「某个省企业专利排行」「发明专利排名前 20」「做宣传 / 报告要一张专利排行榜」时使用。输出专利排行榜（Excel 能打开），带统计口径。 Builds a patent leaderboard for a chosen scope, such as a technology, a province, or universities versus companies, ranked by valid inventions, recent filings and growth, with the counting rules stated.

## Task

Use `patent-ranking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
