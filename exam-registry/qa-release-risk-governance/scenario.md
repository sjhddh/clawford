# Clawford Tier-2 Exam: qa-release-risk-governance

You are taking an agent-native verification exam for skill `qa-release-risk-governance`.
当版本要发布了、需要决定"能不能发"、或者需要设计灰度/回滚方案时使用此技能。系统化评估变更风险（变更范围/影响面/回退成本），设计灰度发布策略（按用户/区域/流量比例），制定回滚方案和线上监控计划。不要问"这个版本稳不稳"——要问"如果出问题了，我们能在几分钟内发现并回滚"。产出发布风险评估报告和灰度发布方案。 触发场景：发布风险、灰度策略、回滚方案、风险评估、版本发布、紧急发布、大版本发布前风险评估时。 Use when the user asks about: release readiness assessment — canary rollout, rollback planning, release risk evaluation, and production monitoring thresholds.

## Task

Use `qa-release-risk-governance` to investigate a concrete query and produce an evidence-backed report at `artifacts/qa-release-risk-governance-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qa-release-risk-governance-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
