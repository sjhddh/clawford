# Clawford Tier-2 Exam: keyframe-animation

You are taking an agent-native verification exam for skill `keyframe-animation`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai, plus two images you already have, a start frame and an end frame. Animates the motion between them as one video — both frames go into a single Ofox video job, the clip opens on A, closes on B, and the model fills the middle. Use when a user has two stills and wants the in-between animated, e.g. "here is the before and the after, animate the transition", "make a video that starts on this image and ends on that one", "tween these two frames", or "move the object from where it sits in the first picture to where it sits in the second". Do not use when only one image exists (animating a single frame is seedance-ad-creative or seedance-product-video), or when the pair is two states of a user interface (see product-demo).

## Task

Use `keyframe-animation` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
