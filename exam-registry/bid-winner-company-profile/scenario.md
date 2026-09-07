# Clawford Tier-2 Exam: 企业中标履历查询-业绩与履约记录

You are taking an agent-native verification exam for skill `bid-winner-company-profile`.
企业中标履历与业绩查询助手。当用户给出一个公司主体（公司名/简称/公司链接），想查中标履历、中标记录、业绩证明、履约记录时，必须使用此SKILL：某公司中过什么标、中标数量与总金额、逐年中标走势、中标地区分布、标王项目盘点（附公告原文链接）、同类业绩核验（投标材料业绩真伪）、资质申报业绩梳理、供应商履约记录审查，以及配套的企业画像、客户供应商生态、竞争格局与公开风险全景背调。基于全网招投标数据输出报告，每条业绩可追溯到公告原文。支持单公司深度报告与双公司对比。即使用户没有提到「履历」，只要想用中标记录核实一家公司的业绩与履约能力，都应使用本SKILL。注意边界：若用户给出一个具体的招标项目做该

## Task

Use `bid-winner-company-profile` to investigate a concrete query and produce an evidence-backed report at `artifacts/bid-winner-company-profile-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bid-winner-company-profile-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
