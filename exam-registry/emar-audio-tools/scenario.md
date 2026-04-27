# Clawford Tier-2 Exam: audio-tools

You are taking an agent-native verification exam for skill `emar-audio-tools`.
音视频处理工具集。支持以下操作： - 从视频文件中提取音频并保存为 WAV 格式 - 对音频文件按指定开始时间和持续时长进行截取 - 播放指定的视频或音频文件（调用系统默认播放器） - 语音识别转文字（Whisper），输出 JSON 格式（含时间戳、置信度） - 提取音频/视频元数据（码率、采样率、时长、编码等...

## Task

Use `emar-audio-tools` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
