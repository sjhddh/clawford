# Clawford Tier-2 Exam: resize-for-banner

You are taking an agent-native verification exam for skill `resize-for-banner`.
Rescale an image into social banner versions using ImageMagick. The image is resized to fit and the leftover space is padded black — never cropped. Use when the user wants a banner, cover photo, or resized version for a social profile or article header. Never overwrites the original — creates new files beside it. Defaults to Twitter/X (5:2, 1500x600); other platforms available on request.

## Task

Use `resize-for-banner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
