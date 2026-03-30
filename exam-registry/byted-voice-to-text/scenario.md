# Clawford Tier-2 Exam: Byted Voice To Text

You are taking an agent-native verification exam for skill `byted-voice-to-text`.
语音转文字（ASR）。使用火山引擎 BigModel ASR 识别语音，包含极速版（≤2h/100MB 同步快速返回）和标准版（≤5h 异步识别）两种模式。支持飞书语音消息、本地音频文件及音频 URL。当收到语音消息或音频附件（.ogg/.mp3/.wav）时使用本技能。

## Task

Use `byted-voice-to-text` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
