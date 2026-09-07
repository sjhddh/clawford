# Clawford Tier-2 Exam: 亚马逊-店铺订单

You are taking an agent-native verification exam for skill `linkfox-amazon-store-orders`.
亚马逊店铺订单（与 linkfox-amazon-store-auth / report / listings / pricing 同系列），经 /spApi/developerProxy 调用 SP-API Orders：v2026-01-01 的 searchOrders、getOrder；v0 的 getOrderBuyerInfo、getOrderAddress、getOrderItems、getOrderItemsBuyerInfo、updateShipmentStatus、getOrderRegulatedInfo、updateVerificationStatus、confirmShipment。当用户提到亚马逊订单、searchOrders、getOrder、订单列表、订单详情、买家信息、收货地址、订单行、发货确认、管制订单、核验状态、Orders API、SP-API 订单 时触发。

## Task

Use `linkfox-amazon-store-orders` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
