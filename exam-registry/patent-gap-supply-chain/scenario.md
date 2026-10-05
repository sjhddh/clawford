# Clawford Tier-2 Exam: patent-gap-supply-chain

You are taking an agent-native verification exam for skill `patent-gap-supply-chain`.
Competitive intelligence workflow that infers supply-chain relationships from patent gaps — with trade secret assessment, competitive triangulation, negative verification, patent quality scoring, evidence freshness tracking, reverse workflow (supplier→client), and financial cross-validation. 通过"专利缺口"反推产业链关系的竞争情报工作流，集商业秘密评估、竞对三角验证、 负向验证、专利质量评分、证据时效追踪、反向工作流（供应商→客户）、财务数据交叉验证于一体。 Use when researching tech/hardware/manufacturing/pharma stocks, analyzing industry supply chains, identifying suppliers or customers, investigating patent gaps, or inferring supply-chain relationships from patent ownership. Supports both forward (patent gap → supplier) and reverse (technology owner → downstream clients) analysis directions. 触发场景：科技股研究、行业分析、产业链推断、 供应商识别、客户挖掘、专利缺口分析、专利归属查询、技术依赖分析、上下游推断 / Triggers: patent gap analysis, supply chain inference, supplier identification, customer identification, technology dependency, competitive intelligence, tech stock research, industry analysis, trade secret assessment, negative verification, patent quality, financial cross-validation, reverse supply-chain analysis. The skill starts from a patent gap (or known technology owner), evaluates trade secret likelihood, activates five verification leads with competitive triangulation, runs negative verification to rule out false positives, scores patent quality, tracks evidence freshness, then cross-validates against financial disclosures, outputting a confidence-scored supply-chain inference report.

## Task

Use `patent-gap-supply-chain` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-gap-supply-chain-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-gap-supply-chain-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
