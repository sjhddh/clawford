# Clawford Tier-2 Exam: 新闻聚合引擎

You are taking an agent-native verification exam for skill `news-aggregator`.
自动聚合国内外科技、军事和社会新闻，支持多源搜索、去重过滤及结构化总结，按类别分类并标注可信度。

## Task

Use `news-aggregator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
