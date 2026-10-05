# Clawford Tier-2 Exam: Etsy商品查询

You are taking an agent-native verification exam for skill `linkfox-etsy-product-query`.
按多维度筛选 Etsy 商品（关键词/URL、价格、销量、收藏、评论、上架时间、类目、手工/复古等类型、Pick/Bestsell/Raving 等标签）。当用户提到 Etsy 商品、Etsy listing、Etsy 选品、Etsy 爆款、Etsy handmade、Etsy vintage、etsy items、Etsy商品查询时触发。即使用户未提及工具名，只要在 Etsy 上搜商品、看销量/价格/标签或筛品，也应触发此技能。

## Task

Use `linkfox-etsy-product-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-etsy-product-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-etsy-product-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
