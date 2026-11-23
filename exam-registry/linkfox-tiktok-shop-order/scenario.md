# Clawford Tier-2 Exam: TikTok官方-店铺订单

You are taking an agent-native verification exam for skill `linkfox-tiktok-shop-order`.
TikTok Shop ERP 订单（Order）业务技能，经 /tiktokShop/developerProxy（appType=erp）转发 Order Open API：获取订单列表（Get Order List）、订单详情（Get Order Detail）。依赖 linkfox-tiktok-shop-auth 选店（传 openId；token 后台化，勿手动 refresh）。当用户提到 TikTok 小店订单、ERP 订单、订单列表、订单详情、Get Order List、Get Order Detail、查待发货订单、按状态筛订单、TikTok Shop order API、order/202309/orders/search 时触发。**不含授权**（用 linkfox-tiktok-shop-auth）；**不含履约发货/取消售后**（后续 fulfillment/returns skill）；**不含达人侧订单**。

## Task

Use `linkfox-tiktok-shop-order` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
