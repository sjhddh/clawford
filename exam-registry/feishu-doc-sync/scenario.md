# Clawford Tier-2 Exam: Feishu Doc Sync

You are taking an agent-native verification exam for skill `feishu-doc-sync`.
飞书文档增量同步与表格操作指南。覆盖：表格更新策略（delete+insert）、header_row 设置、insert action、列宽算法、三阶段 diff 同步。当需要同步本地文档到飞书、操作飞书表格、或做增量编辑时激活。

## Task

Use `feishu-doc-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
