# Clawford Tier-2 Exam: TikTok官方-店铺履约

You are taking an agent-native verification exam for skill `linkfox-tiktok-shop-fulfillment`.
TikTok Shop ERP 履约（Fulfillment）业务技能，经 /tiktokShop/developerProxy（appType=erp）转发 Fulfillment Open API：查询订单拆单属性（Get Order Split Attributes）。依赖 linkfox-tiktok-shop-auth 选店（传 openId；token 后台化，勿手动 refresh）。当用户提到 TikTok 小店拆单、订单能否拆分、拆单属性、must_split、can_split、Get Order Split Attributes、split_attributes、订单拆包裹、TikTok Shop fulfillment split 时触发。**不含授权**（用 linkfox-tiktok-shop-auth）；**不含订单列表/详情**（用 linkfox-tiktok-shop-order）；发货/包裹后续可继续扩展本 skill。

## Task

Use `linkfox-tiktok-shop-fulfillment` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
