# Clawford Tier-2 Exam: 小红书数据助手

You are taking an agent-native verification exam for skill `maxhub-xiaohongshu-pro`.
小红书（Xiaohongshu/RED）公开笔记与用户数据分析 skill，通过 MaxHub API 查询笔记详情、评论、用户资料、搜索、话题、商品/种草内容、推荐流与蒲公英（PGY）创作者商业化数据。适合品牌种草分析、KOL 画像、内容选题、竞品监控、评论洞察与蒲公英博主选号。默认 read-only；PGY 域为 POST 写入式查询（high risk），调用前需用户显式确认；agent 应按 recipes 选择笔记/用户/搜索/评论/PGY 链路，使用 note_id/user_id/keyword/brand_user_id 等字段流传参，并避免采集超出授权的个人数据。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-xiaohongshu-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
