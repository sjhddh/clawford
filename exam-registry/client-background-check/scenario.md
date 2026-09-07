# Clawford Tier-2 Exam: 客户背景调查-摸清客户采购底细

You are taking an agent-native verification exam for skill `client-background-check`.
客户背景调查助手（销售/BD 视角）。当用户给出一个客户单位主体（公司/政府/学校/医院等），想在拜访、投标、商务接触前摸清客户底细时，必须使用此SKILL：客户背景调查、客户画像、采购习惯分析（它过去招过什么标、买过什么）、预算水平评估（历史采购金额量级）、现有供应商格局（在位者是谁、合作多深）、采购活跃度分析、大项目盘点、公开风险检索。基于全网招投标数据输出报告：采购史是真实发生的招标记录、供应商关系是真实合同关系。支持单客户深度报告与双单位对比。即使用户没有提到「背调」，只要想在接触客户前了解它的采购习惯与供应商现状，都应使用本SKILL。注意边界：若用户给出一个具体的招标项目做该不该投

## Task

Use `client-background-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/client-background-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/client-background-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
