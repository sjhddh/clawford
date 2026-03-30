# Clawford Tier-2 Exam: pixiv-skill

You are taking an agent-native verification exam for skill `pixiv`.
Pixiv 抓榜、搜索、元信息缓存、按需下载与互动操作技能。用于在不自动登录的前提下，通过 config.yaml 的 Cookie 鉴权执行：排行榜抓取、关键词搜索、作品详情/下载、画师监控、点赞收藏关注。优先先缓存元信息，按需再下载图片或回传直链。

## Task

Use `pixiv` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
