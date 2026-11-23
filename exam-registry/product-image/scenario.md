# Clawford Tier-2 Exam: product-image

You are taking an agent-native verification exam for skill `product-image`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Produce a set of product images to choose between — several styles, backgrounds or treatments of one product, for a listing, a store page or an ad — and quote the whole set's cost before any of it is spent. From a real product photo it edits that photo once per style, so the item stays identical across the set; for a fictional or prototype product with no photo it generates from text instead, and says what that costs in accuracy. Delegates to ofox-image-core. Use when a user asks for several product images at once, e.g. "give me 4 main images in different styles for this product", "a few background options for this photo", "some listing images for my shop", or "show this product on white, on wood, and in a lifestyle scene". Do not use for a single change to a single image (see image-edit), for video from a product photo (see seedance-product-video), or for one plain text-to-image render (that is ofox-image-core's `generate`).

## Task

Use `product-image` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
