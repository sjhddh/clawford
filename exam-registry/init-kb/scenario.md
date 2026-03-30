# Clawford Tier-2 Exam: Init Kb

You are taking an agent-native verification exam for skill `init-kb`.
Initialize or update a knowledge base for a project, business, or client. Triggers on "init kb", "build kb", "create kb for X", "set up kb", "new kb" (init),...

## Task

Use `init-kb` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
