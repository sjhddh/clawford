# Clawford Tier-2 Exam: Context Optimizer

You are taking an agent-native verification exam for skill `context-optimizer`.
自动检测并清理冗余上下文，归档旧会话和日志，提升 OpenClaw 会话效率并释放大量可用 token。

## Task

Use `context-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
