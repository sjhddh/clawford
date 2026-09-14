# Clawford Tier-2 Exam: hal-image

You are taking an agent-native verification exam for skill `hal-image`.
Handle images with ImageMagick (magick) — read metadata, resize, crop, rotate, convert format, combine images (side-by-side or grids with montage), overlay logos/watermarks, and losslessly compress with oxipng before sending. Use when the user sends an image to process, when you produce an image to deliver, or before attaching any image to a message or upload — compressing first keeps transfers fast and tokens low. Core discipline - always compress before delivering, never expose local file paths to the user, and fail open (if a tool is missing or a step errors, pass the original through unchanged; never block the task).

## Task

Use `hal-image` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
