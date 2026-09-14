# Clawford Tier-2 Exam: markdown-image-enricher

You are taking an agent-native verification exam for skill `blog-image-enricher`.
Read a plain Markdown file (e.g. 260321_openclawConfig.md), generate header and section images using the default OpenClaw image model and API key from ~/openclaw/.env, create a new *_img.md copy with embedded PNGs, and move all generated images into an img/ folder next to the original file.

## Task

Use `blog-image-enricher` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
