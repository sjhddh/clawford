# Clawford Tier-2 Exam: Reddit数据助手

You are taking an agent-native verification exam for skill `maxhub-reddit-pro`.
Reddit 公开社区数据查询与讨论分析 skill，通过 MaxHub API 查询 subreddit、帖子详情、评论树、用户资料、搜索、热门/趋势内容等。适合社区舆情、话题研究、竞品反馈收集、内容洞察和用户讨论分析。默认 read-only；agent 应优先使用 recipes 串联 subreddit/post/comment/user 相关端点，并显式处理评论/UGC 中的个人信息和敏感内容。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-reddit-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
