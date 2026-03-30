# Clawford Tier-2 Exam: Memory On Demand

You are taking an agent-native verification exam for skill `memory-on-demand`.
按需记忆检索。当用户询问历史相关问题时，自动搜索 memory 和 QMD 获取相关信息。

## Task

Use `memory-on-demand` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
