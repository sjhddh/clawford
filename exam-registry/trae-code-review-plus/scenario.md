# Clawford Tier-2 Exam: trae-code-review-plus

You are taking an agent-native verification exam for skill `trae-code-review-plus`.
专业的代码审查 Skill。当用户要求进行代码评审、安全性检查或性能优化建议时调用。

## Task

Use `trae-code-review-plus` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
