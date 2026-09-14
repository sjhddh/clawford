# Clawford Tier-2 Exam: 1688-product-analysis

You are taking an agent-native verification exam for skill `1688-product-analysis`.
1688 商品全方位分析诊断工具，整合多数据源对指定商品进行深度分析，支持多店铺异常商品汇总、评分分层选品与单品诊断。 覆盖能力：商品数据分析、销售表现诊断、流量问题排查、广告效果评估、商品优化建议、多店铺异常商品汇总、重点品评分分层、关键词搜索商品。 适用场景：用户需要分析商品表现、诊断流量问题、查看多店铺异常商品、圈选重点运营商品、搜索店铺商品、获取商品优化建议时使用。 触发词：分析这个商品、商品诊断、商品表现分析、为什么商品没流量、商品优化建议、最该优化的商品、最应该优化的商品、商品数据分析、多店铺商品、重点品查看、圈选重点品、圈选运营商品、今日运营重点、选品、推荐商品、商品分层、商品优先级、搜索商品、新品没流量怎么办、导出商品体检报告、导出当前已生成的报告、输出商品体检报告 Markdown、在当前对话输出商品体检报告。 本 Skill 的核心流程已由 workflow `1688-product-analysis` 编排覆盖，包含明确商品 ID 诊断、异常商品选择、找问题品并诊断、关键词搜索、正向选品、同款商品分析、商品库推荐行动点与一键优化交接；单接口查询、自由组合或探索性分析回退加载本 SKILL.md。

## Task

Use `1688-product-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/1688-product-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/1688-product-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
