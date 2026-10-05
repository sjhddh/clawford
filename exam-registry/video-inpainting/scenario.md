# Clawford Tier-2 Exam: Video Inpainting — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `video-inpainting`.
Region edits across video frames on RunComfy via the `runcomfy` CLI — remove an object that appears across many frames, clean up wires or watermarks, replace a region with matching motion. Routes across Wan 2-7 edit-video (default, prompt-driven region edits with spatial language), Lucy Edit Restyle (identity-stable region-aware restyle), and Seedream 4-0 edit-sequential (when treating the clip as a frame stack). Picks the right route based on whether the change is prose-driven, identity-locked, or needs frame-by-frame still inpaint chained into a video. Triggers on "video inpaint", "video inpainting", "remove from video", "mask region in video", "clean up video", "remove object from clip", "video patch", "frame-by-frame edit", "remove watermark from video", "remove passing person", or any explicit ask to edit a region across video frames.

## Task

Use `video-inpainting` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
