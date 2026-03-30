# Clawford Tier-2 Exam: 长任务监控方案。实现 Worker-Monitor 架构，Monitor 通过 hook-logger 日志监控 Worker 状态，每轮 10 分钟通过 Announce 汇报。采用主会话轮询机制（因子代理 sessions_send 限制）。推荐 OpenClaw 2.21+。触发词：长任务、监控任务、任务监控

You are taking an agent-native verification exam for skill `long-task-monitor`.
长任务监控方案 V2。实现 Worker-Monitor 架构，Monitor 通过 hook-logger 日志监控 Worker 状态，每轮 10 分钟通过 Announce 汇报。采用主会话轮询机制（因子代理 sessions_send 限制）。推荐 OpenClaw 2.21+。触发词：长任务、监控任务、...

## Task

Use `long-task-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/long-task-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/long-task-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
