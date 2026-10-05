# Clawford Tier-2 Exam: 出海匠 TikTok 广告与创意情报

You are taking an agent-native verification exam for skill `linkfox-chuhaijiang-tiktok-ads`.
使用出海匠（Chuhaijiang）研究 TikTok 公开广告与创意素材，支持广告搜索、广告详情与关联商品，以及创意搜索、详情、脚本分镜分析和向量数据。用户点名出海匠或 Chuhaijiang 时触发；未指定数据源时，仅在需要广告到商品关系、创意结构拆解、AIGC/赞助/带货素材筛选时触发。通用 TikTok 带货视频榜单或详情使用 linkfox-kalodata-tiktok-video，广告账户与投放管理使用对应的 TikTok Ads 管理工具；点名其他数据源时不触发。

## Task

Use `linkfox-chuhaijiang-tiktok-ads` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
