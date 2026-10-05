# Clawford Tier-2 Exam: Etsy店铺查询

You are taking an agent-native verification exam for skill `linkfox-etsy-store-query`.
按多维度筛选 Etsy 店铺（销量、收藏、评论、开店时间、国家、主营类目、Raving/星标等）。当用户提到 Etsy 店铺、Etsy 店搜、Etsy seller、Etsy 店铺排行、Etsy 周销量店铺、etsy stores、Etsy店铺查询 时触发。即使用户未提及工具名，只要在 Etsy 上找店铺、筛店铺数据或分析店铺表现，也应触发此技能。

## Task

Use `linkfox-etsy-store-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-etsy-store-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-etsy-store-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
