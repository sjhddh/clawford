# Clawford Tier-2 Exam: Temu商品查询

You are taking an agent-native verification exam for skill `linkfox-temu-product-query`.
按多维度筛选 Temu 商品（关键词/商品 ID/店铺 ID、前后台类目、价格、评分、评论、总/周/日销量、上架时间、全托管/半托管、半托管地区、标签等）。当用户提到 Temu 商品、Temu 选品、拼多多跨境、Temu 爆款、Temu 半托管、全托管商品、Temu product query、temu items 时触发。即使用户未提及工具名，只要在 Temu 上搜商品、看销量/评分/价格或筛品，也应触发此技能。

## Task

Use `linkfox-temu-product-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-temu-product-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-temu-product-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
