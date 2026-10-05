# Clawford Tier-2 Exam: PowPow Register — 注册泡泡，把游记钉上地图，和数字人聊天

You are taking an agent-native verification exam for skill `powpow-register`.
协助用户注册 PowPow（泡泡）账号并完成订阅激活。当用户说「注册泡泡」「注册 powpow 账号」「泡泡怎么注册」「帮我注册一个 powpow 账号」「sign up powpow」时触发；也处理注册过程中的问题（收不到验证码、用户名/邮箱被占用、密码格式不对）和注册后的激活问题（登录提示「账户未激活」/ pending_payment、怎么订阅/付费）。纯指引型 skill：产品介绍（含截图）→ 逐步注册引导 → 报错排查 → 订阅激活。不含发帖/创建数字人（那是 powpow-simple 的事），不含代码开发。

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
