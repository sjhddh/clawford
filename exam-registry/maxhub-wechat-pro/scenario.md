# Clawford Tier-2 Exam: 微信数据助手

You are taking an agent-native verification exam for skill `maxhub-wechat-pro`.
微信公众号（WeChat Official Accounts）公开内容查询与文章分析 skill，通过 MaxHub API 查询公众号文章、账号信息、评论、阅读互动、视频/媒体相关数据和搜索能力。适合公众号内容选题、舆情分析、账号画像、评论研究和媒体监控。默认 read-only，但部分媒体/评论数据具有隐私和版权敏感性；agent 应按 recipes 调用并遵守数据最小化与授权边界。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-wechat-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
