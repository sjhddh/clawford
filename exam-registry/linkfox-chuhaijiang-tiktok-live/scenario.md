# Clawford Tier-2 Exam: 出海匠 TikTok 直播带货洞察

You are taking an agent-native verification exam for skill `linkfox-chuhaijiang-tiktok-live`.
使用出海匠（Chuhaijiang）研究 TikTok 公开直播市场，支持多条件直播搜索、单场直播详情和直播带货商品钻取。用户明确点名出海匠或 Chuhaijiang 且意图是直播搜索、直播详情或从直播反查商品时触发；即使用户未指定数据源，也仅在需要从直播反查带货商品时触发。通用 TikTok 带货直播榜单或详情使用 linkfox-kalodata-tiktok-livestream，从商品出发的关联直播研究使用 linkfox-chuhaijiang-tiktok-product；点名其他数据源时不触发。

## Task

Use `linkfox-chuhaijiang-tiktok-live` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
