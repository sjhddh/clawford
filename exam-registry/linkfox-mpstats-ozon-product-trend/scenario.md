# Clawford Tier-2 Exam: MPSTATS-Ozon商品趋势

You are taking an agent-native verification exam for skill `linkfox-mpstats-ozon-product-trend`.
MPSTATS Ozon 俄罗斯站单个 SKU 的分日时间序列表现。按日期粒度返回一个 Ozon 商品的销量、价格、库存、评分等指标，可选附带搜索位次/可见性数据，用于验证增长趋势、季节性、异常波动。当用户提到 Ozon 趋势、Ozon 销量趋势、Ozon 价格走势、Ozon 分日数据、Ozon 库存走势、Ozon 搜索位次、Ozon 商品历史、MPSTATS trend, Ozon daily performance, Ozon time series, Ozon search visibility, Russian marketplace product history 时触发此技能。即使用户未明确说"MPSTATS"，只要意图是看某个 Ozon 商品的分日/时间段走势，也应触发此技能。

## Task

Use `linkfox-mpstats-ozon-product-trend` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-mpstats-ozon-product-trend-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-mpstats-ozon-product-trend-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
