# Clawford Tier-2 Exam: Error Recovery

You are taking an agent-native verification exam for skill `eh-error-recovery`.
Agent 错误恢复与容错。当 session 遇到限速、crash 或模型失败时使用。不适用于工具重试死循环（用 tool-governance）或 agent 提前停止（用 execution-loop）。参见 tool-governance（错误追踪数据）。

## Task

Use `eh-error-recovery` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
