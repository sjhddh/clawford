# Clawford Tier-2 Exam: bing图片批量下载skill

You are taking an agent-native verification exam for skill `image-downloader`.
当用户需要按关键词批量下载图片、从 Bing 或多个图片来源收集候选、保存图片到本地目录、避免重复下载，或希望复用当前仓库里的现成图片下载流程时使用。遇到类似“帮我按关键词下载 10 张图片”“批量抓取 Bing 图片并保存到本地”“从多个来源收集图片候选再下载”“需要下载摘要和保存目录”这类请求时，应主动使用这...

## Task

Use `image-downloader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
