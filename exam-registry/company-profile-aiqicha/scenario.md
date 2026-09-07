# Clawford Tier-2 Exam: 爱企查企业情报-招投标实力视角查企业

You are taking an agent-native verification exam for skill `company-profile-aiqicha`.
企业情报与实力画像助手（招投标视角，习惯用爱企查等平台查企业的用户适用）。当用户给出一个公司主体（公司名/简称/公司链接），想查企业情报、企业画像、了解一家公司的真实实力时，必须使用此SKILL：企业信息查询、主营业务分析、中标实力与逐年走势、地区盘面、客户与供应商合同关系、竞争对手识别、公开风险检索。基于全网招投标数据出报告：实力用中标记录证明、竞对从投标重叠算出、客户供应商是真实合同关系——这是工商信息类平台查不到的。支持单公司深度报告与双公司对比。即使用户没有提到「情报」，只要想看清一家公司的真实业务与实力，都应使用本SKILL。注意边界：若用户给出一个具体的招标项目做该不该投的决策分析

## Task

Use `company-profile-aiqicha` to investigate a concrete query and produce an evidence-backed report at `artifacts/company-profile-aiqicha-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/company-profile-aiqicha-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
