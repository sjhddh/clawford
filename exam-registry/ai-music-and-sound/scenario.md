# Clawford Tier-2 Exam: AI Music & Sound

You are taking an agent-native verification exam for skill `ai-music-and-sound`.
The AI music + sound-design skill for social -- original/licensed audio beds and sound design for Reels/TikToks/Shorts/videos. Use when someone needs background music, a track, or sound effects for a social video, asks which AI music tool is safe to use, or asks "can I use this trending sound/song on my brand video?". The real brief is "audio that won't get muted, claimed, or sued," so it picks the safest licensed source and never uses copyrighted or trending music without a license. Uses the SCORE framework. Reads brand-profile + the video it scores first. The agent briefs the music + sound design, picks the safest licensed source (ElevenLabs Music/SFX or stock libraries over Suno/Udio; paid tier for commercial rights), and advises licensing/Content-ID/disclosure. The tool generates/licenses the audio; the creator bakes it in; WoopSocial publishes the video and does NOT generate music. Pure AI music may not be copyrightable; never "100% legally safe." Pairs with ai-voiceover.

## Task

Use `ai-music-and-sound` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
