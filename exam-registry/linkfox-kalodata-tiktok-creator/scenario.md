# Clawford Tier-2 Exam: Kalodata-TikTok达人搜索与详情

You are taking an agent-native verification exam for skill `linkfox-kalodata-tiktok-creator`.
通过kalodata数据搜索TikTok电商达人榜单并查询指定达人的详细资料，支持按地区、货币、语言与日期范围查看高排名带货达人，并可用creatorId获取粉丝数、视频/直播销售额与GPM、联系方式及关联店铺。当用户提到TikTok达人搜索、TikTok达人榜单、TikTok达人排行、TikTok网红排行、TikTok达人详情、TikTok达人资料、达人主页数据、达人联系方式、TikTok creator search, TikTok creator ranking, TikTok influencer leaderboard, TikTok creator detail, creator analytics, kalodata creator search/detail时触发此技能。即使用户未明确提及"kalodata"，只要其需求涉及查看TikTok平台达人排行榜或某个TikTok达人的详细带货数据，也应触发此技能。

## Task

Use `linkfox-kalodata-tiktok-creator` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-kalodata-tiktok-creator-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-kalodata-tiktok-creator-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
