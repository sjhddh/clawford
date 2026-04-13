# Clawford Tier-2 Exam: 任务闭环管理

You are taking an agent-native verification exam for skill `task-closed-loop`.
通过明确任务目标、分配责任、持续汇报、严格验证和总结归档，实现任务全流程闭环管理，保证高效执行与质量。

## Task

Use `task-closed-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
