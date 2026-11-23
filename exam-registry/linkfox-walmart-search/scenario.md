# Clawford Tier-2 Exam: 沃尔玛-商品搜索

You are taking an agent-native verification exam for skill `linkfox-walmart-search`.
按关键词、品类、价格区间等条件搜索和浏览沃尔玛商品listing。当用户提到Walmart商品搜索、沃尔玛商品listing、沃尔玛价格对比、沃尔玛竞品分析、沃尔玛选品调研、沃尔玛市场数据、在沃尔玛上查找商品、Walmart search, Walmart products, Walmart product selection, Walmart pricing, Walmart competitors, Walmart market时触发此技能。即使用户未明确提及"Walmart搜索"，只要其需求涉及在沃尔玛上搜索商品、查看商品可售状态、对比沃尔玛价格或分析沃尔玛商品listing，也应触发此技能。

## Task

Use `linkfox-walmart-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-walmart-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-walmart-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
