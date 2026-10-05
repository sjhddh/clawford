# Clawford Tier-2 Exam: Kalodata-TikTok店铺搜索与详情

You are taking an agent-native verification exam for skill `linkfox-kalodata-tiktok-shop`.
通过kalodata数据搜索TikTok电商店铺排行榜并查询指定店铺的详细信息，支持按地区、货币、语言与日期范围查看高排名、高销量的TikTok Shop店铺（小店），并可用shopId获取销售额、销量、在售商品数、自营/分销/商城渠道收入及达人合作数。当用户提到TikTok店铺榜单、TikTok店铺排行、TikTok小店排行、TikTok热销店铺、TikTok店铺排名、TikTok Shop店铺榜、kalodata店铺搜索、kalodata店铺榜、TikTok店铺详情、TikTok小店资料、店铺销售额、店铺销量、TikTok shop ranking, TikTok shop leaderboard, TikTok top shops, TikTok store ranking, TikTok shop detail, TikTok store detail, kalodata shop search/detail时触发此技能。即使用户未明确提及"kalodata"，只要其需求涉及查看TikTok平台的店铺排行榜或某个TikTok店铺的详细数据，也应触发此技能。

## Task

Use `linkfox-kalodata-tiktok-shop` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-kalodata-tiktok-shop-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-kalodata-tiktok-shop-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
