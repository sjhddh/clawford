# Clawford Tier-2 Exam: 抖音定向舆情监测助手

You are taking an agent-native verification exam for skill `douyin-sentiment-monitor`.
抖音舆情监测助手。针对任意关键词获取抖音作品数据、详情、互动数据、评论数据，基于抖音实时数据，综合分析舆情健康、情感占比、负面信息、事件时间、热度排行、竞品口碑对比与风险建议等，进行分析并输出舆情报告。支持四大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(4) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据。

## Task

Use `douyin-sentiment-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-sentiment-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-sentiment-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
