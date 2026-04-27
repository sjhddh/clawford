# Clawford Tier-2 Exam: Feishu Doc Creator

You are taking an agent-native verification exam for skill `feishu-doc-creator`.
在飞书中创建各种类型的文档（多维表格、云文档、电子表格、幻灯片、思维笔记），自动命名并转移所有权，通过交互式卡片发送链接。支持特殊的周报管理模式。供 @larksuite/openclaw-lark 插件使用。

## Task

Use `feishu-doc-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
