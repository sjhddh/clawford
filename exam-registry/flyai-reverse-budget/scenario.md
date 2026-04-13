# Clawford Tier-2 Exam: 反向穷游

You are taking an agent-native verification exam for skill `flyai-reverse-budget`.
反向穷游助手，我有X元能去哪？输入总预算、出发城市、可出行天数，AI反向搜索所有可能性，生成3档方案（省钱极限版/舒适版/极限拉满版），每档含完整预算拆解。当用户提到"我有X元"、"预算XX能去哪"、"这些钱能去哪"、"反向穷游"、"穷游推荐"、"预算旅行"时使用。

## Task

Use `flyai-reverse-budget` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
