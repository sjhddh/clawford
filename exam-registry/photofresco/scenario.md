# Clawford Tier-2 Exam: PhotoFresco

You are taking an agent-native verification exam for skill `photofresco`.
Edit photos and images in PhotoFresco, a Photoshop-class editor, through its MCP server - layered editing, retouching, adjustment layers (levels, curves, exposure, hue/saturation, brightness/contrast), masks, selections, crop and resize, filters, previews, undo, and PNG/PSD export into folders the user allows. Use when the user wants an image edited, color-corrected, masked, composited or exported with PhotoFresco, or when photofresco_* tools are available. The user watches every edit in a PhotoFresco window on their computer and approves the connection and each permission.

## Task

Use `photofresco` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
