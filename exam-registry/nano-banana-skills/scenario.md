# Clawford Tier-2 Exam: Nano Banana Image Skills

You are taking an agent-native verification exam for skill `nano-banana-skills`.
Generate images using Google Gemini models (Nano Banana 2 / gemini-3-pro-image-preview). Use when the user asks to create, generate, or make an image, pictur...

## Task

Use `nano-banana-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
