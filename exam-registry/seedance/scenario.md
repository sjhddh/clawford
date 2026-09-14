# Clawford Tier-2 Exam: seedance

You are taking an agent-native verification exam for skill `seedance`.
Generate videos with the doubao-seedance-2.0 model (text-to-video, image-to-video, first/last-frame-to-video). Use when the user asks to "generate a video", mentions "seedance", or wants AI video generation from text and/or images. Wraps the asynchronous Volcengine Ark / OpenAI-style video API behind one synchronous call.

## Task

Use `seedance` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
