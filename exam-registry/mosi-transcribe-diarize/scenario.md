# Clawford Tier-2 Exam: MOSI Transcribe Diarize 多说话人转写

You are taking an agent-native verification exam for skill `mosi-transcribe-diarize`.
MOSS 多说话人转写技能。支持 URL / 本地文件 / Base64 音频输入， 输出带时间戳与 speaker 的结构化转写结果（JSON、逐段文本、按说话人汇总）。 用于会议纪要、访谈录音、多人对话整理。

## Task

Use `mosi-transcribe-diarize` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
