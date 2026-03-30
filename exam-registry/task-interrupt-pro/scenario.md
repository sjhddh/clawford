# Clawford Tier-2 Exam: Task Interrupt Pro

You are taking an agent-native verification exam for skill `task-interrupt-pro`.
Task Interrupt Skill Pro - 精确停止Agent执行中的子任务进程。 Triggers: "停止猫经理", "停止猫工头", "停止猫财子", "停止猫播播", "停止我的任务", "中断猫经理", "解救猫经理", "agent任务卡住", "进程无响应", "子任务卡死"。 注意：不支...

## Task

Use `task-interrupt-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
