# Clawford Tier-2 Exam: 帮你写大众点评的Skill

You are taking an agent-native verification exam for skill `dianping-writer`.
写大众点评风格的本地生活评论。当用户发餐厅/菜品照片说"写点评"、"帮我评价"、"写个大众点评"、"生成点评文案"时使用。

## Task

Use `dianping-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
