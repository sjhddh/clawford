# Clawford Tier-2 Exam: TikTok定向舆情监测助手

You are taking an agent-native verification exam for skill `tiktok-sentiment-monitor`.
TikTok舆情监测助手。针对任意关键词获取TikTok作品数据、详情、互动数据、评论数据，基于TikTok实时数据，综合分析舆情健康、情感占比、负面信息、事件时间、热度排行、竞品口碑对比与风险建议等，进行分析并输出舆情报告。提供3个能力①关键词搜索（可按点赞/相关度排序、发布时间筛选）②博主作品获取，按主页链接或用户名批量获取公开作品列表，支持最新/最热排序 ③视频评论抓取，按视频链接或作品 ID 获取评论内容、评论者与互动数据，输出结构化 JSON（含作者、互动数据、标签、链接）。当用户需要搜TikTok视频、抓博主作品、看TikTok评论、做竞品/对标账号监控、短视频选题调研、评论舆情分析、热点追踪、爆款挖掘时使用。

## Task

Use `tiktok-sentiment-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/tiktok-sentiment-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tiktok-sentiment-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
