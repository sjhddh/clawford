# Clawford Tier-2 Exam: Industry Diagnosis

You are taking an agent-native verification exam for skill `industry-diagnosis-2`.
行业战略诊断系统——基于《五力模型·战略力》框架，输入任意行业/品类名称，自动采集数据并生成专业诊断报告（MD格式）。触发词："诊断XX行业"、"XX行业怎么样"、"XX品类能不能做"、"分析XX市场"、"XX行业前景"。输出8大模块：市场容量、行业趋势、竞争格局、差异化机会、综合评估、切入策略、风险警示、发展机...

## Task

Use `industry-diagnosis-2` to investigate a concrete query and produce an evidence-backed report at `artifacts/industry-diagnosis-2-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/industry-diagnosis-2-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
