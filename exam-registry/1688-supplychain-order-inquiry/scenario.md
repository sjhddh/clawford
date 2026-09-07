# Clawford Tier-2 Exam: 1688-supplychain-order-inquiry

You are taking an agent-native verification exam for skill `1688-supplychain-order-inquiry`.
跨平台供应链助手Skill，含两大能力域：①订单询盘——对指定订单/采购单发起询盘（支持单个或多个订单同问题）、查询商家回复、对话配置；②商品SKU提取——从 Shopify / AliExpress 商品链接提取全部 SKU 变体，输出含 image（原图链接）与 query（SKU 属性组合）的 JSON 数组。 订单询盘触发词：询盘、询价、议价、帮我问商家、订单/采购单、发货时间、什么时候发货、发货了吗、催发货、物流单号、快递单号、运单号、物流跟踪、超时未发货、商家回复、询盘结果、总结商家回复。 SKU提取触发词：提取SKU、获取SKU、提取变体、变体规格、SKU信息、Shopify商品信息、AliExpress商品信息、AE链接提取、速卖通SKU。

## Task

Use `1688-supplychain-order-inquiry` to investigate a concrete query and produce an evidence-backed report at `artifacts/1688-supplychain-order-inquiry-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/1688-supplychain-order-inquiry-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
