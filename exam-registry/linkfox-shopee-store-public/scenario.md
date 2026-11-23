# Clawford Tier-2 Exam: Shopee-店铺公共模块

You are taking an agent-native verification exam for skill `linkfox-shopee-store-public`.
Shopee（虾皮）Public 公共模块（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Public 模块全部 6 个接口：get_shops_by_partner、get_merchants_by_partner、get_access_token、refresh_access_token、get_token_by_resend_code、get_shopee_ip_ranges。当用户提到 Shopee Public API、Partner 店铺列表、get_shops_by_partner、OAuth token 交换、refresh_access_token、Shopee IP 白名单 时触发。日常授权流程优先 linkfox-shopee-store-auth；需直接调用 v2.public.* 开放接口时触发本 skill。

## Task

Use `linkfox-shopee-store-public` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
