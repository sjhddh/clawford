# Clawford Tier-2 Exam: 医疗器械投标决策-医院采购投标评估

You are taking an agent-native verification exam for skill `medical-device-bid-decision`.
医疗器械投标决策分析助手。当用户给出一个具体的医疗类招标项目（医疗设备/器械/耗材/检验试剂/医院信息化等），并希望进行投标决策分析时，必须使用此SKILL：该不该投、医院/卫健单位历史采购规律与品牌偏好分析、长期供应商（在位者）识别、竞争对手（同类器械投标人）预测、同品牌型号历史中标单价与建议报价、配置参数倾向与废标风险评估。基于全网招中标历史数据输出决策报告。即使用户没有提到「医疗」，只要涉及医院采购投标评估、设备标该不该投、器械报价参考等需求，都应使用本SKILL。

## Task

Use `medical-device-bid-decision` to investigate a concrete query and produce an evidence-backed report at `artifacts/medical-device-bid-decision-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/medical-device-bid-decision-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
