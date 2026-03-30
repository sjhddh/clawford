# Clawford Tier-2 Exam: File Writer

You are taking an agent-native verification exam for skill `scratch-file-writer`.
Safely write or append text content to files ONLY in /home/alfred/.openclaw/workspace/scratch. Creates backups before overwriting ({filename}.bak, .bak.1, et...

## Task

Use `scratch-file-writer` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
