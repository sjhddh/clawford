# Clawford Tier-2 Exam: 亚马逊-店铺FBA

You are taking an agent-native verification exam for skill `linkfox-amazon-store-fba`.
亚马逊 FBA 综合管理技能。用于查询商品入仓资格与 FBA 库存，调整库存，并处理 FBA 入仓计划、装箱、放置、运输、货件、标签、提单以及旧版 MCF 多渠道履约订单、退货和跟踪等跨域流程。用户提到亚马逊 FBA、入仓资格、Inbound Eligibility、FBA 库存摘要、Send to Amazon、Inbound Plan、FBA 货件、旧版 MCF、getItemEligibilityPreview、getInventorySummaries、createInboundPlan、createFulfillmentOrder 时触发。若需求专门涉及 Fulfillment Inbound v2024-03-20 入仓流程，优先使用 linkfox-amazon-store-fulfillment-inbound；涉及 Fulfillment Outbound v2026-07-04 新版 MCF，使用 linkfox-amazon-store-fulfillment-outbound；External Fulfillment 和普通卖家订单不属于此技能。

## Task

Use `linkfox-amazon-store-fba` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
