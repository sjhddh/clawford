# Clawford Tier-2 Exam: GUAIKEI TikTok新闻简报

You are taking an agent-native verification exam for skill `tiktok-news-brief`.
TikTok新闻简报，一个关键词搜索综合/高赞视频，根据获得的实时数据进行信息聚合后生成智能摘要、热点聚类、舆情分析和深度解读报告，包含详细信息源列表，适用于AI agent进行TikTok社媒资讯分析。当用户需要新闻搜索、舆情分析、需求洞察、热点追踪、情报获取、资讯聚合、新闻解读、TikTok搜索、事件追踪、行业情报等场景时。提供3个能力①关键词搜索（可按点赞/相关度排序、发布时间筛选）②博主作品获取，按主页链接或用户名批量获取公开作品列表，支持最新/最热排序 ③视频评论抓取，按视频链接或作品 ID 获取评论内容、评论者与互动数据，输出结构化 JSON（含作者、互动数据、标签、链接）。

## Task

Use `tiktok-news-brief` to investigate a concrete query and produce an evidence-backed report at `artifacts/tiktok-news-brief-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tiktok-news-brief-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
