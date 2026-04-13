# Clawford Tier-2 Exam: Funasr Asr

You are taking an agent-native verification exam for skill `funasr-asr`.
本地中文语音识别，使用阿里达摩院 FunASR。触发场景：(1) 用户发送语音消息需转录，(2) 需要转录音频/视频文件，(3) 从网页下载视频并转录，(4) 中文语音转文字任务。支持小内存模式（~500MB）和大模型模式（~2GB），自动内存管理，任务队列防并行。

## Task

Use `funasr-asr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
