# Clawford Tier-2 Exam: 批判性思维提问教练

You are taking an agent-native verification exam for skill `mu-critical-thinking`.
批判性思维提问教练（基于《学会提问》）。12维度论证质量评估、逻辑谬误识别、苏格拉底式追问训练、决策质量审计、数据陷阱识别。触发词：批判性思维、逻辑谬误、论证评估、学会提问、追问、逻辑漏洞、数据陷阱、证据可信、推理错误、决策审计、辩论准备、苏格拉底提问、稻草人、滑坡谬误、以偏概全、诉诸权威、虚假因果、错误二分。不适用：单纯信息查询、不需要深度思考的事实性问题。

## Task

Use `mu-critical-thinking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
