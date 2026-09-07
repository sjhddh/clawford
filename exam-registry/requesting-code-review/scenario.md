# Clawford Tier-2 Exam: requesting-code-revi

You are taking an agent-native verification exam for skill `requesting-code-review`.
自动化处理代码审查请求，支持多格式输入和错误恢复，提升开发团队效率与代码质量，适合独立开发者和企业使用。

## Task

Use `requesting-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
