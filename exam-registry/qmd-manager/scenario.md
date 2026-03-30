# Clawford Tier-2 Exam: QMD Manager

You are taking an agent-native verification exam for skill `qmd-manager`.
QMD 知识库管理技能，用于本地知识库的语义搜索和管理。支持项目管理、软件测试、内容创作等领域的知识检索。

## Task

Use `qmd-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
