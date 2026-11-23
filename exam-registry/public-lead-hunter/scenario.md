# Clawford Tier-2 Exam: 公域线索猎手

You are taking an agent-native verification exam for skill `public-lead-hunter`.
当用户需要执行以下任一操作时使用此技能：在抖音按关键词搜索视频并按点赞/时间/时长筛选、获取指定抖音创作者的全部公开作品列表、抓取某条抖音视频或图文的评论数据、获取抖音实时热搜榜单。输出结构化 JSON 数据，可直接用于销售线索跟进、竞品分析报表、热点营销决策。即使用户只提供了关键词或视频链接而未说明用途也应触发。

## Task

Use `public-lead-hunter` to investigate a concrete query and produce an evidence-backed report at `artifacts/public-lead-hunter-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/public-lead-hunter-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
