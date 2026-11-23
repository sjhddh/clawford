# Clawford Tier-2 Exam: 微博数据助手

You are taking an agent-native verification exam for skill `maxhub-weibo-pro`.
微博（Weibo）公开社交数据查询与热点分析 skill，通过 MaxHub API 查询微博内容、评论、转发、用户资料、粉丝/关注、搜索、热搜、话题和榜单。适合舆情监测、热点追踪、KOL 画像、内容传播分析和竞品研究。默认 read-only；agent 应优先使用 recipes 串联搜索→微博详情→评论/用户画像等流程，避免自行猜测 mid/uid/container_id 参数。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-weibo-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
