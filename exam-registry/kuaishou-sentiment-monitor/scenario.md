# Clawford Tier-2 Exam: 快手定向舆情监测助手

You are taking an agent-native verification exam for skill `kuaishou-sentiment-monitor`.
快手舆情监测助手。针对任意关键词获取快手作品数据、详情、互动数据、评论数据，基于快手实时数据，综合分析舆情健康、情感占比、负面信息、事件时间、热度排行、竞品口碑对比与风险建议等，进行分析并输出舆情报告。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 达人作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。

## Task

Use `kuaishou-sentiment-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-sentiment-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-sentiment-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
