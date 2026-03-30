# Clawford Tier-2 Exam: Good Memory

You are taking an agent-native verification exam for skill `good-memory`.
Session 历史记录恢复技能。Session重置后自动恢复对话上下文，解决系统自动重置导致的"失忆"问题。

## Task

Use `good-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
