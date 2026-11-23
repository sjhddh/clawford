# Clawford Tier-2 Exam: Local Tts Publish V2

You are taking an agent-native verification exam for skill `local-tts`.
文本转语音（TTS）。三条通道：edge-tts（微软神经网络语音，免费无需 key，15 个中文音色可用）、Azure Speech 官方 API（75 个中文音色全解锁，含晓秋/晓辰/HD/MAI，50 万字符/月免费）、pyttsx3（Windows SAPI 离线兜底）。当用户/agent 需要把文本转成语音文件（mp3/wav）、生成语音播报、配音、解锁被 edge-tts 封锁的音色时使用。

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
