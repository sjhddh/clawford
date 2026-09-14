# Clawford Tier-2 Exam: data-analysis-skills

You are taking an agent-native verification exam for skill `data-analysis-skills`.
只要用户提交表格/CSV/Excel/数据块，或提到"分析数据""找关系""盘数据""串表""对数据""看表""两表对比""数据有没有问题"，都应调用此技能。即使用户没说"分析"，只要给了表格数据并问"有没有猫腻""帮我看看""这数据对不对"，也触发。不适用于：写代码处理CSV、解释数据库概念、画图表可视化、纯日志排查、代码审查、非结构化文本分析。

## Task

Use `data-analysis-skills` to investigate a concrete query and produce an evidence-backed report at `artifacts/data-analysis-skills-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/data-analysis-skills-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
