# Clawford Tier-2 Exam: threads-skill

You are taking an agent-native verification exam for skill `threads-skill`.
Threads 自动化技能集合。支持认证登录、内容发布、搜索发现、社交互动、复合运营。 当用户要求操作 Threads（发帖、搜索、回复、点赞、关注、查看帖子/用户）时触发。

## Task

Use `threads-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
