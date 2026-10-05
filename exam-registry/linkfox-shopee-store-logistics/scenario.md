# Clawford Tier-2 Exam: Shopee-店铺物流

You are taking an agent-native verification exam for skill `linkfox-shopee-store-logistics`.
Shopee（虾皮）店铺物流发货（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Logistics 模块全部 46 个接口：get_shipping_parameter、ship_order、get_tracking_number、create_shipping_document、download_shipping_document、get_channel_list 等。当用户提到 Shopee 物流、发货、ship_order、运单号、面单、tracking、揽收地址、物流渠道、READY_TO_SHIP 发货 时触发。即使未明确提及"物流"，只要涉及已授权 Shopee 店铺的发货、面单或物流轨迹查询，也应触发。

## Task

Use `linkfox-shopee-store-logistics` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
