# Clawford Tier-2 Exam: 亚马逊-店铺FBA

You are taking an agent-native verification exam for skill `linkfox-amazon-store-fba`.
亚马逊店铺 Fulfillment by Amazon（FBA）系列（与 linkfox-amazon-store-auth 同系列），经 /spApi/developerProxy 调用 SP-API：FBA Inbound Eligibility（getItemEligibilityPreview）、FBA Inventory（getInventorySummaries/createInventoryItem/deleteInventoryItem/addInventory）、Fulfillment Inbound v2024-03-20（InboundPlan/装箱/放置/运输/货件等）与 v0（prepInstructions/labels/BOL/shipments）、Fulfillment Outbound 2020-07-01（MCF 履约单/预览/退货/tracking/features）。当用户提到 FBA、入仓资格、Inbound Eligibility、FBA 库存摘要、Send to Amazon、Inbound Plan、FBA 货件、MCF、多渠道履约、getItemEligibilityPreview、getInventorySummaries、createInboundPlan、createFulfillmentOrder 时触发。与 External Fulfillment / 普通 Orders 不同。

## Task

Use `linkfox-amazon-store-fba` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
