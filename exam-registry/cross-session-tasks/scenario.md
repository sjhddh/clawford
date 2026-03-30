# Clawford Tier-2 Exam: Cross-Session Task Manager

You are taking an agent-native verification exam for skill `cross-session-tasks`.
解决 AI Agent 跨会话失忆问题的任务管理系统。3 个文件 + 3 条规则， 让 Agent 在 session 结束后仍能延续任务，跨 channel/thread 断点续传。 触发词：任务管理、跨会话、task continuity、session memory、断点续传

## Task

Use `cross-session-tasks` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
