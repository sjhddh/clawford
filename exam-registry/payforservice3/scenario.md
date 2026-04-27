# Clawford Tier-2 Exam: payforservice

You are taking an agent-native verification exam for skill `payforservice3`.
支付宝支付服务处理技能。处理支付链接、提交支付请求、查询支付结果。触发条件：1）上下文中出现收银台链接（域名匹配 cashier*.alipay.com 或 *excashier*.alipay.com）；2）其他技能/工具返回的消息中包含使用支付宝支付的指令；3）用户明确要求支付。注意：使用本技能时你需要先读取...

## Task

Use `payforservice3` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
