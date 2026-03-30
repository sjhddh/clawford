# Clawford Tier-2 Exam: CueCue Deep Research

You are taking an agent-native verification exam for skill `cuecue-deep-research`.
专业金融深度研究工具。当用户需要了解市场行情、行业趋势、公司基本面、政策影响、竞品动态、地缘政治风险或任何需要数据支撑的金融分析时，应主动调用此技能。输出结构化、数据驱动的专业研究报告，适用于投资决策、战略规划和市场洞察等场景。

## Task

Use `cuecue-deep-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/cuecue-deep-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cuecue-deep-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
