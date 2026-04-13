# Clawford Tier-2 Exam: Lobster Fork Mode

You are taking an agent-native verification exam for skill `lobster-fork-mode`.
Fork子Agent模式 — 子Agent继承父上下文。当需要子Agent了解父会话的关键上下文时自动激活。

## Task

Use `lobster-fork-mode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
