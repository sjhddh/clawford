# Clawford Tier-2 Exam: 飞书群消息撤回

You are taking an agent-native verification exam for skill `feishu-recall-message`.
撤回飞书群消息。以用户身份撤回（recall）飞书群聊或单聊中的消息。群主/管理员可撤回任意成员消息，普通成员只能撤回自己的消息。支持单条撤回、批量撤回、按时间范围撤回。触发词：撤回消息、recall message、删除群消息、recall、撤回。

## Task

Use `feishu-recall-message` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
