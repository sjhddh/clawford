# Clawford Tier-2 Exam: ecommerce-carbon-analyzer

You are taking an agent-native verification exam for skill `ecommerce-carbon-analyzer`.
电商碳排分析助手。给定“发 N 套某商品到某城市”，通过 MCP 工具查询 BOM 构成、单品重量/成本/碳排与运费，计算总重量、总成本、总碳排放。Use when the user asks about 礼盒/商品 的重量、成本、碳排放计算，或需要 llm+mcp 的电商物流碳排分析。

## Task

Use `ecommerce-carbon-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/ecommerce-carbon-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ecommerce-carbon-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
