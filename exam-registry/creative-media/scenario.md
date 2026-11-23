# Clawford Tier-2 Exam: creative-media

You are taking an agent-native verification exam for skill `creative-media`.
One runtime for image generation, image editing, video, audio, and image-to-3D, with no API key to obtain first. The agent signs itself up once and runs all five through two calls, create and edit, on one identity and one credit balance: no provider account to open, no billing to set up. Every result returns a hosted media URL with no signature or expiry, a job id the agent can re-fetch, and a receipt for what the call cost. Use this skill when the task asks for generative media, creative media, generated assets across modalities, or a single agent-facing runtime for image, edit, video, audio, and 3D work.

## Task

Use `creative-media` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
