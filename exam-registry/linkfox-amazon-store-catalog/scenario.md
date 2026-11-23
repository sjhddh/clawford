# Clawford Tier-2 Exam: 亚马逊-店铺目录

You are taking an agent-native verification exam for skill `linkfox-amazon-store-catalog`.
亚马逊商品目录（Catalog Items）查询。用于按 ASIN 获取目录详情，按关键词、标识符或分类条件搜索商品，以及查询商品类目节点、标题摘要、图片和其他 includedData。用户提到亚马逊商品目录、Catalog Items、ASIN 查商品、关键词搜亚马逊商品、类目节点、商品图片或摘要、searchCatalogItems、getCatalogItem、listCatalogCategories 时触发。即使未明确说“Catalog”，只要希望查询亚马逊全站目录中的商品基础资料而不是卖家自己的 Listing，也应触发此技能；卖家 SKU 的刊登增删改查使用 linkfox-amazon-store-listings。

## Task

Use `linkfox-amazon-store-catalog` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-amazon-store-catalog-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-amazon-store-catalog-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
