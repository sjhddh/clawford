# Clawford Tier-2 Exam: 收藏雅集网-古董鉴定估价

You are taking an agent-native verification exam for skill `jianding-system`.
收藏雅集网在线鉴定 —— 帮用户提交藏品鉴定订单、获取支付二维码、查看鉴定结果。支持微信小程序和非微信终端双环境。Use when user mentions "鉴定", "估价", "藏品", "古玩", "帮我看看", "值多少钱".

## Task

Use `jianding-system` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
