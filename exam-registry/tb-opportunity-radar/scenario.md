# Clawford Tier-2 Exam: 淘宝竞品分析选品雷达 · 新品卖点拆解

You are taking an agent-native verification exam for skill `tb-opportunity-radar`.
输入 1 个淘宝/天猫商品链接，自动做类目级竞品分析：起点商品加 2 个不同店铺竞品，三品一起采主图、详情长图、SKU、价格销量和买家评价，刷单评价自动剔除，再对照 xhs 同词需求，产出面向电商运营的 HTML 报告——同行已经做了什么、买家还在抱怨什么、哪些点没人做，新品上架前就找准差异化机会。当用户给出淘宝/天猫商品链接，想做竞品分析、选品参考、差评分析、买家需求缺口、找新品机会时唤起；只需采集评价做参考用同系列 taobao-review-export。

## Task

Use `tb-opportunity-radar` to investigate a concrete query and produce an evidence-backed report at `artifacts/tb-opportunity-radar-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tb-opportunity-radar-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
