# Clawford Tier-2 Exam: Keepa-商品详情

You are taking an agent-native verification exam for skill `linkfox-keepa-product-request`.
通过ASIN获取亚马逊商品详情，包括价格、标题、主图、上架日期、材质、重量、变体月销量及近12个月的月销数据。当用户查询亚马逊商品详情、ASIN查询、商品定价、销售排名历史、月销量趋势、商品尺寸、FBA费用、产品规格、批量ASIN查询、Keepa product details, ASIN detail lookup, monthly sales data, pricing info, product specifications, FBA fees, batch ASIN query时触发此技能。即使用户未明确提及"Keepa"，只要其需求涉及获取一个或多个亚马逊ASIN的结构化商品数据，也应触发此技能。

## Task

Use `linkfox-keepa-product-request` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-keepa-product-request-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-keepa-product-request-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
