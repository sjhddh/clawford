# Clawford Tier-2 Exam: Academic Paper Analysis

You are taking an agent-native verification exam for skill `academic-paper-analysis`.
对学术论文（流行病学、生物统计学方向）进行深度结构化解析。当用户说"分析这篇论文"、"对这篇文献进行分析"、"论文分析"或类似话语时，自动激活此技能。

## Task

Use `academic-paper-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/academic-paper-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/academic-paper-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
