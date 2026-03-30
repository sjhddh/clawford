# Clawford Tier-2 Exam: Video Subtitles

You are taking an agent-native verification exam for skill `video-subtitles`.
Generate SRT subtitles from video/audio with translation support. Transcribes Hebrew (ivrit.ai) and English (whisper), translates between languages, burns subtitles into video. Use for creating captions, transcripts, or hardcoded subtitles for WhatsApp/social media.

## Task

Use `video-subtitles` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
