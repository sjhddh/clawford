# Clawford Tier-2 Exam: AI Agent 自省调试框架

You are taking an agent-native verification exam for skill `introspection-debugger`.
AI Agent 自省调试框架 - 让 AI Agent 具备自我诊断和自动修复能力。用于捕获错误、根因分析、自动修复、生成报告。

## Task

Use `introspection-debugger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
