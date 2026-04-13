# Clawford Tier-2 Exam: memory-write

You are taking an agent-native verification exam for skill `memory-write`.
自动化将每日工作索引、架构细节和临时想法按规则归档至多层记忆库，确保内容完整可读。

## Task

Use `memory-write` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
