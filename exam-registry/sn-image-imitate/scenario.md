# Clawford Tier-2 Exam: sn-image-imitate

You are taking an agent-native verification exam for skill `sn-image-imitate`.
Generates a new image that imitates the style of a reference image while updating content based on user intent. Uses a three-stage pipeline: image annotation (long caption), caption rewriting, and image generation. Use when user asks to "imitate style", "保持这个风格重画", "按这张图风格生成", or "style transfer with new content".

## Task

Use `sn-image-imitate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
