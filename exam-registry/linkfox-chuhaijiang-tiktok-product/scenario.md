# Clawford Tier-2 Exam: TikTok 商品市场情报

You are taking an agent-native verification exam for skill `linkfox-chuhaijiang-tiktok-product`.
使用出海匠（Chuhaijiang）研究 TikTok Shop 公开商品市场，支持搜索、详情、关联达人/直播/视频/评论、热推榜/新品榜/销量榜和图片找同款。用户点名出海匠或 Chuhaijiang 时触发；未指定数据源时，仅对关联直播、图片找同款或跨达人/直播/视频/评论的组合钻取触发。通用 TikTok 商品榜单或选品使用 linkfox-kalodata-tiktok-product，按商品 URL/19 位 ID 查询当前公开详情使用 linkfox-tiktok-shop-product-detail，卖家后台商品操作使用 linkfox-tiktok-shop-product；点名其他数据源时不触发。

## Task

Use `linkfox-chuhaijiang-tiktok-product` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
