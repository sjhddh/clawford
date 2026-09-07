# Clawford Tier-2 Exam: audio-enhancement-engine

You are taking an agent-native verification exam for skill `audio-enhancement-engine`.
当用户想要**音频增强**、**提升音质**、**修复录音**、**降噪**、**语音修复**、**高保真音频**、**48kHz超分辨率**、**清理会议录音**、**音乐音质提升**、**批量处理音频**时自动触发。
集成 **VoiceFixer**（通用语音修复）与 **AudioSR**（高保真音频超级分辨率到48kHz）两种专业技术，支持单个音频文件或整个目录批量处理。
默认使用 VoiceFixer 进行降噪和清晰度提升；当用户提到“高保真”“音乐增强”“提升采样率”“48kHz”等需求时，自动切换到 AudioSR 模式。
支持 wav、mp3、flac、m4a、ogg 等常见

## Task

Use `audio-enhancement-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
