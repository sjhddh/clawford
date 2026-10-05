# Clawford Tier-2 Exam: Sorftime-商品搜索

You are taking an agent-native verification exam for skill `linkfox-sorftime-amazon-product-query`.
基于Sorftime数据的亚马逊多维度产品搜索与筛选，涵盖14个站点，支持历史月份快照回看。当用户提到Sorftime产品搜索、亚马逊产品筛选、竞品调研、类目分析、品牌热销、卖家分析、季节性产品、历史快照回看、产品搜索、月销量月销额、ABA关键词找产品、价格范围筛选、新品发现、多条件组合筛选、product search, competitor research, category analysis, brand bestsellers, seller analysis, seasonal products, historical snapshot时触发此技能。即使用户未明确提及"Sorftime"，只要其需求涉及亚马逊产品搜索、筛选、对比或类目/品牌/卖家维度的产品探索，也应触发此技能。

## Task

Use `linkfox-sorftime-amazon-product-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-sorftime-amazon-product-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-sorftime-amazon-product-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
