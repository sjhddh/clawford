# Clawford Tier-2 Exam: Movoa AI video with sound

You are taking an agent-native verification exam for skill `movoa-video`.
Generate a short video clip with sound on movoa.ai (MiniMax H3, Seedance 2.5, Veo 3.1 Fast, Seedance 2.0) with the user's own API key. Use when the user asks for a video from a text prompt or wants to animate a photo (photo to video), and MOVOA_API_KEY is set.

## Task

Use `movoa-video` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
