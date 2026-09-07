# Clawford Tier-2 Exam: 建筑工程投标决策-施工项目投标评估

You are taking an agent-native verification exam for skill `construction-tender-bid-decision`.
建筑工程投标决策分析助手。当用户给出一个具体的工程类招标项目（施工/市政/装修/园林/公路/房建/基建等），并希望进行投标决策分析时，必须使用此SKILL：该不该投、建设单位历史发包规律分析、长期合作施工单位（在位者）识别、竞争对手（同类工程投标人）预测、同类工程历史中标价与建议报价、资质门槛与废标风险评估。基于全网招中标历史数据输出决策报告。即使用户没有提到「建筑」，只要涉及工程项目投标评估、施工标该不该投、工程报价参考等需求，都应使用本SKILL。

## Task

Use `construction-tender-bid-decision` to investigate a concrete query and produce an evidence-backed report at `artifacts/construction-tender-bid-decision-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/construction-tender-bid-decision-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
