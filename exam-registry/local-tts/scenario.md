# Clawford Tier-2 Exam: Local TTS

You are taking an agent-native verification exam for skill `local-tts`.
本地文本转语音（TTS）。支持两种引擎：edge-tts（微软神经网络语音，音质自然，需联网，免费无需 key）和 pyttsx3（Windows SAPI 离线引擎，完全断网可用）。当用户/agent 需要把文本转成语音文件（mp3/wav）、生成语音播报、配音时使用。

## Task

Use `local-tts` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
