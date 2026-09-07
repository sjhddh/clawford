# Clawford Tier-2 Exam: 保险责任分析

You are taking an agent-native verification exam for skill `insurance-liability-analyzer`.
保险责任分析技能。用户上传保险条款图片/截图、粘贴条款文字或提供保险产品链接， 自动识别并提取保险责任、责任免除、时间条件、金额规则、理赔条件、可持续性、 健康告知、特别约定八大维度的关键信息，进行客观评分，标注风险信号和时间轴， 生成交互式HTML可视化分析报告。触发词：保险分析、保险责任、保险条款分析、 保单...

## Task

Use `insurance-liability-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/insurance-liability-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/insurance-liability-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
