# Clawford Tier-2 Exam: openclaw-agentlog

You are taking an agent-native verification exam for skill `openclaw-agentlog`.
OpenClaw Agent 自动存证与 Trace 生命周期管理 Skill。 提供给 OpenClaw Agent 使用，实现： 1. 自动会话存证 - 通过 OpenClaw Hooks 自动记录 agent 活动 2. Trace 生命周期 - 管理 trace 的创建、认领、完成流程 When to a...

## Task

Use `openclaw-agentlog` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
