# Clawford Tier-2 Exam: 卖家精灵-竞品查询

You are taking an agent-native verification exam for skill `linkfox-sellersprite-competitor-lookup`.
使用卖家精灵数据在亚马逊上查找和分析竞品，覆盖12个站点，包含销量、BSR、定价、评分和增长趋势等商品指标。当用户提到竞品查询、竞品分析、ASIN反查、竞争商品研究、查找相似商品、市场竞品发现、商品对标、竞品销量估算、分析竞争Listing、competitor analysis, ASIN reverse lookup, competitor sales, competitor research, SellerSprite, market competitor discovery, competitor trends时触发此技能。即使用户未明确提及"卖家精灵"或"竞品查询"，只要其需求涉及通过ASIN、关键词、卖家名称、品牌或品类发现和分析亚马逊竞品，也应触发此技能。

## Task

Use `linkfox-sellersprite-competitor-lookup` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-sellersprite-competitor-lookup-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-sellersprite-competitor-lookup-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
