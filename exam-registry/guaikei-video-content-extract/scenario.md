# Clawford Tier-2 Exam: guaikei视频内容转文稿提取

You are taking an agent-native verification exam for skill `guaikei-video-content-extract`.
视频转文字与结构化文案提取，仅处理可播放的完整视频文件或公网链接（本地文件、抖音、小红书等）。覆盖视频转稿、字幕提取、语音转写、视频总结、内容分析、采访整理、短视频二创等意图；不支持实时流与加密视频。转写自动剔除语气词口误，Prompt 可定制总结、改写、翻译等输出。

## Task

Use `guaikei-video-content-extract` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
