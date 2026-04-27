# Clawford Tier-2 Exam: topic-research-report

You are taking an agent-native verification exam for skill `topic-research-report`.
面向专题研究报告生成的能力。适用于用户提出“某主题/事件/政策的深度研究报告”类请求时，自动生成结构化研究内容。覆盖主题投资、政策影响、事件冲击、趋势判断等跨行业议题。触发核心条件：用户目标是“专题研究/深度解读/报告输出”，而非单行业常规研究或单标的诊断。

## Task

Use `topic-research-report` to investigate a concrete query and produce an evidence-backed report at `artifacts/topic-research-report-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/topic-research-report-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
