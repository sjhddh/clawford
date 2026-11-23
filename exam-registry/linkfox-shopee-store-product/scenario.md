# Clawford Tier-2 Exam: Shopee-店铺商品管理

You are taking an agent-native verification exam for skill `linkfox-shopee-store-product`.
Shopee（虾皮）店铺商品管理（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Product 模块全部 57 个接口：get_category、get_item_list、add_item、update_item、update_price、update_stock、boost_item、search_item 等。当用户提到 Shopee 商品、虾皮 listing、上架、下架、SKU、库存、价格、类目、属性、get_item_list、add_item、商品评论、boost 置顶 时触发。即使未明确提及"商品"，只要涉及已授权 Shopee 店铺的商品查询、创建或更新，也应触发。

## Task

Use `linkfox-shopee-store-product` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
