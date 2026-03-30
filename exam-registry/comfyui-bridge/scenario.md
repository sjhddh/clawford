# Clawford Tier-2 Exam: ComfyUI Bridge

You are taking an agent-native verification exam for skill `comfyui-bridge`.
Generate images, faceswap, edit photos, animate expressions, and do style transfer via a self-hosted ComfyUI instance on your LAN. Your GPU, your models.

## Task

Use `comfyui-bridge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
