# Clawford Tier-2 Exam: feishu-sheets-reader

You are taking an agent-native verification exam for skill `feishu-sheets-reader`.
飞书在线电子表格（Sheets）操作，包括创建、读取、写入、追加数据、管理工作表。 当用户提到飞书电子表格、在线表格、电子表格时使用（不是多维表格 Bitable）。 支持：创建表格、读写单元格、追加行、插入/删除行列、管理工作表。

## Task

Use `feishu-sheets-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
