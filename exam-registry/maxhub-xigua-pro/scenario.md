# Clawford Tier-2 Exam: 西瓜视频数据助手

You are taking an agent-native verification exam for skill `maxhub-xigua-pro`.
西瓜视频（Xigua）公开视频数据查询与内容分析 skill，通过 MaxHub API 查询视频详情、作者、评论、搜索、推荐和相关视频。适合长视频/中视频选题、作者画像、互动分析、热点跟踪和内容复盘。默认 read-only；agent 应按 recipes 匹配视频详情、评论、作者、搜索等意图，并通过字段流传递 item_id/video_id/user_id。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-xigua-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
