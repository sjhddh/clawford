# Clawford Tier-2 Exam: 出海匠 TikTok 店铺情报

You are taking an agent-native verification exam for skill `linkfox-chuhaijiang-tiktok-shop`.
使用出海匠（Chuhaijiang）研究 TikTok Shop 公开店铺市场，支持店铺搜索、详情、关联达人/商品/视频、热推榜和销量榜。用户点名出海匠或 Chuhaijiang 且意图涉及店铺搜索、详情、店铺关系或店铺榜单时触发；未指定数据源时，仅在需要按店铺评分、7日销量/GMV筛选，或查看店铺关联达人/商品/视频时触发。通用 TikTok 店铺榜单或详情使用 linkfox-kalodata-tiktok-shop，EchoTik 店铺搜索/详情使用相应 EchoTik skills；卖家后台订单、商品、履约等操作使用 TikTok Shop 官方 skills；点名其他数据源时不触发。

## Task

Use `linkfox-chuhaijiang-tiktok-shop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
