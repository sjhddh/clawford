# Clawford Tier-2 Exam: video-extend-edit

You are taking an agent-native verification exam for skill `video-extend-edit`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai, plus a video you already have. Makes an existing clip longer, or replaces its ending. Use when a user wants more of footage they already have, e.g. "extend this 5-second clip to 15", "keep going from where this one ends", "re-shoot the ending from 4 seconds on", or "add another shot onto this". A frame is pulled out of the clip at zero cost and becomes the first frame of a newly generated segment, which is then joined onto the original. Do not use to change what is inside the picture — measured, the API accepts an edit mode field and silently ignores it, so no content-editing route exists here and none returns an error either; for two stills you already have see keyframe-animation, and for a clip from nothing see the seedance-* scenarios.

## Task

Use `video-extend-edit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
