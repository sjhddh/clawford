# Clawford Tier-2 Exam: 政府采购投标决策-政采项目投标评估

You are taking an agent-native verification exam for skill `government-procurement-bid-decision`.
政府采购投标决策分析助手。当用户给出一个具体的政采类招标项目（政府/事业单位/机关/央国企采购），并希望进行投标决策分析时，必须使用此SKILL：该不该投、限制性信号识别（邀请招标/单一来源/定向条款/超短投标窗口）、采购单位供应商格局与偏好分析、竞争对手预测、同类政采项目历史成交价与建议报价、废标红线与合规风险评估。基于全网招中标历史数据输出决策报告。即使用户没有提到「政府采购」，只要涉及政采标投标评估、机关单位项目该不该投、政采报价参考等需求，都应使用本SKILL。

## Task

Use `government-procurement-bid-decision` to investigate a concrete query and produce an evidence-backed report at `artifacts/government-procurement-bid-decision-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/government-procurement-bid-decision-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
