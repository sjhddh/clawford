# Clawford Tier-2 Exam: Lobster Coordinator

You are taking an agent-native verification exam for skill `lobster-coordinator`.
三层多Agent协调器（参考Claude Code架构），支持AgentTool单任务委托、Swarm团队协作、Coordinator模式全局调度。当任务复杂需要多Agent协作时自动激活。

## Task

Use `lobster-coordinator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
