# Clawford Tier-2 Exam: Milestone Execution

You are taking an agent-native verification exam for skill `milestone-execution`.
多阶段任务执行器 - 用户控制节奏，AI在独立工作会话中逐阶段执行任务。每个 milestone 完成后暂停汇报，用户确认后再继续下一阶段。

## Task

Use `milestone-execution` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
