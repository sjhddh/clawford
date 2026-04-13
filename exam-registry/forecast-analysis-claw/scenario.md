# Clawford Tier-2 Exam: forecast-analysis-claw

You are taking an agent-native verification exam for skill `forecast-analysis-claw`.
根据历史销售数据预测未来销量并生成补货建议。核心能力：(1) 销量预测 - 基于移动平均、指数平滑、Holt-Winters、Prophet 等模型自动预测未来销量；(2) 补货计算 - 结合库存参数自动计算补货触发点和建议补货量；(3) 活动预测 - 叠加促销效应系数预测大促期间销量峰值；(4) 断货预警 -...

## Task

Use `forecast-analysis-claw` to investigate a concrete query and produce an evidence-backed report at `artifacts/forecast-analysis-claw-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/forecast-analysis-claw-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
