# Clawford Tier-2 Exam: image-editor

You are taking an agent-native verification exam for skill `image-editor`.
Image Editor: Edit images: blur, crop, resize, rotate, invert colors. Use when an agent needs image editor, generating branded social media graphics by compositing logos onto product images, automating thumbnail creation by resizing and cropping uploaded images to standard dimensions, adding watermarks or copyright text overlays to protect visual content, creating placeholder images with custom colors and dimensions for ui mockups, blur, image base64, image url through AgentPMT-hosted remote.

## Task

Use `image-editor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
