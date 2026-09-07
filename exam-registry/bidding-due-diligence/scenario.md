# Clawford Tier-2 Exam: 招投标尽调助手-合同流水看经营实态

You are taking an agent-native verification exam for skill `bidding-due-diligence`.
招投标尽职调查助手（投资/合作/并购前的轻尽调）。当用户给出一个公司主体，想在投资、并购、合作、签约前做尽职调查、核实经营实态时，必须使用此SKILL：企业尽调、轻尽调、投资标的初筛、经营实态核验（中标合同流水是否活跃）、订单走势分析（逐年增长还是萎缩）、客户结构与大客户依赖度、履约能力评估、公开涉诉与行政处罚检索。基于全网招投标数据输出报告：经营实态用真实发生的中标合同流水说话、客户关系是真实合同关系、风险信息逐条附来源链接。支持单公司深度报告与双公司对比。即使用户没有提到「尽调」，只要想在投钱或合作前搞清楚一家公司的真实经营状况，都应使用本SKILL。注意边界：若用户给出一个具体的招标项目

## Task

Use `bidding-due-diligence` to investigate a concrete query and produce an evidence-backed report at `artifacts/bidding-due-diligence-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bidding-due-diligence-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
