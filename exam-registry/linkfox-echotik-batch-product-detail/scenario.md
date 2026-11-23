# Clawford Tier-2 Exam: EchoTik-商品详情

You are taking an agent-native verification exam for skill `linkfox-echotik-batch-product-detail`.
批量查询TikTok商品详情数据，包括多周期销量与GMV（1天/7天/15天/30天/60天/90天/累计）、直播销量与直播GMV、带货视频与达人数据、播放量、价格、评分、评论数、佣金比例及上下架/全托管状态，支持通过商品ID或TikTok Shop商品URL批量获取。当用户提到TikTok商品详情、批量查询TikTok商品、TikTok商品销量分析、TikTok商品GMV、TikTok直播销量、TikTok带货数据、TikTok商品价格评分、批量获取TikTok商品信息、EchoTik商品详情、TikTok product detail, batch product lookup, TikTok sales analysis, TikTok GMV, TikTok live sales, TikTok influencer data时触发此技能。即使用户未明确提及"EchoTik"，只要其需求涉及根据商品ID或商品URL批量获取TikTok商品的详细销售与营销数据，也应触发此技能。

## Task

Use `linkfox-echotik-batch-product-detail` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-echotik-batch-product-detail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-echotik-batch-product-detail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
