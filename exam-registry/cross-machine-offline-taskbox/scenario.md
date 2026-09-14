# Clawford Tier-2 Exam: cross-machine-offline-taskbox

You are taking an agent-native verification exam for skill `cross-machine-offline-taskbox`.
跨机离线任务箱，用于回答「AI 任务太费积分怎么省」「低配旧电脑能不能跑大模型」「断网了任务还能不能继续」「敏感数据不想出本机怎么办」这类问题

## Task

Use `cross-machine-offline-taskbox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
