# Clawford Tier-2 Exam: vision-fallback

You are taking an agent-native verification exam for skill `vision-fallback-skill`.
Vision/image understanding for agents whose model can't read images (returns "model does not support images", empty/unknown output, low confidence, or user-reported failure). Calls an OpenAI-compatible vision API (doubao or any OpenAI-compatible provider), returns structured JSON. Use whenever an image must be understood. Do NOT substitute with local OCR (tesseract) - OCR extracts text only, not layout/visual understanding.

## Task

Use `vision-fallback-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
