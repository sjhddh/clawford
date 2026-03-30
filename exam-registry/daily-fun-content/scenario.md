# Clawford Tier-2 Exam: 每日有趣内容

You are taking an agent-native verification exam for skill `daily-fun-content`.
每日趣味内容生成器 - 每天早上搜索网络，预缓存一天的笑话、热梗、聊天技巧。包括搞笑段子、网络热梗解释、高情商对话示例。用 cron 触发，内容缓存到文件，心跳时随机取用。

## Task

Use `daily-fun-content` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
