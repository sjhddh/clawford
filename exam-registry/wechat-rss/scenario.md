# Clawford Tier-2 Exam: WeChat RSS

You are taking an agent-native verification exam for skill `wechat-rss`.
通过 wcrss.com API 获取并展示微信公众号的最新文章。当用户请求查看微信公众号文章、获取公众号最新发布内容、阅读微信RSS订阅或浏览公众号内容时使用此技能。该技能会从环境变量 WCRSS_API_KEY 中读取 API Key，并调用 wcrss.com 的接口来获取文章数据。

## Task

Use `wechat-rss` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
