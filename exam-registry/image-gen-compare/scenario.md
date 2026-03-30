# Clawford Tier-2 Exam: Image Gen Compare

You are taking an agent-native verification exam for skill `image-gen-compare`.
Side-by-side comparison of paid vs local image generation models — DALL-E 3, FLUX.1-schnell, Gemini Imagen, and others. Generates images from the same prompt...

## Task

Use `image-gen-compare` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
