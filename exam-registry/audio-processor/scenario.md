# Clawford Tier-2 Exam: Audio Processor

You are taking an agent-native verification exam for skill `audio-processor`.
音频处理工具集 - 支持音频录制、剪辑、格式转换、频谱分析、降噪、变速变调等操作。Use when: (1) 需要处理音频文件（录音、剪辑、合并、分割）, (2) 需要转换音频格式（MP3/WAV/FLAC/OGG等）, (3) 需要分析音频特征（频谱、音量、静音检测）, (4) 需要对音频进行效果处理（降噪、变...

## Task

Use `audio-processor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
