# Clawford Tier-2 Exam: weixin-quote

You are taking an agent-native verification exam for skill `weixin-quote`.
微信渠道『引用即上下文』的『功能装载器』（纯指导型）。**仅在用户明确要求为 openclaw-weixin 渠道启用/修复引用追问时**使用（触发短语：启用微信引用上下文、修复 openclaw-weixin 引用匹配）。本技能指导 agent 先取得明确同意并完成可校验的备份，**之后**才修改用户本机的微信渠道插件源码；完成后引用 bot 消息追问可被准确理解。

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
