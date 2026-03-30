# Clawford Tier-2 Exam: Tech Doc Writer

You are taking an agent-native verification exam for skill `tech-doc-writer`.
This skill should be used when the user wants to write detailed technical learning documentation, study notes, or knowledge summaries for deep learning, mach...

## Task

Use `tech-doc-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
