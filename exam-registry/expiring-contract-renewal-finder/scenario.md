# Clawford Tier-2 Exam: 临期续约商机-合同到期窗口挖掘

You are taking an agent-native verification exam for skill `expiring-contract-renewal-finder`.
临期项目与续约商机发现助手。当用户想查询即将到期的项目合同、寻找续约/替换机会时，必须使用此SKILL：临期项目查询（合同到期前0-180天）、现供应商（在位者）识别、到期紧急度排序、按采购单位类型（政府/学校/医院/国企等）筛选、以及配套的拟建项目与采购意向商机扫描。给一个行业/地区即输出按价值排序的商机清单。即使用户没有提到「临期」，只要涉及合同快到期的项目、续约机会、替换现供应商等需求，都应使用本SKILL。

## Task

Use `expiring-contract-renewal-finder` to investigate a concrete query and produce an evidence-backed report at `artifacts/expiring-contract-renewal-finder-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/expiring-contract-renewal-finder-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
