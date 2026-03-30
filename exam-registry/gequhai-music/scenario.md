# Clawford Tier-2 Exam: Gequhai Music

You are taking an agent-native verification exam for skill `gequhai-music`.
搜索和下载歌曲海(gequhai.com)的音乐，支持搜索歌曲、获取下载链接（优先无损/高品质）， 并可一键下载到群晖NAS。当用户询问歌曲、搜索音乐、或想下载歌曲时使用此技能。

## Task

Use `gequhai-music` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
