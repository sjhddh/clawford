# Clawford Tier-2 Exam: Multi Agent

You are taking an agent-native verification exam for skill `eh-multi-agent`.
多 agent 协调设计模式。当需要选择 coordinator/fork/swarm 模式或设计跨 agent 协作时使用。不适用于工具重试（用 tool-governance）或上下文管理（用 context-memory）。参见 execution-loop（coordinator 持续执行）。

## Task

Use `eh-multi-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
