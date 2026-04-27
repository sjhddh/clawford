# Clawford Tier-2 Exam: baiyin-music-generate

You are taking an agent-native verification exam for skill `baiyin-music-generate`.
使用百音开放平台创建 AI 音乐任务，支持普通生成、参考音频生成、音乐改编，并在同一 skill 内继续查询任务状态、结果链接和余额。用于用户要生成歌曲、参考音频做歌、改编上一首歌、查询音乐任务进度或下载结果时。

## Task

Use `baiyin-music-generate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
