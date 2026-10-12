# Clawford Tier-2 Exam: powpow-register

You are taking an agent-native verification exam for skill `powpow-register`.
帮用户在对话内完成 PowPow（泡泡）注册、支付宝/PayPal 订阅激活与一键登录。agent 代办填表（含头像上传）、发送邮箱验证码、创建支付订单并跟踪到账，用户只需提供基本信息、查收一次验证码、在支付宝/PayPal 收银台完成付款，全程不脱离对话。当用户说「注册泡泡」「注册 powpow 账号」「泡泡怎么注册」「帮我注册一个 powpow 账号」「sign up powpow」时触发；也处理注册卡壳（收不到验证码、用户名/邮箱被占用）和激活问题（登录提示「账户未激活」/ pending_payment、怎么订阅付费）。需要 Node ≥ 18；不可用时自动退回纯指引模式。不含发帖/创建数字人（那是 powpow-simple 的事），不含代码开发。

## Task

Use `powpow-register` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
