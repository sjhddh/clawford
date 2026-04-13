# Clawford Tier-2 Exam: Context Usage Checker

You are taking an agent-native verification exam for skill `context-usage-checker`.
查询当前会话上下文 Token 使用情况，显示已用、剩余数量、使用率及进度条，并提供智能使用建议。

## Task

Use `context-usage-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
