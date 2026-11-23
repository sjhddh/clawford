# Clawford Tier-2 Exam: PowPop 泡泡注册助手

You are taking an agent-native verification exam for skill `powpow-register`.
陪用户在自己浏览器里完成 PowPop（泡泡）账号注册、邮箱验证与会员订阅，并帮他判断账号是否已经可用。当用户说「注册泡泡」「注册一个 powpow 账号」「泡泡怎么注册」「泡泡怎么付费」「注册收不到验证码」时触发。本技能不含任何脚本，不联网、不索取密码、验证码或支付凭证；注册与付款全部在用户自己的浏览器和官方收银台完成，助手只负责给链接、讲规则、陪排错。不含发帖与创建数字人，不含代码开发。

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
