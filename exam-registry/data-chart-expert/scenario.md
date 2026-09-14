# Clawford Tier-2 Exam: 数据图表解析

You are taking an agent-native verification exam for skill `data-chart-expert`.
分析用户粘贴的实验、调研、成绩统计等原始表格或纯数字数据；校验数据结构，推荐折线图、柱状图、饼图等适配图表，给出完整图表标题、横纵轴与图例说明，并解读趋势、组间差异和数据可支持的实验结论。用于用户要求选择图表、生成图表说明或图注、分析数据变化或对比差异、撰写论文结果段落，或把原始数据整理为可直接放在论文图表下方的中文说明时。

## Task

Use `data-chart-expert` to investigate a concrete query and produce an evidence-backed report at `artifacts/data-chart-expert-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/data-chart-expert-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
