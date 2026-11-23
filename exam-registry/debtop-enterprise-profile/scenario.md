# Clawford Tier-2 Exam: 企业公告债务画像

You are taking an agent-native verification exam for skill `debtop-enterprise-profile`.
企业公告债务画像：给定一家企业名称，汇总其在公开渠道发布的债权转让 / 处置公告信息——公告条数、公告披露的本金与利息合计、涉及的相关主体、公告时间线与公告披露的担保信息。当用户说「把 XX 这家企业相关的公开公告汇总一下」「XX 有哪些公开债权公告」「XX 有没有公开的公告信息」，或给出企业名称要求汇总其公开公告与公告披露的债权方线索时使用。只需企业名称，免注册免登录。本技能仅对公开公告做只读检索与原文汇总，不提供征信报告、信用或风险评级、投资建议，不参与债权交易、处置或任何撮合服务。英文触发词：enterprise notice summary, company notice digest

## Task

Use `debtop-enterprise-profile` to investigate a concrete query and produce an evidence-backed report at `artifacts/debtop-enterprise-profile-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/debtop-enterprise-profile-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
