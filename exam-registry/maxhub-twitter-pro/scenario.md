# Clawford Tier-2 Exam: X数据助手

You are taking an agent-native verification exam for skill `maxhub-twitter-pro`.
Twitter/X 公开社交数据查询与传播分析 skill，通过 MaxHub API 查询推文、回复、用户资料、关注/粉丝、搜索、趋势和相关互动。适合舆情监测、账号画像、话题传播、竞品研究和内容分析。默认 read-only；agent 应优先使用 recipes，按 tweet_id/user_id/username/query 等字段流链式调用，并对个人社交数据与 UGC 做最小化处理。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-twitter-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
