# Clawford Tier-2 Exam: 亚马逊-店铺External Fulfillment

You are taking an agent-native verification exam for skill `linkfox-amazon-store-external-fulfillment`.
亚马逊店铺 External Fulfillment（与 linkfox-amazon-store-auth / orders / listings 同系列），经 /spApi/developerProxy 调用 SP-API External Fulfillment v2024-09-11：Inventory 的 batchInventory（按 location 查/写库存）；Shipping 的 getShipments、getShipment、processShipment、createPackages、updatePackage、updatePackageStatus、retrieveShippingOptions、generateInvoice、retrieveInvoice、generateShipLabels；Returns 的 listReturns、getReturn。覆盖 Seller Flex / Easy Ship / Self Ship / MFN Self Delivery 等。当用户提到 External Fulfillment、SmartConnect、Seller Flex、FBA Onsite、Easy Ship、Self Ship、batchInventory、location 库存、履约单 shipment、面单、发票、EF 退货、externalFulfillment 时触发。与普通 Orders/Feeds 库存不同，本技能专指 External Fulfillment API。

## Task

Use `linkfox-amazon-store-external-fulfillment` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
