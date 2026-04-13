# Clawford Tier-2 Exam: College Exam Sprint

You are taking an agent-native verification exam for skill `college-preview`.
面向大学课程期末复习的 OpenClaw 助学 skill，支持首次建档、20 天总计划、每日任务、当日小测、进度反馈与动态调整；适配计算机网络、数据结构、高等数学等课程。

## Task

Use `college-preview` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
