# Clawford Tier-2 Exam: Temu全球站-订单

You are taking an agent-native verification exam for skill `linkfox-temu-order-global`.
Temu 全球站（非 US/EU）订单管理 API，经 LinkFox 网关转发 9 个 bg.order.* / temu.order.* / temu.local.order.* 接口，默认 site=global、tokenPurpose=order-shipping。当用户提到 Temu Global 订单、全球站订单列表、parentOrderSn、订单金额 V2、temu.order.amount.v2.query、合并发货、SN鉴真、verification upload 时触发。美国站用 linkfox-temu-order-us；欧洲站用 linkfox-temu-order-eu；商品用 linkfox-temu-manage-product-global；价格用 linkfox-temu-price-global。

## Task

Use `linkfox-temu-order-global` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
