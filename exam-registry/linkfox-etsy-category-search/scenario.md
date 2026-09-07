# Clawford Tier-2 Exam: Etsy类目搜索

You are taking an agent-native verification exam for skill `linkfox-etsy-category-search`.
Etsy 类目数据。可检索类目名称、id 与 parentIds，用于商品/店铺筛选的类目 id。当用户提到 Etsy 类目、Etsy category id、Etsy 类目树、Etsy品类查询、syncEtsyCategory、查询类目时触发。即使用户未提及工具名，只要在本地已同步的 Etsy 类目库里按关键词找类目 id，也应触发此技能。

## Task

Use `linkfox-etsy-category-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-etsy-category-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-etsy-category-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
