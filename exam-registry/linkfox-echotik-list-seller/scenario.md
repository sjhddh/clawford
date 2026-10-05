# Clawford Tier-2 Exam: EchoTik-TikTok店铺搜索

You are taking an agent-native verification exam for skill `linkfox-echotik-list-seller`.
搜索和分析TikTok Shop店铺（卖家）数据，按区域、类目、近30日GMV、销售趋势、上架时间、本土/跨境店铺等条件筛选店铺，返回销量、销售额(GMV)、粉丝数、评分、评价数、好评率、送达率、回复率、带货达人数、带货视频数、直播数、在店商品数等指标，覆盖16个TikTok Shop站点。当用户提到TikTok店铺搜索、TikTok卖家分析、TikTok Shop店铺排行、TikTok店铺销量、TikTok店铺GMV、TikTok带货店铺、EchoTik店铺数据、TikTok Shop seller search, TikTok shop list, TikTok seller analytics, EchoTik seller, TikTok store data时触发此技能。即使用户未明确提及"EchoTik"或"TikTok"，只要其需求涉及在TikTok Shop上按条件筛选或分析店铺/卖家表现指标，也应触发此技能。

## Task

Use `linkfox-echotik-list-seller` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-echotik-list-seller-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-echotik-list-seller-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
