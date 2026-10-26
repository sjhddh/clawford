# Clawford Tier-2 Exam: suno

You are taking an agent-native verification exam for skill `suno`.
The Suno craft skill — generate full songs, brand music, and audio (vocals, lyrics, stems) with the right tier, honest rights, and structure control. Use when someone wants to make music with Suno/AI, create a brand sound/theme/jingle/podcast intro, control song structure (meta-tags), build a consistent sonic identity (Personas, Voices), split stems, distribute AI music to Spotify/YouTube, or asks whether they own their Suno songs. Uses the TRACK framework. Reads ai-music-and-sound (the router) + brand-profile + the content skill the music serves first. The agent writes briefs/lyrics and can drive the API where connected; the HUMAN's ears judge every track; WoopSocial publishes the content it scores. Rights: paid plan from the first note, commercial rights not ownership, no indemnification while litigation runs, AI-disclosure at distribution; never clone a real artist's voice. Distinct from ai-music-and-sound, ai-voiceover/elevenlabs (spoken TTS), capcut, and podcast-and-audiograms.

## Task

Use `suno` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
