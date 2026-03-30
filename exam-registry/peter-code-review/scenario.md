# Clawford Tier-2 Exam: Peter Code Review

You are taking an agent-native verification exam for skill `peter-code-review`.
提交前质量闸门。快速完成本地测试、静态检查和风险审查，判断“是否可提交”。

## Task

Use `peter-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
