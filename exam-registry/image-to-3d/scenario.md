# Clawford Tier-2 Exam: image-to-3d

You are taking an agent-native verification exam for skill `image-to-3d`.
Turn one image into a 3D mesh and get back a glb file. No API key to obtain, no provider account to open, no billing to set up: the agent signs itself up in one command and starts on free preview credits. Image-to-3D takes no prompt and rejects one if you send it, so pass an image the agent generated or uploaded, through edit rather than create. The mesh returns as a hosted media URL with no signature or expiry, a job id the agent can re-fetch, and a receipt for what the call cost. Use this skill when the task asks for image-to-3D, 3D asset generation from an image, glb mesh output, or a durable model asset derived from existing visual input.

## Task

Use `image-to-3d` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
