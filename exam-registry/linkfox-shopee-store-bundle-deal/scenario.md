# Clawford Tier-2 Exam: Shopee-店铺捆绑优惠

You are taking an agent-native verification exam for skill `linkfox-shopee-store-bundle-deal`.
Shopee（虾皮）套装优惠 Bundle Deal（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Bundle Deal 模块全部 10 个接口：add_bundle_deal、get_bundle_deal_list、add_bundle_deal_item、update_bundle_deal、end_bundle_deal 等。当用户提到 Shopee 套装优惠、Bundle Deal、组合促销、add_bundle_deal、bundle_deal_id、满件优惠 时触发。即使未明确提及"套装"，只要涉及已授权 Shopee 店铺的 Bundle Deal 活动管理，也应触发。

## Task

Use `linkfox-shopee-store-bundle-deal` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
