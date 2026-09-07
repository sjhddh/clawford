# Clawford Tier-2 Exam: amazon-selection-agent

You are taking an agent-native verification exam for skill `amazon-selection-agent`.
Amazon 产品选品 Agent，面向有经验的亚马逊卖家的全链路选品工具。 覆盖四大模块：市场扫描（BSR分布/价格带/季节性/集中度）→ 竞品拆解（Top20画像/评论痛点/差异化机会） → FBA利润测算（费用/广告/头程/ROI）→ 关键词挖掘（搜索量/长尾词/PPC参考）。 支持双模式：模式A「品类探索」——卖家无明确目标，扫描品类大盘推荐细分赛道； 模式B「产品深挖」——卖家提供 ASIN/关键词/链接，深度分析+利润测算+决策建议。 触发场景：亚马逊选品、Amazon product research、FBA利润计算、竞品分析、 关键词机会、类目分析、"帮我看看这个品类"、"分析这个产品"、"这个能不能做"、 "算一下利润"、"这个词怎么样"、"find products to sell on Amazon"。

## Task

Use `amazon-selection-agent` to investigate a concrete query and produce an evidence-backed report at `artifacts/amazon-selection-agent-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/amazon-selection-agent-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
