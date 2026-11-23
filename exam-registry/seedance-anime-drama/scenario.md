# Clawford Tier-2 Exam: seedance-anime-drama

You are taking an agent-native verification exam for skill `seedance-anime-drama`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Turn a novel/script excerpt into an anime-style storyboard shot using the Ofox image and video APIs. Runs a short creative brief first (how many shots, the aspect ratio before any image exists, which animation look; "Let the AI decide" is offered on the taste questions, never on a must-ask one, and never as the default), generates the character with ofox-image-core — one opening frame for a single shot, a design sheet to confirm plus one opening frame per shot for a sequence — then feeds each frame to ofox-video-core as `--frame-first-image`, so every shot starts on an image of that character rather than on a text description alone. Use when a user asks to turn a story excerpt into an anime video, e.g. "turn this novel excerpt into an anime video", "make an anime-style storyboard clip of this scene", "generate a manga-drama shot with this character", or "turn this chapter into an anime short with the same character in every shot". Do not use for realistic-human dialogue scenes with no anime styling (see seedance-short-drama), silent product/brand shots (see seedance-ad-creative), or plain catalog footage (see seedance-product-video).

## Task

Use `seedance-anime-drama` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
