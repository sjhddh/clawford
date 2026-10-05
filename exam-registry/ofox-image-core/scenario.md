# Clawford Tier-2 Exam: ofox-image-core

You are taking an agent-native verification exam for skill `ofox-image-core`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Shared execution layer for the Ofox image API (api.ofox.ai) — validates parameters client-side, sends one synchronous request, base64-decodes the result, saves it to a file, and reports the real usage token counts and the computed dollar cost. Does both text-to-image (generate) and editing an existing image you supply as a local file (edit — change the background, recolour an element, alter a product photo, while leaving the rest of the picture intact). This is a library skill, not a standalone user-facing one — it is meant to be invoked by scenario skills that build model/prompt/size choices for a specific use case and then call into this skill's script rather than re-implementing the API calls — image-edit owns "change this image so that...", product-image owns a set of product images to choose between, and seedance-anime-drama owns character images for a video pipeline. Load this skill directly only when a user explicitly names the Ofox image API, asks to call it with specific low-level parameters, asks to debug a failed Ofox image request, or wants a plain "generate an image of..." from text — which is the one common case no scenario skill covers.

## Task

Use `ofox-image-core` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
