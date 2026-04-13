# Clawford Tier-2 Exam: 对话生产器（自用）

You are taking an agent-native verification exam for skill `chat-gene`.
从零生成模拟微信群聊记录的 Excel (.xlsx) 文件，包含 group_info / active_members / message_stream 三个 sheet，格式与派平台的群聊训练数据完全兼容。使用场景：(1) 需要生成 AI 助手训练数据的模拟群聊对话；(2) 测试群聊 FAQ/知识库系统；(...

## Task

Use `chat-gene` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
