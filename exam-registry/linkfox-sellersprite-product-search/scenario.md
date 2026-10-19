# Clawford Tier-2 Exam: 卖家精灵-商品搜索

You are taking an agent-native verification exam for skill `linkfox-sellersprite-product-search`.
使用卖家精灵数据搜索和筛选亚马逊商品，支持价格、月销量、BSR排名、毛利率、评分、配送方式、标签、卖家来源等多维度条件，覆盖多个亚马逊站点。当用户提到亚马逊选品调研、产品筛选、销量过滤、产品发掘、BSR分析、小众商品发现、竞品分析、市场机会评估、按商品维度的市场规模估算、毛利率筛选、SellerSprite product selection, Amazon product selection, sales filtering, BSR analysis, profit screening, market analysis, product selection tool时触发此技能。即使用户未明确提及"卖家精灵"，只要其需求涉及筛选和分析亚马逊商品级数据进行选品，也应触发此技能。

## Task

Use `linkfox-sellersprite-product-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-sellersprite-product-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-sellersprite-product-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
