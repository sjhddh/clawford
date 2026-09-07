# Clawford Tier-2 Exam: Shopee-店铺折扣

You are taking an agent-native verification exam for skill `linkfox-shopee-store-discount`.
Shopee（虾皮）店铺折扣促销 Discount（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Discount 模块全部 12 个接口：add_discount、get_discount_list、update_discount、add_discount_item、end_discount、SIP折扣等。当用户提到 Shopee 折扣、Discount、促销活动、限时折扣、add_discount、discount_id、打折活动 时触发。即使未明确提及"折扣"，只要涉及已授权 Shopee 店铺的折扣活动创建或管理，也应触发。

## Task

Use `linkfox-shopee-store-discount` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
