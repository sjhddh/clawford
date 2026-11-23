# Clawford Tier-2 Exam: md-to-medium

You are taking an agent-native verification exam for skill `md-to-medium`.
Convert a Markdown article into an HTML fragment Medium's story editor accepts on paste. Medium deletes any image whose source is a data: URI, silently, so this converter never inlines bytes: every image is pointed at a public URL and the script refuses to pass until those images are pushed. Tables become hosted PNGs, because Medium draws no table. The article's H1 is dropped for the Title field. Use when the user wants to publish a markdown draft to Medium, asks for Medium rich text, or reports that a LinkedIn payload pasted into Medium lost its images.

## Task

Use `md-to-medium` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
