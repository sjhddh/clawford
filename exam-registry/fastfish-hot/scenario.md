# Clawford Tier-2 Exam: fastfish-hot-news-push 每日新闻热点推送（可设过滤词）

You are taking an agent-native verification exam for skill `fastfish-hot`.
热点推送独立项目。从 api.pearktrue.cn 拉取热点，支持飞书/钉钉/Telegram 推送；推送需至少配置一个渠道的 env。可配置拉取时间、推送时间、过滤关键词。通过 system.run 直接调用脚本，无需 MCP。当用户需要拉取热点、知乎热搜、配置热点推送或设置定时推送时使用本技能。

## Task

Use `fastfish-hot` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
