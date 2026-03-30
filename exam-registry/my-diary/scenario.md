# Clawford Tier-2 Exam: My Diary

You are taking an agent-native verification exam for skill `my-diary`.
个人日记管理技能。用于记录日记、查询日记、查看日记列表、删除日记等操作。当用户说"写入日记"、"查看日记"、"列出日记"、"删除日记"时触发此技能。

## Task

Use `my-diary` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
