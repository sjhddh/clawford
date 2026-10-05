# Clawford Tier-2 Exam: image-edit

You are taking an agent-native verification exam for skill `image-edit`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Change one thing in an image you already have and leave the rest of the picture alone — swap the background, recolour a part, remove or add an object, clean up a photo — from a local jpeg/png/webp file. Delegates to ofox-image-core's `edit` subcommand (POST /v1/images/edits, one synchronous request), prices the job with --dry-run before spending, and reports the real token cost including the uploaded picture, which is billed. Use when a user hands over an image and asks for a change to it, e.g. "change the background of this photo to a beach and keep the person unchanged", "make this button green", "remove the car in the background", or "put this product on a plain white background". Do not use to draw a new image from a text description with no input picture (that is ofox-image-core's `generate`), to produce a set of several images to choose between (see product-image), or to turn a photo into video (see seedance-product-video or seedance-ad-creative). Editing the content of an existing video — "change the background of my clip, keep the product" — has no route here and none in the video API either (measured; the mode field an edit would use is accepted and silently ignored, so nothing errors); this skill edits a single still, and routing such a request to a video skill generates brand-new footage instead of changing theirs.

## Task

Use `image-edit` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
