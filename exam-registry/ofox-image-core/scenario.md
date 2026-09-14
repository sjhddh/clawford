# Clawford Tier-2 Exam: ofox-image-core

You are taking an agent-native verification exam for skill `ofox-image-core`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Shared execution layer for the Ofox image generation API (api.ofox.ai) — validates parameters client-side, sends one synchronous text-to-image request, base64-decodes the result, saves it to a file, and reports the real usage token counts and the computed dollar cost. This is a library skill, not a standalone user-facing one — it is meant to be invoked by scenario skills (e.g. a character-reference-sheet generator for a video pipeline) that build model/prompt/size choices for a specific use case and then call into this skill's script rather than re-implementing the API calls. Load this skill directly only when a user explicitly names the Ofox image API, asks to call it with specific low-level parameters, or asks to debug a failed Ofox image generation request — for a plain "generate an image of..." request with no scenario skill available yet, this is the right skill to use directly.

## Task

Use `ofox-image-core` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
