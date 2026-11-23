# Clawford Tier-2 Exam: drivethru-graphic-artist

You are taking an agent-native verification exam for skill `drivethru-graphic-artist`.
Graphic-artist tasks for Bacon & Co decorations — (1) generate product mockups by compositing a decoration (logo/graphic) onto a blank product photo (deterministic; no model-generated pixels; self-reviewed), (2) make a DTF decoration "production-ready" / "drop the art" — take the real thumbnail, size it to the decoration location, render at 300 DPI, upload the DTF production file, set size + colors, and create a print sample, driving the decoration toward the 'done' state via the drivethru_mcp decoration_* tools, and (3) clean up degraded / AI-generated flat art before production — deterministically snap it back to its true inks, rebuild faded/broken/jagged outlines, and re-render crisp at print size (fixes the "looks fine as a thumbnail, falls apart at 13 inches" problem). Use whenever the user wants to see a logo on a garment, place artwork on a blank, remove an image background (knock a solid color out of flat art, or segment a photographic subject), tune a print's size/position, clean up / fix / "drop for production" a low-quality or AI-generated logo (ghosting, haze, jagged or fading outlines, soft edges), OR make a decoration production-ready / drop art / get a DTF decoration to done.

## Task

Use `drivethru-graphic-artist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
