# Clawford Tier-2 Exam: AI Image Editing

You are taking an agent-native verification exam for skill `ai-image-editing`.
The AI image-editing router — inpainting/object removal, background removal, upscaling, outpainting, old-photo restoration, and retouch, routed task-first to the right engine. Use when someone wants to remove an object/person from a photo, cut out backgrounds, upscale an image, extend an image to new aspect ratios, restore an old photo, fix a generated image, or asks which editing tool to use. Uses the TOUCH framework. Reads brand-profile + design-and-templates first. The agent names the task, routes to the right engine, writes the spec, and can call APIs where connected; the HUMAN judges every result at 100%; WoopSocial publishes. Honesty spine: an edited real photo is an edited claim — creative upscalers hallucinate detail (never on products/documents), no defect concealment, body-retouch disclosure honored, no watermark/provenance stripping. Distinct from image-prompt/flux/nano-banana (generation), canva (the design workflow), and before-after-and-transformation (the claim rules).

## Task

Use `ai-image-editing` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
