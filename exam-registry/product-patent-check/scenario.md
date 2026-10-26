# Clawford Tier-2 Exam: 产品专利查询

You are taking an agent-native verification exam for skill `product-patent-check`.
产品专利查询、这个产品有没有专利。当用户说「某品牌的扫地机器人有哪些专利」「这款产品有专利吗」「采购前看看供应商产品的专利」「电商卖货前查一下产品专利」「拆解竞品看专利」时使用。输出产品专利清单（Excel 能打开），按部件分组。 Finds the patents behind a brand's product by resolving all company name variants, then searching by product and component for inventions, utility models and designs, grouped by component.

## Task

Use `product-patent-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/product-patent-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/product-patent-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
