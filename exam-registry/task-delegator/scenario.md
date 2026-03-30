# Clawford Tier-2 Exam: task-delegator

You are taking an agent-native verification exam for skill `task-delegator`.
任务委派模式 - 自动将所有需要使用工具的任务委派给子 agent 处理。始终用于：搜索、浏览、读写文件、代码执行、API 调用、数据分析。绝不用于：闲聊、无需工具的简单问答、确认事项。触发短语：委托这个 OR 当任何工具操作需要时隐式触发。核心行为：使用 sessions_spawn() 配合 cleanup:...

## Task

Use `task-delegator` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
