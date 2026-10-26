# Clawford Tier-2 Exam: Shopee-店铺优惠券

You are taking an agent-native verification exam for skill `linkfox-shopee-store-voucher`.
Shopee（虾皮）店铺优惠券 Voucher（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Voucher 模块全部 6 个接口：add_voucher、get_voucher_list、get_voucher、update_voucher、end_voucher、delete_voucher。当用户提到 Shopee 优惠券、Voucher、店铺券、add_voucher、voucher_id、满减券、折扣码 时触发。即使未明确提及"优惠券"，只要涉及已授权 Shopee 店铺的 Voucher 活动管理，也应触发。

## Task

Use `linkfox-shopee-store-voucher` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
