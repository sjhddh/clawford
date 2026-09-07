# Clawford Tier-2 Exam: Video Edit — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `video-edit-runcomfy`.
Video edit on RunComfy. This video edit skill transforms an existing video clip — restyle, background swap, outfit swap, motion transfer, color grade, or any other video edit task — by routing the video edit request to the right model in the RunComfy catalog. Video edit supports talking-head video edit, product video edit, and short-form video edit at up to 1080p. Calls `runcomfy run <model>/edit-video` through the local RunComfy CLI. Triggers on "video edit", "edit video", "video editing", "video-edit", "restyle video", "swap video background", "video outfit swap", "video color grade", or any explicit ask to edit a video.

## Task

Use `video-edit-runcomfy` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
