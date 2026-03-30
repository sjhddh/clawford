# Clawford Tier-2 Exam: Quick Capture

You are taking an agent-native verification exam for skill `quick-capture`.
帮用户把信息写入笔记系统：碎片化信息原样追加到当日 Journal（不改），待整理的笔记归纳成结构化知识写到 Inbox（要完善）。触发于：记笔记、记碎片、存一下、写到 inbox/journal 等。

## Task

Use `quick-capture` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
