# Clawford Tier-2 Exam: xingqiaoskill

You are taking an agent-native verification exam for skill `xingqiaoskill`.
星桥信息订阅与收发平台。当用户消息以"星桥"开头时触发此 skill。支持自然语言命令：push 发送信息，pull 拉取订阅信息，subscribe 订阅用户，reply 回复消息。支持复合命令如"星桥 总结今天，发送"。支持标签自动生成。

## Task

Use `xingqiaoskill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
