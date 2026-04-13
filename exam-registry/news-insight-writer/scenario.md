# Clawford Tier-2 Exam: 实时资讯观点博客写作助手

You are taking an agent-native verification exam for skill `news-insight-writer`.
实时资讯观点博客写作助手。输入一个技术新闻链接或主题，输出深度、有观点、带真实引用和截图的公众号/博客文章。适用于 AI/科技/具身智能等前沿领域热点解读。当用户需要写资讯分析、技术八卦、观点评论类博客文章时使用此 skill。

## Task

Use `news-insight-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
