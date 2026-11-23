# Clawford Tier-2 Exam: varg-tryon-video

You are taking an agent-native verification exam for skill `varg-tryon-video`.
Turns a flat-lay or product photo of clothing into a try-on video on varg: clean the garment photo, dress a model photo in it with Bria Virtual Try-On (or a Nano Banana / GPT Image edit for harder garments), keep the same model across shots, then animate fit-check motions that sell clothes (slow turn, tug and let fall, walk to camera, mirror selfie, fabric close-up) on Kling 4 or Seedance 2.5 with the garment kept intact, and add size captions so the fit is honest. Use when a fashion or apparel seller (Shopify, TikTok Shop, Amazon, dropshipping) asks for a try-on video, "my clothes on a model", an AI model wearing their product, a fit-check or outfit video, a try-on haul, or virtual try-on from flat-lays. Not for accessories that need no body (use product-photo-to-video) or for consistent characters across a story (varg-character-design).

## Task

Use `varg-tryon-video` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
