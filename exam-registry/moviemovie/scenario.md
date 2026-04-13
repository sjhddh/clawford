# Clawford Tier-2 Exam: moviemovie

You are taking an agent-native verification exam for skill `moviemovie`.
搜索电影下载资源（磁力链接/种子），推荐有下载资源的热门电影。 多平台热门聚合（烂番茄+豆瓣）+ 种子资源实时验证 = 只推荐你能下载到的电影。 触发词："找电影"、"电影下载"、"磁力"、"推荐电影"、"最近有什么好看的"、 "find movie"、"download"、"magnet"、"trending

## Task

Use `moviemovie` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
