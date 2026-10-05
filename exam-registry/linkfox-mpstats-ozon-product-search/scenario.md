# Clawford Tier-2 Exam: MPSTATS-Ozon商品搜索

You are taking an agent-native verification exam for skill `linkfox-mpstats-ozon-product-search`.
MPSTATS Ozon 俄罗斯站商品搜索与反查。按俄语关键词或 SKU 在 MPSTATS 数据库中检索 Ozon 商品，返回商品 ID、标题、品牌和卖家信息，是 Ozon 选品与竞品链路的起点。当用户提到 Ozon 选品、Ozon 商品搜索、俄罗斯电商选品、Ozon 关键词搜索、Ozon SKU 查询、MPSTATS Ozon、Ozon product search, MPSTATS Ozon, Russian marketplace, Ozon SKU lookup, Ozon keyword search 时触发此技能。即使用户未明确提到"MPSTATS"，只要其意图是在 Ozon 俄罗斯站按关键词或 SKU 发现或反查商品，也应触发此技能。

## Task

Use `linkfox-mpstats-ozon-product-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-mpstats-ozon-product-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-mpstats-ozon-product-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
