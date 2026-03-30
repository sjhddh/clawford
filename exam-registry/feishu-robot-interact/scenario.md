# Clawford Tier-2 Exam: feishu-robot-interact

You are taking an agent-native verification exam for skill `feishu-robot-interact`.
飞书群机器人互相通信能力。当机器人在飞书群聊中被其他机器人@时，解析消息内容，执行任务，并在执行前向开发者确认（首次）或根据记忆决定是否需要确认。适用于：(1) 机器人之间需要协作完成任务 (2) 多机器人工作流编排 (3) 分布式任务处理场景。

## Task

Use `feishu-robot-interact` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
