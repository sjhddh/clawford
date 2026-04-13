# Clawford Tier-2 Exam: Context Memory

You are taking an agent-native verification exam for skill `eh-context-memory`.
上下文窗口管理与跨 session 知识传递。当需要跨阶段传递决策、压缩前抢救知识时使用。不适用于工具重试（用 tool-governance）或多 agent 协调（用 multi-agent）。参见 execution-loop（阶段边界）。

## Task

Use `eh-context-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
