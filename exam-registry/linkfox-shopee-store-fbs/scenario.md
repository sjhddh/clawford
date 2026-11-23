# Clawford Tier-2 Exam: Shopee-店铺FBS

You are taking an agent-native verification exam for skill `linkfox-shopee-store-fbs`.
Shopee（虾皮）FBS 巴西仓储（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API FBS 模块全部 4 个接口：query_br_shop_enrollment_status、query_br_shop_invoice_error、query_br_shop_block_status、query_br_sku_block_status。当用户提到 Shopee FBS、巴西FBS、店铺入驻状态、发票错误、封禁状态、query_br_shop_enrollment_status 时触发。即使未明确提及"FBS"，只要涉及已授权 Shopee 巴西店铺的 FBS 入驻/封禁/发票状态查询，也应触发。

## Task

Use `linkfox-shopee-store-fbs` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
