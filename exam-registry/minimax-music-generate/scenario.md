# Clawford Tier-2 Exam: minimax-music

You are taking an agent-native verification exam for skill `minimax-music-generate`.
MiniMax 音乐生成技能 - 支持歌词生成(Lyrics Generation)、音乐生成(Music Generation)。支持自定义歌词段落结构(verse/chorus/bridge/intro/outro)，异步生成 MP3 格式音乐，自动下载保存到本地。

## Task

Use `minimax-music-generate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
