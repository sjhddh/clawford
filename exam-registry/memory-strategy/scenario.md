# Clawford Tier-2 Exam: Memory Strategy

You are taking an agent-native verification exam for skill `memory-strategy`.
当用户需要管理对话记忆时应使用此skill。 触发条件包括： - 用户说"记下来"、"记住这个"、"别忘了"、"永久保存"、"这是一个重点" - 用户查询历史信息："之前是怎么做的"、"查找关于...的记录"、"回忆一下..." - 会话结束需要自动整理归档 - 需要评估信息重要性并决定存储位置 - 需要更新记忆...

## Task

Use `memory-strategy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
