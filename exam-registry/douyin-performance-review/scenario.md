# Clawford Tier-2 Exam: GUAIKEI抖音社媒数据复盘

You are taking an agent-native verification exam for skill `douyin-performance-review`.
获取实时抖音社媒数据表现，包括作品、评论、互动数据等，根据数据进行分析和评估，输出复盘内容表现，统一指标口径，提出可检验的下一步内容策略。支持四大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(4) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据。

## Task

Use `douyin-performance-review` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-performance-review-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-performance-review-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
