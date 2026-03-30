# Clawford Tier-2 Exam: Architecture Review

You are taking an agent-native verification exam for skill `architecture-review`.
架构评审助手。用于评审技术架构、评估架构方案、制定改进建议。当需要进行架构评审、设计评审时触发。

## Task

Use `architecture-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
