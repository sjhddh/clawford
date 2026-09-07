# Clawford Tier-2 Exam: Shopee-店铺限时特卖

You are taking an agent-native verification exam for skill `linkfox-shopee-store-shop-flash-sale`.
Shopee（虾皮）店铺秒杀 Shop Flash Sale（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Shop Flash Sale 模块全部 11 个接口：get_time_slot_id、create_shop_flash_sale、get_shop_flash_sale_list、add_shop_flash_sale_items、update_shop_flash_sale 等。当用户提到 Shopee 店铺秒杀、Shop Flash Sale、限时秒杀、get_time_slot_id、flash_sale_id、秒杀时段 时触发。即使未明确提及"秒杀"，只要涉及已授权 Shopee 店铺的 Flash Sale 活动管理，也应触发。

## Task

Use `linkfox-shopee-store-shop-flash-sale` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
