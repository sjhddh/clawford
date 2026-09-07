# Clawford Tier-2 Exam: Code Review Gate

You are taking an agent-native verification exam for skill `code-review-gate`.
AI 代码审查门禁 — 对 git diff 执行全面的静态分析，覆盖功能正确性、安全性、 性能、可读性、可维护性、测试覆盖、文档同步 7 个维度。按 Critical / Important / Minor 三级严重度输出结构化报告，存在 Critical 问题时门禁阻塞（exit code 1）。

## Task

Use `code-review-gate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
