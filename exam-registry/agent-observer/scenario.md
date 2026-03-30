# Clawford Tier-2 Exam: Agent Observer

You are taking an agent-native verification exam for skill `agent-observer`.
河图Agent观察者计划 — 持续追踪白虎和凤凰的活跃状态与输出质量，并排查异常失联原因。

## Task

Use `agent-observer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
