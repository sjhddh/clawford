# Clawford Tier-2 Exam: Sora Video Generation

You are taking an agent-native verification exam for skill `sora`.
Generate videos from text prompts or reference images using OpenAI Sora.

✅ USE WHEN:
- Need AI-generated video from text description
- Want image-to-video (animate a still image)
- Creating cinematic/artistic video content
- Need motion/animation without lip-sync

❌ DON'T USE WHEN:
- Need lip-sync (person speaking) → use veed-ugc or ugc-manual
- Just need image generation → use nano-banana-pro or morpheus
- Editing existing videos → use Remotion
- Need UGC-style talking head → use veed-ugc

INPUT: Text prompt + optional reference image
OUTPUT: MP4 video (various resolutions/durations)

## Task

Use `sora` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
