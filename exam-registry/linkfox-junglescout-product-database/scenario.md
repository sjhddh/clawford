# Clawford Tier-2 Exam: Jungle Scout-商品库

You are taking an agent-native verification exam for skill `linkfox-junglescout-product-database`.
Jungle Scout产品数据库多条件筛选，支持按品类、价格、销量、收入、评论、评分、重量、BSR排名、LQS、卖家类型等维度筛选亚马逊商品，覆盖10个站点。当用户提到亚马逊选品、产品数据库筛选、BSR排名筛选、品类选品、高评分低竞争选品、FBA选品、亚马逊商品搜索、产品筛选、Amazon product database, product research, product filtering, BSR rank filter, category product search, niche product finder, FBA product search, Amazon product discovery, low competition products, Jungle Scout product database时触发此技能。即使用户未明确提及"Jungle Scout"或"产品数据库"，只要其需求涉及按多条件筛选亚马逊商品或发现潜力产品，也应触发此技能。

## Task

Use `linkfox-junglescout-product-database` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-junglescout-product-database-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-junglescout-product-database-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
