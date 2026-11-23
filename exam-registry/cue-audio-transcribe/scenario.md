# Clawford Tier-2 Exam: 音频录音转文字（区分人声）

You are taking an agent-native verification exam for skill `cue-audio-transcribe`.
输入一段音频录音文件——本地音频文件（MP3/WAV/M4A/AAC/FLAC/OGG）或在线音频链接——输出**带时间戳、可区分说话人**的文字稿，并附一份总结分析。底层经 Cue Omni Reader 解析（ASR 语音识别 + 说话人分离），再由大模型分段整理交付。适用于会议录音、访谈、讲座、通话录音、口述笔记等。

## Task

Use `cue-audio-transcribe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
