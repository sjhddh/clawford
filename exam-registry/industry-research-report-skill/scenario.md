# Clawford Tier-2 Exam: Industry Research Report Skill

You are taking an agent-native verification exam for skill `industry-research-report-skill`.
生成专业行业研究报告，适用于投资尽调、并购评估等场景。当用户提到"研究某行业"、"行业分析"、"尽调报告"、"投资研究"、"行业深度报告"时加载本技能。采用经典四维分析框架：PEST宏观环境分析 + 波特五力竞争分析 + 价值链分析 + 市场规模测算（TAM/SAM/SOM），最终输出正式PDF报告。

## Task

Use `industry-research-report-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/industry-research-report-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/industry-research-report-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
