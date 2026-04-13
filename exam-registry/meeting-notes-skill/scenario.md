# Clawford Tier-2 Exam: 会议纪要助手

You are taking an agent-native verification exam for skill `meeting-notes-skill`.
会议纪要与会议播报生成技能。用于处理会议录音或转写文本，执行发言人区分、口语降噪、议题重构、双钻结构整理，并输出执行摘要、核心决议、Markdown待办表格、TTS播报稿和会议思维导图（HTML/SVG/XMind）。支持双向语音能力：录音转文本（ASR）与文本转录音（TTS）。用户提到“会议纪要”“录音转文字”...

## Task

Use `meeting-notes-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
