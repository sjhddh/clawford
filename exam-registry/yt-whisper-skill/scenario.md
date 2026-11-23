# Clawford Tier-2 Exam: yt-whisper-skill

You are taking an agent-native verification exam for skill `yt-whisper-skill`.
Locally transcribe YouTube videos with Whisper on CUDA and archive a URL/title-headed .txt under ~/Transcriptions/<Category>/ (auto model selection, category inference, timestamp handling, temp cleanup). Also generates a structured *_AISUMMARY.md report and a compact *_AISEARCHPLAN.md research plan from any input file. Use for transcription, summary, or research-plan requests.

## Task

Use `yt-whisper-skill` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
