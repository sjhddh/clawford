# Clawford Tier-2 Exam: Temu美国站-取消订单

You are taking an agent-native verification exam for skill `linkfox-temu-cancel-order-us`.
Temu 美国站取消订单 API（买家+卖家合一），经 LinkFox 网关转发 Partner US：买家售后取消列表/同意(bg.aftersales.cancel.*)、卖家申诉/缺货取消(temu.order.cancel.appeal/outofstock.*)等。当用户提到 Temu US 取消订单、买家取消、卖家取消、缺货取消、afterSalesStatusGroup、applySn、order-shipping 时触发。订单用 linkfox-temu-order-us；欧洲站用 linkfox-temu-cancel-order-eu；全球站用 linkfox-temu-cancel-order-global。

## Task

Use `linkfox-temu-cancel-order-us` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
