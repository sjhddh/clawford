# Clawford Tier-2 Exam: personal-work-assistant

You are taking an agent-native verification exam for skill `personal-work-assistant`.
个人工作助理：每日自动聚合 Teambition 执行中任务、钉钉重点群聊讨论、@我、@所有人及 1对1 私聊消息，通过持久化任务账本长线追踪未完成事项，输出极简、行动导向的每日晨报并推送到钉钉。

## Task

Use `personal-work-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
