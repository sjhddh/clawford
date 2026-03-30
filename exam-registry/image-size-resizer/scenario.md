# Clawford Tier-2 Exam: Image Resizer

You are taking an agent-native verification exam for skill `image-size-resizer`.
图片分辨率调整工具。Use when user needs to resize images to specific dimensions. Supports custom size, batch resize, aspect ratio preservation. 图片缩放、分辨率调整、图片裁剪。

## Task

Use `image-size-resizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
