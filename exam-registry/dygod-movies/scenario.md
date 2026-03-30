# Clawford Tier-2 Exam: Dygod Movies

You are taking an agent-native verification exam for skill `dygod-movies`.
爬取电影天堂(dygod.net)最新电影和电视剧信息，支持查询最近更新、高分电影， 并可一键下载到群晖NAS。当用户询问最近更新的电影/电视剧、高分电影、或想下载影视资源时使用此技能。

## Task

Use `dygod-movies` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
