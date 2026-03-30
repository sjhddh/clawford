# Clawford Tier-2 Exam: Wechat Sender

You are taking an agent-native verification exam for skill `wechat-sender`.
微信消息自动发送。使用 peekaboo 工具操作窗口，结合 Agent-Eye 获取实时屏幕截图进行视觉理解。触发条件：用户提到"发微信"、"给xxx发消息"、"微信自动发送"等。

## Task

Use `wechat-sender` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
