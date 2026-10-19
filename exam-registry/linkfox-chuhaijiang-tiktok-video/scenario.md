# Clawford Tier-2 Exam: 出海匠 TikTok 视频情报

You are taking an agent-native verification exam for skill `linkfox-chuhaijiang-tiktok-video`.
使用出海匠（Chuhaijiang）研究 TikTok 公开视频，支持多条件视频搜索、单视频详情、带货商品和评论钻取。用户点名出海匠或 Chuhaijiang 时触发；未指定数据源时，仅在需要视频评论或视频到带货商品的关系钻取时触发。通用 TikTok 带货视频榜单或详情使用 linkfox-kalodata-tiktok-video，视频上传发布使用 linkfox-tiktok-video；点名其他数据源时不触发。

## Task

Use `linkfox-chuhaijiang-tiktok-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
