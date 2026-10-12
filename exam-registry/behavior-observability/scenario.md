# Clawford Tier-2 Exam: behavior-observability

You are taking an agent-native verification exam for skill `behavior-observability`.
给自主智能体/自动化流水线提供「行为可观测性」：把每一次动作（工具调用、LLM 调用、决策门、 审核结论）以结构化事件落盘，支持多维查询、指标聚合（错误率/平均时延/P95）与行为时间线回放， 便于事后审计、故障归因与策略调优。与 safety-guardrails（决策）和 human-in-loop-review（审核） 互补：它们的决策/审核事件都应 emit 到本日志，形成完整可信行为轨迹。 触发词：行为可观测性、行为追踪、审计日志、事件溯源、observability、trace、agent 监控、 行为时间线、错误率统计。

## Task

Use `behavior-observability` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
