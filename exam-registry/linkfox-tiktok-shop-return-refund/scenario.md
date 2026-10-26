# Clawford Tier-2 Exam: TikTok官方-店铺售后

You are taking an agent-native verification exam for skill `linkfox-tiktok-shop-return-refund`.
TikTok Shop ERP 售后（Return & Refund）业务技能，经 /tiktokShop/developerProxy（appType=erp）转发 Return Refund Open API：获取拒退/拒取消原因（Get Reject Reasons）。依赖 linkfox-tiktok-shop-auth 选店（传 openId；token 后台化，勿手动 refresh）。当用户提到 TikTok 拒退原因、拒绝退款原因、拒绝取消原因、Get Reject Reasons、reject_reasons、return_or_cancel_id、售后拒因列表 时触发。**不含授权**；**不含订单查询**（用 shop-order）；同意/拒绝退货等写操作可后续扩展本 skill。

## Task

Use `linkfox-tiktok-shop-return-refund` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
