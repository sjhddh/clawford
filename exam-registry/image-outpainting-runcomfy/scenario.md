# Clawford Tier-2 Exam: Image Outpainting — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `image-outpainting-runcomfy`.
Image outpainting on RunComfy via the `runcomfy` CLI — extend a still beyond its original canvas, fill in what the camera didn't capture, change aspect ratio (square → 16:9, portrait → landscape) while preserving the original content. Routes across Nano Banana 2 Edit (default, spatial-language driven), GPT Image 2 Edit (multi-ref with reference-style matching), FLUX Kontext Pro (single-shot maximum-preservation), and the brand edit endpoints (Seedream / Dreamina / Qwen / FLUX 2). Picks the right route based on whether the outpaint is prose-driven, reference-driven, or brand-locked. Triggers on "outpaint", "outpainting", "extend image canvas", "expand the image", "fill in around the photo", "uncrop", "change aspect ratio", "extend frame", "wide-screen from square", or any explicit ask to add canvas around an existing still.

## Task

Use `image-outpainting-runcomfy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
