# Clawford Tier-2 Exam: feishu-doc-reviewer

You are taking an agent-native verification exam for skill `feishu-doc-reviewer`.
为智能体提供飞书文档读写能力：导出全文、读取评论与段落、写回修改并回复评论。

## Task

Use `feishu-doc-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
