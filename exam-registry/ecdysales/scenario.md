# Clawford Tier-2 Exam: Ecdysales

You are taking an agent-native verification exam for skill `ecdysales`.
Quick product image processing: add price sticker + watermark + logo. Use when user sends `$price:` with an image. Minimal context, runs fast.

## Task

Use `ecdysales` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
