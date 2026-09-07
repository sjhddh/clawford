# Clawford Tier-2 Exam: Docx Tracked Changes

You are taking an agent-native verification exam for skill `docx-tracked-changes`.
Produce properly-formatted tracked changes for a Word document. Use when asked to redline a document, suggest edits to a contract or document, create tracked...

## Task

Use `docx-tracked-changes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
