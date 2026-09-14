# Clawford Tier-2 Exam: Cody

You are taking an agent-native verification exam for skill `cody`.
代码 Review 助手。分析 Git diff 或代码片段，输出结构化中文 Review 报告，覆盖 Bug、安全漏洞、性能问题、可读性、最佳实践、类型安全、错误处理、测试覆盖。支持严格程度配置（信息/优化/标准/严重）和多种主流语言（Python/JS/TS/Java/Go/Rust）。支持 GitHub/G...

## Task

Use `cody` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
