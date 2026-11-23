# Clawford Tier-2 Exam: 快手新闻简报GUAIKEI

You are taking an agent-native verification exam for skill `kuaishou-news-brief`.
快手新闻简报，一个关键词搜索最新/综合/高赞视频，根据获得的实时数据进行信息聚合后生成智能摘要、热点聚类、舆情分析和深度解读报告，包含详细信息源列表，适用于AI agent进行快手社媒资讯分析。当用户需要新闻搜索、舆情分析、需求洞察、热点追踪、情报获取、资讯聚合、新闻解读、快手搜索、事件追踪、行业情报等场景时。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 达人作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。

## Task

Use `kuaishou-news-brief` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-news-brief-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-news-brief-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
