# Clawford Tier-2 Exam: Doubao ASR Flash

You are taking an agent-native verification exam for skill `doubao-asr-flash`.
火山引擎豆包语音识别 API（录音文件极速版）。把本地音频/视频文件或公网音频 URL 转成文字：录音转写、会议纪要、播客字幕、语音输入、视频伴音提取文字。 一次 HTTP POST 返回结果，无需轮询。支持 WAV/MP3/OGG 直传，其他格式 （m4a/flac/aac/视频等）自动用 ffmpeg 转码。Use whenever the user wants to 转写/识别/听写 音频或视频中的语音，生成文字稿、字幕(SRT)、会议纪要等。

## Task

Use `doubao-asr-flash` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
