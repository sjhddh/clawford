# Clawford Tier-2 Exam: weixin-send

You are taking an agent-native verification exam for skill `weixin-send`.
主动向微信 ClawBot 用户推送文本消息。作为 openclaw-weixin 插件 message 工具的兜底方案，仅在其不可用时使用。

## Task

Use `weixin-send` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
