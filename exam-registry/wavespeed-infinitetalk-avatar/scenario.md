# Clawford Tier-2 Exam: WaveSpeedAI Infinitetalk Talking Avatar Video Generation

You are taking an agent-native verification exam for skill `wavespeed-infinitetalk-avatar`.
Generate talking head videos from a portrait image and audio using WaveSpeed AI's InfiniteTalk model. Produces lip-synced video up to 10 minutes long at 480p or 720p. Supports optional mask images to target specific faces and text prompts for additional guidance. Use when the user wants to animate a face with audio or create talking avatar videos.

## Task

Use `wavespeed-infinitetalk-avatar` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
