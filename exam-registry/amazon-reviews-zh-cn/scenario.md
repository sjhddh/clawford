# Clawford Tier-2 Exam: Amazon 商品评论【Gecho 官方】

You are taking an agent-native verification exam for skill `amazon-reviews-zh-cn`.
通过官方 Gecho Bridge MCP 采集 Amazon 商品评论，包括评论文本、评分、日期和可用的评论者信息。用户提供 Amazon 商品 URL 或 ASIN 并需要评论调研时使用。

## Task

Use `amazon-reviews-zh-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
