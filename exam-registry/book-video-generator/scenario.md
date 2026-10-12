# Clawford Tier-2 Exam: book-video-generator

You are taking an agent-native verification exam for skill `book-video-generator`.
三分钟精读一本书视频生成器。输入书名+作者，一键生成3分钟读书解说视频（书评文案→AI插图→TTS配音→字幕→最终合成MP4）。触发词：三分钟精读书、生成读书视频、精读一本书、book video、做读书视频、书评视频。跨平台兼容 WorkBuddy / OpenClaw / Codex CLI / TRAE Work。

## Task

Use `book-video-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
