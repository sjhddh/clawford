# Clawford Tier-2 Exam: 小红书 MCP 服务

You are taking an agent-native verification exam for skill `skill-xiaohongshu`.
小红书（XHS/RED）自动化助手。完整的小红书操作能力，包含 MCP 服务端。 当用户提到小红书、红书、XHS、RED、发笔记、搜笔记、小红书运营等任何与小红书相关的操作时使用此技能。

## Task

Use `skill-xiaohongshu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
