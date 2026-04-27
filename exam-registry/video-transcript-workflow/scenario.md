# Clawford Tier-2 Exam: Video Transcript Workflow

You are taking an agent-native verification exam for skill `video-transcript-workflow`.
视频/音频转录 → 优化润色 → 多平台发布稿。使用 faster-whisper 转录音视频，自动修正错误、提取金句、生成知乎/微信/小红书等多平台文章。Use when user wants to transcribe video/audio, convert speech to text, or creat...

## Task

Use `video-transcript-workflow` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
