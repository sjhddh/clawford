# Clawford Tier-2 Exam: Shopee-店铺退货

You are taking an agent-native verification exam for skill `linkfox-shopee-store-returns`.
Shopee（虾皮）店铺退货退款（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Returns 模块全部 15 个接口：get_return_list、get_return_detail、confirm、dispute、offer、accept_offer、upload_proof、get_reverse_tracking_info 等。当用户提到 Shopee 退货、退款、return_sn、退货列表、确认退货、退货争议、dispute、逆向物流 时触发。即使未明确提及"退货"，只要涉及已授权 Shopee 店铺的退货/退款查询或处理，也应触发。

## Task

Use `linkfox-shopee-store-returns` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
