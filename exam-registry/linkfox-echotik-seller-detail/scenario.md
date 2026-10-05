# Clawford Tier-2 Exam: EchoTik-TikTok店铺详情

You are taking an agent-native verification exam for skill `linkfox-echotik-seller-detail`.
查询TikTok Shop店铺（卖家）详情，通过sellerId获取单个店铺的完整档案，返回总销量、多周期(1天/7天/30天/90天)销量与销售额(GMV)、粉丝数、评分、评价数、好评率、送达率、回复率、在店商品数、带货达人数、带货视频数、直播数、价格区间、商品分类、预估上架时间等指标。当用户提到TikTok店铺详情、TikTok卖家详情、TikTok店铺分析、TikTok店铺数据、TikTok店铺档案、TikTok Shop store detail、TikTok seller detail、EchoTik store profile时触发此技能。即使用户未明确提及"EchoTik"或"TikTok"，只要其需求涉及查询某个TikTok Shop店铺的完整详情/档案（已知sellerId），也应触发此技能。

## Task

Use `linkfox-echotik-seller-detail` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
