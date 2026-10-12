# Clawford Tier-2 Exam: EchoTik-视频详情

You are taking an agent-native verification exam for skill `linkfox-echotik-batch-video-detail`.
批量查询TikTok视频详情数据，包括视频描述、播放量（总量及近1天/7天/30天增量）、点赞（总量及增量）、评论、分享、收藏、视频销量与GMV、视频时长与分辨率、发布日期、达人信息（ID/账号/头像）、是否带货/投流/AI视频、关联商品与类目，支持通过视频ID或TikTok视频URL批量获取。当用户提到TikTok视频详情、批量查询TikTok视频、TikTok视频播放量详情、TikTok视频销量详情、TikTok视频数据分析、批量获取TikTok视频信息、EchoTik视频详情、TikTok video detail, batch video lookup, TikTok video analytics detail, TikTok video views detail, TikTok video sales detail时触发此技能。即使用户未明确提及"EchoTik"，只要其需求涉及根据视频ID或视频URL批量获取TikTok视频的详细播放与营销数据，也应触发此技能。

## Task

Use `linkfox-echotik-batch-video-detail` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-echotik-batch-video-detail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-echotik-batch-video-detail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
