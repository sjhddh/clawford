# Clawford Tier-2 Exam: AI News Pro

You are taking an agent-native verification exam for skill `ai-news-pro`.
AI News Pro 提供 AI 领域早报、晚报、热点新闻和精选内容，基于 AI 评分智能排序，支持定时推送。当用户说"查询 AI 早报"、"查询 AI 晚报"、"查询 24H 热点新闻榜"或"查询 AI 精选内容"时调用。

## Task

Use `ai-news-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
