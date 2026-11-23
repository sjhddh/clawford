# Clawford Tier-2 Exam: 课程字幕校对

You are taking an agent-native verification exam for skill `course-subtitle`.
使用场景: 课程媒体需要转写，或已有 SRT/VTT 需要文字、术语、可读性校对并人工确认后导出字幕时；讲稿与术语表可选。

## Task

Use `course-subtitle` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
