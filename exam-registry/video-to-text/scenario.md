# Clawford Tier-2 Exam: Video Transcribe

You are taking an agent-native verification exam for skill `video-to-text`.
Use when the user wants to transcribe, caption, or get the text content of a video or audio file — e.g. "transcribe this video", "get the transcript", "what...

## Task

Use `video-to-text` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
