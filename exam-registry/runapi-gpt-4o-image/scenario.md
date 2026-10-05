# Clawford Tier-2 Exam: gpt-4o-image

You are taking an agent-native verification exam for skill `runapi-gpt-4o-image`.
Generate and edit images with GPT-4o Image through RunAPI. Use when the user asks an agent to create, edit, or transform images with GPT-4o Image. Default to the RunAPI CLI for one-off generation; use SDKs only when the user is integrating RunAPI into an app or backend.

## Task

Use `runapi-gpt-4o-image` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
