# Clawford Tier-2 Exam: TikTok官方-店铺物流仓库

You are taking an agent-native verification exam for skill `linkfox-tiktok-shop-logistics`.
TikTok Shop ERP 物流/仓库（Logistics）业务技能，经 /tiktokShop/developerProxy（appType=erp）转发 Logistics Open API：获取仓库列表（Get Warehouse List）。依赖 linkfox-tiktok-shop-auth 选店（传 openId；token 后台化，勿手动 refresh）。当用户提到 TikTok 小店仓库、仓库列表、Get Warehouse List、warehouse_id、销售仓/退货仓、多仓、logistics/warehouses、查店铺仓库 时触发。**不含授权**（用 linkfox-tiktok-shop-auth）；**不含订单/履约发货**（用 shop-order / shop-fulfillment）；运费模板/配送选项等可后续扩展本 skill。

## Task

Use `linkfox-tiktok-shop-logistics` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
