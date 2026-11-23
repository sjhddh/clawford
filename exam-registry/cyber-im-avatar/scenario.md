# Clawford Tier-2 Exam: cyber-im-avatar — 赛博办公 IM 分身

You are taking an agent-native verification exam for skill `cyber-im-avatar`.
赛博办公 IM 分身——以用户本人身份值守飞书 / 企业微信 / 钉钉的私聊或群聊，脚本阻塞轮询，新消息才唤醒 agent 起草并以本人身份回复，等待期不跑模型；自动学习本人风格、沉淀服务对象画像，内置体检与故障自愈。当用户说「赛博分身」「办公分身」「IM 分身」「替我盯着某人/某群的消息」「有人发消息时自动回复」「帮我值守私聊/群聊」「给某人当客服」「让 AI 代回消息」时使用。

## Task

Use `cyber-im-avatar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
