# Clawford Tier-2 Exam: Image Inpainting — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `image-inpainting`.
Mask-driven image inpainting on RunComfy via the `runcomfy` CLI. Routes to Tongyi MAI Z-Image Turbo Inpainting (the dedicated inpainting endpoint with mask, strength, and control-scale) and to identity-preserving edit models (Nano Banana 2 Edit, GPT Image 2 Edit, FLUX Kontext Pro) when a mask isn't available and the region must be described instead. Use for object removal, watermark removal, region replacement, blemish cleanup, and any controlled local edit where a binary mask defines the target area. Triggers on "inpaint", "inpainting", "image inpaint", "remove from image", "fill region", "mask-driven edit", "remove watermark", "remove object", "patch the photo", "fill the hole", or any explicit ask to edit a specific masked region of a still.

## Task

Use `image-inpainting` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
