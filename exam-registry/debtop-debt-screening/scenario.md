# Clawford Tier-2 Exam: 债权标的筛选

You are taking an agent-native verification exam for skill `debtop-debt-screening`.
债权标的筛选：按行业或标的类型、地区与金额区间，批量检索公开的债权转让 / 处置 / 招商公告，定位「这类债权在哪些人手上」——按出让方（债权人）聚合命中标的数、本金合计与涉及债务人，并输出标的清单与分布。金额区间为「已扫描窗口内」筛选（检索接口不支持金额参数），输出会标注扫描覆盖率与时间窗。当用户说「找煤矿不良，金额 3000 万到 3 亿的债权都在哪些人手上」「某地区某行业的债权有哪些出让方在处置」「按金额区间筛一批债权标的」时使用。免注册免登录，只做公开公告的只读检索与汇总。

## Task

Use `debtop-debt-screening` to investigate a concrete query and produce an evidence-backed report at `artifacts/debtop-debt-screening-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/debtop-debt-screening-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
