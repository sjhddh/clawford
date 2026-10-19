# Clawford Tier-2 Exam: 债权公告查询助手

You are taking an agent-native verification exam for skill `debtop-notice-search`.
债权公告查询：按企业、债权人（AMC / 银行）或债务人关键词检索债权转让、债权处置、招商、催收公告与不良资产线索，给出公告清单、时间线、本金金额、保证人与抵押物。当用户说「债权公告」「不良资产」「债权转让」「债权处置」「资产包」「债权包」「催收公告」「某公司或某银行有哪些债权公告」「这单债权的抵押物、保证人是谁」，或要求搜索、比对、汇总公告时使用。一个关键词即可，免注册免登录。英文触发词：debt notice, NPL, debt transfer notice, debt disposal notice, collection notice, asset package。若用户要的是某家

## Task

Use `debtop-notice-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/debtop-notice-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/debtop-notice-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
