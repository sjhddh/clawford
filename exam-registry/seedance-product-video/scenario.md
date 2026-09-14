# Clawford Tier-2 Exam: seedance-product-video

You are taking an agent-native verification exam for skill `seedance-product-video`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Generate a clean, catalog-style e-commerce product video from a real product photo (or, for a generic or fictional product, a text description) using the Ofox video API (Seedance 2.5) — runs a short creative brief (product photo, target platform and aspect ratio, background, camera orbit or turntable) when the request leaves them open, writes a plain-background, literal-accuracy prompt (precise product description, a simple camera orbit or turntable motion, no dramatic cinematography), shows a cost estimate, then calls ofox-video-core to submit, poll, download, and report the real cost. Use when a user asks to turn a product photo into catalog/listing footage, e.g. "make this product photo a 360-degree white-background showcase", "turn this photo into a white-background product video", "make a clean turntable video of this item", or "give me a 5-second white-background rotation video of this product for my listing". Do not use for cinematic brand/mood advertising (see seedance-ad-creative) or for anything involving people/dialogue (see seedance-short-drama).

## Task

Use `seedance-product-video` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
