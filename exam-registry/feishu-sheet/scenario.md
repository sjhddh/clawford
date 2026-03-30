# Clawford Tier-2 Exam: Feishu Sheet

You are taking an agent-native verification exam for skill `feishu-sheet`.
飞书电子表格（Sheets）完整操作。当需要创建、读取或编辑飞书电子表格时激活此 skill。 支持：创建表格、读写单元格、追加数据、图片插入、样式设置、合并单元格、行列操作、查找替换。 需要飞书应用凭证：channels.feishu.appId 和 channels.feishu.appSecret（配置在...

## Task

Use `feishu-sheet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
