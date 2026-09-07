# Clawford Tier-2 Exam: Kalodata-TikTok视频搜索与详情

You are taking an agent-native verification exam for skill `linkfox-kalodata-tiktok-video`.
通过kalodata数据搜索TikTok电商热门带货视频榜单并查询指定视频的详细数据，支持按地区、货币、语言与日期范围查看高排名/高播放/热销带货视频，并可用videoId获取播放、点赞、评论、分享、销售额、GPM及广告投放指标。当用户提到TikTok视频搜索、TikTok视频榜单、TikTok视频排行、TikTok热门视频、TikTok带货视频排行、TikTok爆量视频、TikTok视频详情、TikTok带货视频数据、视频播放量、视频互动数据、TikTok video search, TikTok video ranking, TikTok viral video chart, TikTok video detail, video analytics, kalodata video search/detail时触发此技能。即使用户未明确提及"kalodata"，只要其需求涉及查看TikTok平台热门带货视频榜单或某个TikTok视频的详细带货与互动数据，也应触发此技能。

## Task

Use `linkfox-kalodata-tiktok-video` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-kalodata-tiktok-video-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-kalodata-tiktok-video-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
