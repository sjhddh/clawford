# Clawford Tier-2 Exam: Knowledge Base Editor 知识库编辑器

You are taking an agent-native verification exam for skill `knowledge-base-editor`.
创建和维护可逐篇续写的中文知识库、系列教程、学习手册与案例库。通过聊天确认需求，研究资料后提出大纲，确认后可在飞书中逐篇撰写、审查并维护关联引用。适用于模糊选题、资料整理、构建第二大脑、增补专题及知识库修订。

## Task

Use `knowledge-base-editor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
