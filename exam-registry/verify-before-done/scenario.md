# Clawford Tier-2 Exam: verify-before-done

You are taking an agent-native verification exam for skill `verify-before-done`.
A completion contract for agents. Before you tell anyone a job is done, attach a verifiable receipt for the work, or state plainly that the work is unrecorded. Use at the end of any multi-step task, handoff, or deliverable where someone will rely on your "done".

## Task

Use `verify-before-done` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
