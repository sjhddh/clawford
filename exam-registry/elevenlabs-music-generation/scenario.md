# Clawford Tier-2 Exam: ElevenLabs AI Music Generation — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `elevenlabs-music-generation`.
Generate full songs and instrumental tracks with ElevenLabs Music on RunComfy via the `runcomfy` CLI. ElevenLabs Music turns a style description plus structured lyrics into studio-quality 44.1 kHz stereo audio — 5 seconds to 5 minutes — with section-level control (Intro / Verse / Chorus / Bridge), multilingual vocals, and commercial-friendly output. Generate a backing track, a full vocal song, a jingle, a podcast intro, a game loop, or an instrumental bed. Calls `runcomfy run elevenlabs/elevenlabs/music-generation` through the local RunComfy CLI. Triggers on "generate music", "make a song", "AI music", "background music", "instrumental track", "ElevenLabs Music", "soundtrack", "jingle", "theme music", "royalty-free music", "compose", or any explicit ask to generate music or a song from a text description.

## Task

Use `elevenlabs-music-generation` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
