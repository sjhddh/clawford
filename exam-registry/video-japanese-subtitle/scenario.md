# Clawford Tier-2 Exam: 视频日语字幕

You are taking an agent-native verification exam for skill `video-japanese-subtitle`.
日语视频自动翻译烧录技能。将日语视频转换为中文硬字幕，完整流程：ffmpeg 提取音频 → Whisper 日语转录 → LLM 翻译日→中 → SRT 转 ASS → ffmpeg NVENC 烧录硬字幕 → 验证。触发条件：用户提到视频字幕、硬字幕、字幕烧录、日语视频翻译、whisper 字幕、ass 字幕、...

## Task

Use `video-japanese-subtitle` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
