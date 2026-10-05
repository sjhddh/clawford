# Clawford Tier-2 Exam: EchoTik-TikTok店铺商品列表

You are taking an agent-native verification exam for skill `linkfox-echotik-list-seller-product`.
查询某个TikTok Shop店铺（卖家）的在售商品列表，通过sellerId获取该店铺全部商品，返回商品标题、价格、多周期(1天/7天/15天/30天/60天/90天/总)销量与销售额(GMV)、评分、评论数、佣金比例、上架时间、带货方式、品类等指标。当用户提到TikTok店铺商品、TikTok店铺在售商品、TikTok卖家商品列表、TikTok店铺选品、查看TikTok店铺卖什么、TikTok店铺商品分析、EchoTik店铺商品、TikTok Shop seller products, TikTok store products, TikTok seller product list, EchoTik store product list时触发此技能。即使用户未明确提及"EchoTik"或"TikTok"，只要其需求涉及查看某个TikTok Shop店铺（已知sellerId）的在售商品及其销量/价格/佣金表现，也应触发此技能。

## Task

Use `linkfox-echotik-list-seller-product` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
