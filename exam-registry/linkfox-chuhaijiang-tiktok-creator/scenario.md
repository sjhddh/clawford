# Clawford Tier-2 Exam: 出海匠 TikTok 达人情报

You are taking an agent-native verification exam for skill `linkfox-chuhaijiang-tiktok-creator`.
使用出海匠（Chuhaijiang）研究 TikTok 公开达人市场，支持达人搜索、详情、关联直播/商品/视频、机构榜、带货达人榜和涨粉榜。用户点名出海匠或 Chuhaijiang 时触发；未指定数据源时，仅对达人关联直播、机构榜或跨商品/视频的组合钻取触发。通用 TikTok 达人榜单、搜索和详情使用 linkfox-kalodata-tiktok-creator；商品到达人发现使用 linkfox-chuhaijiang-tiktok-product；点名其他数据源时不触发。

## Task

Use `linkfox-chuhaijiang-tiktok-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
