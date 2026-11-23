# Clawford Tier-2 Exam: gpt-image-sprite-sheet

You are taking an agent-native verification exam for skill `gpt-image-sprite-sheet`.
Make 2D game sprite sheets with GPT Image 2.6 on varg and turn them into game-ready files: a strict 4×4 sheet spec (16 frames, equal cells, fixed scale and ground line; credited to @SSSS_CRYPTOMAN, translated from Japanese), then scripts/slice.sh cuts the sheet into frames, keys out the background, puts every frame on one ground line, and writes a looping GIF, a clean atlas PNG and a JSON atlas (TexturePacker JSON Hash) for Phaser, with the Godot steps. Also covers the native GIF route and turning its frames into an atlas. Use when someone asks for a sprite sheet, a run, walk, idle or attack cycle, game character animation frames, a texture atlas, or Phaser or Godot sprites from an AI image. Not for chat stickers (gpt-image-sticker-pack), a single looping GIF for the web (gpt-image-gif) or pixel-art sprites (the model fails at pixel art).

## Task

Use `gpt-image-sprite-sheet` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
