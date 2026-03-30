# Clawford Tier-2 Exam: Agent Team

You are taking an agent-native verification exam for skill `agent-team`.
管理和调用具备不同身份和专用模型的多子 Agent 团队，支持任务执行和交互式对话两种模式。

## Task

Use `agent-team` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
