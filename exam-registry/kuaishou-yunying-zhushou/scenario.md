# Clawford Tier-2 Exam: 快手运营分析助手

You are taking an agent-native verification exam for skill `kuaishou-yunying-zhushou`.
一站式快手运营工具，融合选题灵感、数据分析模块。支持爆款标题、热点选题、粉丝分析等，覆盖快手运营数据获取场景。当用户要搜索快手视频/抓取博主作品/拉取视频评论时使用，输出结构化数据，用于爆款选题、竞品监控、KOL 筛选、评论舆情与趋势洞察。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 达人作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。

## Task

Use `kuaishou-yunying-zhushou` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-yunying-zhushou-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-yunying-zhushou-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
