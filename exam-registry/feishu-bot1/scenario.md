# Clawford Tier-2 Exam: feishu-bot

You are taking an agent-native verification exam for skill `feishu-bot1`.
飞书（Feishu/Lark）文档与消息操作技能。When to use: 用户要求创建、删除、修改飞书文档；查询或更新文档中指定行/列的数据；向飞书联系人或群聊发送消息。Triggers: "创建飞书文档"、"删除文档"、"修改文档内容"、"更新第X行第Y列"、"查询文档"、"发送飞书消息"、"发消息给群"。

## Task

Use `feishu-bot1` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
