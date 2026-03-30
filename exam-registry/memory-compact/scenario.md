# Clawford Tier-2 Exam: memory-compact

You are taking an agent-native verification exam for skill `memory-compact`.
每日记忆自动压缩备份和关键点提取，每天早上 6:30 运行

## Task

Use `memory-compact` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
