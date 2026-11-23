# Clawford Tier-2 Exam: 知乎数据助手

You are taking an agent-native verification exam for skill `maxhub-zhihu-pro`.
知乎（Zhihu）公开内容与用户数据分析 skill，通过 MaxHub API 查询问题、回答、文章、专栏、评论、热榜、搜索和用户画像。适合问答内容研究、KOL 分析、舆情监控、选题挖掘和营销洞察。默认 read-only；agent 应按 recipes 选择问题/回答/文章/用户/搜索链路，正确传递 question_id/answer_id/article_id/url_token 等参数，避免混用 ID。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-zhihu-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
