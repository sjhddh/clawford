# Clawford Tier-2 Exam: QQBot Message Format

You are taking an agent-native verification exam for skill `qqbot-message-format`.
将面向 QQ / QQBot 的最终回复整理成简洁、适合 QQ 聊天界面阅读的中文消息：结论先行、采用 QQ 安全的两级标题、主列表保持扁平、把嵌套结构改写成 QQ 友好格式，并克制地使用加粗和功能性 emoji。适用于任务完成通知、排障说明、状态更新、调试结论或一般答复，尤其在原始输出太朴素、太像文档、或结构不...

## Task

Use `qqbot-message-format` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
