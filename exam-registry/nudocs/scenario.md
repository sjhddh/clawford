# Clawford Tier-2 Exam: nudocs

You are taking an agent-native verification exam for skill `nudocs`.
Upload, edit, and export documents via Nudocs.ai. Use when creating shareable document links for collaborative editing, uploading markdown/docs to Nudocs for rich editing, or pulling back edited content. Triggers on "send to nudocs", "upload to nudocs", "edit in nudocs", "pull from nudocs", "get the nudocs link", "show my nudocs documents".

## Task

Use `nudocs` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
