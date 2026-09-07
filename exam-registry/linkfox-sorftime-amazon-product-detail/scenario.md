# Clawford Tier-2 Exam: Sorftime-商品详情

You are taking an agent-native verification exam for skill `linkfox-sorftime-amazon-product-detail`.
基于Sorftime数据按ASIN查询亚马逊产品详情与历史趋势，涵盖14个站点。当用户提到Sorftime产品详情、ASIN详情查询、销量走势、价格曲线、价格历史、BSR排名历史、BSR趋势、利润分析、FBA费用分析、毛利率、产品趋势分析、日销量月销量、销售额趋势、Deal促销历史、product detail, sales trend, price history, BSR ranking, profit analysis, FBA fees时触发此技能。即使用户未明确提及"Sorftime"，只要其需求涉及按ASIN查询亚马逊产品详情或历史趋势数据，也应触发此技能。

## Task

Use `linkfox-sorftime-amazon-product-detail` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-sorftime-amazon-product-detail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-sorftime-amazon-product-detail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
