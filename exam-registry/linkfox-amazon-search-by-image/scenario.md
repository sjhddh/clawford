# Clawford Tier-2 Exam: 亚马逊-以图搜图

You are taking an agent-native verification exam for skill `linkfox-amazon-search-by-image`.
基于图片的亚马逊跨站点视觉商品搜索，支持8个站点的以图搜图和视觉相似商品发现。当用户提到以图搜图、图片搜索、视觉搜索、找同款、外观相似商品、图片找货、竞品图片搜索、相似商品发现、image search, Amazon visual search, find similar products, reverse image lookup, visual search, similar items, competitor image search, product image match时触发此技能。即使用户未明确提及"图片搜索"，只要用户提供了图片URL并希望在亚马逊上查找匹配或相似的商品，也应触发此技能。

## Task

Use `linkfox-amazon-search-by-image` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-amazon-search-by-image-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-amazon-search-by-image-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
