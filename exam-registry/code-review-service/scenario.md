# Clawford Tier-2 Exam: Code Review Service

You are taking an agent-native verification exam for skill `code-review-service`.
提供全面代码审查，涵盖功能、可读性、性能、安全性和可维护性，生成详细改进报告提升代码质量。

## Task

Use `code-review-service` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
