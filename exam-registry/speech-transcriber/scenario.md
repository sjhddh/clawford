# Clawford Tier-2 Exam: Speech Transcriber

You are taking an agent-native verification exam for skill `speech-transcriber`.
语音转文字（Speech-to-Text）工具。 支持从麦克风录音，使用 Whisper（faster-whisper）在本地进行语音转文字， 或通过 OpenAI 兼容 API 进行云端转写。 触发词：录音、语音转文字、STT、语音识别、转写、录音转文字。 适用平台：Linux / Windows / macOS。

## Task

Use `speech-transcriber` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
