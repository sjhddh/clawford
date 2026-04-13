# Clawford Tier-2 Exam: Agent Ops

You are taking an agent-native verification exam for skill `agent-ops`.
Agent session 运维工具。当需要检测和恢复 API 限速、回收死 session 的知识、在破坏性操作前自动快照、或监控 context 使用率时使用。不用于安装 hook 脚本（用 agent-hooks）或架构设计（用 harness-design-patterns）。

## Task

Use `agent-ops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
