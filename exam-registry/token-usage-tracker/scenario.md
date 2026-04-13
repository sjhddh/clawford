# Clawford Tier-2 Exam: Token Usage Tracker

You are taking an agent-native verification exam for skill `token-usage-tracker`.
Token 使用追踪系统。记录每个对话的输入/输出 token 消耗，累计统计，预算控制。 当用户说"token统计"、"用量追踪"、"消耗了多少"、"花了我多少token"时触发。

## Task

Use `token-usage-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
