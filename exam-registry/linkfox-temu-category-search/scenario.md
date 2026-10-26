# Clawford Tier-2 Exam: Temu类目搜索

You are taking an agent-native verification exam for skill `linkfox-temu-category-search`.
在已同步到本地库的 Temu 类目数据中按关键词检索类目中文名、英文名与类目 id，用于商品/店铺筛选的类目 id。当用户提到 Temu 类目、Temu category id、Temu 类目树、Temu 后台类目、temu 品类、syncTemuCategory（Temu 品类同步）后查询类目、Temu category search 时触发。即使用户未提及工具名，只要在本地已同步的 Temu 类目库里按关键词找类目 id，也应触发此技能。

## Task

Use `linkfox-temu-category-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-temu-category-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-temu-category-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
