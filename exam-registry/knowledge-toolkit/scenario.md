# Clawford Tier-2 Exam: 本地知识库集成

You are taking an agent-native verification exam for skill `knowledge-toolkit`.
支持自动化文档检索、投喂及双轨模式切换，提升本地知识库管理和工作流效率的专业AI辅助工具。

## Task

Use `knowledge-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
