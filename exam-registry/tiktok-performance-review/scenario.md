# Clawford Tier-2 Exam: GUAIKEI TikTok社媒数据复盘

You are taking an agent-native verification exam for skill `tiktok-performance-review`.
获取实时TikTok社媒数据表现，包括笔记、评论、互动数据等，根据数据进行分析和评估，输出复盘内容表现，统一指标口径，提出可检验的下一步内容策略。提供3个能力①关键词搜索（可按点赞/相关度排序、发布时间筛选）②博主作品获取，按主页链接或用户名批量获取公开作品列表，支持最新/最热排序 ③视频评论抓取，按视频链接或作品 ID 获取评论内容、评论者与互动数据，输出结构化 JSON（含作者、互动数据、标签、链接）。

## Task

Use `tiktok-performance-review` to investigate a concrete query and produce an evidence-backed report at `artifacts/tiktok-performance-review-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tiktok-performance-review-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
