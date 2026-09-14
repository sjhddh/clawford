# Clawford Tier-2 Exam: UUID / ID Generator

You are taking an agent-native verification exam for skill `uuid-gen`.
Generate UUIDs (v4) or short random base36 IDs on demand. Use when you need unique identifiers for records, filenames, test data, primary keys, slugs, tokens, or any situation that calls for a fresh random ID. Supports both standard UUIDs and shorter human-friendly IDs.

## Task

Use `uuid-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
