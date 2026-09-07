# Clawford Tier-2 Exam: Shopee-店铺全球商品

You are taking an agent-native verification exam for skill `linkfox-shopee-store-global-product`.
Shopee（虾皮）跨境全球商品 GlobalProduct（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API GlobalProduct 模块全部 34 个接口：get_category、get_global_item_list、add_global_item、create_publish_task、update_price、update_stock 等。当用户提到 Shopee 全球商品、跨境商品、GlobalProduct、全球 SKU、发布到站点、merchantId、global_item_id、get_global_item_list、add_global_item 时触发。即使未明确提及"全球商品"，只要涉及已授权 Shopee 商户的全球商品管理或跨境发布，也应触发。

## Task

Use `linkfox-shopee-store-global-product` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
