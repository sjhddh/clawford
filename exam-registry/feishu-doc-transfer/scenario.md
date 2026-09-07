# Clawford Tier-2 Exam: Feishu Doc Transfer

You are taking an agent-native verification exam for skill `feishu-doc-transfer`.
转移飞书文档（文档、表格、多维表格、文件）的所有权给指定用户，支持多成员类型和文档格式。

## Task

Use `feishu-doc-transfer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
