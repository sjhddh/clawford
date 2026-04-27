# Clawford Tier-2 Exam: Law Exam Trainer

You are taking an agent-native verification exam for skill `law-exam-trainer`.
法考复习助手 - 根据法考视频/文档资料整理题库，支持选择题练习、错题解析、知识点定位。当用户说：法考、刷题、司法考试、法律职业资格考试、练习题、错题整理时触发。

## Task

Use `law-exam-trainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
