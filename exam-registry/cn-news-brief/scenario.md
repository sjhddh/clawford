# Clawford Tier-2 Exam: 中文新闻简报

You are taking an agent-native verification exam for skill `cn-news-brief`.
中文新闻简报。每日热点新闻摘要，分类呈现，3分钟了解天下事。 当用户说"新闻"、"今天有什么新闻"、"热点"、"今日要闻"时触发。 Keywords: 新闻, 热点, 要闻, news, 简报, 日报.

## Task

Use `cn-news-brief` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
