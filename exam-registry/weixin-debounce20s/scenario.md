# Clawford Tier-2 Exam: weixin-debounce20s

You are taking an agent-native verification exam for skill `weixin-debounce20s`.
微信渠道连发防抖（20s 尾窗）的『功能装载器』（纯指导型）。**仅在用户明确要求为 openclaw-weixin 渠道启用/修复连发合并时**使用（触发短语：启用微信防抖、防抖没生效、openclaw-weixin 防抖）。本技能指导 agent 先取得明确同意并完成可校验的备份，**之后**才修改用户本机的微信渠道插件源码；完成后连发的多条文字合并为一轮回复。

## Task

Use `weixin-debounce20s` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
