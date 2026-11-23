# Clawford Tier-2 Exam: 今日头条数据助手

You are taking an agent-native verification exam for skill `maxhub-toutiao-pro`.
今日头条（Toutiao）内容数据查询与资讯分析 skill，通过 MaxHub API 查询文章/视频详情、评论、用户/媒体号、搜索、热榜和推荐内容。适合资讯选题、舆情监控、内容互动分析、媒体号画像和热点跟踪。默认 read-only；agent 应按 recipes 匹配文章、评论、搜索、热榜等意图，并用字段流字典传递 item_id/group_id/user_id 等参数。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-toutiao-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
