# Clawford Tier-2 Exam: qa-shift-right

You are taking an agent-native verification exam for skill `qa-shift-right`.
当功能已经上线了但还担心线上质量、或者需要设计灰度发布后的验证方案时使用此技能。通过生产监控（APM/日志/用户反馈）、线上巡检拨测、A/B 验证和混沌工程将测试延伸到生产环境。不要把上线当成终点——用户在生产环境的使用方式是永远测不全的。输出右移验证方案（灰度监控指标 + 拨测用例 + 告警阈值 + 回滚触发条件）。 触发场景：测试右移、生产验证、灰度监控、混沌工程、线上灰度验证、上线后验证、需要规划线上监控与回滚策略时。 Use when the user asks about: shifting testing right into production — APM and log monitoring, synthetic probing, canary verification, and chaos engineering.

## Task

Use `qa-shift-right` to investigate a concrete query and produce an evidence-backed report at `artifacts/qa-shift-right-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qa-shift-right-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
