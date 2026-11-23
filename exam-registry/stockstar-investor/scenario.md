# Clawford Tier-2 Exam: StockStar Investor - 证券之星投资者互动

You are taking an agent-native verification exam for skill `stockstar-investor`.
查询上市公司投资者互动（董秘问答）与线索挖掘数据，数据来源证券之星（stockstar.com）。 支持两类视图：线索挖掘（结构化投资信号、重要性评级、边际变化追踪）和 投资者互动原始问答（含标签筛选、语义倾向、回复质量）。 触发词：投资者互动、董秘问答、董秘、问答、线索、信号、线索挖掘、 信号挖掘、边际变化、投资线索、公司回复、投资者提问、 证券之星、stockstar investor

## Task

Use `stockstar-investor` to investigate a concrete query and produce an evidence-backed report at `artifacts/stockstar-investor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stockstar-investor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
