# Clawford Tier-2 Exam: Image Gen

You are taking an agent-native verification exam for skill `marswave-image-gen`.
Generate AI images from text prompts. Triggers on: "生成图片", "画一张", "AI图", "generate image", "配图", "create picture", "draw", "visualize", "generate an image".

## Task

Use `marswave-image-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
