# Clawford Tier-2 Exam: talking-head

You are taking an agent-native verification exam for skill `talking-head`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Turn a portrait plus a short script into a clip of one person speaking those words to camera. You supply the text and the model generates the voice — audio cannot be uploaded, measured. Defaults to alibaba/wan-3.0-prime rather than this repo's usual seedance-2.5, because seedance-2.5 refuses a real person's photo at submission. Use when a user has a face and some words and wants the face to say them, e.g. "make this headshot read my intro", "a spokesperson clip from this portrait", "have her say this line to camera", "use this avatar to read the announcement". Do not use for a scene between two or more people (see seedance-short-drama), a polished brand or product ad (see seedance-ad-creative), a handheld creator clip (see ugc-ads), or when the words still have to be pulled out of an article and no particular face is required (see explainer).

## Task

Use `talking-head` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
