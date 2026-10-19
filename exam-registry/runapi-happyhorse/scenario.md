# Clawford Tier-2 Exam: happyhorse

You are taking an agent-native verification exam for skill `runapi-happyhorse`.
Generate text, image, or edit-video clips with HappyHorse through RunAPI. Use when the user asks an agent to create video from text, a first-frame image, ordered reference images, or an edited source video with HappyHorse. Default to the RunAPI CLI for one-off generation; use SDKs only when the user is integrating RunAPI into an app or backend.

## Task

Use `runapi-happyhorse` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
