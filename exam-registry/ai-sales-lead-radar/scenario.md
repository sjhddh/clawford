# Clawford Tier-2 Exam: AI销售线索雷达-政企销售找客户

You are taking an agent-native verification exam for skill `ai-sales-lead-radar`.
AI销售线索雷达。当政企销售/BD/渠道人员想找销售线索、开发客户时，必须使用此SKILL：销售线索挖掘、潜在客户发现、拟建项目（提前6-18个月布局）、采购意向（发标前1-3个月对接）、临期续约（替换现供应商）、线索按金额与紧急度排序、每日商机晨报订阅。给一个行业/产品/地区即输出按价值排序的线索清单。即使用户没有提到「线索」，只要涉及找客户、开发市场、挖商机、谁会买我们产品等需求，都应使用本SKILL。

## Task

Use `ai-sales-lead-radar` to investigate a concrete query and produce an evidence-backed report at `artifacts/ai-sales-lead-radar-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ai-sales-lead-radar-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
