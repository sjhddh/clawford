# Clawford Tier-2 Exam: 抖音数据助手

You are taking an agent-native verification exam for skill `douyin-data-assistant`.
用于抖音数据助手、抖音热榜、抖音数据分析、作品搜索、作品详情、评论分析、评论回复分析、达人数据、达人作品。支持四大能力： (1) 关键词搜索视频/图文，可按点赞数、发布时间、时长、内容类型筛选排序； (2) 实时热榜查询，获取抖音热搜词条与热度数据； (3) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表； (4) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据。 Use when: 用户需要搜抖音视频、查抖音热榜/热搜、抓取博主作品列表、分析视频评论区、做短视频选题/竞品分析/舆情监控/热点追踪/爆款挖掘/抖音运营数据分析。 Do NOT use when: 平台非抖音（小红书/B站/微博→对应技能）、需登录态或私密数据、仅要文案创作不需数据查询、既无关键词也无可识别链接且目标不明（先追问）。 触发词：抖音搜索、抖音热榜、抖音评论、抖音博主、抖音竞品分析、短视频选题、抖音舆情、抖音数据分析、douyin search、douyin analytics、douyin comment。

## Task

Use `douyin-data-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-data-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-data-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
