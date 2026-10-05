# Clawford Tier-2 Exam: 企业债务查询与画像

You are taking an agent-native verification exam for skill `debtop-enterprise-profile`.
企业债务查询与画像：给定一家企业名称，汇总其公开债务画像——债务规模（债权转让 / 处置的本金与利息）、关联债权人与债务人、公告时间线、保证人与抵押物。当用户说「XX 公司欠了多少钱」「负债多少」「债务情况怎么样」「债务画像」「风险画像」「XX 欠谁的钱」「这家企业有多少债务」，或给出企业名称要求汇总其公开债务、债权方与担保线索时使用。只需企业名称，免注册免登录。英文触发词：how much does a company owe, debt profile, risk profile, debt exposure。若用户只要公告清单或单条公告详情，改用 debtop-notice-search

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
