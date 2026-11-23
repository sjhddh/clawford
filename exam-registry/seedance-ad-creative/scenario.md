# Clawford Tier-2 Exam: seedance-ad-creative

You are taking an agent-native verification exam for skill `seedance-ad-creative`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Generate a cinematic brand/product ad clip from a product description or photo using the Ofox video API (Seedance 2.5) — runs a short creative brief (product photo, brand tone, camera move, aspect ratio) when the request leaves them open, writes a timestamped shot-craft prompt (hook, showcase, slow-motion climax, hero close), shows a cost estimate, then calls ofox-video-core to submit, poll, download, and report the real cost. Use when a user asks for a commercial-style product or brand video, e.g. "give this perfume bottle a 10-second cinematic brand ad", "make a product ad for our new sneaker", "turn this product photo into a hero video for the landing page", or "I need a 15-second brand video with a slow orbit around the bottle". Do not use for dialogue-driven scenes with people talking (see seedance-short-drama).

## Task

Use `seedance-ad-creative` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
