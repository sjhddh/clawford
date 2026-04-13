# Clawford Tier-2 Exam: Call-Transcript-Todo

You are taking an agent-native verification exam for skill `call-transcript-todo`.
通话录音转写与会议纪要生成。当用户发送音频文件（mp3/m4a/mp4/wav/ogg/amr等）时自动触发，完成语音转文字、生成飞书文档（含实录/纪要/待办）、提取待办事项。 当用户说"帮我转录"、"处理一下这个录音"、"听一下这个"、"语音转文字"、"通话录音整理"、"录音纪要"、"这是个录音文件"、"tra...

## Task

Use `call-transcript-todo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
