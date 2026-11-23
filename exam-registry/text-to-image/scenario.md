# Clawford Tier-2 Exam: text-to-image

You are taking an agent-native verification exam for skill `text-to-image`.
Generate images from one text prompt or a whole list (CSV column, content calendar) with FLUX.2 Klein or FLUX Schnell and deliver one image URL per prompt with width, height and seed, up to 4 variations per prompt. Use when the user says "text to image", "generate images from these prompts", "text to image API", "turn this list of prompts into images", "make a thumbnail for each article", "FLUX image generation in bulk", or "AI image generator without an API key". Compares three ways to do it (Sherwood Bulk AI Image Generator on Apify, the OpenAI Images API or a direct fal.ai/Replicate call with the user's own key, a local Stable Diffusion or ComfyUI setup for people with a GPU) and picks one from volume, model preference, budget and hardware. Out of scope: editing an existing image (inpainting, style transfer), image-to-image, video generation.

## Task

Use `text-to-image` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
