# Clawford Tier-2 Exam: xiaohongshu-mcp-openclaw

You are taking an agent-native verification exam for skill `xiaohongshu-mcp-openclaw`.
当用户提到小红书/XHS/Rednote 并需要关键词搜笔记、看笔记详情、抓评论、统计点赞与评论数时使用。通过 xpzouying/xiaohongshu-mcp + mcporter 提供统一查询流程。

## Task

Use `xiaohongshu-mcp-openclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
