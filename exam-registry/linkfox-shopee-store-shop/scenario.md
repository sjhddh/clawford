# Clawford Tier-2 Exam: Shopee-店铺信息

You are taking an agent-native verification exam for skill `linkfox-shopee-store-shop`.
Shopee（虾皮）店铺信息与设置（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Shop 模块全部 9 个接口：get_shop_info、get_profile、update_profile、get_warehouse_detail、get_shop_notification、get_authorised_reseller_brand、get_br_shop_onboarding_info、get_shop_holiday_mode、set_shop_holiday_mode。当用户提到 Shopee 店铺信息、店铺资料、店铺名称、仓库地址、卖家通知、授权品牌、巴西 KYC、假期模式、holiday mode、get_shop_info 时触发。即使未明确提及"店铺信息"，只要涉及已授权 Shopee 店铺的资料查询或店铺设置，也应触发。

## Task

Use `linkfox-shopee-store-shop` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
