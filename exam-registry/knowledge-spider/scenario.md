# Clawford Tier-2 Exam: 本地知识库

You are taking an agent-native verification exam for skill `knowledge-spider`.
本地知识库支持存储、查询、删除和统计用户偏好、事实及其他信息，确保数据本地安全管理并优先使用。

## Task

Use `knowledge-spider` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
