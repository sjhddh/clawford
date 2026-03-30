# Clawford Tier-2 Exam: 小说创作

You are taking an agent-native verification exam for skill `my-novel-writer`.
辅助规划和生成长篇小说，支持人物世界设定、大纲管理、分章创作和写作风格锁定。

## Task

Use `my-novel-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
