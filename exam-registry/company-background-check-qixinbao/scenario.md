# Clawford Tier-2 Exam: 启信宝企业背调-招投标视角查企业

You are taking an agent-native verification exam for skill `company-background-check-qixinbao`.
企业背景调查助手（招投标视角，习惯用启信宝等平台查企业的用户适用）。当用户给出一个公司主体（公司名/简称/公司链接），想做企业背调、查企业底细、企业画像、了解一家公司靠不靠谱/实力怎么样/中过什么标时，必须使用此SKILL：企业背景调查、公司背景核查、主营业务分析、客户与供应商关系、中标记录与履约实力、竞争对手识别、公开风险检索。基于全网招投标数据出报告：竞对从投标重叠算出、实力用中标记录证明、客户供应商是真实合同关系——这是工商信息类平台查不到的。支持单公司深度报告与双公司对比。即使用户没有提到「背调」，只要想搞清楚一家公司的底细、业务与实力，都应使用本SKILL。注意边界：若用户给出一个具

## Task

Use `company-background-check-qixinbao` to investigate a concrete query and produce an evidence-backed report at `artifacts/company-background-check-qixinbao-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/company-background-check-qixinbao-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
