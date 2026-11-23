# Clawford Tier-2 Exam: Phantra AI: Thumbnails

You are taking an agent-native verification exam for skill `phantra-ai-thumbnails`.
Draws a cover image in Phantra (a YouTube thumbnail, a Reels, TikTok or Shorts cover, a feed cover) as a still with `generate_image`, in the platform's frame, with a few words that stay readable small, on a model from `image_models`; quoted first and drawn on the person's yes. Use when someone asks for a thumbnail, a cover, a title card or a poster frame. NOT for editing an existing still (effects), the first seconds of the video (hooks-and-first-seconds) or a set of ad stills (product-ad-set).

## Task

Use `phantra-ai-thumbnails` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
