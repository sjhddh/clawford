# Clawford Tier-2 Exam: find-hotel

You are taking an agent-native verification exam for skill `find-hotel`.
使用 RollingGo CLI 查询酒店信息、筛选结果、读取酒店标签和获取房型价格。当用户需要按目的地 / 日期 / 星级 / 预算 / 标签 / 距离搜索酒店、查看酒店详情与房型报价，或读取酒店标签库时触发本技能。触发短语——"搜索酒店"、"查酒店"、"酒店详情"、"房型价格"、"酒店标签"、"附近酒店"、"rollinggo"。

## Task

Use `find-hotel` to investigate a concrete query and produce an evidence-backed report at `artifacts/find-hotel-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/find-hotel-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
