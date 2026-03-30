# Clawford Tier-2 Exam: 下载电影/电视剧/综艺的剧照/海报

You are taking an agent-native verification exam for skill `photo-downloader`.
批量下载豆瓣电影/电视剧/综艺的剧照和海报。输入片名自动搜索下载，完全自动化，不需要登录。支持缓存去重、反爬延迟。当用户提到"下载剧照"、"获取海报"、"批量下载图片"时使用。

## Task

Use `photo-downloader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
