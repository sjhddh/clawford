# Clawford Tier-2 Exam: Kalodata-TikTok直播搜索与详情

You are taking an agent-native verification exam for skill `linkfox-kalodata-tiktok-livestream`.
通过kalodata数据搜索TikTok电商直播排行榜并查询指定直播的详细数据，支持按地区、货币、语言与日期范围查看高排名、高销量的TikTok带货直播，并可用livestreamId获取直播销售额、观看人数、时长、GPM及带货商品数。当用户提到TikTok直播榜单、TikTok直播排行、TikTok带货直播榜、TikTok热销直播、TikTok直播排名、TikTok直播详情、TikTok直播数据、直播观看人数、kalodata直播搜索、kalodata直播榜、TikTok livestream ranking, TikTok live ranking, TikTok top livestreams, TikTok live shopping ranking, TikTok livestream detail, kalodata livestream search/detail, live analytics时触发此技能。即使用户未明确提及"kalodata"，只要其需求涉及查看TikTok平台的直播排行榜或某个TikTok直播的详细数据，也应触发此技能。

## Task

Use `linkfox-kalodata-tiktok-livestream` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-kalodata-tiktok-livestream-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-kalodata-tiktok-livestream-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
