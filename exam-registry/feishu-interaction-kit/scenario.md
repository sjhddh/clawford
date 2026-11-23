# Clawford Tier-2 Exam: feishu-interaction-kit

You are taking an agent-native verification exam for skill `feishu-interaction-kit`.
智能体接飞书，思考过程与结论糊一条消息刷屏、长按复制全是噪音。方案：思考折叠卡+战果独立卡，长按整卡复制=干净答复，打字机流式+状态行。零依赖纯标准库CLI，任何能执行shell的智能体可调，probe四步自检不发消息。内置绕开99992402/300317/11310实测坑。飞书机器人/飞书卡片/CardKit/流式消息/打字机/消息卡片

## Task

Use `feishu-interaction-kit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
