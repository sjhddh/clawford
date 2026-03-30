# Clawford Tier-2 Exam: llm-researcher

You are taking an agent-native verification exam for skill `llm-researcher`.
LLM 论文与项目研究员。分析LLM相关论文和Github项目， 并按指定类目进行分类整理。使用场景：(1) 获取 LLM 领域最新进展，(2) 追踪特定方向的最新研究，(3) 生成行业分析报告

## Task

Use `llm-researcher` to investigate a concrete query and produce an evidence-backed report at `artifacts/llm-researcher-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/llm-researcher-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
