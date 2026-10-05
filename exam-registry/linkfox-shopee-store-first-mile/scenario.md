# Clawford Tier-2 Exam: Shopee-店铺头程物流

You are taking an agent-native verification exam for skill `linkfox-shopee-store-first-mile`.
Shopee（虾皮）头程物流 FirstMile（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API FirstMile 模块全部 16 个接口：get_unbind_order_list、generate_first_mile_tracking_number、bind_first_mile_tracking_number、get_waybill、get_channel_list 等。当用户提到 Shopee 头程、FirstMile、头程运单、绑定头程、first mile tracking、中转仓、get_unbind_order_list 时触发。即使未明确提及"头程"，只要涉及已授权 Shopee 店铺的头程运单绑定或面单，也应触发。

## Task

Use `linkfox-shopee-store-first-mile` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
