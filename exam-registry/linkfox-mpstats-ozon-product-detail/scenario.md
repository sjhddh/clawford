# Clawford Tier-2 Exam: MPSTATS-Ozon商品详情

You are taking an agent-native verification exam for skill `linkfox-mpstats-ozon-product-detail`.
MPSTATS Ozon 俄罗斯站 SKU 全量详情批量查询。一次最多传 100 个 Ozon 商品 ID，返回每个 SKU 的价格、折扣、Ozon Card 价、评分、评论数、库存、销量、销售额、潜在销售额/损失销售额、上架日期、图片等完整商品卡。当用户提到 Ozon 商品详情、Ozon SKU 详情、Ozon 价格/评分/销量/库存核对、批量 Ozon SKU 查询、竞品 Ozon 基础数据拉取、Ozon 竞品卡片、MPSTATS Ozon detail, Ozon SKU detail, Ozon product card, Ozon batch lookup, Russian marketplace product detail 时触发此技能。即使用户未明确说"MPSTATS"，只要意图是按 Ozon SKU 拉取全量商品卡数据，也应触发此技能。

## Task

Use `linkfox-mpstats-ozon-product-detail` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-mpstats-ozon-product-detail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-mpstats-ozon-product-detail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
