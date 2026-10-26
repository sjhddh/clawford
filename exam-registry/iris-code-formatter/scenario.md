# Clawford Tier-2 Exam: 代码

You are taking an agent-native verification exam for skill `iris-code-formatter`.
对InterSystems IRIS/Cache ObjectScript代码进行格式化检查、审查和自动修正，确保命名规范、代码风格、事务和锁使用正确。

## Task

Use `iris-code-formatter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
