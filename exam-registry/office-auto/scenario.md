# Clawford Tier-2 Exam: 文员自动化助手

You are taking an agent-native verification exam for skill `office-auto`.
将口语化任务转为结构化工单并自动保存，助力会议记录和待办事项整理办公自动化。

## Task

Use `office-auto` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
