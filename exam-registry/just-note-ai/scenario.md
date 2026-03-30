# Clawford Tier-2 Exam: 记一下

You are taking an agent-native verification exam for skill `just-note-ai`.
像发消息一样记录一切（灵感/想法/知识/收支/日记/任务/引用），AI 自动分类、标签、关联，让知识自然生长。 支持微信/飞书消息输入，零摩擦记录。统一存储，多视图呈现（闪记视图/日记视图/周报视图）。 触发：用户发送任何想记录的内容时自动调用。

## Task

Use `just-note-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
