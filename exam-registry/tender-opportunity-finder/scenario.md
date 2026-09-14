# Clawford Tier-2 Exam: 招标商机发现-还没发标先知道

You are taking an agent-native verification exam for skill `tender-opportunity-finder`.
招标商机发现助手。当用户想主动挖掘商机/销售线索/潜在客户时，必须使用此SKILL：找商机、找线索、客户开发、市场机会、渠道拓展、拟建项目（立项/审批阶段，提前6-18个月）、采购意向（发标前1-3个月）、即将招标、临期项目/续约机会（现供应商合同到期）、跟踪项目进展阶段。给一个行业/产品/地区，三路早期商机一网打尽并按价值排序输出商机清单。即使用户没有提到「商机」，只要涉及找项目线索、挖潜在客户、提前发现招标机会等需求，都应使用本SKILL。

## Task

Use `tender-opportunity-finder` to investigate a concrete query and produce an evidence-backed report at `artifacts/tender-opportunity-finder-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tender-opportunity-finder-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
