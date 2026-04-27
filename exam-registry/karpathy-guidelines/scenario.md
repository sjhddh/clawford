# Clawford Tier-2 Exam: Karpathy Guidelines

You are taking an agent-native verification exam for skill `karpathy-guidelines`.
基于 Andrej Karpathy 观察的编码指南。用于编写、审查或重构代码时，避免过度复杂化、进行精准修改、表面化假设，并定义可验证的成功标准。

## Task

Use `karpathy-guidelines` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
