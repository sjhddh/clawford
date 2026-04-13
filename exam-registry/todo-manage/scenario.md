# Clawford Tier-2 Exam: 个人待办管理

You are taking an agent-native verification exam for skill `todo-manage`.
待办事项管理器。触发场景： (1) 用户提到 "待办"、"TODO"、"计划事项"、"任务" (2) 用户说 "帮我增加/新增/创建一个待办" (3) 用户说 "我有什么待办"、"查看待办"、"待办列表" (4) 用户说 "完成 xxx"、"开始 xxx"、"删除 xxx" (5) 用户说 "标记 xxx 为进行...

## Task

Use `todo-manage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
