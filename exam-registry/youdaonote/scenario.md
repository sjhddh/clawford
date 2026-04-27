# Clawford Tier-2 Exam: YoudaoNote

You are taking an agent-native verification exam for skill `youdaonote`.
有道云笔记官方 skill，支持笔记 CRUD（创建/读取/更新/删除）、待办管理、网页剪藏、笔记搜索、文件夹管理等基础操作。如需构建知识库或 Wiki，请使用 youdaonote-llm-wiki skill 而非本 skill。

## Task

Use `youdaonote` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
