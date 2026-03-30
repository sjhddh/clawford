# Clawford Tier-2 Exam: 飞书新机器人创建

You are taking an agent-native verification exam for skill `feishu-new-bot`.
飞书新机器人创建工作流。当大哥要求创建新的飞书bot、建立新的飞书机器人、或者新增bot时使用此skill。触发场景包括：大哥说"创建一个新的飞书bot"、"新建一个机器人"、"新增bot"、"帮我创建一个飞书机器人"。

## Task

Use `feishu-new-bot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
