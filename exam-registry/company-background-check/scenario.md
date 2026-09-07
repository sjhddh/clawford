# Clawford Tier-2 Exam: 企业背调助手-给个公司名出份报告

You are taking an agent-native verification exam for skill `company-background-check`.
企业背调助手。当用户给出一个公司主体（公司名/简称/公司链接），想做企业背景调查、背调、查公司底细时，必须使用此SKILL：企业背调、公司背景调查、企业画像、轻尽调（这家公司实力怎么样/靠不靠谱/中过什么标）、客户背景核验、合作方审查、竞争对手识别、供应商履约能力评估、公开风险检索。基于全网招投标数据输出招投标视角的背调报告：竞对是从投标重叠算出来的、实力是中标记录证明的、客户供应商是真实合同关系。支持单公司深度报告与双公司对比两种模式。即使用户没有提到「背调」，只要想搞清楚一家公司的业务、实力与风险，都应使用本SKILL。注意边界：若用户给出一个具体的招标项目做该不该投的决策分析，使用 zl

## Task

Use `company-background-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/company-background-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/company-background-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
