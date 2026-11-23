# Clawford Tier-2 Exam: twitch-clip

You are taking an agent-native verification exam for skill `twitch-clip`.
Create Twitch clips of the current live stream via the Twitch API. Use when a streamer says "clip that", "clip the last X seconds", "make a clip", "clip it", or any variation requesting a clip of the current broadcast. Requires Twitch API credentials configured in environment variables. Has a 30-second cooldown between clips to prevent spam.

## Task

Use `twitch-clip` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
