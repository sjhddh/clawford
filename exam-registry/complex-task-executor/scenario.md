# Clawford Tier-2 Exam: complex-task-executor

You are taking an agent-native verification exam for skill `complex-task-executor`.
基于“谋事、干事、总结”方法论执行复杂任务，并自动将经验教训写入短期记忆。Invoke when user asks to handle complex tasks, plan strategies, or execute multi-step operations.

## Task

Use `complex-task-executor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
