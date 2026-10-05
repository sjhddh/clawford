# Clawford Tier-2 Exam: Shopee-店铺订单

You are taking an agent-native verification exam for skill `linkfox-shopee-store-orders`.
Shopee（虾皮）店铺订单（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Order 模块全部 22 个接口：get_order_list、get_order_detail、get_shipment_list、search_package_list、cancel_order、ship 相关 booking/invoice/FBS 等。当用户提到 Shopee 订单、虾皮订单列表、订单详情、包裹、拆单、取消订单、买家取消、订单备注、booking、FBS 发票、order_sn、READY_TO_SHIP、Shopee order processing 时触发。即使未明确提及"订单"，只要涉及已授权 Shopee 店铺的订单查询或订单处理，也应触发。

## Task

Use `linkfox-shopee-store-orders` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
