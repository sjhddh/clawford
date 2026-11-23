# Clawford Tier-2 Exam: model-split-screen

You are taking an agent-native verification exam for skill `model-split-screen`.
Make the "same prompt, two models" comparison video that every model launch produces (Claude Fable 5.2 vs Opus 5.5, Seedance vs Kling, Eevee vs Cycles): run one prompt twice under the same rules, log the real time and cost of each run, then lay the two results side by side (1920×1080) or stacked (1080×1920), started on the same frame, each with its name and its time and cost under it, optionally blind ("A" and "B" until the last seconds, then the reveal) and with a winner frame. scripts/split.py does the layout with ffmpeg and Pillow, so it works with an ffmpeg built without drawtext. Use when someone asks for a model comparison video, "Fable vs Opus", "same prompt two models", a side-by-side or split-screen comparison with cost and time, a blind "guess which one" test, or A/B of two renders or two edits. Not for a split screen inside a story edit (varg-video-edit-library), comparing many models in a grid of stills (gpt-image-2-6), or making the clips themselves (blender-code-film, code-game-trailer, varg-ai).

## Task

Use `model-split-screen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
