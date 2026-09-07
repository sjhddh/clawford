# Clawford Tier-2 Exam: WaveSpeedAI Veo 3.1 Fast Video Generation

You are taking an agent-native verification exam for skill `wavespeed-veo-31-fast`.
Generate and extend videos using Google's Veo 3.1 Fast model via WaveSpeed AI. Supports text-to-video, image-to-video, and video extension. Features up to 4K resolution, audio generation, and chained extensions up to 148 seconds. Use when the user wants to create videos from text or images, or extend existing Veo-generated videos.

## Task

Use `wavespeed-veo-31-fast` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
