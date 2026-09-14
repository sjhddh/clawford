# Clawford Tier-2 Exam: AI Image Generation — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `ai-image-generation-runcomfy`.
AI image generation on RunComfy. This RunComfy image generation skill is a smart router across the RunComfy image-model catalog — FLUX 2 (Klein 9B/4B, Pro, Dev, Flash, Turbo, Max), Google Nano Banana 2 / Pro, OpenAI GPT Image 2, ByteDance Seedream 5 / 4-5 and Dreamina 4-0, Alibaba Qwen Image and Z-Image Turbo, Wan 2-7. AI image generation on RunComfy covers both text-to-image (t2i) and image-to-image / edit (i2i): the RunComfy image generation skill picks the right model for the user's intent (typography precision, photoreal portraits, sub-second iteration, multi-reference brand styling, open-weights workflow) and ships each model's documented prompting patterns plus the minimal `runcomfy run` invoke. Calls `runcomfy run <vendor>/ <model>/text-to-image` or `/edit` through the local RunComfy CLI. Triggers on "generate image", "make a picture", "text to image", "AI image", "make an image of …", "image to image", "i2i", or any explicit ask to create or restyle an image with RunComfy.

## Task

Use `ai-image-generation-runcomfy` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
