# Clawford Tier-2 Exam: explainer

You are taking an agent-native verification exam for skill `explainer`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Turn an article, doc or release note into a short explainer clip — one person to camera, or a voiceover over illustrative footage. The user supplies the source text and the model generates the speech; audio cannot be uploaded, measured. A 30-second clip holds about eighty spoken words in eight sentences — measured, and well under a tenth of a 1,200-word post — so this skill does not summarise an article, it picks the single idea worth saying and helps choose which one. Use when a user asks to turn writing into a short spoken video, e.g. "make a 30-second explainer from this blog post", "explain this feature in a short video", "turn our changelog into a clip", "a quick video explaining what this paper found". Do not use for a scene between people (see seedance-short-drama), a brand or product ad (see seedance-ad-creative), a handheld creator clip (see ugc-ads), or when the user already has both a portrait and the finished words (see talking-head). Budget sentences as well as words — each sentence boundary costs about 0.7 seconds of silence, so a script with more sentences runs longer at the same word count.

## Task

Use `explainer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
