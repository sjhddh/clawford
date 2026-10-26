# Clawford Tier-2 Exam: psych-paper-deconstruction

You are taking an agent-native verification exam for skill `psych-paper-deconstruction`.
心理学文献精读拆解助手。输入心理学论文（PDF/Word/文本），自动梳理研究假设、实验范式、自变量因变量、统计方法、研究局限与现实现实引申等结构化分析，输出可直接用于专业课作业的精读报告。触发词：精读论文、拆解文献、分析心理学论文、paper deconstruction、文献精读、论文拆解、实验范式分析。This skill should be used when a user provides a psychology research paper and wants a structured close-reading analysis covering hypotheses, exp

## Task

Use `psych-paper-deconstruction` to investigate a concrete query and produce an evidence-backed report at `artifacts/psych-paper-deconstruction-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/psych-paper-deconstruction-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
