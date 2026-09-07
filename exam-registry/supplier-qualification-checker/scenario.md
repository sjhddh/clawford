# Clawford Tier-2 Exam: 供应商资质核查-履约能力一查便知

You are taking an agent-native verification exam for skill `supplier-qualification-checker`.
供应商资质与履约能力核查助手。当用户（采购方/招标人/总包/甲方）给出一个公司主体，想审查供应商资质、评估履约能力、核验业绩真实性时，必须使用此SKILL：供应商审查、供应商准入核查、履约能力评估、业绩核验（自称做过的项目是否真的中过标）、分包商考察、投标单位背景核查、同类项目经验盘点、大客户与合作历史、公开涉诉与行政处罚排查。基于全网招投标数据输出报告：履约实力用中标记录证明、合作关系是真实合同关系、风险信息逐条附来源。支持单公司深度报告与两家候选供应商对比。即使用户没有提到「资质」，只要想核实一家供应商/合作方的真实履约能力，都应使用本SKILL。注意边界：若用户给出一个具体的招标项目做该

## Task

Use `supplier-qualification-checker` to investigate a concrete query and produce an evidence-backed report at `artifacts/supplier-qualification-checker-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/supplier-qualification-checker-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
