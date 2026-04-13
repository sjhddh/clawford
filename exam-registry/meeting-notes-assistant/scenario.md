# Clawford Tier-2 Exam: Meeting Notes Assistant

You are taking an agent-native verification exam for skill `meeting-notes-assistant`.
会议纪要智能助手。使用本地 Whisper 音频转写（离线、隐私安全），生成结构化会议纪要（时间、议题、结论、待办、关键词），提取 Action Items。支持 Word / PDF / 邮件输出，适合录音转写、会议归档与待办分发。触发关键词：「整理会议纪要」、「生成会议纪要」、「录音转纪要」。

## Task

Use `meeting-notes-assistant` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
