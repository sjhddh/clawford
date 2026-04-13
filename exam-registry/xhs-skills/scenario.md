# Clawford Tier-2 Exam: Xhs Skills

You are taking an agent-native verification exam for skill `xhs-skills`.
小红书自动化技能集合。支持认证登录、内容发布、搜索发现、社交互动、复合运营。 当用户要求操作小红书（发布、搜索、评论、登录、分析、点赞、收藏）时触发。

## Task

Use `xhs-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
