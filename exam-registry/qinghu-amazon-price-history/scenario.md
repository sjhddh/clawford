# Clawford Tier-2 Exam: 亚马逊-商品历史趋势 | 青虎AI

You are taking an agent-native verification exam for skill `qinghu-amazon-price-history`.
青虎AI 亚马逊-商品历史趋势：查询单个 ASIN 的价格、成交价、BSR、评论数、评分、卖家数、Buy Box 等历史趋势，以及 FBA 费用、尺寸重量（不含销量）。当用户说「这个 ASIN 的价格走势」「BSR 历史怎么走的」「卖家数什么时候涨的、有没有跟卖涌入」或提出同类需求时必须触发。关键词：青虎AI、qhkit、青虎数据、亚马逊、Amazon、Keepa、价格历史、BSR趋势、Buy Box、跟卖、FBA费用、商品趋势详情。

## Task

Use `qinghu-amazon-price-history` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
