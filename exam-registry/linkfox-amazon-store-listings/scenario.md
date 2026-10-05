# Clawford Tier-2 Exam: 亚马逊-店铺Listing管理

You are taking an agent-native verification exam for skill `linkfox-amazon-store-listings`.
亚马逊卖家 Listing 刊登与商品类型定义管理。用于按 SKU 查询或搜索 Listing，创建、全量更新、局部修改和删除刊登，检查 ASIN 刊登限制，并查询 product type 及其 JSON Schema 属性要求。用户提到亚马逊 Listing、刊登商品、修改商品信息、删除 Listing、卖家 SKU、ASIN 能否销售、刊登限制、product type、商品类型定义、JSON Schema、Listings Items、Listings Restrictions 时触发。即使未明确提及 API，只要希望管理卖家自己的商品刊登或确认上架所需字段与资格，也应触发此技能；查询亚马逊全站商品目录使用 linkfox-amazon-store-catalog，批量提交使用 linkfox-amazon-store-feeds。

## Task

Use `linkfox-amazon-store-listings` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
