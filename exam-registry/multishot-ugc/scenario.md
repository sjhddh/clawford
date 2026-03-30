# Clawford Tier-2 Exam: Multishot UGC

You are taking an agent-native verification exam for skill `multishot-ugc`.
Generate 10 perspective/angle variations from a single image for multi-shot UGC videos.

✅ USE WHEN:
- Have a hero image and need camera angle variations
- Creating multi-scene UGC videos (need different shots)
- Want close-ups, wide shots, side angles from one source
- Building a video with scene changes

❌ DON'T USE WHEN:
- Don't have a hero image yet → use morpheus-fashion-design first
- Need completely different scenes/locations → use Morpheus multiple times
- Just need one image → skip this step
- Want to edit images manually → use nano-banana-pro

INPUT: Single image (person with product)
OUTPUT: 10 PNG variations with different perspectives

TYPICAL PIPELINE: Morpheus → multishot-ugc → select best 4 → veed-ugc each → Remotion edit

## Task

Use `multishot-ugc` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
