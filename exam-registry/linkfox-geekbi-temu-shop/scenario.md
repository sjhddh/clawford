# Clawford Tier-2 Exam: GeekBI Temu店铺研究

You are taking an agent-native verification exam for skill `linkfox-geekbi-temu-shop`.
使用 GeekBI 查询和筛选 Temu 公开市场店铺。用户显式提到 GeekBI、linkfox-geekbi-temu-shop，或需要平均客单价、动销、粉丝数、商品数、销量或销售额的日/周/月变化与增长等 GeekBI 差异指标时触发。普通 Temu 店铺搜索或排行使用 linkfox-temu-store-query；除非用户明确要求跨数据源对比，不要同时调用两条付费店铺数据 skill。

## Task

Use `linkfox-geekbi-temu-shop` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-geekbi-temu-shop-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-geekbi-temu-shop-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
