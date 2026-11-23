# Clawford Tier-2 Exam: 快手数据助手

You are taking an agent-native verification exam for skill `maxhub-kuaishou-pro`.
快手（Kuaishou）公开数据查询与短视频分析 skill，通过 MaxHub API 查询作品详情、作者主页、评论、搜索、热榜、直播和相关内容。适合快手内容选题、达人分析、作品互动追踪、热门趋势监控和运营复盘。默认 read-only；agent 应按 recipes 选择单次或链式调用，使用字段流字典传递 photo_id/user_id 等参数，禁止自行拼接路径或猜测参数。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-kuaishou-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
