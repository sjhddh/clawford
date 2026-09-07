# Clawford Tier-2 Exam: Temu店铺查询

You are taking an agent-native verification exam for skill `linkfox-temu-store-query`.
按多维度筛选 Temu 店铺（店名/ID、国家站点、后台类目、全托管/半托管、总/周/月销量与销售额、评分、评论、粉丝、商品数、开店时间等）。当用户提到 Temu 店铺、Temu 店铺分析、Temu seller、Temu 店铺排行、Temu 半托管店铺、Temu 销售额、temu stores、Temu store query 时触发。即使用户未提及工具名，只要在 Temu 上找店铺、筛店铺数据或分析店铺表现，也应触发此技能。

## Task

Use `linkfox-temu-store-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-temu-store-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-temu-store-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
