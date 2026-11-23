# Clawford Tier-2 Exam: eBay国际站-商品搜索

You are taking an agent-native verification exam for skill `linkfox-ebay-search`.
在多个eBay国际站点上搜索和浏览商品listing。当用户提到eBay商品搜索、eBay listing查询、eBay价格对比、eBay市场浏览、eBay已售商品、eBay拍卖搜索、eBay选品调研、eBay search, eBay products, eBay pricing, eBay competitors, sold items, eBay auctions, eBay market analysis时触发此技能。即使用户未明确提及"eBay"，只要其需求涉及在eBay上搜索商品、对比eBay价格、查找已成交listing或分析eBay市场数据，也应触发此技能。

## Task

Use `linkfox-ebay-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-ebay-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-ebay-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
