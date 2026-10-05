# Clawford Tier-2 Exam: GeekBI Temu商品搜索与详情

You are taking an agent-native verification exam for skill `linkfox-geekbi-temu-product`.
使用 GeekBI 查询 Temu 公开市场商品。用户显式提到 GeekBI、linkfox-geekbi-temu-product，或需要 goodsId 详情、最近 30 天历史、供货价、库存、日/周/月销量与销售额及增长等 GeekBI 差异字段时触发。仅按关键词、品类、价格、评分、销量或销售额进行通用商品筛选时使用 linkfox-temu-product-query；除非用户明确要求跨数据源对比，不要同时调用两条付费商品数据 skill。

## Task

Use `linkfox-geekbi-temu-product` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-geekbi-temu-product-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-geekbi-temu-product-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
