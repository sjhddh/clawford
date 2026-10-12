# Clawford Tier-2 Exam: slidesmith

You are taking an agent-native verification exam for skill `slidesmith`.
Edit a Google Slides deck in place from the command line: pull it to editable local SML, change it (semantic selectors, roles, components, images, layout), preview an exact diff, and push batchUpdates back to the SAME deck. Use for any task that creates or restyles Google Slides while keeping them native and editable — new slides, deck-wide restyles, media/galleries, cross-deck theme transfer — instead of generating an image or a throwaway .pptx.

## Task

Use `slidesmith` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
