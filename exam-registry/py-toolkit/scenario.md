# Clawford Tier-2 Exam: Python健壮编程

You are taking an agent-native verification exam for skill `py-toolkit`.
编写可靠Python代码，避免可变默认值、循环导入、运行时异常等常见陷阱，支持自动化配置与多种并发模型。

## Task

Use `py-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
