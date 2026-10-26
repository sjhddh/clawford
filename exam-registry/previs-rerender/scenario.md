# Clawford Tier-2 Exam: previs-rerender

You are taking an agent-native verification exam for skill `previs-rerender`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai, plus a publicly reachable reference video the user is authorized to use. Use when a user has a rough 3D white-model, clay, wireframe, blockout, previs, or animatic clip and wants a finished visual treatment that preserves its shot order, cut timing, camera framing, spatial layout, and motion directions. Distinguishes that structure-preserving job from a continuation beginning at the reference's final state. Do not use for two still endpoints (keyframe-animation), for appending and locally joining a new ending (video-extend-edit), or when still-image references must be combined with the video in one request — first/last-frame anchors conflict with video references in the shipped core, while mixed image/video references are untested.

## Task

Use `previs-rerender` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
