# Clawford Tier-2 Exam: Seedance Video Generation

You are taking an agent-native verification exam for skill `seedance-video-generation-cellcog`.
AI video generation powered by CellCog via Seedance 2.5. Complete multi-minute videos from a single prompt: scripting, voice synthesis, lipsync, scoring, editing, with locked character consistency via 50 reference files. Full productions, not just clips, via ByteDance's Seedance model.

## Task

Use `seedance-video-generation-cellcog` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
