# Clawford Tier-2 Exam: Shopee-店铺商户

You are taking an agent-native verification exam for skill `linkfox-shopee-store-merchant`.
Shopee（虾皮）跨境商户信息（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Merchant 模块全部 6 个接口：get_merchant_info、get_shop_list_by_merchant、get_merchant_warehouse_list、get_merchant_warehouse_location_list、get_warehouse_eligible_shop_list、get_merchant_prepaid_account_list。当用户提到 Shopee 商户、merchantId、跨境卖家、CNSC、商户下店铺列表、get_merchant_info、商户仓库、预付账户 时触发。即使未明确提及"商户"，只要涉及已授权 Shopee 跨境商户的信息查询或下属店铺列表，也应触发。

## Task

Use `linkfox-shopee-store-merchant` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
