# Clawford Tier-2 Exam: Transcribing Media

You are taking an agent-native verification exam for skill `shorty-transcribing-media`.
Transcribes an audio or video URL, or adds subtitle and caption tracks to a video, by starting a Shorty job after the user confirms, then reads back the transcript. Use when the user asks to 'transcribe this podcast episode', 'get a transcript of this interview', 'transcribe my meeting recording', 'add captions to this clip', 'generate subtitles', 'convert this video to text', or wants speech to text for a media link. Uses Shorty plan quota.

## Task

Use `shorty-transcribing-media` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
