# Clawford Tier-2 Exam: Shopee-店铺收款

You are taking an agent-native verification exam for skill `linkfox-shopee-store-payment`.
Shopee（虾皮）店铺支付结算（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Payment 模块全部 18 个接口：get_escrow_detail、get_escrow_list、get_payout_detail、get_wallet_transaction_list、get_income_overview、generate_income_report 等。当用户提到 Shopee 支付、结算、托管escrow、打款payout、钱包流水、收入报表、分期付款、get_escrow_detail 时触发。即使未明确提及"支付"，只要涉及已授权 Shopee 店铺的结算/打款/收入查询，也应触发。

## Task

Use `linkfox-shopee-store-payment` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
