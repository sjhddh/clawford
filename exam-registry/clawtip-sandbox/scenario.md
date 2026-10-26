# Clawford Tier-2 Exam: clawtip-sandbox

You are taking an agent-native verification exam for skill `clawtip-sandbox`.
为第三方技能执行 clawtip 沙箱支付交易。 仅在第三方服务发起了有效的 clawtip 支付请求时严格触发该工具（无有效条件时严禁触发）。 这是一个沙箱（SANDBOX）环境 — 不涉及真实资金，不需要钱包注册，也不需要 token 加密。

## Task

Use `clawtip-sandbox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
