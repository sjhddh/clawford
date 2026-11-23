# Clawford Tier-2 Exam: 亚马逊-ASIN解析专家 | 青虎AI

You are taking an agent-native verification exam for skill `qinghu-amazon-asin-analyst`.
青虎AI 亚马逊 ASIN 解析：查单个 ASIN 的基础信息、类目与 BSR、价格与成交价历史、Buy Box 与卖家数变化、评论评分趋势、变体父子关系、FBA 费用与尺寸重量，以及它的流量词与出单词。当用户给出 ASIN 或亚马逊商品链接要求分析、看价格趋势、看跟卖、看评论、看变体、做竞品体检时必须触发。关键词：青虎AI、亚马逊、Amazon、ASIN、商品详情、价格趋势、Keepa、BSR、跟卖、Buy Box、评论分析、竞品拆解。

## Task

Use `qinghu-amazon-asin-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/qinghu-amazon-asin-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qinghu-amazon-asin-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
