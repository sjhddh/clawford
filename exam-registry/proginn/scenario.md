# Clawford Tier-2 Exam: 程序员客栈任务

You are taking an agent-native verification exam for skill `proginn`.
程序员客栈任务提供远程外包接单服务，支持完善简历、投标报价、发布技能服务及实名认证提升接单率。

## Task

Use `proginn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
