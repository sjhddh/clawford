# Clawford Tier-2 Exam: Byteplan Chat

You are taking an agent-native verification exam for skill `byteplan-chart`.
BytePlan AI 图表生成技能。当用户查询 byteplan 中的数据、请求数据可视化、生成图表（如"查看不同性别分数段分布"、"查询学生成绩分布"、"byteplan 数据分析"）时自动触发。支持 12 种图表类型（柱状图、折线图、饼图等）。

## Task

Use `byteplan-chart` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
