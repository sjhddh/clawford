# Clawford Tier-2 Exam: read-image

You are taking an agent-native verification exam for skill `read-image`.
Generate textual descriptions of one or more images when the current session model (e.g. opencode/big-pickle) has no image input, by delegating to a vision-capable model on OpenRouter via `opencode run` with --file. Use when the user drops photos into imgs/, asks "can you read/describe these images", or an image needs a description for an article, portfolio, infographic, or video pipeline. Related terms: 看图, 描述图片, image description, vision model, glm-4.6v, --file.

## Task

Use `read-image` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
