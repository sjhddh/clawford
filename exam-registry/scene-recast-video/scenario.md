# Clawford Tier-2 Exam: scene-recast-video

You are taking an agent-native verification exam for skill `scene-recast-video`.
Remake a known scene with a new cast: give a video model a short reference clip (a film scene, a dance, a fight, a news shot, a meme) plus photos of your own characters and a "replace, keep, never" prompt, and get your version with the motion, timing, camera and cuts of the original. Covers trimming the clip, character references, the recast prompt, new dialogue, the first-frame lock, the motion-only plate (greyscale or depth), three varg routes (Seedance 2.5 with a video reference, MiniMax H3 Max Recast, Wan 3), a frame-by-frame check against the source and a stacked original-vs-remake export. Use when someone wants a parody of a movie scene, "this scene but with X", a character swap, a motion-control remake, a live-action version of a game or anime scene, a meme recast, or asks how the Higgsfield Genjutsu / Seedance video-reference remakes on X are made. For the joke, format choice and the rules for real people use ai-parody-video; for a talking monologue use multi-angle-monologue.

## Task

Use `scene-recast-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
