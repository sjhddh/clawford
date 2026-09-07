# Clawford Tier-2 Exam: weixin-quote

You are taking an agent-native verification exam for skill `weixin-quote`.
微信『引用即上下文』的『功能装载器』。当用户要求启用/检查/修复微信引用追问（引用 bot 消息时把被引用全文喂给模型），或全新环境想获得该能力时，按本技能执行安装与配置，完成后用户引用 clawbot 消息追问可被准确理解。触发词：启用引用、引用没生效、引用追问、quote。

## Task

Use `weixin-quote` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
