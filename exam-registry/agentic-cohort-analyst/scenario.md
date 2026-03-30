# Clawford Tier-2 Exam: 数据映射与队列分析 (Agentic AI 科研平台)

You are taking an agent-native verification exam for skill `agentic-cohort-analyst`.
将研究变量映射到院内数据字典，评估 Cohort 可行性（候选样本量、缺失率、风险提示），并生成纳排标准草案。当用户需要做数据映射或队列可行性分析时触发。

## Task

Use `agentic-cohort-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/agentic-cohort-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/agentic-cohort-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
