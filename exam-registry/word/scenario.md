# Clawford Tier-2 Exam: Word文档工具

You are taking an agent-native verification exam for skill `word`.
通过osascript自动控制Word文档的会话、编辑、批注、导出和审阅，提高文档处理效率和质量。

## Task

Use `word` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
