# Clawford Tier-2 Exam: Google Docs from Markdown

You are taking an agent-native verification exam for skill `gdocs-markdown`.
Create Google Docs from Markdown files. Use when the user wants to create a Google Doc from Markdown content, or when working with gog CLI and need to populate Google Docs with content. This skill handles the conversion Markdown → DOCX → Google Docs via Drive upload, since gog docs CLI only supports create/export/cat/copy but NOT write/update content.

## Task

Use `gdocs-markdown` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
