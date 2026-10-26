# Clawford Tier-2 Exam: 快手搜索爬虫

You are taking an agent-native verification exam for skill `kuaishou-search-scraper`.
爬取快手爆款视频和文案数据，支持快手搜索、快手博主作品、快手视频详情、快手评论等模块。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 达人作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。Use when, 用户需要搜快手视频、查快手热搜、抓取博主作品列表、分析视频评论区、做短视频选题/竞品分析/舆情监控/热点追踪/爆款挖掘/快手运营数据分析。 Do NOT use when, 平台非快手（小红书/抖音/微博→对应技能）、需登录态或私密数据、仅要文案创作不需数据查询、既无关键词也无可识别链接且目标不明（先追问）。

## Task

Use `kuaishou-search-scraper` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-search-scraper-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-search-scraper-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
