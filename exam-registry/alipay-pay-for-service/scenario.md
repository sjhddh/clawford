# Clawford Tier-2 Exam: alipay-pay-for-service

You are taking an agent-native verification exam for skill `alipay-pay-for-service`.
支付宝支付服务处理技能。解析收银台链接、提交支付请求、查询支付结果. 当以下任一情况出现时，应当调用本技能处理支付流程： (1) 对话上下文中出现了 cashier*.alipay.com 或 *excashier*.alipay.com 域名的 URL，且用户表现出了支付意愿。 (2) 任何工具、技能或 API...

## Task

Use `alipay-pay-for-service` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
