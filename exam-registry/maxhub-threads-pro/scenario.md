# Clawford Tier-2 Exam: Threads数据助手

You are taking an agent-native verification exam for skill `maxhub-threads-pro`.
Threads 公开社交内容查询与用户分析 skill，通过 MaxHub API 查询帖子、用户资料、评论、搜索、时间线和相关互动数据。适合海外社媒内容研究、账号画像、话题追踪和互动分析。默认 read-only；agent 应从 recipes 匹配用户意图，按 post_id/user_id/keyword 等字段流链式调用，并避免过度采集个人社交数据。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-threads-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
