# Clawford Tier-2 Exam: Parallel Task Executor

You are taking an agent-native verification exam for skill `parallel-task-executor`.
多任务并行执行管理器。接收多条指令并同步执行，支持优先级调度、任务依赖、结果收集和进度跟踪。适用于需要并发处理多个独立任务的场景。

## Task

Use `parallel-task-executor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
