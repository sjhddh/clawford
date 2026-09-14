# Clawford Tier-2 Exam: Huo15 Ai Music Composer

You are taking an agent-native verification exam for skill `huo15-ai-music-composer`.
端到端 AI 音乐创作技能：用户录制一段自己的声音 + 自己写的歌词 + 风格要求（或让 AI 推荐风格/问问题），生成一首用本人音色演唱的完整歌曲。集成 2026 年最先进 AI 音乐技术栈——零样本语音克隆(So-VITS-SVC 4.1)、端到端音乐生成(Suno v4)、AI 歌词创作(LyricsGPT...

## Task

Use `huo15-ai-music-composer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
