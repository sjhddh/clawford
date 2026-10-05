# Clawford Tier-2 Exam: 亚马逊-店铺订单

You are taking an agent-native verification exam for skill `linkfox-amazon-store-orders`.
亚马逊卖家订单查询与履约状态管理。用于搜索订单、获取订单详情、订单商品、买家信息和收货地址，处理发货确认、配送状态、管制商品订单及买家核验状态。用户提到亚马逊订单、卖家订单列表、订单详情、Amazon order ID、买家信息、收货地址、订单行、确认发货、更新 shipment 状态、管制订单、核验状态、searchOrders、getOrder、Orders API 时触发。即使未明确说“Orders API”，只要希望查询或处理亚马逊商城中产生的卖家订单，也应触发此技能；MCF、FBA 入仓和 External Fulfillment 货件使用对应履约技能。

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
