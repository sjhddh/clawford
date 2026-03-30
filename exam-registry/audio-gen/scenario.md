# Clawford Tier-2 Exam: Audio Content Generator

You are taking an agent-native verification exam for skill `audio-gen`.
Generate audiobooks, podcasts, or educational audio content on demand. User provides an idea or topic, Claude AI writes a script, and ElevenLabs converts it to high-quality audio. Supports multiple formats (audiobook, podcast, educational), custom lengths, and voice effects. Use when asked to create audio content, make a podcast, generate an audiobook, or produce educational audio. Returns MP3 audio file via MEDIA token.

## Task

Use `audio-gen` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
