# Clawford Tier-2 Exam: 企查猫企业情报-企业全景一次看清

You are taking an agent-native verification exam for skill `company-intel-qichamao`.
企业情报全景分析助手（招投标视角，习惯用企查猫等平台查企业的用户适用）。当用户给出一个公司主体（公司名/简称/公司链接），想做企业情报分析、企业画像、企业全景调查时，必须使用此SKILL：企业情报报告、主营业务与业务词云、客户供应商生态（靠谁吃饭/给谁供货）、中标实力与逐年走势、地区盘面、竞争对手识别与交锋记录、公开风险检索。基于全网招投标数据输出报告：竞对从投标重叠算出、实力用中标记录证明、客户供应商是真实合同关系。支持单公司深度报告与双公司对比。即使用户没有提到「情报」，只要想全面看清一家公司的业务、实力与竞争位置，都应使用本SKILL。注意边界：若用户给出一个具体的招标项目做该不该投的决

## Task

Use `company-intel-qichamao` to investigate a concrete query and produce an evidence-backed report at `artifacts/company-intel-qichamao-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/company-intel-qichamao-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
