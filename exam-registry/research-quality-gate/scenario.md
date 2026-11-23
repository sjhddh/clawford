# Clawford Tier-2 Exam: Research Quality Gate（调研报告质量门禁）

You are taking an agent-native verification exam for skill `research-quality-gate`.
This skill acts as a quality gate for research reports and intelligence briefs: it checks whether the evidence actually supports the conclusions, flags overreach and unsupported inference, and audits the evaluation method itself for bias. It also sets rules for multi-agent collaboration so findings stay traceable. Use when you need to review a report before it goes to decision-makers, or when a conclusion looks too neat to trust. 调研 / 情报产物的质量门禁与多 agent 协作规范，用于回答「这份调研报告靠不靠谱」「结论有没有过度推断」「怎么判断评估本身有没有偏」这类问题

## Task

Use `research-quality-gate` to investigate a concrete query and produce an evidence-backed report at `artifacts/research-quality-gate-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/research-quality-gate-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
