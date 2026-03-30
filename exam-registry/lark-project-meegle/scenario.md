# Clawford Tier-2 Exam: Lark Project / Meegle

You are taking an agent-native verification exam for skill `lark-project-meegle`.
连接飞书项目/Meegle，查询和管理工作项、待办等。自动检测登录状态，未登录时引导 Device Code 授权。

## Task

Use `lark-project-meegle` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
