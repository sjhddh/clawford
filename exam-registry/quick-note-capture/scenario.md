# Clawford Tier-2 Exam: quick-note-capture

You are taking an agent-native verification exam for skill `quick-note-capture`.
快速记录一条笔记到本地文件，支持标签和时间戳，适合随手记录想法、待办和参考资料。

## Task

Use `quick-note-capture` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
