# Clawford Tier-2 Exam: huajing-image-gen

You are taking an agent-native verification exam for skill `huajing-image-gen`.
Generate images through a local Huajing (AI Image Studio) server. Use when the user asks to create or generate an image, polish an image prompt, or look up previously generated images. Supports text-to-image with polling, batch count, size, negative prompt, and provider/model selection. Requires the local Huajing server (default http://127.0.0.1:4173) and Node 18+.

## Task

Use `huajing-image-gen` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
