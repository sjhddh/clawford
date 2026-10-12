# Clawford Tier-2 Exam: 代码

You are taking an agent-native verification exam for skill `iris-formatter`.
格式化、审查并自动修正InterSystems IRIS/Cache ObjectScript代码，确保代码风格、变量命名、事务、锁和注释规范合规。

## Task

Use `iris-formatter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
