# Clawford Tier-2 Exam: Keepa-商品搜索

You are taking an agent-native verification exam for skill `linkfox-keepa-product-search`.
基于Keepa数据的亚马逊高级商品搜索与筛选，支持品类、价格、月销量、关键词、BSR排名、评论数、评分、包装尺寸、重量、配送方式等多维度条件。当用户提到Keepa选品、亚马逊商品查找、高级选品、BSR筛选、按销售排名选品、月销量过滤、关键词选品、品类选品、竞品筛选、小众商品发掘、历史排名筛选、Keepa product selection, advanced product selection, BSR filtering, sales filtering, category search, competitor screening, historical data filtering, Amazon product selection时触发此技能。即使用户未明确提及"Keepa"，只要其需求涉及多条件亚马逊商品搜索、按销售指标筛选商品或超越简单关键词搜索的高级选品，也应触发此技能。

## Task

Use `linkfox-keepa-product-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-keepa-product-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-keepa-product-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
