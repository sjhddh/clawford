# Clawford Tier-2 Exam: Task Tracker Pro

You are taking an agent-native verification exam for skill `task-tracker-pro`.
持久化任务管理：拆解步骤、追踪进度、中断恢复、多Agent协作。 触发场景： - 收到需要多步骤执行的任务（"帮我做XX"、"搞一个XX"） - 新对话/会话启动时自动检查未完成任务 - 用户问"任务进度"、"做到哪了"、"继续上次的" - 用户说"建个任务"、"拆解一下"、"规划一下步骤" 核心理念：不信任对话...

## Task

Use `task-tracker-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
