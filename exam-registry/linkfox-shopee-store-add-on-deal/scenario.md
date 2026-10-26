# Clawford Tier-2 Exam: Shopee-店铺加购优惠

You are taking an agent-native verification exam for skill `linkfox-shopee-store-add-on-deal`.
Shopee（虾皮）加购优惠 Add-On Deal（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Add-On Deal 模块全部 14 个接口：add_add_on_deal、get_add_on_deal_list、add_add_on_deal_main_item、add_add_on_deal_sub_item、update_add_on_deal、end_add_on_deal 等。当用户提到 Shopee 加购优惠、Add-On Deal、主商品加购、add_add_on_deal、add_on_deal_id、满额加购 时触发。即使未明确提及"加购"，只要涉及已授权 Shopee 店铺的 Add-On Deal 活动管理，也应触发。

## Task

Use `linkfox-shopee-store-add-on-deal` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
