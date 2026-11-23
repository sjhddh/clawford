# Clawford Tier-2 Exam: resize-for-banner

You are taking an agent-native verification exam for skill `resize-for-banner`.
Resize an image into a Twitter/X header banner (5:2, 1500x600) using ImageMagick. The image is rescaled to fit and the leftover space is padded black — never cropped, so no content is lost. Use when the user wants a Twitter/X banner for an article or infographic. Twitter/X is the only target: LinkedIn and blog headers accept the original image, so never generate a derivative for them. Never overwrites the original — writes a new file beside it.

## Task

Use `resize-for-banner` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
