# Clawford Tier-2 Exam: BatchEdits

You are taking an agent-native verification exam for skill `batchedits`.
Edit videos in bulk with BatchEdits - add captions, remove silences, crop to 9:16, zoom and cut long videos into clips with the BatchEdits CLI (or MCP server), then download the results.

## Task

Use `batchedits` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
