# Clawford Tier-2 Exam: Smyx Risk Analysis

You are taking an agent-native verification exam for skill `smyx-risk-analysis`.
高风险行为识别分析工具，**仅当用户明确提及'风险分析'、'跌倒检测'、'行为识别'、'安全监测'时才触发**；支持通过视频/图片识别高危行为和健康风险，包括老人跌倒、心梗脑梗前兆、异常行为等，及时发出预警提示。默认情况下触发中医面诊分析，不触发本技能。

## Task

Use `smyx-risk-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-risk-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-risk-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
