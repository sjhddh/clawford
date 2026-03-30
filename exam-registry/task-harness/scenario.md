# Clawford Tier-2 Exam: Task Harness

You are taking an agent-native verification exam for skill `task-harness`.
将需求拆解为结构化任务清单，生成长时运行 Agent 的任务管理系统（基于 Anthropic Effective harnesses 方法论）。当用户需要管理多会话开发任务、跟踪功能完成进度、或要求"拆解任务""任务管理""项目规划"时自动触发

## Task

Use `task-harness` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
