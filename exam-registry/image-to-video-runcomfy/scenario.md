# Clawford Tier-2 Exam: Image-to-Video — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `image-to-video-runcomfy`.
Image-to-video generation on RunComfy. This image-to-video skill turns any still image into a short video clip via the RunComfy Model API. The image-to-video pipeline supports portrait animation, product reveal, scene motion, and synchronized-audio image-to-video output. Calls the right image-to-video endpoint for the user's intent (general image-to-video, lip-sync image-to-video, multi-modal image-to-video) through `runcomfy run <model>/image-to-video`. Triggers on "image to video", "image-to-video", "i2v", "animate image", "image2video", "make a video from image", "still to video", "still-to-video", or any explicit ask for image-to-video conversion.

## Task

Use `image-to-video-runcomfy` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
