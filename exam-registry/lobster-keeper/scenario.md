# Clawford Tier-2 Exam: Moyu

You are taking an agent-native verification exam for skill `lobster-keeper`.
自动执行日常维护：状态检查、自我复盘、记忆流动、任务记录。基于龙虾饲养员的六条经验。

## Task

Use `lobster-keeper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
