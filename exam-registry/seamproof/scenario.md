# Clawford Tier-2 Exam: SeamProof

You are taking an agent-native verification exam for skill `seamproof`.
Make a texture or a whole PBR texture set tile seamlessly, with a measured seam score. Use when asked to make a texture seamless or tileable, fix visible seams or a repeating grid on a game texture, or process PBR maps (albedo/basecolor, normal, roughness, height, metallic/AO) so the whole set stays in register — for example "make this texture tile", "fix the seams on these maps", "why does my texture show a grid when tiled", or "score how seamless this texture is". Not for finding 9-slice borders in UI panels (that is patchproof) or recovering the grid of damaged pixel art (that is snapgrid).

## Task

Use `seamproof` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
