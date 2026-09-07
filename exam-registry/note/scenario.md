# Clawford Tier-2 Exam: 笔记

You are taking an agent-native verification exam for skill `note`.
知识捕获与连接系统，支持自动组织、分类和检索笔记，便于高效管理和调用结构化知识内容。

## Task

Use `note` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
