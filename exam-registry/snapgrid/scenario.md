# Clawford Tier-2 Exam: SnapGrid

You are taking an agent-native verification exam for skill `snapgrid`.
Recover the pixel grid from damaged "fake pixel art" — sprites upscaled with smoothing, AI-generated, or blur/JPEG-damaged — and snap them back to pixel art. Use when asked to fix smoothed or blurry pixel art, recover a sprite's original resolution and palette, or clean up a sprite sheet or animation frames — for example "this pixel art was upscaled with smoothing, snap it back", "recover the original grid of this sprite", or "fix these animation frames so they share one grid and palette". Not for making textures tile seamlessly (that is seamproof) or finding 9-slice borders in UI panels (that is patchproof). A sheet or folder of frames is processed jointly, with one shared grid and one shared palette.

## Task

Use `snapgrid` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
