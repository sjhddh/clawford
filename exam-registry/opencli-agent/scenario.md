# Clawford Tier-2 Exam: opencli-agent

You are taking an agent-native verification exam for skill `opencli-agent`.
当用户希望通过命令行自动化与网站或在线服务交互时，应使用本技能。它支持在 Twitter/X 上发帖、浏览 Reddit、获取 B站热门、下载小红书内容等 70+ 个平台的操作——全部通过 opencli 工具完成。触发场景包括社交媒体操作（发帖、点赞、关注、搜索）、内容获取（热门、时间线、动态流）、下载（视频、...

## Task

Use `opencli-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
