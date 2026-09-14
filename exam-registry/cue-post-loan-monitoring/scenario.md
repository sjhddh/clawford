# Clawford Tier-2 Exam: 贷后监测

You are taking an agent-native verification exam for skill `cue-post-loan-monitoring`.
用 Cue 跑「贷后监测」场景的深度研究：扫一遍授信客户名单，盯被执行、诉讼、评级下调与经营异动等风险信号。覆盖企业重大事件追踪、存量客户风险预警、股权质押风险核查、贷后风险体检、司法执行与资产处置深挖等核心搭子，按紧迫度排序，产出带证据链、可每日跟进的贷后风险预警底稿。

## Task

Use `cue-post-loan-monitoring` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-post-loan-monitoring-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-post-loan-monitoring-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
