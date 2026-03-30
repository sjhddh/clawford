# Clawford Tier-2 Exam: quick-note-tool

You are taking an agent-native verification exam for skill `quick-note-tool`.
Fast note-taking and snippet storage. Use when user says "note:", "remember this", "save snippet", "quick note", or wants to save/read short text snippets.

## Task

Use `quick-note-tool` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
