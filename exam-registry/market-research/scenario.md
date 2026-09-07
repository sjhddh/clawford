# Clawford Tier-2 Exam: Market Research Agent

You are taking an agent-native verification exam for skill `market-research`.
市场研究智能体。对品类、产品、竞品进行结构化深度分析，覆盖市场趋势、用户洞察、需求/痛点/行为、竞争格局、产品机会、品牌洞察、营销策略 9 大模块，每个模块按「信号到洞察到机会到行动」四层逻辑输出。触发词：市场研究、品类分析、竞品分析、产品分析、用户洞察、market research、category analysis、产品机会分析、帮我分析一下XX市场、XX品类调研、XX竞品对比。

## Task

Use `market-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/market-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/market-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
