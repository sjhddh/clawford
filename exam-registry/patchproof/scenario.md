# Clawford Tier-2 Exam: PatchProof

You are taking an agent-native verification exam for skill `patchproof`.
Find the 9-slice (nine-patch) borders of game UI panel images and prove each detection by re-rendering. Use when asked to work out 9-slice borders for a UI kit, set Unity spriteBorder values, Godot StyleBoxTexture patch margins, or Android .9.png markers for panel PNGs — for example "find the 9-slice borders for these panels", "set up nine-patch for my UI kit", or "which of these panels can be sliced cleanly". Not for making textures tile seamlessly (that is seamproof) or recovering the grid of damaged pixel art (that is snapgrid). Scans a whole folder at once and writes Unity .meta, Godot .tres and Android .9.png files for every proven panel.

## Task

Use `patchproof` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
