# Clawford Tier-2 Exam: knowledge-base-manager

You are taking an agent-native verification exam for skill `knowledge-base-manager`.
管理AI Agent工作台的知识库，支持文件上传、向量存储和语义检索。Agent可根据用户提问自动搜索知识库获取参考来源。

## Task

Use `knowledge-base-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
