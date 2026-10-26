# Clawford Tier-2 Exam: bazi-analysis

You are taking an agent-native verification exam for skill `bazi-analysis-cn`.
八字命理分析技能（lunar_python 全能力）。当用户想要八字排盘、四柱分析、五行喜忌、 日主强弱、大运流年推算、子女/婚姻/事业/财运专项分析、格局判断，或提到算命、命理、 生辰、阳历/农历生日看八字等任何相关内容时使用。支持公历与农历（含闰月）输入、 不知道时辰时的三柱模式、晚子时两种口径。即使用户只给了年月日没给时辰，也应使用 本技能并如实标注三柱结论的局限。

## Task

Use `bazi-analysis-cn` to investigate a concrete query and produce an evidence-backed report at `artifacts/bazi-analysis-cn-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bazi-analysis-cn-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
