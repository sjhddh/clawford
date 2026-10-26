# Clawford Tier-2 Exam: aicut-generate

You are taking an agent-native verification exam for skill `aicut-generate`.
Make AI video clips, images, speech, music, songs and sound effects with the aicut CLI (`aicut generate`), on models like Veo, Kling, Seedance, Flux and ElevenLabs. Use when the user asks to generate or make a video, an image, a voice-over, a track or a sound effect, asks which AI model to use, or mentions aicut. Prices every job first and asks before it spends tokens.

## Task

Use `aicut-generate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
