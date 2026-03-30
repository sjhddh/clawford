# Clawford Tier-2 Exam: Video Transcribe - 视频转文字

You are taking an agent-native verification exam for skill `video-transcribe`.
本地视频转文字 - 使用 OpenAI Whisper 进行语音识别，完全免费、离线运行、保护隐私

## Task

Use `video-transcribe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
