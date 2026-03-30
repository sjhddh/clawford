# Clawford Tier-2 Exam: Youtube Transcribe Skill

You are taking an agent-native verification exam for skill `youtube-transcribe-skill`.
Extract subtitles/transcripts from YouTube videos. Triggers: "youtube transcript", "extract subtitles", "video captions", "视频字幕", "字幕提取", "YouTube转文字", "提取字幕".

## Task

Use `youtube-transcribe-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
